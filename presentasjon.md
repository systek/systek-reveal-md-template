## // TODO

* stramme inn enda mer - færre foiler
* typos
* hva nå - kikke litt inn i kodekvalitet-fremtiden (som overgang til Håvard)
* webassembly ???


* Morsom forhistore
* Bra innhold
* Litt mange slides. Litt mye blafring.
* Må forbedre slidesettet litt
* Bør bruke større bilder(fullskjerm?). Foto av høy kvalitet!
* Hva er budskapet? Hva ønsker du å formidle..
* Litt mer energi
* Finnes det andre typer statiske typede javascript?
* Går over tiden!
* Det er noe med formatet på å vise kode
* Litt mer overordnet før man dypdykker
* Løsrive seg fra manus


---

# SYSTEK

### Høyne din kodekvalitet med statisk typing og hissig linting

---

### Kodekvalitet - Hvem bryr seg egentlig?

---


* Pleide sitte som herre i egen borg
* global.js < 500 l. kode
* Moderne applikasjon >  10 000 l. kode javascript
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

Note: Fort gjor tå ende opp med spaghettikode - upassende mat for nissen. Gretten nisse.......

---

<img src="http://localhost:1948/_assets/img/lady_landstryker.jpg" alt="Lady og Landstrykeren" style="width: 400px; height:300px"/>


Note: hvis man tar i bruk noen enkle teknikker venter en belønning i andre enden

---

### Årets julegave til dine kolleger

----

### Årets julegave til deg selv:

----

#### Lesbar, forståelig  og forvaltbar kode

Note: år du i år tilbake med samme monn:
    Hvordan  forbedre kodekvalitet?
    Ulike virkemidler

Først: Linting

---

## Lint - hva er det?

---

