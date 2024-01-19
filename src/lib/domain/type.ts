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
	public nullable?:boolean
	public undefinable?:boolean
	public async?:boolean
	public unique?:boolean
	public repeated?:number
	public repeatRate?:number
	public indefinite?:number
	public nullables?:number
	public count?:number
	public distinctCount?:number
	public onParentDistinctRepeated?:number
	public onParentDistinctRepeatedRate?:number
	public onParentDistinctUnique?:boolean
	// eslint-disable-next-line no-useless-constructor
	public constructor (
			public primitive:Primitive
			, public obj?: ObjType
			, public list?:ListType
			, public func?:FuncType
	) {}

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

	private static modifier (type:Type):string {
		return (type.undefinable ? '?' : type.nullable ? '!' : '')
	}

	public static stringify (type?: Type): string {
		if (type === undefined) {
			return 'any'
		}
		if (this.isPrimitive(type)) {
			return this.modifier(type) + type.primitive.toString()
		}
		if (this.isObj(type)) {
			const properties:string[] = []
			const objectType = type.obj as ObjType
			for (const propertyType of objectType.properties) {
				properties.push(`${propertyType.name}:${this.stringify(propertyType.type)}`)
			}
			return `${this.modifier(type)}{${properties.join(',')}}`
		}
		if (this.isList(type)) {
			const arrayType = type.list as ListType
			return `${this.modifier(type)}[${this.stringify(arrayType.items)}]`
		}
		if (this.isFunc(type)) {
			const funcType = type.func as FuncType
			const params:string[] = []
			for (const paramType of funcType.params) {
				params.push(`${paramType.name}:${this.stringify(paramType.type)}`)
			}
			return `(${params.join(',')}>${type.async ? '~' : ''} ${this.stringify(funcType.ret)})`
		}
		return 'any'
	}

	public static parse (schema:string):Type {
		return new TypeParser(schema).parse()
	}

	public static serialize (type?: Type, indentation?:number):string | undefined {
		if (type === undefined || type === null) {
			return undefined
		}
		if (indentation) {
			return JSON.stringify(type, null, indentation)
		}
		return JSON.stringify(type)
	}

	public static deserialize (type?: string):Type | undefined {
		if (type === undefined || type === null || type.trim() === '') {
			return undefined
		}
		return JSON.parse(type) as Type
	}

	public static type (value:any):Type {
		const type = new Type(Primitive.undefined)
		this._type(value, type)
		return type
	}

	private static _type (value:any, type:Type):void {
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
				this._type(item, type.list.items)
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
				this._type(entry[1], property.type as Type)
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

	public static cardinality (value:any, type: Type):void {
		if (Type.isList(type) && type.list && Type.isObj(type.list.items) && type.list.items.obj) {
			// List of objects
			const typeObj = type.list.items
			if (!typeObj.repeated && !typeObj.nullables && !typeObj.indefinite) {
				typeObj.repeated = 0
				typeObj.nullables = 0
				typeObj.indefinite = 0
				const listObjects: { key:string, obj:any}[] = []
				for (const obj of value) {
					if (obj === undefined) {
						typeObj.indefinite++
					} else if (obj === null) {
						typeObj.nullables++
					} else {
						const key = this.key(obj, typeObj)
						listObjects.push({ key, obj })
					}
				}
				const distinctObjects:{ key:string, obj:any}[] = []
				for (let i = 0; i < listObjects.length; i++) {
					const item = listObjects[i]
					if (distinctObjects.find(o => o.key === item.key) === undefined) {
						distinctObjects.push(item)
					}
					for (let j = i + 1; j < listObjects.length; j++) {
						const item2 = listObjects[j]
						if (item.key === item2.key) {
							typeObj.repeated++
						}
					}
				}
				this.solveOnObjectProperties(distinctObjects.map(p => p.obj), typeObj)
				this.completeCardinalityProperties(typeObj, value.length)
			}
			for (const property of type.list.items.obj.properties) {
				this.solvePropertyCardinality(value, property)
			}
		} else if (Type.isObj(type) && type.obj) {
			// Object
			for (const property of type.obj.properties) {
				this.solvePropertyCardinality(value, property)
			}
		} else if (Type.isList(type) && type.list && Type.isPrimitive(type.list.items) && type.list.items.primitive) {
			// List of primitives
			type.list.items.indefinite = 0
			type.list.items.nullables = 0
			type.list.items.repeated = 0
			const distinct: any[] = []
			for (let i = 0; i < value.length; i++) {
				const item = value[i]
				if (distinct.find(o => o === item) === undefined) {
					distinct.push(item)
				}
				if (item === undefined) {
					type.list.items.indefinite++
				} else if (item === null) {
					type.list.items.nullables++
				} else {
					for (let j = i + 1; j < value.length; j++) {
						const item2 = value[j]
						if (item === item2) {
							type.list.items.repeated++
						}
					}
				}
			}
			type.distinctCount = distinct.length
			type.list.items.distinctCount = distinct.length
			this.completeCardinalityProperties(type.list.items, value.length)
		}
	}

	private static solvePropertyCardinality (list:any[], property: PropertyType):void {
		if (!property.type) {
			return
		}
		property.type.indefinite = 0
		property.type.nullables = 0
		property.type.repeated = 0
		if (property.type && Type.isPrimitive(property.type)) {
			// Property is a primitive in List of objects
			for (let i = 0; i < list.length; i++) {
				const item = list[i][property.name]
				if (item === undefined) {
					property.type.indefinite++
				} else if (item === null) {
					property.type.nullables++
				} else {
					for (let j = i + 1; j < list.length; j++) {
						const item2 = list[j][property.name]
						if (item === item2) {
							property.type.repeated++
						}
					}
				}
			}
			this.completeCardinalityProperties(property.type, list.length)
		} else if (property.type && Type.isObj(property.type) && property.type.obj) {
			// Property is an object in List of objects
			const listObjects: { key:string, obj:any}[] = []
			for (const objs of list) {
				const obj = objs[property.name]
				if (obj === undefined) {
					property.type.indefinite++
				} else if (obj === null) {
					property.type.nullables++
				} else {
					listObjects.push({ key: JSON.stringify(obj), obj })
				}
			}
			const distinctObjects:{ key:string, obj:any}[] = []
			for (let i = 0; i < listObjects.length; i++) {
				const item = listObjects[i]
				if (distinctObjects.find(o => o.key === item.key) === undefined) {
					distinctObjects.push(item)
				}
				for (let j = i + 1; j < listObjects.length; j++) {
					const item2 = listObjects[j]
					if (item.key === item2.key) {
						property.type.repeated++
					}
				}
			}
			this.solveOnObjectProperties(distinctObjects.map(p => p.obj), property.type)
			this.completeCardinalityProperties(property.type, list.length)
			this.cardinality(listObjects.map(o => o.obj), property.type)
		} else if (property.type && Type.isList(property.type) && property.type.list && property.type.list.items) {
			// Property is a list in List of objects
			const dictionary: { key:string, obj:any}[] = []
			for (const item of list) {
				const children = item[property.name]
				if (children === undefined) {
					property.type.indefinite++
				} else if (children === null) {
					property.type.nullables++
				} else {
					for (const child of children) {
						const key = this.key(child, property.type.list.items)
						dictionary.push({ key, obj: child })
					}
				}
			}
			for (let i = 0; i < dictionary.length; i++) {
				const item = dictionary[i]
				for (let j = i + 1; j < dictionary.length; j++) {
					const item2 = dictionary[j]
					if (item.key === item2.key) {
						property.type.repeated++
					}
				}
			}
			this.completeCardinalityProperties(property.type, dictionary.length)
			this.cardinality(dictionary.map(p => p.obj), property.type)
		}
	}

	private static solveOnObjectProperties (list:any[], type: Type):void {
		if (!type.obj) {
			return
		}
		type.distinctCount = list.length
		for (const property of type.obj.properties) {
			if (property.type && Type.isPrimitive(property.type)) {
				property.type.onParentDistinctRepeated = 0
				property.type.distinctCount = list.length
				for (let i = 0; i < list.length; i++) {
					const field = list[i][property.name]
					if (field === undefined || field === null) {
						continue
					} else {
						for (let j = i + 1; j < list.length; j++) {
							const field2 = list[j][property.name]
							if (field === field2) {
								property.type.onParentDistinctRepeated++
							}
						}
					}
				}
				property.type.onParentDistinctRepeatedRate = property.type.onParentDistinctRepeated / this.iterations(list.length - 1)
				property.type.onParentDistinctUnique = property.type.onParentDistinctRepeated === 0 && list.length > 0
			}
		}
	}

	private static completeCardinalityProperties (type:Type, count:number): void {
		type.count = count
		if (type.repeated !== undefined && type.nullables !== undefined && type.indefinite !== undefined) {
			type.repeatRate = type.repeated / this.iterations(count - 1)
			type.nullable = type.nullables > 0
			type.undefinable = type.indefinite > 0
			type.unique = type.repeated === 0 && type.count > 0
		}
	}

	private static iterations (n:number):number {
		if (n === 0) {
			return 0
		}
		return n + this.iterations(n - 1)
	}

	public static key (value:any, type:Type): string {
		if (Type.isList(type) && type.list) {
			const keys:string[] = []
			for (const item of value) {
				keys.push(this.key(item, type.list.items))
			}
			return '[' + keys.sort().join(',') + ']'
		} else if (Type.isObj(type) && type.obj) {
			const keys:string[] = []
			for (const property of type.obj.properties.sort((a, b) => a.name.localeCompare(b.name))) {
				if (property.type) {
					const propertyValue = value[property.name]
					if (propertyValue !== undefined && propertyValue !== null) {
						keys.push(property.name + ':' + this.key(propertyValue, property.type))
					}
				}
			}
			return '{' + keys.join(',') + '}'
		} else if (Type.isPrimitive(type)) {
			return value.toString()
		} else {
			return value.toString()
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

	private chars (count = 1, offset = 0): string {
		const chars:string[] = []
		for (let i = this.index + offset; i < count; i++) {
			if (i >= this.length) {
				return chars.join('')
			}
			chars.push(this.buffer[i])
		}
		return chars.join('')
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
			if (this.chars(2) === '>') {
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
