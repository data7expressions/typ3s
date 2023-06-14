/* eslint-disable no-use-before-define */
import { Primitive } from './primitive'

export interface PropertyType {
	name:string
	type?: Type
}
export interface ObjType {
	properties: PropertyType[]
}

export interface ListType {
	items:Type
}

export interface FuncType {
	params:ParamType[]
	ret:Type
}

export interface ParamType {
	name:string
	type?:Type
}

export class Type {
	public nullable:boolean
	public undefinable:boolean
	public async:boolean
	public constructor (
			public primitive:Primitive
			, public obj?: ObjType
			, public list?:ListType
			, public func?:FuncType
	) {
		this.nullable = false
		this.undefinable = false
		this.async = false
	}

	public static get any ():Type {
		return new Type(Primitive.any)
	}

	public static get string ():Type {
		return new Type(Primitive.string)
	}

	public static get integer ():Type {
		return new Type(Primitive.integer)
	}

	public static get decimal ():Type {
		return new Type(Primitive.decimal)
	}

	public static get number ():Type {
		return new Type(Primitive.number)
	}

	public static get boolean ():Type {
		return new Type(Primitive.boolean)
	}

	public static get date ():Type {
		return new Type(Primitive.date)
	}

	public static get dateTime ():Type {
		return new Type(Primitive.dateTime)
	}

	public static get time ():Type {
		return new Type(Primitive.time)
	}

	public static get void ():Type {
		return new Type(Primitive.void)
	}

	// eslint-disable-next-line no-use-before-define,
	public static Obj (properties: PropertyType[] = []):Type {
		return new Type(Primitive.obj, { properties })
	}

	public static List (items:Type):Type {
		return new Type(Primitive.list, undefined, { items })
	}

	public static Function (params:ParamType[], ret:Type):Type {
		return new Type(Primitive.function, undefined, undefined, { params, ret })
	}

	public static isPrimitive (type:Type | string): boolean {
		let value:string
		if (typeof type === 'string') {
			value = type
		} else if (type !== undefined && type.primitive !== undefined) {
			value = type.primitive.toString()
		} else {
			return false
		}
		return ['string', 'integer', 'decimal', 'number', 'boolean', 'date', 'dateTime', 'time'].includes(value)
	}

	public static to (primitive:Primitive | string): Type {
		if (typeof primitive === 'string') {
			const primitiveKey = primitive as keyof typeof Primitive
			return new Type(Primitive[primitiveKey])
		}
		return new Type(primitive)
	}

	public static get (value: any): Type {
		if (value === null || value === undefined) {
			return Type.any
		} else if (Array.isArray(value)) {
			if (value.length > 0) {
				return Type.List(this.get(value[0]))
			}
			return Type.any
		} else if (typeof value === 'object') {
			const properties: PropertyType[] = []
			for (const entry of Object.entries(value)) {
				properties.push({ name: entry[0], type: this.get(entry[1]) })
			}
			return Type.Obj(properties)
		} else if (typeof value === 'string') {
			// TODO determinar si es fecha.
			return Type.string
		} else if (typeof value === 'number') {
			if (Number.isInteger(value)) {
				return Type.integer
			}
			return Type.decimal
		} else if (typeof value === 'boolean') {
			return Type.boolean
		}
		return Type.any
	}

	public static isList (type:Type| string) : boolean {
		if (typeof type === 'string') {
			return type.startsWith('[') && type.endsWith(']')
		}
		return type.primitive === Primitive.list
	}

	public static isObj (type:Type|string) : boolean {
		if (typeof type === 'string') {
			return type.startsWith('{') && type.endsWith('}')
		}
		return type.primitive === Primitive.obj
	}

