/* eslint-disable no-template-curly-in-string */
import { Type } from '..'
let data:any
beforeAll(async () => {
	data = {
		name: 'Spain',
		region: 'Europe',
		phoneCode: '34',
		timezones: [
			{ name: 'Madrid', offset: 1, pos: { lat: 40.4165, log: -3.70256 } },
			{ name: 'Ceuta', offset: 1, pos: { lat: 35.8883, log: -5.3162 } },
			{ name: 'Canary', offset: 0, pos: { lat: 28.1248, log: -15.43 } }
		]
	}
})

describe('country', () => {
	test('serialize', () => {
		const type = Type.solve(data)
		const result = Type.serialize(type)
		const expected = '{"primitive":"obj","obj":{"properties":[{"name":"name","type":{"primitive":"string","nullable":false,"undefinable":false,"async":false,"unique":false,"repeated":0,"repeatRate":0,"count":0,"indefinite":0,"nullables":0}},{"name":"region","type":{"primitive":"string","nullable":false,"undefinable":false,"async":false,"unique":false,"repeated":0,"repeatRate":0,"count":0,"indefinite":0,"nullables":0}},{"name":"phoneCode","type":{"primitive":"string","nullable":false,"undefinable":false,"async":false,"unique":false,"repeated":0,"repeatRate":0,"count":0,"indefinite":0,"nullables":0}},{"name":"timezones","type":{"primitive":"list","list":{"items":{"primitive":"obj","obj":{"properties":[{"name":"name","type":{"primitive":"string","nullable":false,"undefinable":false,"async":false,"unique":false,"repeated":0,"repeatRate":0,"count":0,"indefinite":0,"nullables":0}},{"name":"offset","type":{"primitive":"integer","nullable":false,"undefinable":false,"async":false,"unique":false,"repeated":0,"repeatRate":0,"count":0,"indefinite":0,"nullables":0}},{"name":"pos","type":{"primitive":"obj","obj":{"properties":[{"name":"lat","type":{"primitive":"decimal","nullable":false,"undefinable":false,"async":false,"unique":false,"repeated":0,"repeatRate":0,"count":0,"indefinite":0,"nullables":0}},{"name":"log","type":{"primitive":"decimal","nullable":false,"undefinable":false,"async":false,"unique":false,"repeated":0,"repeatRate":0,"count":0,"indefinite":0,"nullables":0}}]},"nullable":false,"undefinable":false,"async":false,"unique":false,"repeated":0,"repeatRate":0,"count":0,"indefinite":0,"nullables":0}}]},"nullable":false,"undefinable":false,"async":false,"unique":false,"repeated":0,"repeatRate":0,"count":0,"indefinite":0,"nullables":0}},"nullable":false,"undefinable":false,"async":false,"unique":false,"repeated":0,"repeatRate":0,"count":0,"indefinite":0,"nullables":0}}]},"nullable":false,"undefinable":false,"async":false,"unique":false,"repeated":0,"repeatRate":0,"count":0,"indefinite":0,"nullables":0}'
		expect(expected).toStrictEqual(result)
	})
	test('stringify', () => {
		const type = Type.solve(data)
		const result = Type.stringify(type)
		const expected = '{name:string,region:string,phoneCode:string,timezones:[{name:string,offset:integer,pos:{lat:decimal,log:decimal}}]}'
		expect(expected).toStrictEqual(result)
	})
})
