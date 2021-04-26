[functional-programming-library](README.md) / Exports

# functional-programming-library

## Table of contents

### Functions

- [all](modules.md#all)
- [any](modules.md#any)
- [dedupe](modules.md#dedupe)
- [drop](modules.md#drop)
- [dropWhile](modules.md#dropwhile)
- [enumerate](modules.md#enumerate)
- [filter](modules.md#filter)
- [find](modules.md#find)
- [findIndex](modules.md#findindex)
- [into](modules.md#into)
- [is\_none](modules.md#is_none)
- [is\_some](modules.md#is_some)
- [iterate](modules.md#iterate)
- [map](modules.md#map)
- [none](modules.md#none)
- [range](modules.md#range)
- [repeat](modules.md#repeat)
- [some](modules.md#some)
- [take](modules.md#take)
- [takeWhile](modules.md#takewhile)
- [zip2](modules.md#zip2)

## Functions

### all

▸ **all**<T\>(`pred`: (`arg0`: T) => *boolean*): *function*

Exhausts the iterable and returns true if all elements satisfy the predicate function.

#### Type parameters:

| Name |
| :------ |
| `T` |

#### Parameters:

| Name | Type |
| :------ | :------ |
| `pred` | (`arg0`: T) => *boolean* |

**Returns:** (`arg0`: *Iterable*<T\>) => *boolean*

A function that takes an iterable of type T.  This function exhausts the iterable and returns true if all elements satisfy the predicate.

Defined in: [core/all.ts:6](https://github.com/baileympearson/iterable-ts/blob/a8942be8/src/core/all.ts#L6)

▸ **all**<T\>(`pred`: (`arg0`: T) => *boolean*, `iter`: *Iterable*<T\>): *boolean*

Exhausts the iterable and returns true if all elements satisfy the predicate function.

#### Type parameters:

| Name |
| :------ |
| `T` |

#### Parameters:

| Name | Type |
| :------ | :------ |
| `pred` | (`arg0`: T) => *boolean* |
| `iter` | *Iterable*<T\> |

**Returns:** *boolean*

true if all the elements satisfy the predicate, false otherwise

Defined in: [core/all.ts:13](https://github.com/baileympearson/iterable-ts/blob/a8942be8/src/core/all.ts#L13)

___

### any

▸ **any**<T\>(`pred`: (`arg0`: T) => *boolean*): *function*

Exhausts the iterable and returns true if any elements satisfy the predicate function.

#### Type parameters:

| Name |
| :------ |
| `T` |

#### Parameters:

| Name | Type |
| :------ | :------ |
| `pred` | (`arg0`: T) => *boolean* |

**Returns:** (`arg0`: *Iterable*<T\>) => *boolean*

A function that takes an iterable of type T.  This function exhausts the iterable and returns true if any elements satisfy the predicate.

Defined in: [core/any.ts:9](https://github.com/baileympearson/iterable-ts/blob/a8942be8/src/core/any.ts#L9)

▸ **any**<T\>(`pred`: (`arg0`: T) => *boolean*, `iter`: *Iterable*<T\>): *boolean*

Exhausts the iterable and returns true if any elements satisfy the predicate function.

#### Type parameters:

| Name |
| :------ |
| `T` |

#### Parameters:

| Name | Type |
| :------ | :------ |
| `pred` | (`arg0`: T) => *boolean* |
| `iter` | *Iterable*<T\> |

**Returns:** *boolean*

true if any element satisfy the predicate, false otherwise

Defined in: [core/any.ts:16](https://github.com/baileympearson/iterable-ts/blob/a8942be8/src/core/any.ts#L16)

___

### dedupe

▸ **dedupe**<T\>(): *function*

dedupe

A curried verison of the dedupe operator.  This overload takes no parameters
and returns an operator that can be used to filter out any duplicate values in
an iterable.

#### Type parameters:

| Name |
| :------ |
| `T` |

**Returns:** (`arg0`: *Iterable*<T\>) => *Generator*<T\>

An iterable that contains only the first of each distinct value.

Defined in: [core/dedupe.ts:20](https://github.com/baileympearson/iterable-ts/blob/a8942be8/src/core/dedupe.ts#L20)

▸ **dedupe**<T\>(`iter`: *Iterable*<T\>): *Generator*<T\>

dedupe

#### Type parameters:

| Name |
| :------ |
| `T` |

#### Parameters:

| Name | Type |
| :------ | :------ |
| `iter` | *Iterable*<T\> |

**Returns:** *Generator*<T\>

An iterable that contains only the first of each distinct value.

Defined in: [core/dedupe.ts:27](https://github.com/baileympearson/iterable-ts/blob/a8942be8/src/core/dedupe.ts#L27)

___

### drop

▸ **drop**<T\>(`n`: *number*): *function*

drop(n)

Removes the first n elements from the iterable

#### Type parameters:

| Name |
| :------ |
| `T` |

#### Parameters:

| Name | Type |
| :------ | :------ |
| `n` | *number* |

**Returns:** (`arg0`: *Iterable*<T\>) => *Generator*<T\>

A function that takes an iterable as a parameter.  This function removes the first n elements from an interable

Defined in: [core/drop.ts:10](https://github.com/baileympearson/iterable-ts/blob/a8942be8/src/core/drop.ts#L10)

▸ **drop**<T\>(`n`: *number*, `iter`: *Iterable*<T\>): *Generator*<T\>

Removes the first n elements from the iterable

#### Type parameters:

| Name |
| :------ |
| `T` |

#### Parameters:

| Name | Type |
| :------ | :------ |
| `n` | *number* |
| `iter` | *Iterable*<T\> |

**Returns:** *Generator*<T\>

The first n elements from the iterable

Defined in: [core/drop.ts:17](https://github.com/baileympearson/iterable-ts/blob/a8942be8/src/core/drop.ts#L17)

___

### dropWhile

▸ **dropWhile**<T\>(`pred`: (`arg0`: T) => *boolean*): *function*

dropWhile

Removes elements from the iterable while the predicate returns true.

#### Type parameters:

| Name |
| :------ |
| `T` |

#### Parameters:

| Name | Type |
| :------ | :------ |
| `pred` | (`arg0`: T) => *boolean* |

**Returns:** (`arg0`: *Iterable*<T\>) => *Iterable*<T\>

A function that will consume an iterable until the predicate function returns false, then yields the rest of the iterable.

Defined in: [core/dropWhile.ts:8](https://github.com/baileympearson/iterable-ts/blob/a8942be8/src/core/dropWhile.ts#L8)

▸ **dropWhile**<T\>(`pred`: (`arg0`: T) => *boolean*, `iter`: *Iterable*<T\>): *Iterable*<T\>

dropWhile

Removes elements from the iterable while the predicate returns true.

#### Type parameters:

| Name |
| :------ |
| `T` |

#### Parameters:

| Name | Type |
| :------ | :------ |
| `pred` | (`arg0`: T) => *boolean* |
| `iter` | *Iterable*<T\> |

**Returns:** *Iterable*<T\>

All elements in the source iterable after the predicate initially returns false.

Defined in: [core/dropWhile.ts:17](https://github.com/baileympearson/iterable-ts/blob/a8942be8/src/core/dropWhile.ts#L17)

___

### enumerate

▸ **enumerate**<T\>(`iter`: *Iterable*<T\>): *Iterable*<[*number*, T]\>

enumerate

Converts a regular iterable into an indexed iterable.

#### Type parameters:

| Name |
| :------ |
| `T` |

#### Parameters:

| Name | Type |
| :------ | :------ |
| `iter` | *Iterable*<T\> |

**Returns:** *Iterable*<[*number*, T]\>

Pairs, where the first value in the pair is index and the second is the value

Defined in: [core/enumerate.ts:11](https://github.com/baileympearson/iterable-ts/blob/a8942be8/src/core/enumerate.ts#L11)

___

### filter

▸ **filter**<T\>(`pred`: (`arg0`: T) => *boolean*): *function*

filter

Exhausts an interable and yields only values that satisfy the prediate function.
Operates the same as the built-in `Array.filter` function.

#### Type parameters:

| Name |
| :------ |
| `T` |

#### Parameters:

| Name | Type |
| :------ | :------ |
| `pred` | (`arg0`: T) => *boolean* |

**Returns:** (`arg0`: *Iterable*<T\>) => *Iterable*<T\>

A function that takes an iterable and filters it with the `pred` function.

Defined in: [core/filter.ts:9](https://github.com/baileympearson/iterable-ts/blob/a8942be8/src/core/filter.ts#L9)

▸ **filter**<T\>(`pred`: (`arg0`: T) => *boolean*, `iter`: *Iterable*<T\>): *Iterable*<T\>

filter

Exhausts an interable and yields only values that satisfy the prediate function.
Operates the same as the built-in `Array.filter` function.

#### Type parameters:

| Name |
| :------ |
| `T` |

#### Parameters:

| Name | Type |
| :------ | :------ |
| `pred` | (`arg0`: T) => *boolean* |
| `iter` | *Iterable*<T\> |

**Returns:** *Iterable*<T\>

An iterable of the values in `iter` that satisfy `pred`.

Defined in: [core/filter.ts:19](https://github.com/baileympearson/iterable-ts/blob/a8942be8/src/core/filter.ts#L19)

___

### find

▸ **find**<T\>(`pred`: (`arg0`: T) => *boolean*): *function*

#### Type parameters:

| Name |
| :------ |
| `T` |

#### Parameters:

| Name | Type |
| :------ | :------ |
| `pred` | (`arg0`: T) => *boolean* |

**Returns:** (`arg0`: *Iterable*<T\>) => *Optional*<T\>

Defined in: [core/find.ts:3](https://github.com/baileympearson/iterable-ts/blob/a8942be8/src/core/find.ts#L3)

▸ **find**<T\>(`pred`: (`arg0`: T) => *boolean*, `iter`: *Iterable*<T\>): *Optional*<T\>

#### Type parameters:

| Name |
| :------ |
| `T` |

#### Parameters:

| Name | Type |
| :------ | :------ |
| `pred` | (`arg0`: T) => *boolean* |
| `iter` | *Iterable*<T\> |

**Returns:** *Optional*<T\>

Defined in: [core/find.ts:4](https://github.com/baileympearson/iterable-ts/blob/a8942be8/src/core/find.ts#L4)

___

### findIndex

▸ **findIndex**<T\>(`pred`: (`arg0`: T) => *boolean*): *function*

#### Type parameters:

| Name |
| :------ |
| `T` |

#### Parameters:

| Name | Type |
| :------ | :------ |
| `pred` | (`arg0`: T) => *boolean* |

**Returns:** (`arg0`: *Iterable*<T\>) => *Optional*<number\>

Defined in: [core/findIndex.ts:4](https://github.com/baileympearson/iterable-ts/blob/a8942be8/src/core/findIndex.ts#L4)

▸ **findIndex**<T\>(`pred`: (`arg0`: T) => *boolean*, `iter`: *Iterable*<T\>): *Optional*<number\>

#### Type parameters:

| Name |
| :------ |
| `T` |

#### Parameters:

| Name | Type |
| :------ | :------ |
| `pred` | (`arg0`: T) => *boolean* |
| `iter` | *Iterable*<T\> |

**Returns:** *Optional*<number\>

Defined in: [core/findIndex.ts:5](https://github.com/baileympearson/iterable-ts/blob/a8942be8/src/core/findIndex.ts#L5)

___

### into

▸ **into**<T\>(`structure`: ``"array"``): *function*

into('array')

Exhausts the source iterable and returns all values from the interable in an array.

#### Type parameters:

| Name |
| :------ |
| `T` |

#### Parameters:

| Name | Type |
| :------ | :------ |
| `structure` | ``"array"`` |

**Returns:** (`arg0`: *Iterable*<T\>) => T[]

A function that can be used to convert from the source iterable to an array

Defined in: [utility/into.ts:8](https://github.com/baileympearson/iterable-ts/blob/a8942be8/src/utility/into.ts#L8)

▸ **into**<T\>(`structure`: ``"array"``, `iter`: *Iterable*<T\>): T[]

into('array', iter)

Exhausts the source iterable and returns all values from the interable in an array.

#### Type parameters:

| Name |
| :------ |
| `T` |

#### Parameters:

| Name | Type |
| :------ | :------ |
| `structure` | ``"array"`` |
| `iter` | *Iterable*<T\> |

**Returns:** T[]

An array of all elements in the source iterable.

Defined in: [utility/into.ts:17](https://github.com/baileympearson/iterable-ts/blob/a8942be8/src/utility/into.ts#L17)

▸ **into**<T\>(`structure`: ``"set"``): *function*

into('set')

Exhausts the source iterable and returns all values from the interable in an set.

#### Type parameters:

| Name |
| :------ |
| `T` |

#### Parameters:

| Name | Type |
| :------ | :------ |
| `structure` | ``"set"`` |

**Returns:** (`arg0`: *Iterable*<T\>) => *Set*<T\>

A function that can be used to convert from the source iterable to set.

Defined in: [utility/into.ts:26](https://github.com/baileympearson/iterable-ts/blob/a8942be8/src/utility/into.ts#L26)

▸ **into**<T\>(`structure`: ``"set"``, `iter`: *Iterable*<T\>): *Set*<T\>

into('set', iter)

Exhausts the source iterable and returns all values from the interable in a set.

#### Type parameters:

| Name |
| :------ |
| `T` |

#### Parameters:

| Name | Type |
| :------ | :------ |
| `structure` | ``"set"`` |
| `iter` | *Iterable*<T\> |

**Returns:** *Set*<T\>

A set of all elements in the source iterable.

Defined in: [utility/into.ts:35](https://github.com/baileympearson/iterable-ts/blob/a8942be8/src/utility/into.ts#L35)

___

### is\_none

▸ **is_none**<T\>(`opt`: *Optional*<T\>): opt is None

is_none

A function to determine if an object is a `None` object.  This function is a
 type assertion, to allow for strong type inference in if statements and switch statements.

#### Type parameters:

| Name |
| :------ |
| `T` |

#### Parameters:

| Name | Type | Description |
| :------ | :------ | :------ |
| `opt` | *Optional*<T\> | an object of type `Optional` |

**Returns:** opt is None

true if the object is a `None` object, otherwise false

Defined in: [utility/optional.ts:61](https://github.com/baileympearson/iterable-ts/blob/a8942be8/src/utility/optional.ts#L61)

___

### is\_some

▸ **is_some**<T\>(`opt`: *Optional*<T\>): opt is Some<T\>

is_some

A function to determine if an object is a `Some` object.  This function is a
 type assertion, to allow for strong type inference in if statements and switch statements.

#### Type parameters:

| Name |
| :------ |
| `T` |

#### Parameters:

| Name | Type | Description |
| :------ | :------ | :------ |
| `opt` | *Optional*<T\> | an object of type `Optional` |

**Returns:** opt is Some<T\>

true if the object is a `Some` object, otherwise false

Defined in: [utility/optional.ts:48](https://github.com/baileympearson/iterable-ts/blob/a8942be8/src/utility/optional.ts#L48)

___

### iterate

▸ **iterate**<T\>(`func`: (`arg0`: T) => T, `seed`: T): *Generator*<T\>

iterate

#### Type parameters:

| Name |
| :------ |
| `T` |

#### Parameters:

| Name | Type |
| :------ | :------ |
| `func` | (`arg0`: T) => T |
| `seed` | T |

**Returns:** *Generator*<T\>

infinite sequence of func(seed), func(func(seed)), func(func(func(seed))), ...

Defined in: [core/iterate.ts:6](https://github.com/baileympearson/iterable-ts/blob/a8942be8/src/core/iterate.ts#L6)

___

### map

▸ **map**<In, Out\>(`f`: (`arg0`: In) => Out): *MapTransform*<In, Out\>

#### Type parameters:

| Name |
| :------ |
| `In` |
| `Out` |

#### Parameters:

| Name | Type |
| :------ | :------ |
| `f` | (`arg0`: In) => Out |

**Returns:** *MapTransform*<In, Out\>

Defined in: [core/map.ts:2](https://github.com/baileympearson/iterable-ts/blob/a8942be8/src/core/map.ts#L2)

▸ **map**<In, Out\>(`f`: (`arg0`: In) => Out, `iter`: *Iterable*<In\>): *Generator*<Out\>

#### Type parameters:

| Name |
| :------ |
| `In` |
| `Out` |

#### Parameters:

| Name | Type |
| :------ | :------ |
| `f` | (`arg0`: In) => Out |
| `iter` | *Iterable*<In\> |

**Returns:** *Generator*<Out\>

Defined in: [core/map.ts:3](https://github.com/baileympearson/iterable-ts/blob/a8942be8/src/core/map.ts#L3)

___

### none

▸ **none**(): None

none

**`remarks`** 
Constructs an object of the `None` type

**Returns:** None

a `none` object.

Defined in: [utility/optional.ts:33](https://github.com/baileympearson/iterable-ts/blob/a8942be8/src/utility/optional.ts#L33)

___

### range

▸ **range**(): *Generator*<number\>

**Returns:** *Generator*<number\>

Defined in: [utility/range.ts:13](https://github.com/baileympearson/iterable-ts/blob/a8942be8/src/utility/range.ts#L13)

▸ **range**(`stop`: *number*): *Generator*<number\>

#### Parameters:

| Name | Type |
| :------ | :------ |
| `stop` | *number* |

**Returns:** *Generator*<number\>

Defined in: [utility/range.ts:14](https://github.com/baileympearson/iterable-ts/blob/a8942be8/src/utility/range.ts#L14)

▸ **range**(`start`: *number*, `stop`: *number*): *Generator*<number\>

#### Parameters:

| Name | Type |
| :------ | :------ |
| `start` | *number* |
| `stop` | *number* |

**Returns:** *Generator*<number\>

Defined in: [utility/range.ts:15](https://github.com/baileympearson/iterable-ts/blob/a8942be8/src/utility/range.ts#L15)

▸ **range**(`start`: *number*, `stop`: *number*, `step`: *number*): *Generator*<number\>

#### Parameters:

| Name | Type |
| :------ | :------ |
| `start` | *number* |
| `stop` | *number* |
| `step` | *number* |

**Returns:** *Generator*<number\>

Defined in: [utility/range.ts:16](https://github.com/baileympearson/iterable-ts/blob/a8942be8/src/utility/range.ts#L16)

___

### repeat

▸ **repeat**<T\>(`value`: T): *Generator*<T\>

repeat

Produces an infinite iterable, yielding the given value over and over again

#### Type parameters:

| Name |
| :------ |
| `T` |

#### Parameters:

| Name | Type |
| :------ | :------ |
| `value` | T |

**Returns:** *Generator*<T\>

An infinite iterable of the provided value

Defined in: [core/repeat.ts:10](https://github.com/baileympearson/iterable-ts/blob/a8942be8/src/core/repeat.ts#L10)

___

### some

▸ **some**<T\>(`data`: T): *Some*<T\>

Constructs an object of the `Some` type

#### Type parameters:

| Name |
| :------ |
| `T` |

#### Parameters:

| Name | Type |
| :------ | :------ |
| `data` | T |

**Returns:** *Some*<T\>

a `some` object, containing the parameter as its data

Defined in: [utility/optional.ts:18](https://github.com/baileympearson/iterable-ts/blob/a8942be8/src/utility/optional.ts#L18)

___

### take

▸ **take**<T\>(`n`: *number*): *function*

#### Type parameters:

| Name |
| :------ |
| `T` |

#### Parameters:

| Name | Type |
| :------ | :------ |
| `n` | *number* |

**Returns:** (`arg0`: *Iterable*<T\>) => *Generator*<T\>

Defined in: [core/take.ts:3](https://github.com/baileympearson/iterable-ts/blob/a8942be8/src/core/take.ts#L3)

▸ **take**<T\>(`n`: *number*, `iter`: *Iterable*<T\>): *Generator*<T\>

#### Type parameters:

| Name |
| :------ |
| `T` |

#### Parameters:

| Name | Type |
| :------ | :------ |
| `n` | *number* |
| `iter` | *Iterable*<T\> |

**Returns:** *Generator*<T\>

Defined in: [core/take.ts:4](https://github.com/baileympearson/iterable-ts/blob/a8942be8/src/core/take.ts#L4)

___

### takeWhile

▸ **takeWhile**<T\>(`pred`: (`arg0`: T) => *boolean*): *function*

#### Type parameters:

| Name |
| :------ |
| `T` |

#### Parameters:

| Name | Type |
| :------ | :------ |
| `pred` | (`arg0`: T) => *boolean* |

**Returns:** (`arg0`: *Iterable*<T\>) => *Iterable*<T\>

Defined in: [core/takeWhile.ts:1](https://github.com/baileympearson/iterable-ts/blob/a8942be8/src/core/takeWhile.ts#L1)

▸ **takeWhile**<T\>(`pred`: (`arg0`: T) => *boolean*, `iter`: *Iterable*<T\>): *Iterable*<T\>

#### Type parameters:

| Name |
| :------ |
| `T` |

#### Parameters:

| Name | Type |
| :------ | :------ |
| `pred` | (`arg0`: T) => *boolean* |
| `iter` | *Iterable*<T\> |

**Returns:** *Iterable*<T\>

Defined in: [core/takeWhile.ts:2](https://github.com/baileympearson/iterable-ts/blob/a8942be8/src/core/takeWhile.ts#L2)

___

### zip2

▸ **zip2**<T, S\>(`iter1`: *Iterable*<T\>, `iter2`: *Iterable*<S\>): *Generator*<[T, S]\>

Combines two iterables into a single iterable. yields pairs of values

#### Type parameters:

| Name |
| :------ |
| `T` |
| `S` |

#### Parameters:

| Name | Type |
| :------ | :------ |
| `iter1` | *Iterable*<T\> |
| `iter2` | *Iterable*<S\> |

**Returns:** *Generator*<[T, S]\>

pairs in the form `[value1, value2]`

Defined in: [core/zip2.ts:6](https://github.com/baileympearson/iterable-ts/blob/a8942be8/src/core/zip2.ts#L6)