	// Examples:
	// sin valor de retorno: (name:string,nro:int)
	// sin arguments: (>dateTime)
	// simple: (name:string,nro:int>string)
	// retorna otra function: (name:string,nro:int>(name:string>int))
	// function que recibe function : ((name:string>string),nro:int>int)
	public static isFunc (type:Type|string) : boolean {
		if (typeof type === 'string') {
			return type.startsWith('(') && type.endsWith(')')
		}
		return type.primitive === Primitive.function
	}

	public static stringify (type?: Type): string {
		if (type === undefined) {
			return 'any'
		}
		if (this.isPrimitive(type)) {
			return type.primitive.toString()
		}
		if (this.isObj(type)) {
			const properties:string[] = []
			const objectType = type.obj as ObjType
			for (const propertyType of objectType.properties) {
				properties.push(`${propertyType.name}:${this.stringify(propertyType.type)}`)
			}
			return `{${properties.join(',')}}`
		}
		if (this.isList(type)) {
			const arrayType = type.list as ListType
			return `[${this.stringify(arrayType.items)}]`
		}
		if (this.isFunc(type)) {
			const funcType = type.func as FuncType
			const params:string[] = []
			for (const paramType of funcType.params) {
				params.push(`${paramType.name}:${this.stringify(paramType.type)}`)
			}
			return `(${params.join(',')}=>${this.stringify(funcType.ret)})`
		}
		return 'any'
	}

	public static parse (schema:string):Type {
		return new TypeParser(schema).parse()
	}

	public static serialize (type?: Type):string | undefined {
		if (type === undefined || type === null) {
			return undefined
		}
		return JSON.stringify(type)
	}

	public static deserialize (type?: string):Type | undefined {
		if (type === undefined || type === null || type.trim() === '') {
			return undefined
		}
		return JSON.parse(type) as Type
	}

	public static solve (value:any):Type {
		const type = new Type(Primitive.undefined)
		this._solve(value, type)
		return type
	}

	private static _solve (value:any, type:Type):void {
		if (value === undefined || value === null) {
			return
		}
		if (Array.isArray(value)) {
			if (type.primitive === Primitive.undefined) {
				type.primitive = Primitive.list
				type.list = { items: new Type(Primitive.undefined) }
			} else if (type.primitive !== Primitive.list && type.primitive !== Primitive.any) {
				type.primitive = Primitive.any
			}
			if (type.list === undefined || type.list.items === undefined) {
				type.list = { items: new Type(Primitive.undefined) }
			}
			for (const item of value) {
				this._solve(item, type.list.items)
			}
		} else if (typeof value === 'function') {
			const str = value.toString()
			type.primitive = Primitive.function
			const funcType = new TypeParser(str).parse().func
			type.func = funcType
			console.log(str)
		} else if (typeof value === 'object') {
			if (type.primitive === Primitive.undefined) {
				type.primitive = Primitive.obj
				type.obj = { properties: [] }
			} else if (type.primitive !== Primitive.obj && type.primitive !== Primitive.any) {
				type.primitive = Primitive.any
			}
			if (type.obj === undefined || type.obj.properties === undefined) {
				type.obj = { properties: [] }
			}
			for (const entry of Object.entries(value)) {
				let property = type.obj.properties.find(p => p.name === entry[0])
				if (property === undefined) {
					property = { name: entry[0], type: new Type(Primitive.undefined) }
					type.obj.properties.push(property)
				} else if (property.type === undefined) {
					property.type = new Type(Primitive.undefined)
				}
				this._solve(entry[1], property.type as Type)
			}
		} else if (typeof value === 'string') {
			if (type.primitive === Primitive.undefined) {
				type.primitive = Primitive.string
			} else if (type.primitive !== Primitive.string && type.primitive !== Primitive.any) {
				type.primitive = Primitive.any
			}
		} else if (typeof value === 'number') {
			if (type.primitive === Primitive.undefined) {
				if (Number.isInteger(value)) {
					type.primitive = Primitive.integer
				} else {
					type.primitive = Primitive.decimal
				}
			} else if (type.primitive === Primitive.integer && !Number.isInteger(value)) {
				type.primitive = Primitive.decimal
			} else if (type.primitive !== Primitive.integer && type.primitive !== Primitive.decimal && type.primitive !== Primitive.any) {
				type.primitive = Primitive.any
			}
		} else if (typeof value === 'boolean') {
			if (type.primitive === Primitive.undefined) {
				type.primitive = Primitive.boolean
			} else if (type.primitive !== Primitive.boolean && type.primitive !== Primitive.any) {
				type.primitive = Primitive.any
			}
		}
	}
}

