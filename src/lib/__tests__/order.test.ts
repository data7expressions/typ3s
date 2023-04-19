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
		const expected = '{"primitive":"obj","obj":{"properties":[{"name":"id","type":{"primitive":"integer"}},{"name":"customerId","type":{"primitive":"string"}},{"name":"employeeId","type":{"primitive":"integer"}},{"name":"orderDate","type":{"primitive":"string"}},{"name":"requiredDate","type":{"primitive":"string"}},{"name":"shippedDate","type":{"primitive":"string"}},{"name":"shipViaId","type":{"primitive":"integer"}},{"name":"freight","type":{"primitive":"decimal"}},{"name":"name","type":{"primitive":"string"}},{"name":"address","type":{"primitive":"string"}},{"name":"city","type":{"primitive":"string"}},{"name":"region","type":{"primitive":"string"}},{"name":"postalCode","type":{"primitive":"string"}},{"name":"country","type":{"primitive":"string"}},{"name":"details","type":{"primitive":"list","list":{"items":{"primitive":"obj","obj":{"properties":[{"name":"orderId","type":{"primitive":"integer"}},{"name":"productId","type":{"primitive":"integer"}},{"name":"unitPrice","type":{"primitive":"decimal"}},{"name":"quantity","type":{"primitive":"integer"}},{"name":"discount","type":{"primitive":"integer"}}]}}}}}]}}'
		expect(expected).toStrictEqual(result)
	})
	test('stringify', () => {
		const type = Type.resolve(data)
		const result = Type.stringify(type)
		const expected = '{id:integer,customerId:string,employeeId:integer,orderDate:string,requiredDate:string,shippedDate:string,shipViaId:integer,freight:decimal,name:string,address:string,city:string,region:string,postalCode:string,country:string,details:[{orderId:integer,productId:integer,unitPrice:decimal,quantity:integer,discount:integer}]}'
		expect(expected).toStrictEqual(result)
	})
})
