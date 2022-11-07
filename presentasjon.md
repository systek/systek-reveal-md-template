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

* Why wait 
* Why hesitate

---

## Documentation

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
describe.each([
    ["", undefined as any, ""],
    ["", {}, ""],
    ["", { animal: "Fox" }, ""],
    ["{{animal}}", { animal: "Fox" }, "Fox"],
    [
      "The {{ animal }} jumps over the {{ object }}",
      { animal: "Fox", object: "Brook" },
      "The Fox jumps over the Brook",
    ],
    [
      "The {{ animal }} jumps over the {{ object }}",
      { animal: "Hare", object: "Fox" },
      "The Hare jumps over the Fox",
    ],
  ] as Array<[string, Record<string, string | number>, string]>)(
    'with base "%s" and data %p',
    (base, data, expected) => {
      it(`confusingFunctionName should produce "${expected}"`, () =>
        expect(confusingFunctionName(base as any, data as any)).toBe(expected));
    }
  );
```


----

```bash
with base "" and data undefined
      ✓ confusingFunctionName should produce "" (1 ms)
    with base "" and data {}
      ✓ confusingFunctionName should produce ""
    with base "" and data {"animal": "Fox"}
      ✓ confusingFunctionName should produce ""
    with base "{{animal}}" and data {"animal": "Fox"}
      ✓ confusingFunctionName should produce "Fox" (1 ms)
    with base "The {{ animal }} jumps over the {{ object }}" and data {"animal": "Fox", "object": "Brook"}
      ✓ confusingFunctionName should produce "The Fox jumps over the Brook"
    with base "The {{ animal }} jumps over the {{ object }}" and data {"animal": "Hare", "object": "Fox"}
      ✓ confusingFunctionName should produce "The Hare jumps over the Fox"

```

---

###  The Edges (each)

---

## \_mock\_

- hide mock data
- create mock-implementations
- test-utils

----

 ... hide away mock data

----

...  create mock-implementations

----

`/* istanbul ignore file|next| */` 

or 

```json
    "jest": {
        "collectCoverageFrom": [
            "src/**/{!(_mock_),}/*"
        ]
    }
```

to hide from coverage

---


---

# Example 
[beer]: http://localhost:1948/_assets/img/beer-glass.jpeg

![header-gif][beer] A tester went in to a bar ...

* _react-create-app_ 
* _@testing-library/react_ & _@testing-library/jest-dom_
    *  _enzyme_  no longer maintained
* _redux-saga-test-plan_
* _@swan-io/boxed_

----

### Components

* kept simple / logic-less
* test on input

----

### Containers

as components + testing og data/action-mapping

----

### Selectors


----

### Saga