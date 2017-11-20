# SYSTEK

### Høyne din kodekvalitet med statisk typing og hissig linting

---

### Kodekvalitet - Hvem bryr seg egentlig?

---


* Pleide sitte som herre i egen borg
* global.js &lt; 500 l. kode
* Moderne applikasjon &gt; 10 000 l. kode javascript
* Konsulenttilværelse - oftere bytte
* Ettermæle

---

### JavaScript

* Laget med henblikk på validering av forms
* Dynamisk typet 
* Utviklet til å støtte moderne behov:
  <span class="smaller">ES5, ES6, ES2016, ES2017... </span>
* jQoery, Lodash, Vue, Ember, Angular, React, Elm

---

<img src="http://localhost:1948/_assets/img/pizzabonanza.png" alt="Pizza" style="width: 400px; height:300px"/>

Note: vokser ut av proposjoner

---

<img src="http://localhost:1948/_assets/img/nissegrot_pasta.jpg" alt="Nissegrøt pasta" style="width: 400px; height:300px"/>

Note: Fort gjor tå ende opp med spaghettikode - upassende julegave

---

<img src="http://localhost:1948/_assets/img/lady_landstryker.jpg" alt="Lady og Landstrykeren" style="width: 400px; height:300px"/>


Note: hvis man tar i bruk noen enkle teknikker venter en belønning i andre enden

---

### Årets julegave til dine kolleger

---

### Årets julegave til deg selv:

---

#### Lesbar, forståelig  og forvaltbar kode

Note: år du i år tilbake med samme monn:

---

Now, look at the Atomic Kitten!

<img src="http://localhost:1948/_assets/img/atomic_kitten.jpg" alt="Lady og Landstrykeren" style="width: 400px; height:300px"/>

Note: Hovrdan  forbedre kodekvalitet?

Ulike virkemidler

Først: Linting

---

## Lint - hva er det?

---

