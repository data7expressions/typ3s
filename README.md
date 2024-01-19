# typ3s

json types, type , types

## Primitive

- string
- integer
- decimal
- number
- boolean
- date
- dateTime
- time
- any
- void

## Array / Tuples

[]

## Object

{}

## Function

()

## Modifiers

|Modifier           |description             |
|:------------------|:-----------------------|
| !									| Nullable							 |
| ?									| Undefinable						 |
| ~									| Async									 |

## Examples

|type                           	|description                        												|
|:--------------------------------|:----------------------------------------------------------|
| [string]                      	| array of string                   												|
| [string, integer]             	| tuple with string and integer properties									|
| {name:string, nro:integer}    	| object with string and integer 	properties								|
| [{name:string, today:date}]   	| array of object                         									|
| (>any)                       		| function without params and return value									|
| (list:[integer]>integer)     		| function with array integer as params and return integer	|
| (today:date,nro:?integer>date)	| function with undefinable integer param 									|
| {name:string,nro:?integer}    	| object of properties string and undefinable integer				|
| {name:string,nro:!integer}    	| object of properties string and nullable integer 					|
| ([integer]>~integer) 						| function with return async of integer											|

## Methods

| method        |description                        						|
|:--------------|:----------------------------------------------|
| type       		| get the type   																|
| stringify     | converts the type to a string									|
| parse    			| converts the string to type										|
| serialize    	| serialize type																|
| deserialized	| deserialize type															|
| cardinality	  | complete cardinality information in the type	|

## Example

This example shows how you can obtain the type of an array of objects, convert it to a string, parse it, serialize it, and deserialize it.

```ts
import { Type } from 'typ3s'
const data = [
	{
		name: 'Spain',
		region: { name: 'Europe', code: 'EU', description: 'European Union' },
		languages: ['Spanish', 'Catalan', 'Galician', 'Basque'],
		phoneCode: 34
	},
	{
		name: 'France',
		region: { name: 'Europe', code: 'EU', description: 'European Union' },
		languages: ['French'],
		phoneCode: 33
	},
	{
		name: 'Canada',
		region: { name: 'North America', code: 'NA', description: null },
		languages: ['English', 'French']
	}
]
const type = Type.type(data)
const stringified = Type.stringify(type)
const type2 = Type.parse(stringified)
const serialized = Type.serialize(type2, 2)
const deserialized = Type.deserialize(serialized)
const serialize2 = Type.serialize(deserialized)
console.log(stringified)
console.log(serialized)
console.log(serialize2)
```

**stringified:**

```javascript
[{name:string,region:{name:string,code:string,description:string},languages:[string],phoneCode:integer}]
```

**serialized:**

```json
{
  "primitive": "list",
  "list": {
    "items": {
      "primitive": "obj",
      "obj": {
        "properties": [
          {
            "name": "name",
            "type": {
              "primitive": "string"
            }
          },
          {
            "name": "region",
            "type": {
              "primitive": "obj",
              "obj": {
                "properties": [
                  {
                    "name": "name",
                    "type": {
                      "primitive": "string"
                    }
                  },
                  {
                    "name": "code",
                    "type": {
                      "primitive": "string"
                    }
                  },
                  {
                    "name": "description",
                    "type": {
                      "primitive": "string"
                    }
                  }
                ]
              }
            }
          },
          {
            "name": "languages",
            "type": {
              "primitive": "list",
              "list": {
                "items": {
                  "primitive": "string"
                }
              }
            }
          },
          {
            "name": "phoneCode",
            "type": {
              "primitive": "integer"
            }
          }
        ]
      }
    }
  }
}
```

**serialized2:**

```json
{"primitive":"list","list":{"items":{"primitive":"obj","obj":{"properties":[{"name":"name","type":{"primitive":"string"}},{"name":"region","type":{"primitive":"obj","obj":{"properties":[{"name":"name","type":{"primitive":"string"}},{"name":"code","type":{"primitive":"string"}},{"name":"description","type":{"primitive":"string"}}]}}},{"name":"languages","type":{"primitive":"list","list":{"items":{"primitive":"string"}}}},{"name":"phoneCode","type":{"primitive":"integer"}}]}}}}
```

## Cardinality example

This example shows how you can obtain the cardinality of an array of objects.
By using the cardinality method, you get information about the cardinality that is added to the type.

