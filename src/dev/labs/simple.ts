import { Type } from '../../lib'
const data = [
	{
		name: 'Spain',
		region: { name: 'Europe', code: 'EU', description: 'European Union' },
		languages: ['Spanish', 'Catalan', 'Galician', 'Basque'],
		phoneCode: 34
	},
	{
		name: 'France',
		region: { name: 'Europe', code: 'EU', description: 'European Union' },
		languages: ['French'],
		phoneCode: 33
	},
	{
		name: 'Canada',
		region: { name: 'North America', code: 'NA', description: null },
		languages: ['English', 'French']
	}
]
const type = Type.type(data)
const stringified = Type.stringify(type)
const type2 = Type.parse(stringified)
const serialized = Type.serialize(type2, 2)
const deserialized = Type.deserialize(serialized)
const serialize2 = Type.serialize(deserialized)
console.log(stringified)
console.log(serialized)
console.log(serialize2)
