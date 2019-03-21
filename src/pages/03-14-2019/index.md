---
path: "/regex-for-everyone"
title: "RegEx Necessities"
category: "Regular Expressions"
keywords:
  [
    "regex",
    "regular expressions",
    "javascript",
    "js",
    "developer",
    "development",
    "software",
    "web",
    "matching",
  ]
---

## TL;DR

######_Regular expressions are easier than you think. Let's focus on the bare necessities in a quick and dirty reference with examples. If you are new to regular expressions or need a quick review on the basics, this is a great place to start._

## What is Regex?

Regular expressions are a concise language for matching patterns of text. In JavaScript, a regular expression can be defined like this `/expression/`. In it's most basic form a regular expression can look like this:

```javascript
/pizza/.test(entree);
```

In the above example, if the entree variable contained `pizza` anywhere within the string, it will return true. Some examples that will return true:
`pizza` `pizzas` `spizzas` `i like to eat pizza`

#

## Don't Fear RegEx

Regular expressions can look intimidating if you haven't had some experience with them. If you can write code you can learn regular expressions. It's just syntax and almost every language supports them. I use regular expressions almost daily to search for files with standard naming conventions, or just those files someone is looking for, you know, on that server that so many people have touched.

There are however, some cases where you should just reach for a library. A notorious example is validating email with high accuracy. If a regular expression gets too complex, it can become difficult to debug and maintane. So let someone else do that work if you can.

Okay lets look at the operators first. Remember, this is not a comprehensive list. Just enough to get started. I'll list resources at the end.

## Operators

There are a few must know operators. Master these and you will cover the majority of use cases. I'll start with an example, and then explain what's happening.

It's important to note that the following examples are case sensitive. The expression `/C/` is different than the expression `/c/`. This can be changed with a _modifier_ which we'll discuss later.

### The Wild Card `*`:

```JavaScript
/cat*/.test("category");
// returns true
```

The simplest operator, `*` matches anything character or combination of characters for any length. Lets see some examples of matches and mismatches.

```javascript
const matchRed = /red*/;
matchRed.test("reddit"); // returns true
matchRed.test("credit"); // returns true
matchRed.test("brew"); // returns false
```

So what's happening here? The wildcard will match any combination of text **after** the combination `red` is found. It's that simple. Let's move on.

### The Dot `.`

```javascript
const matchAt = /.at/;
matchAt.test("cat"); // returns true
```

The `.` operator matches any character one time. In the above example it matches cat. Lets take a look at a some other examples.

```javascript
const matchAt = /.at/
matchAt.test("rat"); // returns true
matchAt.test("bat"; // returns true
matchAt.test("#at"); // returns true
matchAt.test("at"); // returns false
```

Okay. What's going on here. `rat`, `bat` and `#at` match because we specified any single character with the `.` and the letters `at` after. Just the letters `at` fail because there is no character in front of the letters.

### Word Character `\w`

```javascript
const matchAt = /\wat/;
matchAt.test("cat"); // returns true
```

_Almost_ identical to the `.` operator, The `\w` operator matches any _word_ character one time. This meants it will match any letter or number (and also underscores `_`).

```javascript
const matchAt = /.at/
matchAt.test("rat"); // returns true
matchAt.test("bat"; // returns true
matchAt.test("#at"; // returns false
matchAt.test("at"); // returns false
```

#

### Digits `\d`

```javascript
const matchNumber = /number\d/;
matchNumber.test("number1"); // returns true
```

In the expression above, we will match anything that contains the letters `number` followed by any digit hence the `\d` operator. Here are a few more examples.

```javascript
const matchNumber = /number\d/;
matchNumber.test("number9"); // returns true
matchNumber.test("somenumber8plus"); // returns true
matchNumber.test("4"); // returns false
```

So even if the sequence `number8` is in the middle of the string, it will return true.

### Word Boundary `\b`

```javascript
const matchMoo = /\bmoo\b/;
matchMoo.test("the cow says moo"); // returns true
```

The `\b` operator matches boundaries of words. The cow can only say moo. That's it. If we were to test a few more cases:

```javascript
const matchMoo = /\bmoo\b/;
matchMoo.test("I have a moo cow"); // returns true
matchMoo.test("the cow says moot"); // returns false
matchMoo.test("the cow says smoo"); // returns false
```

Simple enough. If the word `moo` and only that word is anywhere in the scentance, it will return true.

### Character Classes `[]`

```javascript
const matchThese = /[1Aa]/;
matchThese.test("pineapple"); // returns true
```

Character classes are a powerful part of regex. In the above example, any word containing `1`, `A` or `a` will return true. pretty straight forward right? How about these examples.

```javascript
/[a-e]/.test("banana"); // returns true
/[A-E]/.test("banana"); // returns false
/[12-42]/.test("The number 36"); // returns true
```

Inside character classes we can define ranges of numbers, lowercase characters or uppercase characters. You can even combine them.

```javascript
const matchThis = /[a-eA-E12-42]/;
matchThis.test("banana"); // returns true
matchThis.test("BANANA"); // returns true
matchThis.test("the number 36"); // returns true
```

Now we have one regular expression to match all words containing letters from a to e and numbers from 12 to 42.

### Start `^`

```javascript
/^a/.test("apple"); //returns true
```

The `^` represents the beginning of a string. Lets look at a couple of cases where this would return false.

```javascript
/^a/.test("pineapple"); //returns false
/^a/.test("eat apples"); //returns false
```

These fail because the string does not start with `a`.

### End `$`

```javascript
/e$/.test("apple"); // returns true
```

The `$` represents the end of a string, so because `apple` ends in `e`, it returns true. Simple enough, but here are some failing cases to be clear.

```javascript
/e$/.test("eat"); // returns false
/e$/.test("street"); // returns false
```

Both cases fail simply because they do not end in `e`.

## Modifiers

Modifiers are less about matching a pattern, but help describe how you would like to search. In JavaScript we have 6 total, but the 3 must know modifiers are `i`, `m` and `g`. These modifiers can be used individually, or in any combination and are placed just after the last `/` like this `/expression/m` where m is the modifier.

### Ignore Case `i`

```javascript
/c/i.test("Coffee"); // returns true
```

This one is pretty self explanitory. Placing the `i` modifier after the expression allows us to match anything containing a lower case `c` and an uppercase `C`.

```javascript
const matchBat = /bat/i;
matchBat.test("WOMBAT"); // returns true
matchBat.test("Bat"); // returns true
```

### Multiline `m`

```javascript
const groceryList = `apples
oranges
peaches
coffee
chocolate`;

/coffee/m.test(groceryList); // returns true
```

The multiline modifier allows the regular expression to look beyond any new lines. Without it, the above example would return false.

### Global `g`

```javascript
"apple".replace(/p/g, "b"); // returns abble
```

A great way to use the JavaScript `String.replace` is with regular expressions. However, If you want to replace **all** occurences of a matched pattern, you need to include to `g` modifier to search globally. Without it, the above expression will only replace the first `p` it finds.

```javascript
"apple".replace(/p/); // returns abple
```

### Putting it All Together