```ts
import { Type } from '../../lib'
const data = [
	{
		name: 'Spain',
		region: { name: 'Europe', code: 'EU', description: 'European Union' },
		languages: ['Spanish', 'Catalan', 'Galician', 'Basque'],
		phoneCode: 34
	},
	{
		name: 'France',
		region: { name: 'Europe', code: 'EU', description: 'European Union' },
		languages: ['French'],
		phoneCode: 33
	},
	{
		name: 'Canada',
		region: { name: 'North America', code: 'NA', description: null },
		languages: ['English', 'French']
	}
]
const type = Type.type(data)
Type.cardinality(data, type)
const stringified = Type.stringify(type)
const serialized = Type.serialize(type, 1)
console.log(stringified)
console.log(serialized)
```

**stringified:**

```javascript
[{languages:[string],name:string,phoneCode:?integer,region:{code:string,description:!string,name:string}}]
```

**serialized:**

```json
{
 "primitive": "list",
 "list": {
  "items": {
   "primitive": "obj",
   "obj": {
    "properties": [
     {
      "name": "languages",
      "type": {
       "primitive": "list",
       "list": {
        "items": {
         "primitive": "string",
         "indefinite": 0,
         "nullables": 0,
         "repeated": 1,
         "distinctCount": 6,
         "count": 7,
         "repeatRate": 0.047619047619047616,
         "nullable": false,
         "undefinable": false,
         "unique": false
        }
       },
       "indefinite": 0,
       "nullables": 0,
       "repeated": 1,
       "count": 7,
       "repeatRate": 0.047619047619047616,
       "nullable": false,
       "undefinable": false,
       "unique": false,
       "distinctCount": 6
      }
     },
     {
      "name": "name",
      "type": {
       "primitive": "string",
       "onParentDistinctRepeated": 0,
       "distinctCount": 3,
       "onParentDistinctRepeatedRate": 0,
       "onParentDistinctUnique": true,
       "indefinite": 0,
       "nullables": 0,
       "repeated": 0,
       "count": 3,
       "repeatRate": 0,
       "nullable": false,
       "undefinable": false,
       "unique": true
      }
     },
     {
      "name": "phoneCode",
      "type": {
       "primitive": "integer",
       "onParentDistinctRepeated": 0,
       "distinctCount": 3,
       "onParentDistinctRepeatedRate": 0,
       "onParentDistinctUnique": true,
       "indefinite": 1,
       "nullables": 0,
       "repeated": 0,
       "count": 3,
       "repeatRate": 0,
       "nullable": false,
       "undefinable": true,
       "unique": true
      }
     },
     {
      "name": "region",
      "type": {
       "primitive": "obj",
       "obj": {
        "properties": [
         {
          "name": "code",
          "type": {
           "primitive": "string",
           "onParentDistinctRepeated": 0,
           "distinctCount": 2,
           "onParentDistinctRepeatedRate": 0,
           "onParentDistinctUnique": true,
           "indefinite": 0,
           "nullables": 0,
           "repeated": 1,
           "count": 3,
           "repeatRate": 0.3333333333333333,
           "nullable": false,
           "undefinable": false,
           "unique": false
          }
         },
         {
          "name": "description",
          "type": {
           "primitive": "string",
           "onParentDistinctRepeated": 0,
           "distinctCount": 2,
           "onParentDistinctRepeatedRate": 0,
           "onParentDistinctUnique": true,
           "indefinite": 0,
           "nullables": 1,
           "repeated": 1,
           "count": 3,
           "repeatRate": 0.3333333333333333,
           "nullable": true,
           "undefinable": false,
           "unique": false
          }
         },
         {
          "name": "name",
          "type": {
           "primitive": "string",
           "onParentDistinctRepeated": 0,
           "distinctCount": 2,
           "onParentDistinctRepeatedRate": 0,
           "onParentDistinctUnique": true,
           "indefinite": 0,
           "nullables": 0,
           "repeated": 1,
           "count": 3,
           "repeatRate": 0.3333333333333333,
           "nullable": false,
           "undefinable": false,
           "unique": false
          }
         }
        ]
       },
       "indefinite": 0,
       "nullables": 0,
       "repeated": 1,
       "distinctCount": 2,
       "count": 3,
       "repeatRate": 0.3333333333333333,
       "nullable": false,
       "undefinable": false,
       "unique": false
      }
     }
    ]
   },
   "repeated": 0,
   "nullables": 0,
   "indefinite": 0,
   "distinctCount": 3,
   "count": 3,
   "repeatRate": 0,
   "nullable": false,
   "undefinable": false,
   "unique": true
  }
 }
}
```
