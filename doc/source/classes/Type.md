[jemv](../README.md) / Type

# Class: Type

## Table of contents

### Constructors

- [constructor](Type.md#constructor)

### Properties

- [async](Type.md#async)
- [func](Type.md#func)
- [list](Type.md#list)
- [nullable](Type.md#nullable)
- [obj](Type.md#obj)
- [primitive](Type.md#primitive)
- [undefinable](Type.md#undefinable)

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
- [stringify](Type.md#stringify)
- [to](Type.md#to)

## Constructors

### constructor

• **new Type**(`primitive`, `obj?`, `list?`, `func?`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `primitive` | [`Primitive`](../enums/Primitive.md) |
| `obj?` | [`ObjType`](../interfaces/ObjType.md) |
| `list?` | [`ListType`](../interfaces/ListType.md) |
| `func?` | [`FuncType`](../interfaces/FuncType.md) |

#### Defined in

[domain/type.ts:30](https://github.com/FlavioLionelRita/typ3s/blob/9ddd9fd/src/lib/domain/type.ts#L30)

## Properties

### async

• **async**: `boolean`

#### Defined in

[domain/type.ts:29](https://github.com/FlavioLionelRita/typ3s/blob/9ddd9fd/src/lib/domain/type.ts#L29)

___

### func

• `Optional` **func**: [`FuncType`](../interfaces/FuncType.md)

#### Defined in

[domain/type.ts:34](https://github.com/FlavioLionelRita/typ3s/blob/9ddd9fd/src/lib/domain/type.ts#L34)

___

### list

• `Optional` **list**: [`ListType`](../interfaces/ListType.md)

#### Defined in

[domain/type.ts:33](https://github.com/FlavioLionelRita/typ3s/blob/9ddd9fd/src/lib/domain/type.ts#L33)

___

### nullable

• **nullable**: `boolean`

#### Defined in

[domain/type.ts:27](https://github.com/FlavioLionelRita/typ3s/blob/9ddd9fd/src/lib/domain/type.ts#L27)

___

### obj

• `Optional` **obj**: [`ObjType`](../interfaces/ObjType.md)

#### Defined in

[domain/type.ts:32](https://github.com/FlavioLionelRita/typ3s/blob/9ddd9fd/src/lib/domain/type.ts#L32)

___

### primitive

• **primitive**: [`Primitive`](../enums/Primitive.md)

#### Defined in

[domain/type.ts:31](https://github.com/FlavioLionelRita/typ3s/blob/9ddd9fd/src/lib/domain/type.ts#L31)

___

### undefinable

• **undefinable**: `boolean`

#### Defined in

[domain/type.ts:28](https://github.com/FlavioLionelRita/typ3s/blob/9ddd9fd/src/lib/domain/type.ts#L28)

## Accessors

### any

• `Static` `get` **any**(): [`Type`](Type.md)

#### Returns

[`Type`](Type.md)

#### Defined in

[domain/type.ts:41](https://github.com/FlavioLionelRita/typ3s/blob/9ddd9fd/src/lib/domain/type.ts#L41)

___

### boolean

• `Static` `get` **boolean**(): [`Type`](Type.md)

#### Returns

[`Type`](Type.md)

#### Defined in

[domain/type.ts:61](https://github.com/FlavioLionelRita/typ3s/blob/9ddd9fd/src/lib/domain/type.ts#L61)

___

### date

• `Static` `get` **date**(): [`Type`](Type.md)

#### Returns

[`Type`](Type.md)

#### Defined in

[domain/type.ts:65](https://github.com/FlavioLionelRita/typ3s/blob/9ddd9fd/src/lib/domain/type.ts#L65)

___

### dateTime

• `Static` `get` **dateTime**(): [`Type`](Type.md)

#### Returns

[`Type`](Type.md)

#### Defined in

[domain/type.ts:69](https://github.com/FlavioLionelRita/typ3s/blob/9ddd9fd/src/lib/domain/type.ts#L69)

___

### decimal

• `Static` `get` **decimal**(): [`Type`](Type.md)

#### Returns

[`Type`](Type.md)

#### Defined in

[domain/type.ts:53](https://github.com/FlavioLionelRita/typ3s/blob/9ddd9fd/src/lib/domain/type.ts#L53)

___

### integer

• `Static` `get` **integer**(): [`Type`](Type.md)

#### Returns

[`Type`](Type.md)

#### Defined in

[domain/type.ts:49](https://github.com/FlavioLionelRita/typ3s/blob/9ddd9fd/src/lib/domain/type.ts#L49)

___

### number

• `Static` `get` **number**(): [`Type`](Type.md)

#### Returns

[`Type`](Type.md)

#### Defined in

[domain/type.ts:57](https://github.com/FlavioLionelRita/typ3s/blob/9ddd9fd/src/lib/domain/type.ts#L57)

___

### string

• `Static` `get` **string**(): [`Type`](Type.md)

#### Returns

[`Type`](Type.md)

#### Defined in

[domain/type.ts:45](https://github.com/FlavioLionelRita/typ3s/blob/9ddd9fd/src/lib/domain/type.ts#L45)

___

### time

• `Static` `get` **time**(): [`Type`](Type.md)

#### Returns

[`Type`](Type.md)

#### Defined in

[domain/type.ts:73](https://github.com/FlavioLionelRita/typ3s/blob/9ddd9fd/src/lib/domain/type.ts#L73)

___

### void

• `Static` `get` **void**(): [`Type`](Type.md)

#### Returns

[`Type`](Type.md)

#### Defined in

[domain/type.ts:77](https://github.com/FlavioLionelRita/typ3s/blob/9ddd9fd/src/lib/domain/type.ts#L77)

## Methods

### Function

▸ `Static` **Function**(`params`, `ret`): [`Type`](Type.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `params` | [`ParamType`](../interfaces/ParamType.md)[] |
| `ret` | [`Type`](Type.md) |

#### Returns

[`Type`](Type.md)

#### Defined in

[domain/type.ts:90](https://github.com/FlavioLionelRita/typ3s/blob/9ddd9fd/src/lib/domain/type.ts#L90)

___

### List

▸ `Static` **List**(`items`): [`Type`](Type.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `items` | [`Type`](Type.md) |

#### Returns

[`Type`](Type.md)

#### Defined in

[domain/type.ts:86](https://github.com/FlavioLionelRita/typ3s/blob/9ddd9fd/src/lib/domain/type.ts#L86)

___

### Obj

▸ `Static` **Obj**(`properties?`): [`Type`](Type.md)

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `properties` | [`PropertyType`](../interfaces/PropertyType.md)[] | `[]` |

#### Returns

[`Type`](Type.md)

#### Defined in

[domain/type.ts:82](https://github.com/FlavioLionelRita/typ3s/blob/9ddd9fd/src/lib/domain/type.ts#L82)

___

### deserialize

▸ `Static` **deserialize**(`type?`): `undefined` \| [`Type`](Type.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `type?` | `string` |

#### Returns

`undefined` \| [`Type`](Type.md)

#### Defined in

[domain/type.ts:210](https://github.com/FlavioLionelRita/typ3s/blob/9ddd9fd/src/lib/domain/type.ts#L210)

___

### get

▸ `Static` **get**(`value`): [`Type`](Type.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `any` |

#### Returns

[`Type`](Type.md)

#### Defined in

[domain/type.ts:114](https://github.com/FlavioLionelRita/typ3s/blob/9ddd9fd/src/lib/domain/type.ts#L114)

___

### isFunc

▸ `Static` **isFunc**(`type`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `type` | `string` \| [`Type`](Type.md) |

#### Returns

`boolean`

#### Defined in

[domain/type.ts:162](https://github.com/FlavioLionelRita/typ3s/blob/9ddd9fd/src/lib/domain/type.ts#L162)

___

### isList

▸ `Static` **isList**(`type`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `type` | `string` \| [`Type`](Type.md) |

#### Returns

`boolean`

#### Defined in

[domain/type.ts:142](https://github.com/FlavioLionelRita/typ3s/blob/9ddd9fd/src/lib/domain/type.ts#L142)

___

### isObj

▸ `Static` **isObj**(`type`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `type` | `string` \| [`Type`](Type.md) |

#### Returns

`boolean`

#### Defined in

[domain/type.ts:149](https://github.com/FlavioLionelRita/typ3s/blob/9ddd9fd/src/lib/domain/type.ts#L149)

___

### isPrimitive

▸ `Static` **isPrimitive**(`type`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `type` | `string` \| [`Type`](Type.md) |

#### Returns

`boolean`

#### Defined in

[domain/type.ts:94](https://github.com/FlavioLionelRita/typ3s/blob/9ddd9fd/src/lib/domain/type.ts#L94)

___

### parse

▸ `Static` **parse**(`schema`): [`Type`](Type.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `schema` | `string` |

#### Returns

[`Type`](Type.md)

#### Defined in

[domain/type.ts:199](https://github.com/FlavioLionelRita/typ3s/blob/9ddd9fd/src/lib/domain/type.ts#L199)

___

### serialize

▸ `Static` **serialize**(`type?`): `undefined` \| `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `type?` | [`Type`](Type.md) |

#### Returns

`undefined` \| `string`

#### Defined in

[domain/type.ts:203](https://github.com/FlavioLionelRita/typ3s/blob/9ddd9fd/src/lib/domain/type.ts#L203)

___

### solve

▸ `Static` **solve**(`value`): [`Type`](Type.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `any` |

#### Returns

[`Type`](Type.md)

#### Defined in

[domain/type.ts:217](https://github.com/FlavioLionelRita/typ3s/blob/9ddd9fd/src/lib/domain/type.ts#L217)

___

### stringify

▸ `Static` **stringify**(`type?`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `type?` | [`Type`](Type.md) |

#### Returns

`string`

#### Defined in

[domain/type.ts:169](https://github.com/FlavioLionelRita/typ3s/blob/9ddd9fd/src/lib/domain/type.ts#L169)

___

### to

▸ `Static` **to**(`primitive`): [`Type`](Type.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `primitive` | `string` |

#### Returns

[`Type`](Type.md)

#### Defined in

[domain/type.ts:106](https://github.com/FlavioLionelRita/typ3s/blob/9ddd9fd/src/lib/domain/type.ts#L106)
