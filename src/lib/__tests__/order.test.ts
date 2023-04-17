/* eslint-disable no-template-curly-in-string */
import { Type } from '..'
let data:any
beforeAll(async () => {
	data = {
		id: 139,
		customerId: 'FAMIA',
		employeeId: 9,
		orderDate: '1996-12-17T23:00:00.000Z',
		requiredDate: '1996-12-31T23:00:00.000Z',
		shippedDate: '1996-12-24T23:00:00.000Z',
		shipViaId: 3,
		freight: 13.99,
		name: 'Familia Arquibaldo',
		address: 'Rua Ors, 92',
		city: 'Sao Paulo',
		region: 'SP',
		postalCode: '05442-030',
		country: 'Brazil',
		details: [
			{
				orderId: 139,
				productId: 24,
				unitPrice: 3.6,
				quantity: 15,
				discount: 0
			},
			{
				orderId: 139,
				productId: 34,
				unitPrice: 11.2,
				quantity: 10,
				discount: 0
			}
		]
	}
})

describe('order', () => {
	test('serialize', () => {
		const type = Type.resolve(data)
		const result = Type.serialize(type)
		const expected = '{"kind":"obj","obj":{"properties":[{"name":"id","type":{"kind":"integer"}},{"name":"customerId","type":{"kind":"string"}},{"name":"employeeId","type":{"kind":"integer"}},{"name":"orderDate","type":{"kind":"string"}},{"name":"requiredDate","type":{"kind":"string"}},{"name":"shippedDate","type":{"kind":"string"}},{"name":"shipViaId","type":{"kind":"integer"}},{"name":"freight","type":{"kind":"decimal"}},{"name":"name","type":{"kind":"string"}},{"name":"address","type":{"kind":"string"}},{"name":"city","type":{"kind":"string"}},{"name":"region","type":{"kind":"string"}},{"name":"postalCode","type":{"kind":"string"}},{"name":"country","type":{"kind":"string"}},{"name":"details","type":{"kind":"list","list":{"items":{"kind":"obj","obj":{"properties":[{"name":"orderId","type":{"kind":"integer"}},{"name":"productId","type":{"kind":"integer"}},{"name":"unitPrice","type":{"kind":"decimal"}},{"name":"quantity","type":{"kind":"integer"}},{"name":"discount","type":{"kind":"integer"}}]}}}}}]}}'
		expect(expected).toStrictEqual(result)
	})
	test('stringify', () => {
		const type = Type.resolve(data)
		const result = Type.stringify(type)
		const expected = '{id:integer,customerId:string,employeeId:integer,orderDate:string,requiredDate:string,shippedDate:string,shipViaId:integer,freight:decimal,name:string,address:string,city:string,region:string,postalCode:string,country:string,details:[{orderId:integer,productId:integer,unitPrice:decimal,quantity:integer,discount:integer}]}'
		expect(expected).toStrictEqual(result)
	})
})
