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

|type                           |description                        												|
|:------------------------------|:----------------------------------------------------------|
| [string]                      | array of string                   												|
| [string, integer]             | tuple with string and integer properties									|
| {name:string, nro:integer}    | object with string and integer 	properties								|
| [{name:string, today:date}]   | array of object                         									|
| (>any)                       	| function without params and return value									|
| (list:[integer]>integer)     	| function with array integer as params and return integer	|
| (today:date,nro:?integer>date)| function with undefinable integer param 									|
| {name:string,nro:?integer}    | object of properties string and undefinable integer				|
| {name:string,nro:!integer}    | object of properties string and nullable integer 					|
| ([integer]>~integer) 					| function with return async of integer											|

## Methods

| method        |description                        																				|
|:--------------|:--------------------------------------------------------------------------|
| solve       	|   |
| stringify     | 	|
| parse    			| 	|
| serialize    	| 	|
| deserialized	| 	|
