[beer]: http://localhost:1948/_assets/img/beer-glass.jpeg

## A tester went in to a bar
<img src="http://localhost:1948/_assets/img/cheers.jpeg" alt="Cheers" style="height: 50%; width: 50%"/>

![header-gif][beer]  ... and ordered one beer ![header-gif][beer] 

---

### I don't have the time to write tests

---

###  Paradigms

* TDD
* DDD
* BDD
....

Note: 
Test Driven Development, eller TDD, er en prosess for å utvikle programvare der en test skrives  ør kode skrives. Når det er gjort, vil utviklere jobbe mot å skrive akkurat nok kode til å bestå testen, og deretter begynne å refaktorere.

Domain Driven Design, eller DDD, er en tilnærming til utvikling som kobler implementeringen til en utviklende modell; setter prosjektets fokus på kjernedomenet (kunnskapssfæren), logikken bak det, og tvinger samarbeid mellom tekniske og ikke-tekniske parter for å forbedre modellen.

BDD er en foredling av TDD og DDD som har som mål å effektivisere utviklingen gjennom å redusere kommunikasjonshull, skape en bedre forståelse av kunden og tillate kontinuerlig kommunikasjon. Enkelt sagt er BDD en måte å kombinere forretningskrav med kode og lar deg forstå systemets oppførsel fra et forretnings-/sluttbrukerperspektiv.

HYBRID::
No strict approach when I am testing, but I guess I am closer to BDD when developing components, while selectors can easily be done with TDD and perhaps DDD is more suitable for sagas and reducers

---

### The why? 

* Hesitation
* Stress / time traps
* Know how

Notes:
hard to get stared
ever change - new frameworks, new domain etc
maintain even more code

---

* JsTestDriver
* Jasmine
* Mocha
* Karma
* Buster.JS
* Sinon
* ...

---
## JEST
---

## Upsides

* Documentation
* Discover errors
* Refactoring
* Robustness
* Clean code
* Proves features

----

```ts
export const confusingFunctionName = (
  base: string,
  data: Record<string, number | string>
) =>
  Object.entries({ ...data }).reduce(
    (res, [key, value]) =>
      res.replace(new RegExp(`{{\\s*${key}\\s*}}`, "gi"), 
      value as string),
    base || ""
  );
```

----

```ts
describe("test", () => {
  const base = "The {{ animal }} jumps over the {{ object }}";
  const data = { animal: "Hare", object: "Fox" };
  const expected = "The Hare jumps over the Fox";

  describe(`confusingFunctionName(\n\t${base},\n\t${shape(data)})`, () => {
    it(`should return "${expected}"`, () =>
      expect(confusingFunctionName(base, data)).toBe(expected));
  });
});

```

----

```bash
 test
    confusingFunctionName(
	The {{ animal }} jumps over the {{ object }},
	{"animal":"Hare","object":"Fox"})
      ✓ should return "The Hare jumps over the Fox"

```

---

###  The Edges (each)

----

```ts
describe("string utils", () => {
  describe.each([
    [undefined, ""],
    [null, ""],
    [1, ""],
    [false, ""],
    ["", ""],
    ["string", "String"],
    ["string swing", "String swing"],
  ] as Array<[string, string]>)("capitalize(%s)", (props, expected) => {
    it(`should return "${expected}"`, () =>
      expect(capitalize(props)).toBe(expected));
  });
});


```

----

```bash
 string utils
    capitalize(undefined)
      ✓ should return ""
    capitalize(null)
      ✓ should return ""
    capitalize(1)
      ✓ should return ""
    capitalize(false)
      ✓ should return ""
    capitalize()
      ✓ should return ""
    capitalize(string)
      ✓ should return "String" (1 ms)
    capitalize(string swing)
      ✓ should return "String swing"

```

---

## \_mock\_

- hide mock data
- create mock-implementations
- test-utils

----

```js
/* istanbul ignore file|next| */

``` 

  || 

```json
    "jest": {
        "collectCoverageFrom": [
            "src/**/{!(_mock_),}/*"
        ]
    }
```

hides from coverage


---

# Example 
[beer]: http://localhost:1948/_assets/img/beer-glass.jpeg

![header-gif][beer] A tester went in to a bar ...

* _react-create-app_ 
* _@testing-library/react_ & _@testing-library/jest-dom_
    *  _enzyme_  no longer maintained

* _@swan-io/boxed_

----

### Components

* kept simple / logic-less
* test on input

----

### Containers

* like components
* testing og data/action-mapping

----

### Selectors

* TDD
* _describe.each_
* mocks

----

### Saga

* _redux-saga-test-plan_

----

### Api / Utilities