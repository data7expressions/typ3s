import { Type } from '../../lib'
const data = [
	{
		name: 'Spain',
		region: { name: 'Europe', code: 'EU', description: 'European Union' },
		languages: ['Spanish', 'Catalan', 'Galician', 'Basque'],
		phoneCode: 34,
		religion: 'Roman Catholicism'
	},
	{
		name: 'United Kingdom',
		region: { name: 'Europe', code: 'EU', description: 'European Union' },
		languages: ['English'],
		phoneCode: 44,
		religion: 'Christianity'
	},
	{
		name: 'Italy',
		region: { name: 'Europe', code: 'EU', description: 'European Union' },
		languages: ['Italian'],
		phoneCode: 39,
		religion: 'Roman Catholicism'
	},
	{
		name: 'France',
		region: { name: 'Europe', code: 'EU', description: 'European Union' },
		languages: ['French'],
		phoneCode: 33,
		religion: 'Roman Catholicism'
	},
	{
		name: 'Argentina',
		region: { name: 'South America', code: 'SA', description: 'South America' },
		languages: ['Spanish'],
		phoneCode: 54,
		religion: 'Roman Catholicism'
	},
	{
		name: 'Germany',
		region: { name: 'Europe', code: 'EU', description: 'European Union' },
		languages: ['German'],
		phoneCode: 49,
		religion: 'Christianity'
	},
	{
		name: 'Portugal',
		region: { name: 'Europe', code: 'EU', description: 'European Union' },
		languages: ['Portuguese'],
		phoneCode: 351,
		religion: 'Roman Catholicism'
	},
	{
		name: 'United States',
		region: { name: 'North America', code: 'NA', description: 'North America' },
		languages: ['English'],
		phoneCode: 1,
		religion: 'Christianity'
	},
	{
		name: 'Peru',
		region: { name: 'South America', code: 'SA', description: 'South America' },
		languages: ['Spanish'],
		phoneCode: 51,
		religion: 'Roman Catholicism'
	}
]
const type = Type.type(data, { info: true, describe: true })
const stringified = Type.stringify(type)
const serialized = Type.serialize(type, 1)
console.log(stringified)
console.log(serialized)
