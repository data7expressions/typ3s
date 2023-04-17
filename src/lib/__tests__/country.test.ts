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
		const type = Type.resolve(data)
		const result = Type.serialize(type)
		const expected = '{"kind":"obj","obj":{"properties":[{"name":"name","type":{"kind":"string"}},{"name":"region","type":{"kind":"string"}},{"name":"phoneCode","type":{"kind":"string"}},{"name":"timezones","type":{"kind":"list","list":{"items":{"kind":"obj","obj":{"properties":[{"name":"name","type":{"kind":"string"}},{"name":"offset","type":{"kind":"integer"}},{"name":"pos","type":{"kind":"obj","obj":{"properties":[{"name":"lat","type":{"kind":"decimal"}},{"name":"log","type":{"kind":"decimal"}}]}}}]}}}}}]}}'
		expect(expected).toStrictEqual(result)
	})
	test('stringify', () => {
		const type = Type.resolve(data)
		const result = Type.stringify(type)
		const expected = '{name:string,region:string,phoneCode:string,timezones:[{name:string,offset:integer,pos:{lat:decimal,log:decimal}}]}'
		expect(expected).toStrictEqual(result)
	})
})
