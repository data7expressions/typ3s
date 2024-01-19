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
Type.cardinality(data, type)
const stringified = Type.stringify(type)
const serialized = Type.serialize(type, 1)
console.log(stringified)
console.log(serialized)
