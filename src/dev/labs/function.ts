import { Type } from '../../lib'

(async () => {
	const arrow = (a:number, b:number) => a + b
	const func = function (c:number, d:number):number {
		return c + d
	}
	const list = [
		arrow,
		func
	]
	for (const item of list) {
		const type = Type.solve(item)
		console.log(Type.serialize(type))
		console.log(Type.stringify(type))
	}
})()
