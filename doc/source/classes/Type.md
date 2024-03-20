[Typ3s](../README.md) / Type

# Class: Type

## Table of contents

### Constructors

- [constructor](Type.md#constructor)

### Properties

- [async](Type.md#async)
- [count](Type.md#count)
- [distinctCount](Type.md#distinctcount)
- [enums](Type.md#enums)
- [func](Type.md#func)
- [indefinite](Type.md#indefinite)
- [list](Type.md#list)
- [max](Type.md#max)
- [maxLen](Type.md#maxlen)
- [mean](Type.md#mean)
- [min](Type.md#min)
- [minLen](Type.md#minlen)
- [nullable](Type.md#nullable)
- [nullables](Type.md#nullables)
- [obj](Type.md#obj)
- [onParentDistinctRepeated](Type.md#onparentdistinctrepeated)
- [onParentDistinctRepeatedRate](Type.md#onparentdistinctrepeatedrate)
- [onParentDistinctUnique](Type.md#onparentdistinctunique)
- [percent10](Type.md#percent10)
- [percent25](Type.md#percent25)
- [percent50](Type.md#percent50)
- [percent75](Type.md#percent75)
- [percent90](Type.md#percent90)
- [primitive](Type.md#primitive)
- [repeatRate](Type.md#repeatrate)
- [repeated](Type.md#repeated)
- [std](Type.md#std)
- [sum](Type.md#sum)
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
- [key](Type.md#key)
- [parse](Type.md#parse)
- [serialize](Type.md#serialize)
- [stringify](Type.md#stringify)
- [to](Type.md#to)
- [type](Type.md#type)
- [validate](Type.md#validate)

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

[domain/type.ts:62](https://github.com/data7expressions/typ3s/blob/6416747/src/lib/domain/type.ts#L62)

## Properties

### async

• `Optional` **async**: `boolean`

#### Defined in

[domain/type.ts:36](https://github.com/data7expressions/typ3s/blob/6416747/src/lib/domain/type.ts#L36)

___

### count

• `Optional` **count**: `number`

#### Defined in

[domain/type.ts:42](https://github.com/data7expressions/typ3s/blob/6416747/src/lib/domain/type.ts#L42)

___

### distinctCount

• `Optional` **distinctCount**: `number`

#### Defined in

[domain/type.ts:43](https://github.com/data7expressions/typ3s/blob/6416747/src/lib/domain/type.ts#L43)

___

### enums

• `Optional` **enums**: \{ `count`: `number` ; `value`: `any`  }[]

#### Defined in

[domain/type.ts:59](https://github.com/data7expressions/typ3s/blob/6416747/src/lib/domain/type.ts#L59)

___

### func

• `Optional` **func**: [`FuncType`](../interfaces/FuncType.md)

#### Defined in

[domain/type.ts:66](https://github.com/data7expressions/typ3s/blob/6416747/src/lib/domain/type.ts#L66)

___

### indefinite

• `Optional` **indefinite**: `number`

#### Defined in

[domain/type.ts:40](https://github.com/data7expressions/typ3s/blob/6416747/src/lib/domain/type.ts#L40)

___

### list

• `Optional` **list**: [`ListType`](../interfaces/ListType.md)

#### Defined in

[domain/type.ts:65](https://github.com/data7expressions/typ3s/blob/6416747/src/lib/domain/type.ts#L65)

___

### max

• `Optional` **max**: `any`

#### Defined in

[domain/type.ts:49](https://github.com/data7expressions/typ3s/blob/6416747/src/lib/domain/type.ts#L49)

___

### maxLen

• `Optional` **maxLen**: `number`

#### Defined in

[domain/type.ts:51](https://github.com/data7expressions/typ3s/blob/6416747/src/lib/domain/type.ts#L51)

___

### mean

• `Optional` **mean**: `any`

#### Defined in

[domain/type.ts:47](https://github.com/data7expressions/typ3s/blob/6416747/src/lib/domain/type.ts#L47)

___

### min

• `Optional` **min**: `any`

#### Defined in

[domain/type.ts:50](https://github.com/data7expressions/typ3s/blob/6416747/src/lib/domain/type.ts#L50)

___

### minLen

• `Optional` **minLen**: `number`

#### Defined in

[domain/type.ts:52](https://github.com/data7expressions/typ3s/blob/6416747/src/lib/domain/type.ts#L52)

___

### nullable

• `Optional` **nullable**: `boolean`

#### Defined in

[domain/type.ts:34](https://github.com/data7expressions/typ3s/blob/6416747/src/lib/domain/type.ts#L34)

___

### nullables

• `Optional` **nullables**: `number`

#### Defined in

[domain/type.ts:41](https://github.com/data7expressions/typ3s/blob/6416747/src/lib/domain/type.ts#L41)

___

### obj

• `Optional` **obj**: [`ObjType`](../interfaces/ObjType.md)

#### Defined in

[domain/type.ts:64](https://github.com/data7expressions/typ3s/blob/6416747/src/lib/domain/type.ts#L64)

___

### onParentDistinctRepeated

• `Optional` **onParentDistinctRepeated**: `number`

#### Defined in

[domain/type.ts:44](https://github.com/data7expressions/typ3s/blob/6416747/src/lib/domain/type.ts#L44)

___

### onParentDistinctRepeatedRate

• `Optional` **onParentDistinctRepeatedRate**: `number`

#### Defined in

[domain/type.ts:45](https://github.com/data7expressions/typ3s/blob/6416747/src/lib/domain/type.ts#L45)

___

### onParentDistinctUnique

• `Optional` **onParentDistinctUnique**: `boolean`

#### Defined in

[domain/type.ts:46](https://github.com/data7expressions/typ3s/blob/6416747/src/lib/domain/type.ts#L46)

___

### percent10

• `Optional` **percent10**: `any`

#### Defined in

[domain/type.ts:54](https://github.com/data7expressions/typ3s/blob/6416747/src/lib/domain/type.ts#L54)

___

### percent25

• `Optional` **percent25**: `any`

#### Defined in

[domain/type.ts:55](https://github.com/data7expressions/typ3s/blob/6416747/src/lib/domain/type.ts#L55)

___

### percent50

• `Optional` **percent50**: `any`

#### Defined in

[domain/type.ts:56](https://github.com/data7expressions/typ3s/blob/6416747/src/lib/domain/type.ts#L56)

___

### percent75

• `Optional` **percent75**: `any`

#### Defined in

[domain/type.ts:57](https://github.com/data7expressions/typ3s/blob/6416747/src/lib/domain/type.ts#L57)

___

### percent90

• `Optional` **percent90**: `any`

#### Defined in

[domain/type.ts:58](https://github.com/data7expressions/typ3s/blob/6416747/src/lib/domain/type.ts#L58)

___

### primitive

• **primitive**: [`Primitive`](../enums/Primitive.md)

#### Defined in

[domain/type.ts:63](https://github.com/data7expressions/typ3s/blob/6416747/src/lib/domain/type.ts#L63)

___

### repeatRate

• `Optional` **repeatRate**: `number`

#### Defined in

[domain/type.ts:39](https://github.com/data7expressions/typ3s/blob/6416747/src/lib/domain/type.ts#L39)

___

### repeated

• `Optional` **repeated**: `number`

#### Defined in

[domain/type.ts:38](https://github.com/data7expressions/typ3s/blob/6416747/src/lib/domain/type.ts#L38)

___

### std

• `Optional` **std**: `number`

#### Defined in

[domain/type.ts:53](https://github.com/data7expressions/typ3s/blob/6416747/src/lib/domain/type.ts#L53)

___

### sum

• `Optional` **sum**: `any`

#### Defined in

[domain/type.ts:48](https://github.com/data7expressions/typ3s/blob/6416747/src/lib/domain/type.ts#L48)

___

### undefinable

• `Optional` **undefinable**: `boolean`

#### Defined in

[domain/type.ts:35](https://github.com/data7expressions/typ3s/blob/6416747/src/lib/domain/type.ts#L35)

___

### unique

• `Optional` **unique**: `boolean`

#### Defined in

[domain/type.ts:37](https://github.com/data7expressions/typ3s/blob/6416747/src/lib/domain/type.ts#L37)

## Accessors

### any

• `get` **any**(): [`Type`](Type.md)

#### Returns

[`Type`](Type.md)

#### Defined in

[domain/type.ts:69](https://github.com/data7expressions/typ3s/blob/6416747/src/lib/domain/type.ts#L69)

___

### boolean

• `get` **boolean**(): [`Type`](Type.md)

#### Returns

[`Type`](Type.md)

#### Defined in

[domain/type.ts:89](https://github.com/data7expressions/typ3s/blob/6416747/src/lib/domain/type.ts#L89)

___

### date

• `get` **date**(): [`Type`](Type.md)

#### Returns

[`Type`](Type.md)

#### Defined in

[domain/type.ts:93](https://github.com/data7expressions/typ3s/blob/6416747/src/lib/domain/type.ts#L93)

___

### dateTime

• `get` **dateTime**(): [`Type`](Type.md)

#### Returns

[`Type`](Type.md)

#### Defined in

[domain/type.ts:97](https://github.com/data7expressions/typ3s/blob/6416747/src/lib/domain/type.ts#L97)

___

### decimal

• `get` **decimal**(): [`Type`](Type.md)

#### Returns

[`Type`](Type.md)

#### Defined in

[domain/type.ts:81](https://github.com/data7expressions/typ3s/blob/6416747/src/lib/domain/type.ts#L81)

___

### integer

• `get` **integer**(): [`Type`](Type.md)

#### Returns

[`Type`](Type.md)

#### Defined in

[domain/type.ts:77](https://github.com/data7expressions/typ3s/blob/6416747/src/lib/domain/type.ts#L77)

___

### number

• `get` **number**(): [`Type`](Type.md)

#### Returns

[`Type`](Type.md)

#### Defined in

[domain/type.ts:85](https://github.com/data7expressions/typ3s/blob/6416747/src/lib/domain/type.ts#L85)

___

### string

• `get` **string**(): [`Type`](Type.md)

#### Returns

[`Type`](Type.md)

#### Defined in

[domain/type.ts:73](https://github.com/data7expressions/typ3s/blob/6416747/src/lib/domain/type.ts#L73)

___

### time

• `get` **time**(): [`Type`](Type.md)

#### Returns

[`Type`](Type.md)

#### Defined in

[domain/type.ts:101](https://github.com/data7expressions/typ3s/blob/6416747/src/lib/domain/type.ts#L101)

___

### void

• `get` **void**(): [`Type`](Type.md)

#### Returns

[`Type`](Type.md)

#### Defined in

[domain/type.ts:105](https://github.com/data7expressions/typ3s/blob/6416747/src/lib/domain/type.ts#L105)

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

[domain/type.ts:118](https://github.com/data7expressions/typ3s/blob/6416747/src/lib/domain/type.ts#L118)

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

[domain/type.ts:114](https://github.com/data7expressions/typ3s/blob/6416747/src/lib/domain/type.ts#L114)

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

[domain/type.ts:110](https://github.com/data7expressions/typ3s/blob/6416747/src/lib/domain/type.ts#L110)

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

[domain/type.ts:241](https://github.com/data7expressions/typ3s/blob/6416747/src/lib/domain/type.ts#L241)

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

[domain/type.ts:142](https://github.com/data7expressions/typ3s/blob/6416747/src/lib/domain/type.ts#L142)

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

[domain/type.ts:190](https://github.com/data7expressions/typ3s/blob/6416747/src/lib/domain/type.ts#L190)

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

[domain/type.ts:170](https://github.com/data7expressions/typ3s/blob/6416747/src/lib/domain/type.ts#L170)

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

[domain/type.ts:177](https://github.com/data7expressions/typ3s/blob/6416747/src/lib/domain/type.ts#L177)

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

[domain/type.ts:122](https://github.com/data7expressions/typ3s/blob/6416747/src/lib/domain/type.ts#L122)

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

[domain/type.ts:772](https://github.com/data7expressions/typ3s/blob/6416747/src/lib/domain/type.ts#L772)

___

### parse

▸ **parse**(`stringified`): [`Type`](Type.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `stringified` | `string` |

#### Returns

[`Type`](Type.md)

#### Defined in

[domain/type.ts:227](https://github.com/data7expressions/typ3s/blob/6416747/src/lib/domain/type.ts#L227)

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

[domain/type.ts:231](https://github.com/data7expressions/typ3s/blob/6416747/src/lib/domain/type.ts#L231)

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

[domain/type.ts:197](https://github.com/data7expressions/typ3s/blob/6416747/src/lib/domain/type.ts#L197)

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

[domain/type.ts:134](https://github.com/data7expressions/typ3s/blob/6416747/src/lib/domain/type.ts#L134)

___

### type

▸ **type**(`value`, `options?`): [`Type`](Type.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `any` |
| `options?` | [`TypeOptions`](../interfaces/TypeOptions.md) |

#### Returns

[`Type`](Type.md)

#### Defined in

[domain/type.ts:258](https://github.com/data7expressions/typ3s/blob/6416747/src/lib/domain/type.ts#L258)

___

### validate

▸ **validate**(`value`, `type`): [`boolean`, `string`]

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `any` |
| `type` | `string` \| [`Type`](Type.md) |

#### Returns

[`boolean`, `string`]

#### Defined in

[domain/type.ts:248](https://github.com/data7expressions/typ3s/blob/6416747/src/lib/domain/type.ts#L248)
