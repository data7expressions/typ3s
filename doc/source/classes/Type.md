[jemv](../README.md) / Type

# Class: Type

## Table of contents

### Constructors

- [constructor](Type.md#constructor)

### Properties

- [async](Type.md#async)
- [count](Type.md#count)
- [func](Type.md#func)
- [indefinite](Type.md#indefinite)
- [list](Type.md#list)
- [nullable](Type.md#nullable)
- [nullables](Type.md#nullables)
- [obj](Type.md#obj)
- [primitive](Type.md#primitive)
- [repeatRate](Type.md#repeatrate)
- [repeated](Type.md#repeated)
- [undefinable](Type.md#undefinable)
- [unique](Type.md#unique)

### Accessors

- [any](Type.md#any)
- [boolean](Type.md#boolean)
- [date](Type.md#date)
- [dateTime](Type.md#datetime)
- [decimal](Type.md#decimal)
- [integer](Type.md#integer)
- [number](Type.md#number)
- [string](Type.md#string)
- [time](Type.md#time)
- [void](Type.md#void)

### Methods

- [Function](Type.md#function)
- [List](Type.md#list-1)
- [Obj](Type.md#obj-1)
- [deserialize](Type.md#deserialize)
- [get](Type.md#get)
- [isFunc](Type.md#isfunc)
- [isList](Type.md#islist)
- [isObj](Type.md#isobj)
- [isPrimitive](Type.md#isprimitive)
- [parse](Type.md#parse)
- [serialize](Type.md#serialize)
- [solve](Type.md#solve)
- [solveCardinality](Type.md#solvecardinality)
- [stringify](Type.md#stringify)
- [to](Type.md#to)

## Constructors

### constructor

• **new Type**(`primitive`, `obj?`, `list?`, `func?`): [`Type`](Type.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `primitive` | [`Primitive`](../enums/Primitive.md) |
| `obj?` | [`ObjType`](../interfaces/ObjType.md) |
| `list?` | [`ListType`](../interfaces/ListType.md) |
| `func?` | [`FuncType`](../interfaces/FuncType.md) |

#### Returns

[`Type`](Type.md)

#### Defined in

[domain/type.ts:36](https://github.com/expr-solver/typ3s/blob/d75b579/src/lib/domain/type.ts#L36)

## Properties

### async

• **async**: `boolean`

#### Defined in

[domain/type.ts:29](https://github.com/expr-solver/typ3s/blob/d75b579/src/lib/domain/type.ts#L29)

___

### count

• **count**: `number`

#### Defined in

[domain/type.ts:35](https://github.com/expr-solver/typ3s/blob/d75b579/src/lib/domain/type.ts#L35)

___

### func

• `Optional` **func**: [`FuncType`](../interfaces/FuncType.md)

#### Defined in

[domain/type.ts:40](https://github.com/expr-solver/typ3s/blob/d75b579/src/lib/domain/type.ts#L40)

___

### indefinite

• **indefinite**: `number`

#### Defined in

[domain/type.ts:33](https://github.com/expr-solver/typ3s/blob/d75b579/src/lib/domain/type.ts#L33)

___

### list

• `Optional` **list**: [`ListType`](../interfaces/ListType.md)

#### Defined in

[domain/type.ts:39](https://github.com/expr-solver/typ3s/blob/d75b579/src/lib/domain/type.ts#L39)

___

### nullable

• **nullable**: `boolean`

#### Defined in

[domain/type.ts:27](https://github.com/expr-solver/typ3s/blob/d75b579/src/lib/domain/type.ts#L27)

___

### nullables

• **nullables**: `number`

#### Defined in

[domain/type.ts:34](https://github.com/expr-solver/typ3s/blob/d75b579/src/lib/domain/type.ts#L34)

___

### obj

• `Optional` **obj**: [`ObjType`](../interfaces/ObjType.md)

#### Defined in

[domain/type.ts:38](https://github.com/expr-solver/typ3s/blob/d75b579/src/lib/domain/type.ts#L38)

___

### primitive

• **primitive**: [`Primitive`](../enums/Primitive.md)

#### Defined in

[domain/type.ts:37](https://github.com/expr-solver/typ3s/blob/d75b579/src/lib/domain/type.ts#L37)

___

### repeatRate

• **repeatRate**: `number`

#### Defined in

[domain/type.ts:32](https://github.com/expr-solver/typ3s/blob/d75b579/src/lib/domain/type.ts#L32)

___

### repeated

• **repeated**: `number`

#### Defined in

[domain/type.ts:31](https://github.com/expr-solver/typ3s/blob/d75b579/src/lib/domain/type.ts#L31)

___

### undefinable

• **undefinable**: `boolean`

#### Defined in

[domain/type.ts:28](https://github.com/expr-solver/typ3s/blob/d75b579/src/lib/domain/type.ts#L28)

___

### unique

• **unique**: `boolean`

#### Defined in

[domain/type.ts:30](https://github.com/expr-solver/typ3s/blob/d75b579/src/lib/domain/type.ts#L30)

## Accessors

### any

• `get` **any**(): [`Type`](Type.md)

#### Returns

[`Type`](Type.md)

#### Defined in

[domain/type.ts:53](https://github.com/expr-solver/typ3s/blob/d75b579/src/lib/domain/type.ts#L53)

___

### boolean

• `get` **boolean**(): [`Type`](Type.md)

#### Returns

[`Type`](Type.md)

#### Defined in

[domain/type.ts:73](https://github.com/expr-solver/typ3s/blob/d75b579/src/lib/domain/type.ts#L73)

___

### date

• `get` **date**(): [`Type`](Type.md)

#### Returns

[`Type`](Type.md)

#### Defined in

[domain/type.ts:77](https://github.com/expr-solver/typ3s/blob/d75b579/src/lib/domain/type.ts#L77)

___

### dateTime

• `get` **dateTime**(): [`Type`](Type.md)

#### Returns

[`Type`](Type.md)

#### Defined in

[domain/type.ts:81](https://github.com/expr-solver/typ3s/blob/d75b579/src/lib/domain/type.ts#L81)

___

### decimal

• `get` **decimal**(): [`Type`](Type.md)

#### Returns

[`Type`](Type.md)

#### Defined in

[domain/type.ts:65](https://github.com/expr-solver/typ3s/blob/d75b579/src/lib/domain/type.ts#L65)

___

### integer

• `get` **integer**(): [`Type`](Type.md)

#### Returns

[`Type`](Type.md)

#### Defined in

[domain/type.ts:61](https://github.com/expr-solver/typ3s/blob/d75b579/src/lib/domain/type.ts#L61)

___

### number

• `get` **number**(): [`Type`](Type.md)

#### Returns

[`Type`](Type.md)

#### Defined in

[domain/type.ts:69](https://github.com/expr-solver/typ3s/blob/d75b579/src/lib/domain/type.ts#L69)

___

### string

• `get` **string**(): [`Type`](Type.md)

#### Returns

[`Type`](Type.md)

#### Defined in

[domain/type.ts:57](https://github.com/expr-solver/typ3s/blob/d75b579/src/lib/domain/type.ts#L57)

___

### time

• `get` **time**(): [`Type`](Type.md)

#### Returns

[`Type`](Type.md)

#### Defined in

[domain/type.ts:85](https://github.com/expr-solver/typ3s/blob/d75b579/src/lib/domain/type.ts#L85)

___

### void

• `get` **void**(): [`Type`](Type.md)

#### Returns

[`Type`](Type.md)

#### Defined in

[domain/type.ts:89](https://github.com/expr-solver/typ3s/blob/d75b579/src/lib/domain/type.ts#L89)

## Methods

### Function

▸ **Function**(`params`, `ret`): [`Type`](Type.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `params` | [`ParamType`](../interfaces/ParamType.md)[] |
| `ret` | [`Type`](Type.md) |

#### Returns

[`Type`](Type.md)

#### Defined in

[domain/type.ts:102](https://github.com/expr-solver/typ3s/blob/d75b579/src/lib/domain/type.ts#L102)

___

### List

▸ **List**(`items`): [`Type`](Type.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `items` | [`Type`](Type.md) |

#### Returns

[`Type`](Type.md)

#### Defined in

[domain/type.ts:98](https://github.com/expr-solver/typ3s/blob/d75b579/src/lib/domain/type.ts#L98)

___

### Obj

▸ **Obj**(`properties?`): [`Type`](Type.md)

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `properties` | [`PropertyType`](../interfaces/PropertyType.md)[] | `[]` |

#### Returns

[`Type`](Type.md)

#### Defined in

[domain/type.ts:94](https://github.com/expr-solver/typ3s/blob/d75b579/src/lib/domain/type.ts#L94)

___

### deserialize

▸ **deserialize**(`type?`): `undefined` \| [`Type`](Type.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `type?` | `string` |

#### Returns

`undefined` \| [`Type`](Type.md)

#### Defined in

[domain/type.ts:222](https://github.com/expr-solver/typ3s/blob/d75b579/src/lib/domain/type.ts#L222)

___

### get

▸ **get**(`value`): [`Type`](Type.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `any` |

#### Returns

[`Type`](Type.md)

#### Defined in

[domain/type.ts:126](https://github.com/expr-solver/typ3s/blob/d75b579/src/lib/domain/type.ts#L126)

___

### isFunc

▸ **isFunc**(`type`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `type` | `string` \| [`Type`](Type.md) |

#### Returns

`boolean`

#### Defined in

[domain/type.ts:174](https://github.com/expr-solver/typ3s/blob/d75b579/src/lib/domain/type.ts#L174)

___

### isList

▸ **isList**(`type`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `type` | `string` \| [`Type`](Type.md) |

#### Returns

`boolean`

#### Defined in

[domain/type.ts:154](https://github.com/expr-solver/typ3s/blob/d75b579/src/lib/domain/type.ts#L154)

___

### isObj

▸ **isObj**(`type`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `type` | `string` \| [`Type`](Type.md) |

#### Returns

`boolean`

#### Defined in

[domain/type.ts:161](https://github.com/expr-solver/typ3s/blob/d75b579/src/lib/domain/type.ts#L161)

___

### isPrimitive

▸ **isPrimitive**(`type`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `type` | `string` \| [`Type`](Type.md) |

#### Returns

`boolean`

#### Defined in

[domain/type.ts:106](https://github.com/expr-solver/typ3s/blob/d75b579/src/lib/domain/type.ts#L106)

___

### parse

▸ **parse**(`schema`): [`Type`](Type.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `schema` | `string` |

#### Returns

[`Type`](Type.md)

#### Defined in

[domain/type.ts:211](https://github.com/expr-solver/typ3s/blob/d75b579/src/lib/domain/type.ts#L211)

___

### serialize

▸ **serialize**(`type?`): `undefined` \| `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `type?` | [`Type`](Type.md) |

#### Returns

`undefined` \| `string`

#### Defined in

[domain/type.ts:215](https://github.com/expr-solver/typ3s/blob/d75b579/src/lib/domain/type.ts#L215)

___

### solve

▸ **solve**(`value`): [`Type`](Type.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `any` |

#### Returns

[`Type`](Type.md)

#### Defined in

[domain/type.ts:229](https://github.com/expr-solver/typ3s/blob/d75b579/src/lib/domain/type.ts#L229)

___

### solveCardinality

▸ **solveCardinality**(`value`, `type`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `any` |
| `type` | [`Type`](Type.md) |

#### Returns

`void`

#### Defined in

[domain/type.ts:305](https://github.com/expr-solver/typ3s/blob/d75b579/src/lib/domain/type.ts#L305)

___

### stringify

▸ **stringify**(`type?`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `type?` | [`Type`](Type.md) |

#### Returns

`string`

#### Defined in

[domain/type.ts:181](https://github.com/expr-solver/typ3s/blob/d75b579/src/lib/domain/type.ts#L181)

___

### to

▸ **to**(`primitive`): [`Type`](Type.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `primitive` | `string` |

#### Returns

[`Type`](Type.md)

#### Defined in

[domain/type.ts:118](https://github.com/expr-solver/typ3s/blob/d75b579/src/lib/domain/type.ts#L118)