[![LINT FLAGG](http://localhost:1948/_assets/img/600px-Flag_of_Lint.svg.png)](http://localhost:1948/_assets/600px-Flag_of_Lint.svg.png)


---

Lint er en kommune i den belgiske provinsen Antwerpen. 

---

_Oxford Dictionary_

>Short, fine fibres which separate from the surface of cloth or yarn during processing.
>‘some fabrics leave tiny specks of lint on the glass’


---

#### På godt norsk:

## LO!

---

#### I vår verden:

_Statisk analyse av kildekode for å detektere brudd på definerte regler_


---

#### Linting i JavaScript

* JSLint - 2002 - Douglas Crockford. Sjekker om JS-kode følger kodereglene 
* JSHint - 2010 - Anton Kovalyov. Fork av JSLint for bedre tilpassing av reglene 
* ESLint - 2013 - Nicholas C. Zakas. Laget for at utivklere skal kunne lage engne regler til koden 
* TSLint - 2015 - Palantir Technologies. Linting for TypeScript

Note: >>>

JSLINT  Først og fremst online verktøy ibrowser. nå også som cli 
JSHINT A command-line version of JSHint, distributed as a Node.js module,
        makes it possible to automate one's linting process and integrate JSHint into a project's development workflow.
ESLINT  (industristandard)

---

#### Bli kvitt rusket i din kode

```bash
/git/myRepo $ npm install -g eslint
/git/myRepo $ eslint --init
/git/myRepo $ eslint test.js test2.js
```


---

#### Eller som del av bygget

```bash
npm run test
```


Note: eslint --init lager en .eslintrc.js fil for deg 

---


Du får hjelp av --init til å sette opp en konfig

```bash
/git/myRepo $ node node_modules/.bin/eslint --init
? How would you like to configure ESLint? Use a popular style guide
? Which style guide do you want to follow? (Use arrow keys)
❯ Google 
  Airbnb 
  Standard 
```


---

Eller lage din egen fra scratch


```javascript
module.exports = {
    "env": {
        "browser": true
    },
    "extends": "eslint:recommended",
    "rules": {
        "indent": [
            "error",
            "tab"
        ],
        "linebreak-style": [
            "error",
            "unix"
        ],
        "quotes": [
            "error",
            "double"
        ],
        "semi": [
            "error",
            "always"
        ]
    }
```


---


## Strategi


---

#### Nytt repo

```javascript
{
    "extends": "airbnb-base"
}
```

---

#### Eksisternede kode

```javascript

    "rules": {
        "quotes": [
            "error",
            "double"
        ]
}
```

Note: begynn i det små og legg til gradvis sterker og sterke regler

---


<img src="http://localhost:1948/_assets/img/Hangman_game.png" alt="HangManStyle" style="width: 400px; height:300px"/>

---


<img src="http://localhost:1948/_assets/img/bonzai_kitten.jpg" alt="Bonzai" style="width: 500px; height:500px"/>


---


# JavaScript / EcmaScript


### Syntaks - Sukker - Sirup

Note: 

_Ikke alle er like happy med å skrive  JavaScript på det formatet som støttes av nettleseren. Derfor er det
laget et mylder av ulike språk som kan kompileres ned til JavaScript slik at det kan nyttes i nettlesern_

---

* CoffeScript
* LiveScript
* NodeScript (!= Node.JS)
* LispyScript
* ClojureJS/ClojureScript
* Elm
* TypeScript
* Flow


Note: 

For mange er slike språk med på å effektivisere arbeidshverdagen i det man kan
uttrykke seg mer konsist, eller forståelig eller bygge strukturen i koden etter
eget hjerte, MEN en kan ikke utrykke noe mer enn i JavaScript ettersom alt
kompileres ned til JavaScript som igjen tolkes av nettleseren


---

## Statisk vs dynamisk typing

* Statisk typede språk:  variabeltyper sjekkes compile-time
* Dynamsisk typede språk:  sjekkes først runtime
* * større frihet til å mikse tyer 
* * kræsjer hvis det ikke tas høyde for typekonflikter

note:
# Fordeler med dynamisk typede språk
* Mer konsist / mindre verbost
* Slipper å vente på kompilering > rett i interpreter > instant feedback til
  utvikler
* Slipper å bruke tid på å uttrykke seg korrekt - mer fleksibilitet
* Slipper å refaktorisere hele kodebasen ved typeendringer (men må bruke tid på
  testing istede)
* dokumenterer kontrakten med backend. Spesifiserer domeneobjekter


---

#### Fordeler med statisk typede språk
* Forbedret autofullfør i IDE
* Større grad av selvdokumentasjon
* Forenkler søk i koden - IDEen kan lede deg dirrekte til feks
  funksjonsdefinisjonen
* Reduserer uforutsette feil feks brukerinputtvalidering


Note:
VI SKAL SE PÅ TO ULIKE TILNÆRMINGER TIL STATISK TYPING I JAVASCRIPT

---

## FLOW 

Statisk typesjekker fra FaceBook

---

> Flow employs the kind of data-flow and control-flow analysis that compilers
> typically perform to extract semantic information from code.
> It then uses this information for type inference
> building on advanced techniques in type theory.
> <span class="smaller right">[F Code](https://code.facebook.com/posts/1505962329687926/flow-a-new-static-type-checker-for-javascript/)</smaller>

note:
Henter ut fordeler uten å miste følelsen av javascript
Ligger som et lag ovenpå JS 
kan kjøres i bakgrunnen (-watch)
Utfører sofistikert programanlyse innenfor kjente idiomer

---

#### Babelify

```bash
/git/myRepo $ yarn add --dev babel-cli babel-preset-flow
```
.babelrc
```json
{
  "presets": ["flow"]
}
```

```bash
/git/myRepo $ yarn run babel src/ -- -d lib/babel -- src/ -d lib/
/git/myRepo $ yarn add --dev flow-bin
/git/myRepo $ yarn run flow init
/git/myRepo $ yarn run flot status
```


---

```javascript
// @flow

function foo(x: ?number): string {
  if (x) {
    return x;
  }
  return "default string";
}
```


---

#### .flowconfig

```yaml
[include]
../otherdir/src

[ignore]
.*/build/.*

[libs]
./lib
```


---

## TypeScript

Note: uteviklet av Microsoft

---

> Typescript is a typed superset of JavaScript that compiles to plain
> JavaScript
> <span class="smaller right">[typescript.org](https://www.typescriptlang.org/)</smaller>


note: This is where TypeScript and Flow differ: TypeScript implements both a type
checker and a transpiler that emits plain JavaScript. Flow only does type
checking and relies on Babel or flow-remove-types or some other tool to remove type annotations.


---

```bash
/git/myRepo $ npm install typescript
/git/myRepo $./node_modules/.bin/tsc hellovoid.ts
```
note: ekstremt lett å komme i gang
objektorientering i ryggmargen - mye java

---

* interfaces



note:

domene-objekter. Ofte ikke beskrevet andre steder, sette opp kontrakt med backend på hvordan 
---


### Stram til løkka

* strictNullChecks
* noImplicitAny
* allowJs
* alwaysStrict

<span class="smaller right">[Compiler Options](https://www.typescriptlang.org/docs/handbook/compiler-options.html)</smaller>


note:
strictNullChecks flag fixes this: when you declare a variable, it doesn’t automatically include null or undefined. You can include them explicitly using a union type:
noImplicitAny Raise error on expressions and declarations with an implied any type.

---

# Nøkkelfaktor

---

<img src="http://localhost:1948/_assets/img/wantyou.png" alt="You!" style="width: 400px; height:500px; border: none;"/>

note:
* vær nøye
* vis arbeidsstoltet
* gled deg til jul


---

## Takk for oppmerksomheten

---

-------------------





---


Angular > TypeScript (java bakgrunn)
React > Flow

men kan velge selv




---


---

# END

---

--------------------------------

## EcmaScript vs JavaScript


* “ECMAScript is a standard.”
* “JavaScript is a standard.”
* “ECMAScript is a specification.”
* “JavaScript is an implementation of the ECMAScript standard.”
* “ECMAScript is standardized JavaScript.”
* “ECMAScript is a language.”
* “JavaScript is a dialect of ECMAScript.”
* “ECMAScript is JavaScript.”

( https://medium.freecodecamp.org/whats-the-difference-between-javascript-and-ecmascript-cba48c73a2b5)

---

## EcmaScript
ECMA-262 navnet på er en standard som spesifiserer ECMAScript.
Publisert av Ecma International, første vesjon 1997,  for tiden oppnåd v8 (Juni 2017)


## JavaScript

JavaScript er en dialekt av ECMAScript som forsøker å implementer
spesifikasjonen etter beste evne, men som i noen tilfeller enten ikke makter,
eller velger å gjøre endringer.

JavaScript tolkes igjen av en motor, som er en "vendor spesific" implementasjon av språket.
Dette gjør igjen at hver nettleser implementerer sin måte å tolke JavaScript litt forskjellig
og hver versjon av nettleser har forskjellige ulikheter til standarden(e) de forsøker å støtte.
I tillegg kommer forbrukerenes even (eller mangel på sådan) til å oppdatere sine klienter



For mange er slike språk med på å effektivisere arbeidshverdagen i det man kan
uttrykke seg mer konsist, eller forståelig eller bygge strukturen i koden etter
eget hjerte, MEN en kan ikke utrykke noe mer enn i JavaScript ettersom alt
kompileres ned til JavaScript som igjen tolkes av nettleseren

|



