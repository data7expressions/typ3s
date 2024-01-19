import { Type } from '../../lib'

(async () => {
	const data = {
		name: 'Spain',
		region: 'Europe',
		phoneCode: '34',
		timezones: [
			{ name: 'Madrid', offset: 1, pos: { lat: 40.4165, log: -3.70256 } },
			{ name: 'Ceuta', pos: { lat: 35.8883, log: -5.3162 } },
			{ name: 'Canary', offset: 0, pos: { lat: 28.1248, log: -15.43 } }
		]
	}
	const type = Type.type(data)
	const stringified = Type.stringify(type)
	const type2 = Type.parse(stringified)
	const serialized = Type.serialize(type2)
	const deserialized = Type.deserialize(serialized)

	console.log(stringified)
	console.log(serialized)
	console.log(deserialized)
})()
