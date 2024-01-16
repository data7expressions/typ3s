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
		const type = Type.solve(data)
		const result = Type.serialize(type)
		const expected = '{"primitive":"obj","obj":{"properties":[{"name":"id","type":{"primitive":"integer","nullable":false,"undefinable":false,"async":false}},{"name":"customerId","type":{"primitive":"string","nullable":false,"undefinable":false,"async":false}},{"name":"employeeId","type":{"primitive":"integer","nullable":false,"undefinable":false,"async":false}},{"name":"orderDate","type":{"primitive":"string","nullable":false,"undefinable":false,"async":false}},{"name":"requiredDate","type":{"primitive":"string","nullable":false,"undefinable":false,"async":false}},{"name":"shippedDate","type":{"primitive":"string","nullable":false,"undefinable":false,"async":false}},{"name":"shipViaId","type":{"primitive":"integer","nullable":false,"undefinable":false,"async":false}},{"name":"freight","type":{"primitive":"decimal","nullable":false,"undefinable":false,"async":false}},{"name":"name","type":{"primitive":"string","nullable":false,"undefinable":false,"async":false}},{"name":"address","type":{"primitive":"string","nullable":false,"undefinable":false,"async":false}},{"name":"city","type":{"primitive":"string","nullable":false,"undefinable":false,"async":false}},{"name":"region","type":{"primitive":"string","nullable":false,"undefinable":false,"async":false}},{"name":"postalCode","type":{"primitive":"string","nullable":false,"undefinable":false,"async":false}},{"name":"country","type":{"primitive":"string","nullable":false,"undefinable":false,"async":false}},{"name":"details","type":{"primitive":"list","list":{"items":{"primitive":"obj","obj":{"properties":[{"name":"orderId","type":{"primitive":"integer","nullable":false,"undefinable":false,"async":false}},{"name":"productId","type":{"primitive":"integer","nullable":false,"undefinable":false,"async":false}},{"name":"unitPrice","type":{"primitive":"decimal","nullable":false,"undefinable":false,"async":false}},{"name":"quantity","type":{"primitive":"integer","nullable":false,"undefinable":false,"async":false}},{"name":"discount","type":{"primitive":"integer","nullable":false,"undefinable":false,"async":false}}]},"nullable":false,"undefinable":false,"async":false}},"nullable":false,"undefinable":false,"async":false}}]},"nullable":false,"undefinable":false,"async":false}'
		expect(expected).toStrictEqual(result)
	})
	test('stringify', () => {
		const type = Type.solve(data)
		const result = Type.stringify(type)
		const expected = '{id:integer,customerId:string,employeeId:integer,orderDate:string,requiredDate:string,shippedDate:string,shipViaId:integer,freight:decimal,name:string,address:string,city:string,region:string,postalCode:string,country:string,details:[{orderId:integer,productId:integer,unitPrice:decimal,quantity:integer,discount:integer}]}'
		expect(expected).toStrictEqual(result)
	})
})