class TypeParser {
	private buffer: string[]
	private length: number
	private index: number
	private reAlphanumeric:RegExp
	constructor (source: string) {
		this.buffer = source.split('')
		this.length = this.buffer.length
		this.index = 0
		this.reAlphanumeric = /[a-zA-Z0-9_.]+$/
	}

	private get end ():boolean {
		return this.index >= this.length
	}

	private get current (): any {
		return this.buffer[this.index]
	}

	public parse (): Type {
		return this.getType()
	}

	private isAlphanumeric (value: string): boolean {
		if (value === null || value === undefined) {
			return false
		}
		return this.reAlphanumeric.test(value)
	}

	private getType () : Type {
		const char = this.current
		if (this.isAlphanumeric(char)) {
			const value: any = this.getValue()
			if (Type.isPrimitive(value) || value === Primitive.any) {
				return Type.to(value)
			} else {
				throw new Error(`Cannot solve ${value}`)
			}
		} else if (char === '{') {
			this.index += 1
			this.forwardSpaces()
			const objectType = this.getObject()
			return new Type(Primitive.obj, objectType)
		} else if (char === '[') {
			this.index += 1
			this.forwardSpaces()
			const listType = this.getList()
			return new Type(Primitive.list, undefined, listType)
		} else if (char === '(') {
			this.index += 1
			this.forwardSpaces()
			const functionType = this.getFunction()
			return new Type(Primitive.function, undefined, undefined, functionType)
		} else {
			throw new Error('Cannot solve type')
		}
	}

	private getValue (increment = true): string {
		const buff = []
		if (increment) {
			while (!this.end && this.isAlphanumeric(this.current)) {
				buff.push(this.current)
				this.index += 1
			}
		} else {
			let index = this.index
			while (!this.end && this.isAlphanumeric(this.buffer[index])) {
				buff.push(this.buffer[index])
				index += 1
			}
		}
		return buff.join('')
	}

	private getObject (): ObjType {
		const properties:PropertyType[] = []
		while (true) {
			const name = this.getValue()
			this.forwardSpaces()
			if (this.current === ':') this.index += 1
			else throw new Error(`attribute ${name} without value`)
			const type = this.getType()
			properties.push({ name, type })
			this.forwardSpaces()
			if (this.current === ',') {
				this.index += 1
			} else if (this.current === '}') {
				this.index += 1
				break
			} else {
				throw new Error('Object without end')
			}
		}
		return { properties }
	}

	private getList ():ListType {
		const type = this.getType()
		this.forwardSpaces()
		if (this.current === ']') this.index += 1
		else throw new Error('List without end')
		return { items: type }
	}

	private getFunction (): FuncType {
		const params:ParamType[] = []
		let ret: Type = Type.void
		while (true) {
			const name = this.getValue()
			this.forwardSpaces()
			let type = Type.any
			if (this.current === ':') {
				this.index += 1
				type = this.getType()
			}
			params.push({ name, type })
			this.forwardSpaces()
			if (this.current === ',') {
				this.index += 1
				continue
			}
			if (this.current === '>') {
				this.index += 2
				ret = this.getType()
			}
			if (this.current === ')') {
				this.index += 1
				break
			} else {
				throw new Error('Function without end')
			}
		}
		return { params, ret }
	}

	private forwardSpaces () {
		while (!this.end && this.buffer[this.index] === ' ') {
			this.index += 1
		}
	}
}
