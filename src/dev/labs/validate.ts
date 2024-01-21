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
	}
]
const withoutLanguages = [
	{
		name: 'Italy',
		region: { name: 'Europe', code: 'EU', description: 'European Union' },
		phoneCode: 39,
		religion: 'Roman Catholicism'
	}
]
const withoutRegionCode = [
	{
		name: 'France',
		region: { name: 'Europe', description: 'European Union' },
		languages: ['French'],
		phoneCode: 33,
		religion: 'Roman Catholicism'
	}
]
const incorrectPhoneCode = [
	{
		name: 'Argentina',
		region: { name: 'South America', code: 'SA', description: 'South America' },
		languages: ['Spanish'],
		phoneCode: '54',
		religion: 'Roman Catholicism'
	}
]
const type = Type.type(data)
const stringified = Type.stringify(type)
let [isValid, message] = Type.validate(data, type)
if (!isValid) {
	console.log(message)
} else {
	console.log('Valid!')
}
[isValid, message] = Type.validate(withoutLanguages, type)
if (!isValid) {
	console.log(message)
} else {
	console.log('Valid!')
}
[isValid, message] = Type.validate(withoutRegionCode, stringified)
if (!isValid) {
	console.log(message)
} else {
	console.log('Valid!')
}
[isValid, message] = Type.validate(incorrectPhoneCode, stringified)
if (!isValid) {
	console.log(message)
} else {
	console.log('Valid!')
}