[![LINT FLAGG](http://localhost:1948/_assets/img/600px-Flag_of_Lint.svg.png)](http://localhost:1948/_assets/600px-Flag_of_Lint.svg.png)


----

Lint er en kommune i den belgiske provinsen Antwerpen. 

----

_Oxford Dictionary_

>Short, fine fibres which separate from the surface of cloth or yarn during processing.
>‘some fabrics leave tiny specks of lint on the glass’


note:
Korte fine fibre som adskilles fra  tøystykke  under bearbeiding.

----

#### På godt norsk:

## LO!

----

#### I vår verden:

_Statisk analyse av kildekode for å detektere brudd på definerte regler_

Note: Utviklet av Stephen C. Johnson hos Bell Labs for sjekk av C-kode. Senere
 som del av  Unix operating system  1979

----

#### Linting i JavaScript

* **JSLint** (2002) Douglas Crockford. Sjekker om JS-kode følger kodereglene 
* **JSHint** (2010) Anton Kovalyov. Fork av JSLint for bedre tilpassing av reglene 
* **ESLint** (2013) Nicholas C. Zakas. Laget for at utviklere skal kunne lage engne regler til koden 
* **TSLint** (2015) Palantir Technologies. Linting for TypeScript

Note: >>>

JSLINT  Først og fremst online verktøy ibrowser. nå også som cli 
JSHINT  A command-line version of JSHint, distributed as a Node.js module,
        makes it possible to automate one's linting process and integrate JSHint into a project's development workflow.
ESLINT  (industristandard). Angir i config hvilke ES-versjon man bruker
TSLINT  bygger på ESLINT men tilpasset typescript

----

#### Bli kvitt rusket i din kode

```bash
/git/myRepo $ npm install -g eslint
/git/myRepo $ eslint --init
/git/myRepo $ eslint test.js test2.js
```


----

#### Eller som del av bygget

```bash
npm run test
```

Note: eslint --init lager en .eslintrc.js fil for deg 

----

Du får hjelp av --init til å sette opp en konfig

```bash
/git/myRepo $ node node_modules/.bin/eslint --init
? How would you like to configure ESLint? Use a popular style guide
? Which style guide do you want to follow? (Use arrow keys)
❯ Google 
  Airbnb 
  Standard 
```


----

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


----


## Strategi


----

#### Nytt repo

```javascript
{
    "extends": "airbnb-base"
}
```

note: anbefaler å benytte en av standardende fra eslint. Hvis man gjør det allerede i fra begynnelsen
blir det ikke så smertefult å følge de, til tider strenge reglene

mulig å override med rules tilpasset egen kode

----

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

----

<img src="http://localhost:1948/_assets/img/Hangman_game.png" alt="HangManStyle" style="width: 400px; height:300px"/>

---

# JavaScript / EcmaScript
### Syntaks - Sukker - Sirup

Note: 
Som nevnt ble ikke JS skrevet med hennblikk på å lage store single-page applikasjoner. Ttf kraftig
endringer av språket fra første versjon i 1997 til dagens v2017, finnes det fortsatt grunnleggende egenskaper
i språket som gjør det vanskelig å strukturere og organisere for mange utviklere, 
Ikke alle trives med å skrive JavaScript etter standarden, slik det støttes av nettleseren. Derfor er det kommet
opp et  mylder av ulike språk som kan kompileres ned til JavaScript slik at det kan nyttes i nettlesern

----

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


----

## Statisk vs dynamisk typing

* Statisk typede språk:  variabeltyper sjekkes compile-time
* Dynamsisk typede språk:  sjekkes først runtime
* * større frihet til å mikse typer 
* * kræsjer hvis det ikke tas høyde for typekonflikter

note:
Her ser vi noen hovedforskjeller mellom statis og dynamiske språl

# Fordeler med dynamisk typede språk
* Mer konsist / mindre verbost
* Slipper å vente på kompilering > rett i interpreter > umiddelbar feedback til
  utvikler
* Slipper å bruke tid på å uttrykke seg korrekt - mer fleksibilitet
* Slipper å refaktorisere hele kodebasen ved typeendringer (men må bruke tid på
  testing istede)
* 


----

## Fordeler med statisk typede språk

note: hvorfor ønsker vi å tilføre kompleksistet til språkvet ved statisk typing

----

* Forbedret autofullfør i IDE
* Større grad av selvdokumentasjon
* Forenkler søk i koden - IDEen kan lede deg dirrekte til feks
  funksjonsdefinisjonen
* Reduserer uforutsette feil feks brukerinputtvalidering
* Dokumenterer kontrakten med backend. Spesifiserer domeneobjekter

Note:
VI SKAL SE PÅ TO ULIKE TILNÆRMINGER TIL STATISK TYPING I JAVASCRIPT

---

<img src="http://localhost:1948/_assets/img/flow_logo.png" alt="Flow!" style="width: 200px; height:200pxpx; border: none;"/>


<p class="smaller">Statisk typesjekker fra FaceBook</p>

----

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
ikke en kompilater men en sjekker

----

### Type inference

>Using data flow analysis, Flow infers types and tracks data as it moves through your code.
>You don't need to fully annotate your code before Flow can start to find bugs.

----

```javascript
// @flow
function concat(a, b) {
  return a + b;
}

concat("A", "B"); 
concat(1, 2); 
```

----

### Type annotasjon 

```javascript
// @flow
function concat(a: string, b: string) {
  return a + b;
}

concat("A", "B"); // Works!
concat(1, 2); // Error!
```

note: i noen tilfeller ønsker man å spesifisere typene for å garantere oppførsel til funksjonen

----


### Typer

<p class="smaller">Rikt utvalg av typer og språklige features :</p>

* primitive typer
* klasser med arv
* Enum
* Generics
* ...


----

### Støtter non-nullable

sjekkeren gir feilmelding når man forsøker å bruke en verdi som kan være null

```javascript
// error: return undefined. This type is incompatible with string
function foo(num: number): string {
	if (num > 10) {
		return 'cool';
	}
}
```

----

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
/git/myRepo $ yarn run babel src/
/git/myRepo $ yarn add --dev flow-bin
/git/myRepo $ yarn run flow init
/git/myRepo $ yarn run flow status
```


----

```javascript
// @flow

function foo(x: ?number): string {
  if (x) {
    return x;
  }
  return "default string";
}
```


----

```bash
Error: src/error.js:5
  5:     return x;
                ^ number. This type is incompatible with the expected return type of
  3: function foo(x: ?number): string {
                               ^^^^^^ string
```

----

.flowconfig

```yaml
[include]
../otherdir/src

[ignore]
.*/build/.*

[libs]
./lib

[lints]
[options]

[version]
```


note:
lints: regler for flow-linting

----

 Bruk options-feltet til å stramme til løkka

* use_strict=true
* suppress_type='anyother'

---

<p style="background-color:#294E80; width: 200px; height: 150px; margin: auto">
<img src="http://localhost:1948/_assets/img/typescript_logo.svg" alt="Flow!" style="width: 200px; height:150px; border: none; margin: 0; padding: 8px"/>
</p>

> Typescript is a typed superset of JavaScript that compiles to plain
> JavaScript<br />
> <span class="smaller right">[typescript.org](https://www.typescriptlang.org/)</smaller>

<p class="smaller">Utviklet av Microsoft</p>


note:

Baserer seg på ES6 (men videreutvikles mot ES7/8)
Basserer seg på  annotasjoner i koden - men har også innebygget inference
kompileres for å sjekke koden og fjerne annotasjonene 


Sentral forskjell mellom TS og Flow. For få flow-kode til å kjøre må annotasjonen fjernes
(av feks Babel)  TypeScript, derimot, implementerer både en type-sjekker og en trasnspiler som spytter ut
kjørbar javascript.

----

###  Inference & annotasjoner 

```javascript
let a: string = 'Hello';
let b: number = 22;
let c = false;
let d = c + b; // Operator '+' cannot be applied to types 'number' and 'false'.
```

note: disse kan også inferece av kompilator
man bygger også mer komlekse typer vha Class eller json-implementasjoner av interfaces

----

### Typer

I likhet til Flow et rikt utvalg av typer og feature

<p class="smaller">men</p>

Typer er  nullable (må nullsjekkes)

----

### Komme igang

```bash
/git/myRepo $ npm install typescript
/git/myRepo $./node_modules/.bin/tsc hellovoid.ts
```
note: ekstremt lett å komme i gang
objektorientering i ryggmargen - mye java

----

hellovoid.ts


```javascript
function greeter(person: string) {
    return "Hello, " + person;
}

let user = [0, 1, 2];

document.body.innerHTML = greeter(user);
```

----

```bash
/git/myRepo $  node_modules/.bin/tsc hellovoid.ts 
src/test.ts(7,35): error TS2345:
Argument of type 'number[]' is not assignable
to parameter of type 'string'.
```


note: også veldig god innebygget støtte i Vistual Studio Code

----

.tsconfig.json

```json
{
    "compilerOptions": {
        "module": "system",
        "noImplicitAny": false,
        "removeComments": true,
        "preserveConstEnums": true,
        "outFile": "../../built/local/tsc.js",
        "sourceMap": true
    },
    "include": [
        "src/**/*"
    ],
    "exclude": [
        "node_modules",
        "**/*.spec.ts"
    ]
```


note: // kan skippes

module: pecify module code generation: "None", "CommonJS", "AMD", "System", "UMD", "ES6", "ES2015" or "ESNext".
► Only "AMD" and "System" can be used in conjunction with --outFile.
► "ES6" and "ES2015" values may be used when targeting "ES5" or lower.

noImplicitAny:	Raise error on expressions and declarations with an implied any type.

reoveComments Remove all comments except copy-right header comments beginning with /*!

preserveConstEnums: Do not erase const enum declarations in generated code. See const enums documentation for more details.
....

----

### Stram til løkka

* strictNullChecks
* noImplicitAny
* allowJs
* alwaysStrict

<span class="smaller right">[Compiler Options](https://www.typescriptlang.org/docs/handbook/compiler-options.html)</smaller>


 --strict

note:

strictNullChecks flag fixes this: when you declare a variable, it doesn’t automatically include null or undefined. You can include them explicitly using a union type:

noImplicitAny:  Raise error on expressions and declarations with an implied any type.

alwaysStrict:   "use strict"

allowJs : tillate .js-filer å kjøre (som js)

--strict: Enable all strict type checking options. 
Enabling --strict enables --noImplicitAny, --noImplicitThis, --alwaysStrict, --strictNullChecks and --strictFunctionTyp

---

### Flow vs TypeScript


* Får kontroll over typer og struktur i kode
* Lett å opte inn i eksisterende kode
* TypeScript and Flow har sett mye til hverandre
* Begge suporterer React, Angular mv
* TypeScript er en kompilator, Flow er en sjekker
* Flow har bedre sunnhetsforståelse (ungå run-time-feil)
* TypeScript har bedre tooling
* Flow trenger i liten grad å skrive om koden 

note: Angular > TypeScript (java bakgrunn)
React > Flow

lagt opp i eksempler, tutorials og boilerplates

men kan velge selv

---

# Nøkkelfaktor

---

<img src="http://localhost:1948/_assets/img/wantyou.png" alt="You!" style="width: 400px; height:500px; border: none;"/>

note:
* KISS
* vær nøye
* vis arbeidsstoltet
* husk at det er andre som skal jobbe videre på koden når du har reist
* gled deg til jul

note: 

---

## Takk for oppmerksomheten


<img src="http://localhost:1948/_assets/img/happy_santa.jpg" alt="Happy Santa!" style="width: 400px; height:300px;"/>

---

*https://flow.org/en/
*https://www.typescriptlang.org/index.html
*https://djcordhose.github.io/flow-vs-typescript/2016_hhjs.html

---
