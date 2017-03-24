# Algorithm to determine if two strings are an anagram
> The anagram test is commonly used to demonstrate how an naivie implementation can perform significant order of magnitues slower than an efficient one.

```js
/**
 * A word is an anagram of another if you can rearrange its characters to produce the second word. 
 * Given two strings determine if they are anagrams of each other.
 * - 'earth' and 'heart' are anagrams
 * - 'silent' and 'listen' are anagrams
 * - 'foo' and 'bar' are not anagrams
 */
```

* We will start by creating our areAnagrams function 

```js
function areAnagrams(s1: string, s2: string) {
}
```
* By default it will return false untill proven innocent.
```js
function areAnagrams(s1: string, s2: string) {
  return false;
}
```

A plain implementation that derives from the definition would be to check all the arrangments of s1 
and then see if it is equal to s2

```js
  for (const arrangement of arrangements(s1)){
    if (s1 === s2) return true;
  }
```
However in this case the complexity of the algorithm will be equal to possible permutations of s1, so order of n! (where n is the number of characters in the string).

If you read into the requirements you can realize that instead of doing actual rearrangments you simply need to check if they have *exactly* the same characters. 

One simple way of checking the exact same characters is simply to 
* break the strings into their characters, sort them, and join them again. 
* we do the same for the second strings.
* finally we check if the strings are equal.

```js
  s1 = s1.split().sort().join('');
  s2 = s2.split().sort().join('');
  return s1 === s2;
```

The complexity in this case will be driven by the sort function which is in the order of `nLogn`.

Lets rule out a simple base case where the strings are not of the same length. The intution here is that if s1 characters are indeed all in s2 we don't need to do the reverse check.

```js
function areAnagrams(s1: string, s2: string) {
  if (s1.length !== s2.length) return false;
  return false;
}
```
