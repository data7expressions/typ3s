# typ3s

[![language typescript](https://img.shields.io/badge/language-typescript-blue)](https://www.npmjs.com/package/lambdaorm)
[![npm version](https://img.shields.io/badge/npm-10.2.5-green)](https://www.npmjs.com/package/typ3s)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![semantic-release](https://img.shields.io/badge/%20%20%F0%9F%93%A6%F0%9F%9A%80-semantic--release-e10079.svg)](https://github.com/semantic-release/semantic-release)
[![Github CI](https://img.shields.io/badge/Github-CI-red.svg)](https://github.com/lambda-orm/lambdaorm/actions?query=workflow%3A%22publish%22)

The objective of this library is to obtain the type of an object, array, function, etc. \
Also be able to obtain information about the cardinality of the data.

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
| #									| Unique							   |
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

## Type method

The type method allows us to obtain the type of an object, array, function, etc. \
Identifying primitive types, arrays, objects, functions, etc. \
In the case of Array, it will evaluate the type of the array elements. \
And in the case of Object it will evaluate the type of the object's properties. \

The type method has as its second optional parameter "options" which can receive the following properties:

| property  |description                      |
|:----------|:--------------------------------|
| info      | get the info of the type        |
| describes | get the description of the type |
| enums     | get the enums of the type       |

**In case of setting info:**

```ts
const type = Type.type(data, { info: true })
```

The following information will be added to the type:

| property      |description                        |
|:--------------|:----------------------------------|
| indefinite    | number of undefined values        |
| nullables     | number of null values             |
| repeated      | number of repeated values         |
| distinctCount | number of distinct values         |
| count         | number of total values            |
| repeatRate    | percentage of repeated values     |
| nullable      | if type is null                   |
| undefinable   | if type is undefined              |
| unique        | if the type is unique             |

**In the case of setting, describe:**

```ts
const type = Type.type(data, { describe: true })
```

The following information will be added to the type:

| property  |description              |
|:----------|:------------------------|
| percent10 | repeating value 10%     |
| percent25 | repeating value 25%     |
| percent50 | value that repeats 50%  |
| percent75 | value that repeats 75%  |
| percent90 | value that repeats 90%  |
| max       | maximum value           |
| min       | minimum value           |
| maxLen    | maximum length          |
| minLen    | minimum length          |
| sum       | sum of values           |
| mean      | average                 |
| std       | standard deviation      |

**In the case of setting enums:**

```ts
const type = Type.type(data, { enums: true })
```

**The following information will be added to the type:**

| property  |description      |
|:----------|:----------------|
| enums     | enum values     |

## stringify method

The stringify method allows us to convert the type to a string.

```ts
const type = Type.type(data)
const stringified = Type.stringify(type)
```

## Parse method

The parse method allows us to convert a string to a type.

```ts
const type = Type.type(data)
const stringified = Type.stringify(type)
const type2 = Type.parse(stringified)
```

## Serialize method

The serialize method allows us to serialize a type.

```ts
const type = Type.type(data)
const serialized = Type.serialize(type)
```

## Deserialize method

The deserialize method allows us to deserialize a type.

```ts
const type = Type.type(data)
const serialized = Type.serialize(type)
const deserialized = Type.deserialize(serialized)
```

## Example

This example shows how you can obtain the type of an array of objects, convert it to a string, parse it, serialize it, and deserialize it.

```ts
import { Type } from 'typ3s'
const data = [
	{
		name: 'Spain',
		region: { name: 'Europe', code: 'EU', description: 'European Union' },
		languages: ['Spanish', 'Catalan', 'Galician', 'Basque'],
		phoneCode: 34,
		religion: 'Roman Catholicism'
	},
	{
		name: 'United Kingdom',
		region: { name: 'Europe', code: 'EU', description: 'European Union' },
		languages: ['English'],
		phoneCode: 44,
		religion: 'Christianity'
	},
	{
		name: 'Italy',
		region: { name: 'Europe', code: 'EU', description: 'European Union' },
		languages: ['Italian'],
		phoneCode: 39,
		religion: 'Roman Catholicism'
	},
	{
		name: 'France',
		region: { name: 'Europe', code: 'EU', description: 'European Union' },
		languages: ['French'],
		phoneCode: 33,
		religion: 'Roman Catholicism'
	},
	{
		name: 'Argentina',
		region: { name: 'South America', code: 'SA', description: 'South America' },
		languages: ['Spanish'],
		phoneCode: 54,
		religion: 'Roman Catholicism'
	},
	{
		name: 'Germany',
		region: { name: 'Europe', code: 'EU', description: 'European Union' },
		languages: ['German'],
		phoneCode: 49,
		religion: 'Christianity'
	},
	{
		name: 'Portugal',
		region: { name: 'Europe', code: 'EU', description: 'European Union' },
		languages: ['Portuguese'],
		phoneCode: 351,
		religion: 'Roman Catholicism'
	},
	{
		name: 'United States',
		region: { name: 'North America', code: 'NA', description: 'North America' },
		languages: ['English'],
		phoneCode: 1,
		religion: 'Christianity'
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

**stringify result:**

```javascript
[{name:string,region:{name:string,code:string,description:string},languages:[string],phoneCode:integer,religion:string}]
```

**serialized result:**

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
          },
          {
            "name": "religion",
            "type": {
              "primitive": "string"
            }
          }
        ]
      }
    }
  }
}
```

**serialized result 2:**

```json
{"primitive":"list","list":{"items":{"primitive":"obj","obj":{"properties":[{"name":"name","type":{"primitive":"string"}},{"name":"region","type":{"primitive":"obj","obj":{"properties":[{"name":"name","type":{"primitive":"string"}},{"name":"code","type":{"primitive":"string"}},{"name":"description","type":{"primitive":"string"}}]}}},{"name":"languages","type":{"primitive":"list","list":{"items":{"primitive":"string"}}}},{"name":"phoneCode","type":{"primitive":"integer"}},{"name":"religion","type":{"primitive":"string"}}]}}}}
```

## Info example

This example shows how you can obtain the info of an array of objects. \
To use the info method it is necessary to pass the info: true parameter in the type method.

```ts
import { Type } from 'typ3s'
const data = [
	{
		name: 'Spain',
		region: { name: 'Europe', code: 'EU', description: 'European Union' },
		languages: ['Spanish', 'Catalan', 'Galician', 'Basque'],
		phoneCode: 34,
		religion: 'Roman Catholicism'
	},
	{
		name: 'United Kingdom',
		region: { name: 'Europe', code: 'EU', description: 'European Union' },
		languages: ['English'],
		phoneCode: 44,
		religion: 'Christianity'
	},
	{
		name: 'Italy',
		region: { name: 'Europe', code: 'EU', description: 'European Union' },
		languages: ['Italian'],
		phoneCode: 39,
		religion: 'Roman Catholicism'
	},
	{
		name: 'France',
		region: { name: 'Europe', code: 'EU', description: 'European Union' },
		languages: ['French'],
		phoneCode: 33,
		religion: 'Roman Catholicism'
	},
	{
		name: 'Argentina',
		region: { name: 'South America', code: 'SA', description: 'South America' },
		languages: ['Spanish'],
		phoneCode: 54,
		religion: 'Roman Catholicism'
	},
	{
		name: 'Germany',
		region: { name: 'Europe', code: 'EU', description: 'European Union' },
		languages: ['German'],
		phoneCode: 49,
		religion: 'Christianity'
	},
	{
		name: 'Portugal',
		region: { name: 'Europe', code: 'EU', description: 'European Union' },
		languages: ['Portuguese'],
		phoneCode: 351,
		religion: 'Roman Catholicism'
	},
	{
		name: 'United States',
		region: { name: 'North America', code: 'NA', description: 'North America' },
		languages: ['English'],
		phoneCode: 1,
		religion: 'Christianity'
	}
]
const type = Type.type(data, { info: true })
const stringified = Type.stringify(type)
const serialized = Type.serialize(type, 1)
console.log(stringified)
console.log(serialized)
```

**stringified:**

```javascript
[#{languages:[string],name:#string,phoneCode:#integer,region:{code:string,description:string,name:string},religion:string}]
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
         "repeated": 2,
         "distinctCount": 9,
         "count": 11,
         "repeatRate": 0.03636363636363636,
         "nullable": false,
         "undefinable": false,
         "unique": false
        }
       },
       "indefinite": 0,
       "nullables": 0,
       "repeated": 2,
       "count": 11,
       "repeatRate": 0.03636363636363636,
       "nullable": false,
       "undefinable": false,
       "unique": false,
       "distinctCount": 9
      }
     },
     {
      "name": "name",
      "type": {
       "primitive": "string",
       "onParentDistinctRepeated": 0,
       "distinctCount": 8,
       "onParentDistinctRepeatedRate": 0,
       "onParentDistinctUnique": true,
       "indefinite": 0,
       "nullables": 0,
       "repeated": 0,
       "count": 8,
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
       "distinctCount": 8,
       "onParentDistinctRepeatedRate": 0,
       "onParentDistinctUnique": true,
       "indefinite": 0,
       "nullables": 0,
       "repeated": 0,
       "count": 8,
       "repeatRate": 0,
       "nullable": false,
       "undefinable": false,
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
           "distinctCount": 3,
           "onParentDistinctRepeatedRate": 0,
           "onParentDistinctUnique": true,
           "indefinite": 0,
           "nullables": 0,
           "repeated": 15,
           "count": 8,
           "repeatRate": 0.5357142857142857,
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
           "distinctCount": 3,
           "onParentDistinctRepeatedRate": 0,
           "onParentDistinctUnique": true,
           "indefinite": 0,
           "nullables": 0,
           "repeated": 15,
           "count": 8,
           "repeatRate": 0.5357142857142857,
           "nullable": false,
           "undefinable": false,
           "unique": false
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
           "repeated": 15,
           "count": 8,
           "repeatRate": 0.5357142857142857,
           "nullable": false,
           "undefinable": false,
           "unique": false
          }
         }
        ]
       },
       "indefinite": 0,
       "nullables": 0,
       "repeated": 15,
       "distinctCount": 3,
       "count": 8,
       "repeatRate": 0.5357142857142857,
       "nullable": false,
       "undefinable": false,
       "unique": false
      }
     },
     {
      "name": "religion",
      "type": {
       "primitive": "string",
       "onParentDistinctRepeated": 13,
       "distinctCount": 2,
       "onParentDistinctRepeatedRate": 0.4642857142857143,
       "onParentDistinctUnique": false,
       "indefinite": 0,
       "nullables": 0,
       "repeated": 13,
       "count": 8,
       "repeatRate": 0.4642857142857143,
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
   "distinctCount": 8,
   "count": 8,
   "repeatRate": 0,
   "nullable": false,
   "undefinable": false,
   "unique": true
  }
 }
}
```

## Describe example

This example shows how you can obtain the description of an array of objects. \
To use the describe method it is necessary to pass the describe: true parameter in the type method.

```ts
import { Type } from 'typ3s'
const data = [
	{
		name: 'Spain',
		region: { name: 'Europe', code: 'EU', description: 'European Union' },
		languages: ['Spanish', 'Catalan', 'Galician', 'Basque'],
		phoneCode: 34,
		religion: 'Roman Catholicism'
	},
	{
		name: 'United Kingdom',
		region: { name: 'Europe', code: 'EU', description: 'European Union' },
		languages: ['English'],
		phoneCode: 44,
		religion: 'Christianity'
	},
	{
		name: 'Italy',
		region: { name: 'Europe', code: 'EU', description: 'European Union' },
		languages: ['Italian'],
		phoneCode: 39,
		religion: 'Roman Catholicism'
	},
	{
		name: 'France',
		region: { name: 'Europe', code: 'EU', description: 'European Union' },
		languages: ['French'],
		phoneCode: 33,
		religion: 'Roman Catholicism'
	},
	{
		name: 'Argentina',
		region: { name: 'South America', code: 'SA', description: 'South America' },
		languages: ['Spanish'],
		phoneCode: 54,
		religion: 'Roman Catholicism'
	},
	{
		name: 'Germany',
		region: { name: 'Europe', code: 'EU', description: 'European Union' },
		languages: ['German'],
		phoneCode: 49,
		religion: 'Christianity'
	},
	{
		name: 'Portugal',
		region: { name: 'Europe', code: 'EU', description: 'European Union' },
		languages: ['Portuguese'],
		phoneCode: 351,
		religion: 'Roman Catholicism'
	},
	{
		name: 'United States',
		region: { name: 'North America', code: 'NA', description: 'North America' },
		languages: ['English'],
		phoneCode: 1,
		religion: 'Christianity'
	}
]
const type = Type.type(data, { describe: true })
const serialized = Type.serialize(type, 1)
console.log(serialized)
```

**Result:**

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
         "repeated": 2,
         "distinctCount": 9,
         "count": 11,
         "repeatRate": 0.03636363636363636,
         "nullable": false,
         "undefinable": false,
         "unique": false,
         "percent10": "Catalan",
         "percent25": "Galician",
         "percent50": "Italian",
         "percent75": "German",
         "percent90": "Portuguese",
         "max": "Spanish",
         "min": "Basque",
         "maxLen": 10,
         "minLen": 6
        }
       },
       "indefinite": 0,
       "nullables": 0,
       "repeated": 2,
       "count": 11,
       "repeatRate": 0.03636363636363636,
       "nullable": false,
       "undefinable": false,
       "unique": false,
       "distinctCount": 9
      }
     },
     {
      "name": "name",
      "type": {
       "primitive": "string",
       "onParentDistinctRepeated": 0,
       "distinctCount": 8,
       "onParentDistinctRepeatedRate": 0,
       "onParentDistinctUnique": true,
       "indefinite": 0,
       "nullables": 0,
       "repeated": 0,
       "count": 8,
       "repeatRate": 0,
       "nullable": false,
       "undefinable": false,
       "unique": true,
       "percent10": "Spain",
       "percent25": "Italy",
       "percent50": "Argentina",
       "percent75": "Portugal",
       "percent90": "United States",
       "max": "United States",
       "min": "Argentina",
       "maxLen": 14,
       "minLen": 5
      }
     },
     {
      "name": "phoneCode",
      "type": {
       "primitive": "integer",
       "onParentDistinctRepeated": 0,
       "distinctCount": 8,
       "onParentDistinctRepeatedRate": 0,
       "onParentDistinctUnique": true,
       "indefinite": 0,
       "nullables": 0,
       "repeated": 0,
       "count": 8,
       "repeatRate": 0,
       "nullable": false,
       "undefinable": false,
       "unique": true,
       "percent10": 1,
       "percent25": 34,
       "percent50": 44,
       "percent75": 54,
       "percent90": 351,
       "sum": 605,
       "max": 351,
       "min": 1,
       "mean": 75.625,
       "std": 105.15932852105894
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
           "distinctCount": 3,
           "onParentDistinctRepeatedRate": 0,
           "onParentDistinctUnique": true,
           "indefinite": 0,
           "nullables": 0,
           "repeated": 15,
           "count": 8,
           "repeatRate": 0.5357142857142857,
           "nullable": false,
           "undefinable": false,
           "unique": false,
           "percent10": "EU",
           "percent25": "EU",
           "percent50": "SA",
           "percent75": "EU",
           "percent90": "NA",
           "max": "SA",
           "min": "EU",
           "maxLen": 2,
           "minLen": 2
          }
         },
         {
          "name": "description",
          "type": {
           "primitive": "string",
           "onParentDistinctRepeated": 0,
           "distinctCount": 3,
           "onParentDistinctRepeatedRate": 0,
           "onParentDistinctUnique": true,
           "indefinite": 0,
           "nullables": 0,
           "repeated": 15,
           "count": 8,
           "repeatRate": 0.5357142857142857,
           "nullable": false,
           "undefinable": false,
           "unique": false,
           "percent10": "European Union",
           "percent25": "European Union",
           "percent50": "South America",
           "percent75": "European Union",
           "percent90": "North America",
           "max": "South America",
           "min": "European Union",
           "maxLen": 14,
           "minLen": 13
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
           "repeated": 15,
           "count": 8,
           "repeatRate": 0.5357142857142857,
           "nullable": false,
           "undefinable": false,
           "unique": false,
           "percent10": "Europe",
           "percent25": "Europe",
           "percent50": "South America",
           "percent75": "Europe",
           "percent90": "North America",
           "max": "South America",
           "min": "Europe",
           "maxLen": 13,
           "minLen": 6
          }
         }
        ]
       },
       "indefinite": 0,
       "nullables": 0,
       "repeated": 15,
       "distinctCount": 3,
       "count": 8,
       "repeatRate": 0.5357142857142857,
       "nullable": false,
       "undefinable": false,
       "unique": false
      }
     },
     {
      "name": "religion",
      "type": {
       "primitive": "string",
       "onParentDistinctRepeated": 13,
       "distinctCount": 2,
       "onParentDistinctRepeatedRate": 0.4642857142857143,
       "onParentDistinctUnique": false,
       "indefinite": 0,
       "nullables": 0,
       "repeated": 13,
       "count": 8,
       "repeatRate": 0.4642857142857143,
       "nullable": false,
       "undefinable": false,
       "unique": false,
       "percent10": "Roman Catholicism",
       "percent25": "Roman Catholicism",
       "percent50": "Roman Catholicism",
       "percent75": "Roman Catholicism",
       "percent90": "Christianity",
       "max": "Roman Catholicism",
       "min": "Christianity",
       "maxLen": 17,
       "minLen": 12
      }
     }
    ]
   },
   "repeated": 0,
   "nullables": 0,
   "indefinite": 0,
   "distinctCount": 8,
   "count": 8,
   "repeatRate": 0,
   "nullable": false,
   "undefinable": false,
   "unique": true
  }
 }
}
```

## Enums example

This example shows how you can obtain the enums of an array of objects. \
To use the enums method it is necessary to pass the enums: true parameter in the type method.

```ts
import { Type } from 'typ3s'
const data = [
	{
		name: 'Spain',
		region: { name: 'Europe', code: 'EU', description: 'European Union' },
		languages: ['Spanish', 'Catalan', 'Galician', 'Basque'],
		phoneCode: 34,
		religion: 'Roman Catholicism'
	},
	{
		name: 'United Kingdom',
		region: { name: 'Europe', code: 'EU', description: 'European Union' },
		languages: ['English'],
		phoneCode: 44,
		religion: 'Christianity'
	},
	{
		name: 'Italy',
		region: { name: 'Europe', code: 'EU', description: 'European Union' },
		languages: ['Italian'],
		phoneCode: 39,
		religion: 'Roman Catholicism'
	},
	{
		name: 'France',
		region: { name: 'Europe', code: 'EU', description: 'European Union' },
		languages: ['French'],
		phoneCode: 33,
		religion: 'Roman Catholicism'
	},
	{
		name: 'Argentina',
		region: { name: 'South America', code: 'SA', description: 'South America' },
		languages: ['Spanish'],
		phoneCode: 54,
		religion: 'Roman Catholicism'
	},
	{
		name: 'Germany',
		region: { name: 'Europe', code: 'EU', description: 'European Union' },
		languages: ['German'],
		phoneCode: 49,
		religion: 'Christianity'
	},
	{
		name: 'Portugal',
		region: { name: 'Europe', code: 'EU', description: 'European Union' },
		languages: ['Portuguese'],
		phoneCode: 351,
		religion: 'Roman Catholicism'
	},
	{
		name: 'United States',
		region: { name: 'North America', code: 'NA', description: 'North America' },
		languages: ['English'],
		phoneCode: 1,
		religion: 'Christianity'
	}
]
const type = Type.type(data, { enums: true })
const serialized = Type.serialize(type, 1)
console.log(serialized)
```

**Enum Result:**

In the event that it detects a field that is repeated and there are few options, it is considered an enum. \
In this case, detect that the religion field is repeated and there are only two options, so it is considered an enum. \
Giving information on the values and the number of times it is repeated.

```json
...
{
  "name": "religion",
  "type": {
    "primitive": "string",
    "onParentDistinctRepeated": 13,
    "distinctCount": 2,
    "onParentDistinctRepeatedRate": 0.4642857142857143,
    "onParentDistinctUnique": false,
    "indefinite": 0,
    "nullables": 0,
    "repeated": 13,
    "count": 8,
    "repeatRate": 0.4642857142857143,
    "nullable": false,
    "undefinable": false,
    "unique": false,
    "enums": [
    {
      "value": "Roman Catholicism",
      "count": 5
    },
    {
      "value": "Christianity",
      "count": 3
    }
    ]
  }
}
...
```

**Complete Result:**

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
         "repeated": 2,
         "distinctCount": 9,
         "count": 11,
         "repeatRate": 0.03636363636363636,
         "nullable": false,
         "undefinable": false,
         "unique": false
        }
       },
       "indefinite": 0,
       "nullables": 0,
       "repeated": 2,
       "count": 11,
       "repeatRate": 0.03636363636363636,
       "nullable": false,
       "undefinable": false,
       "unique": false,
       "distinctCount": 9
      }
     },
     {
      "name": "name",
      "type": {
       "primitive": "string",
       "onParentDistinctRepeated": 0,
       "distinctCount": 8,
       "onParentDistinctRepeatedRate": 0,
       "onParentDistinctUnique": true,
       "indefinite": 0,
       "nullables": 0,
       "repeated": 0,
       "count": 8,
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
       "distinctCount": 8,
       "onParentDistinctRepeatedRate": 0,
       "onParentDistinctUnique": true,
       "indefinite": 0,
       "nullables": 0,
       "repeated": 0,
       "count": 8,
       "repeatRate": 0,
       "nullable": false,
       "undefinable": false,
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
           "distinctCount": 3,
           "onParentDistinctRepeatedRate": 0,
           "onParentDistinctUnique": true,
           "indefinite": 0,
           "nullables": 0,
           "repeated": 15,
           "count": 8,
           "repeatRate": 0.5357142857142857,
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
           "distinctCount": 3,
           "onParentDistinctRepeatedRate": 0,
           "onParentDistinctUnique": true,
           "indefinite": 0,
           "nullables": 0,
           "repeated": 15,
           "count": 8,
           "repeatRate": 0.5357142857142857,
           "nullable": false,
           "undefinable": false,
           "unique": false
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
           "repeated": 15,
           "count": 8,
           "repeatRate": 0.5357142857142857,
           "nullable": false,
           "undefinable": false,
           "unique": false
          }
         }
        ]
       },
       "indefinite": 0,
       "nullables": 0,
       "repeated": 15,
       "distinctCount": 3,
       "count": 8,
       "repeatRate": 0.5357142857142857,
       "nullable": false,
       "undefinable": false,
       "unique": false
      }
     },
     {
      "name": "religion",
      "type": {
       "primitive": "string",
       "onParentDistinctRepeated": 13,
       "distinctCount": 2,
       "onParentDistinctRepeatedRate": 0.4642857142857143,
       "onParentDistinctUnique": false,
       "indefinite": 0,
       "nullables": 0,
       "repeated": 13,
       "count": 8,
       "repeatRate": 0.4642857142857143,
       "nullable": false,
       "undefinable": false,
       "unique": false,
       "enums": [
        {
         "value": "Roman Catholicism",
         "count": 5
        },
        {
         "value": "Christianity",
         "count": 3
        }
       ]
      }
     }
    ]
   },
   "repeated": 0,
   "nullables": 0,
   "indefinite": 0,
   "distinctCount": 8,
   "count": 8,
   "repeatRate": 0,
   "nullable": false,
   "undefinable": false,
   "unique": true
  }
 }
}
```

## Source documentation

- Source documentation is available in [Source Code Documentation](https://github.com/expr-solver/typ3s/tree/main/doc/source)

## Related projects

- [json-light](https://www.npmjs.com/package/json-light)
- [3xpr](https://www.npmjs.com/package/3xpr)
- [jexp](https://www.npmjs.com/package/jexp)
