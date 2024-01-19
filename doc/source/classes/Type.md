[jemv](../README.md) / Type

# Class: Type

## Table of contents

### Constructors

- [constructor](Type.md#constructor)

### Properties

- [async](Type.md#async)
- [count](Type.md#count)
- [distinctCount](Type.md#distinctcount)
- [func](Type.md#func)
- [indefinite](Type.md#indefinite)
- [list](Type.md#list)
- [nullable](Type.md#nullable)
- [nullables](Type.md#nullables)
- [obj](Type.md#obj)
- [onParentDistinctRepeated](Type.md#onparentdistinctrepeated)
- [onParentDistinctRepeatedRate](Type.md#onparentdistinctrepeatedrate)
- [onParentDistinctUnique](Type.md#onparentdistinctunique)
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
- [cardinality](Type.md#cardinality)
- [deserialize](Type.md#deserialize)
- [get](Type.md#get)
- [isFunc](Type.md#isfunc)
- [isList](Type.md#islist)
- [isObj](Type.md#isobj)
- [isPrimitive](Type.md#isprimitive)
- [key](Type.md#key)
- [parse](Type.md#parse)
- [serialize](Type.md#serialize)
- [stringify](Type.md#stringify)
- [to](Type.md#to)
- [type](Type.md#type)

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

[domain/type.ts:41](https://github.com/FlavioLionelRita/typ3s/blob/e58e635/src/lib/domain/type.ts#L41)

## Properties

### async

• `Optional` **async**: `boolean`

#### Defined in

[domain/type.ts:29](https://github.com/FlavioLionelRita/typ3s/blob/e58e635/src/lib/domain/type.ts#L29)

___

### count

• `Optional` **count**: `number`

#### Defined in

[domain/type.ts:35](https://github.com/FlavioLionelRita/typ3s/blob/e58e635/src/lib/domain/type.ts#L35)

___

### distinctCount

• `Optional` **distinctCount**: `number`

#### Defined in

[domain/type.ts:36](https://github.com/FlavioLionelRita/typ3s/blob/e58e635/src/lib/domain/type.ts#L36)

___

### func

• `Optional` **func**: [`FuncType`](../interfaces/FuncType.md)

#### Defined in

[domain/type.ts:45](https://github.com/FlavioLionelRita/typ3s/blob/e58e635/src/lib/domain/type.ts#L45)

___

### indefinite

• `Optional` **indefinite**: `number`

#### Defined in

[domain/type.ts:33](https://github.com/FlavioLionelRita/typ3s/blob/e58e635/src/lib/domain/type.ts#L33)

___

### list

• `Optional` **list**: [`ListType`](../interfaces/ListType.md)

#### Defined in

[domain/type.ts:44](https://github.com/FlavioLionelRita/typ3s/blob/e58e635/src/lib/domain/type.ts#L44)

___

### nullable

• `Optional` **nullable**: `boolean`

#### Defined in

[domain/type.ts:27](https://github.com/FlavioLionelRita/typ3s/blob/e58e635/src/lib/domain/type.ts#L27)

___

### nullables

• `Optional` **nullables**: `number`

#### Defined in

[domain/type.ts:34](https://github.com/FlavioLionelRita/typ3s/blob/e58e635/src/lib/domain/type.ts#L34)

___

### obj

• `Optional` **obj**: [`ObjType`](../interfaces/ObjType.md)

#### Defined in

[domain/type.ts:43](https://github.com/FlavioLionelRita/typ3s/blob/e58e635/src/lib/domain/type.ts#L43)

___

### onParentDistinctRepeated

• `Optional` **onParentDistinctRepeated**: `number`

#### Defined in

[domain/type.ts:37](https://github.com/FlavioLionelRita/typ3s/blob/e58e635/src/lib/domain/type.ts#L37)

___

### onParentDistinctRepeatedRate

• `Optional` **onParentDistinctRepeatedRate**: `number`

#### Defined in

[domain/type.ts:38](https://github.com/FlavioLionelRita/typ3s/blob/e58e635/src/lib/domain/type.ts#L38)

___

### onParentDistinctUnique

• `Optional` **onParentDistinctUnique**: `boolean`

#### Defined in

[domain/type.ts:39](https://github.com/FlavioLionelRita/typ3s/blob/e58e635/src/lib/domain/type.ts#L39)

___

### primitive

• **primitive**: [`Primitive`](../enums/Primitive.md)

#### Defined in

[domain/type.ts:42](https://github.com/FlavioLionelRita/typ3s/blob/e58e635/src/lib/domain/type.ts#L42)

___

### repeatRate

• `Optional` **repeatRate**: `number`

#### Defined in

[domain/type.ts:32](https://github.com/FlavioLionelRita/typ3s/blob/e58e635/src/lib/domain/type.ts#L32)

___

### repeated

• `Optional` **repeated**: `number`

#### Defined in

[domain/type.ts:31](https://github.com/FlavioLionelRita/typ3s/blob/e58e635/src/lib/domain/type.ts#L31)

___

### undefinable

• `Optional` **undefinable**: `boolean`

#### Defined in

[domain/type.ts:28](https://github.com/FlavioLionelRita/typ3s/blob/e58e635/src/lib/domain/type.ts#L28)

___

### unique

• `Optional` **unique**: `boolean`

#### Defined in

[domain/type.ts:30](https://github.com/FlavioLionelRita/typ3s/blob/e58e635/src/lib/domain/type.ts#L30)

## Accessors

### any

• `get` **any**(): [`Type`](Type.md)

#### Returns

[`Type`](Type.md)

#### Defined in

[domain/type.ts:48](https://github.com/FlavioLionelRita/typ3s/blob/e58e635/src/lib/domain/type.ts#L48)

___

### boolean

• `get` **boolean**(): [`Type`](Type.md)

#### Returns

[`Type`](Type.md)

#### Defined in

[domain/type.ts:68](https://github.com/FlavioLionelRita/typ3s/blob/e58e635/src/lib/domain/type.ts#L68)

___

### date

• `get` **date**(): [`Type`](Type.md)

#### Returns

[`Type`](Type.md)

#### Defined in

[domain/type.ts:72](https://github.com/FlavioLionelRita/typ3s/blob/e58e635/src/lib/domain/type.ts#L72)

___

### dateTime

• `get` **dateTime**(): [`Type`](Type.md)

#### Returns

[`Type`](Type.md)

#### Defined in

[domain/type.ts:76](https://github.com/FlavioLionelRita/typ3s/blob/e58e635/src/lib/domain/type.ts#L76)

___

### decimal

• `get` **decimal**(): [`Type`](Type.md)

#### Returns

[`Type`](Type.md)

#### Defined in

[domain/type.ts:60](https://github.com/FlavioLionelRita/typ3s/blob/e58e635/src/lib/domain/type.ts#L60)

___

### integer

• `get` **integer**(): [`Type`](Type.md)

#### Returns

[`Type`](Type.md)

#### Defined in

[domain/type.ts:56](https://github.com/FlavioLionelRita/typ3s/blob/e58e635/src/lib/domain/type.ts#L56)

___

### number

• `get` **number**(): [`Type`](Type.md)

#### Returns

[`Type`](Type.md)

#### Defined in

[domain/type.ts:64](https://github.com/FlavioLionelRita/typ3s/blob/e58e635/src/lib/domain/type.ts#L64)

___

### string

• `get` **string**(): [`Type`](Type.md)

#### Returns

[`Type`](Type.md)

#### Defined in

[domain/type.ts:52](https://github.com/FlavioLionelRita/typ3s/blob/e58e635/src/lib/domain/type.ts#L52)

___

### time

• `get` **time**(): [`Type`](Type.md)

#### Returns

[`Type`](Type.md)

#### Defined in

[domain/type.ts:80](https://github.com/FlavioLionelRita/typ3s/blob/e58e635/src/lib/domain/type.ts#L80)

___

### void

• `get` **void**(): [`Type`](Type.md)

#### Returns

[`Type`](Type.md)

#### Defined in

[domain/type.ts:84](https://github.com/FlavioLionelRita/typ3s/blob/e58e635/src/lib/domain/type.ts#L84)

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

[domain/type.ts:97](https://github.com/FlavioLionelRita/typ3s/blob/e58e635/src/lib/domain/type.ts#L97)

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

[domain/type.ts:93](https://github.com/FlavioLionelRita/typ3s/blob/e58e635/src/lib/domain/type.ts#L93)

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

[domain/type.ts:89](https://github.com/FlavioLionelRita/typ3s/blob/e58e635/src/lib/domain/type.ts#L89)

___

### cardinality

▸ **cardinality**(`value`, `type`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `any` |
| `type` | [`Type`](Type.md) |

#### Returns

`void`

#### Defined in

[domain/type.ts:307](https://github.com/FlavioLionelRita/typ3s/blob/e58e635/src/lib/domain/type.ts#L307)

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

[domain/type.ts:224](https://github.com/FlavioLionelRita/typ3s/blob/e58e635/src/lib/domain/type.ts#L224)

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

[domain/type.ts:121](https://github.com/FlavioLionelRita/typ3s/blob/e58e635/src/lib/domain/type.ts#L121)

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

[domain/type.ts:169](https://github.com/FlavioLionelRita/typ3s/blob/e58e635/src/lib/domain/type.ts#L169)

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

[domain/type.ts:149](https://github.com/FlavioLionelRita/typ3s/blob/e58e635/src/lib/domain/type.ts#L149)

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

[domain/type.ts:156](https://github.com/FlavioLionelRita/typ3s/blob/e58e635/src/lib/domain/type.ts#L156)

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

[domain/type.ts:101](https://github.com/FlavioLionelRita/typ3s/blob/e58e635/src/lib/domain/type.ts#L101)

___

### key

▸ **key**(`value`, `type`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `any` |
| `type` | [`Type`](Type.md) |

#### Returns

`string`

#### Defined in

[domain/type.ts:509](https://github.com/FlavioLionelRita/typ3s/blob/e58e635/src/lib/domain/type.ts#L509)

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

[domain/type.ts:210](https://github.com/FlavioLionelRita/typ3s/blob/e58e635/src/lib/domain/type.ts#L210)

___

### serialize

▸ **serialize**(`type?`, `indentation?`): `undefined` \| `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `type?` | [`Type`](Type.md) |
| `indentation?` | `number` |

#### Returns

`undefined` \| `string`

#### Defined in

[domain/type.ts:214](https://github.com/FlavioLionelRita/typ3s/blob/e58e635/src/lib/domain/type.ts#L214)

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

[domain/type.ts:180](https://github.com/FlavioLionelRita/typ3s/blob/e58e635/src/lib/domain/type.ts#L180)

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

[domain/type.ts:113](https://github.com/FlavioLionelRita/typ3s/blob/e58e635/src/lib/domain/type.ts#L113)

___

### type

▸ **type**(`value`): [`Type`](Type.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `any` |

#### Returns

[`Type`](Type.md)

#### Defined in

[domain/type.ts:231](https://github.com/FlavioLionelRita/typ3s/blob/e58e635/src/lib/domain/type.ts#L231)
