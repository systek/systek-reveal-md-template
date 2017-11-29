   
# SYSTEK

### Høyne din kodekvalitet med statisk typing og hissig linting

---

### Kodekvalitet - Hvem bryr seg egentlig?

note: 

ikke mora di
ikke kjæresten din
ikke kollegene dine - egentlig
ikke du?

    - trenger hjelp - parprogrammering
    - andre bidrag - roter i koden DIN?
    - jobb-bytte - andre må overta - ganske allright at koden er skrevet på måte som gjør den lett å sette seg inn i

 Ettermæle

---

### JavaScript

* Skapt for å  validere forms
* Event-basert
* Dynamisk typet 
* Utviklet til å støtte moderne behov:
  <span class="smaller">ES5, ES6, ES2016, ES2017... </span>
* jQuery, Lodash, Vue, Ember, Angular, React, Elm


note:

Og så er det noe med historien til javascriot / EcmaScript
* flere som koder i basen
* løser mange flere oppgaver nå enn for 20 år siden
* global.js < 500 l. kode
* Moderne applikasjon >  10 000 l. kode javascript
* vokser og vokser og vokser

---

<img src="http://localhost:1948/_assets/img/pizzabonanza.png" alt="Pizza" style="width: 600px ; height:450px;"/>

---

<img src="http://localhost:1948/_assets/img/lady_landstryker.jpg" alt="Lady og Landstrykeren" style="width: 600px ; height:450px;"/>


Note:  ender opp i spaghettikode - men  hva noen enkle teknikker kan det vente en belønning i andre enden

---

### Årets julegave til dine kolleger

----

### Årets julegave til deg selv

----

#### Lesbar, forståelig  og forvaltbar kode

---

## Lint - hva er det?

----

En kommune i den belgiske provinsen Antwerpen.

[![LINT FLAGG](http://localhost:1948/_assets/img/600px-Flag_of_Lint.svg.png)](http://localhost:1948/_assets/600px-Flag_of_Lint.svg.png)


----

_Oxford Dictionary_

>Short, fine fibres which separate from the surface of cloth or yarn during processing.
>‘some fabrics leave tiny specks of lint on the glass’


note:
Korte fine fibre som adskilles fra tøystykke  under bearbeiding.

----

# LO

----

_Statisk analyse av kildekode for å detektere brudd på definerte regler_

Note: Et verktøy utviklet av Stephen C. Johnson hos Bell Labs for sjekk av C-kode.
Senere inngikk dette som del av Unix operating system - 1979

----

#### Linting i JavaScript

* **JSLint** (2002) Douglas Crockford. Sjekker om JS-kode gitte koderegler 
* **JSHint** (2010) Anton Kovalyov. Fork av JSLint for bedre regeltilpassing 
* **ESLint** (2013) Nicholas C. Zakas. Utviklere skal kunne sette opp eget regelsett
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

note:  Eller som del av bygget


eslint --init generer  _.eslintrc.js fil for deg 

----

 _--init_  generer  _.eslintrc.js_-fil for deg

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
        "linebreak-style": [
            "error",
            "unix"
        ],
        "quotes": [
            "error",
            "double"
        ],
        ....
    }
```

note:

*eslint:recomended - fast anbefalt regelsett som kommer med eslint

HVIS SPM:
*linebreak; style
    "unix" (default) enforces the usage of Unix line endings: \n for LF.
    "windows" enforces the usage of Windows line endings: \r\n for CRLF.


----


## Strategi


```javascript
{ "extends": "airbnb-base" }
```

eller

```javascript
{
"extends": "eslint:recommended",
"rules": [.....]
}
```
 +
[prettier](https://github.com/prettier/prettier)


note:
* anbefaler en av standardende fra eslint init.
* Start med en gang > mindre smertefult å følge de, til tider strenge reglene
* Alternatvit å bruke estlints til å detektere regelbrudd og prettier til kodeformat
* Override med rules tilpasset egen kode
* Begynn i det små og legg til gradvis sterker og sterke regler

Prettier
    sta kodeformater
    omformaterer koden ON-THE-RUN

Airbnb
    både STIL og FEIL i koden. Kan være tungt å svelge 

----

<img src="http://localhost:1948/_assets/img/Hangman_game.png" alt="HangManStyle" style="width: 400px; height:300px"/>

---

# JavaScript / EcmaScript
 Syntaks - Sukker - Sirup

Note:
Vi skal nå se på statisk typing , men først litt om hvorr behovet kommer fra

* JS ikke skrevet for å lage store single-page applikasjoner.
* Store endringer siden V1
* Fortsatt grunnleggende egenskaper >  vanskelig å strukturere og organisere 
* Ikke alle trives med JS Syntaks jfr standard,  (slik det støttes av nettleseren)
* Et mylder av ulike språk som kan kompileres ned til JavaScript slik at det kan nyttes i nettlesern

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

* Effektivisere arbeidshverdagen 
* Uttrykke seg mer konsist,
  ** forståelig
  ** bygge strukturen i koden etter eget hjerte
* MEN uttrykker ingen ting MED enn JS
* kompileres  til JS som igjen tolkes av nettleseren


----

## Statisk vs dynamisk

* Statisk typede språk:  variabeltyper sjekkes compile-time
* Dynamsisk typede språk:  sjekkes først runtime
* * større frihet til å mikse typer 
* * kræsjer hvis det ikke tas høyde for typekonflikter

note:
# Hovedforskjeller mellom statis og dynamiske språk

# Fordeler ved DYNAMISK 

* Mer konsist / mindre verbost
* Slipper å vente på kompilering
  ** rett i interpreter
  ** umiddelbar feedback til utvikler
* Slipper å bruke tid på å uttrykke seg korrekt - mer fleksibilitet
* Slipper å refaktorisere hele kodebasen ved typeendringer
  ** Men må bruke tid på testing istede

----

## Fordeler med statisk typede språk

----

* Autofullfør & søk i koden - IDEen leder til funksjonsdefinisjon
* Økt selvdokumentasjon
* Reduserer uforutsette feil - eks typos, manglende parametere og brukerinputtvalidering
* Dokumenterer kontrakten med backend. Spesifiserer domeneobjekter

Note:

#hvorfor ønsker vi å tilføre kompleksistet til språket ved statisk typing

 ** 2 ulike tilnærminger til statisk typing
 ** gevinsten ved å gjøre dette

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
* Henter ut fordeler uten å miste følelsen av javascript
* Ligger som et lag ovenpå JS 
* Kjøres i bakgrunnen (-watch) eller IDE i tillegg til som del av byggget
* Sofistikert programanlyse innenfor kjente idiomer
* IKKE EN KOMPILATER MEN EN SJEKKER

----

### Type utledning

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

```bash
/git/myRepo $  node_modules/.bin/flow 
Error: src/error.js:7
  7: concat(1, 2); // Error!
            ^ number. This type is incompatible with the
expected param type of
  2: function concat(a: string, b: string) {
                        ^^^^^^ string
...
```
note: sier naturligvis i fra om begge tilfellene

----

### Typer

<p class="smaller">Rikt utvalg av typer og språklige features :</p>

* Primitive typer
* Komplekse typer, klasser, arv
* Enum
* Generics

...


----

###  non-nullable



```javascript
// @flow
function foo(num: number): string {
	if (num > 10) {
		return 'cool';
	}
}
// error: return undefined. This type is
// incompatible with string
```
note: sjekkeren gir feilmelding når man forsøker å bruke en verdi som kan være null

----

#### Sunnhet

```javascript
// @flow

function foo(x: ?number): string {
  if (x) {
    return x;
  }
  return "default string";
}
```

note: sjekker alle mulige gyldige verdier og utleder mulige utfall


----

```bash
/git/myRepo $ node_modules/.bin/flow 
Error: src/error.js:5
  5:     return x;
                ^ number. This type is incompatible with the
expected return type of
  3: function foo(x: ?number): string {
                               ^^^^^^ string
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

----

#### OG kjør!

```bash
/git/myRepo $ yarn run babel src/
/git/myRepo $ yarn add --dev flow-bin
/git/myRepo $ yarn run flow init
/git/myRepo $ yarn run flow status
```


----


_.flowconfig_

* linting for Flow
* use_strict
* suppress_type='anyother' // tillat any-type


Stram til løkka!


note:

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




---

<p style="background-color:#294E80; width: 200px; height: 150px; margin: auto">
<img src="http://localhost:1948/_assets/img/typescript_logo.svg" alt="Flow!" style="width: 200px; height:150px; border: none; margin: 0; padding: 8px"/>
</p>

> Typescript is a typed superset of JavaScript that compiles to plain
> JavaScript<br />
> <span class="smaller right">[typescript.org](https://www.typescriptlang.org/)</smaller>

<p class="smaller">Utviklet av Microsoft</p>


note:

* Baserer seg på ES6 (men videreutvikles mot ES7/8)
* Basserer seg på  annotasjoner i koden - men har også innebygget utleding (_inference_)
* kompileres (babelify/webpack) for å sjekke koden og fjerne annotasjonene 


Sentral forskjell mellom TS og Flow.
* flow-kode må fjernes annotasjonen (av feks Babel)
* TypeScript, derimot, er et språk
  ** implementerer både en type-sjekker og en trasnspiler som spytter ut
  kjørbar javascript.

----

### Utleding & annotasjoner 

```javascript
let a: string = 'Hello';
let b: number = 22;
let c = false;
let d = c + b; // Operator '+' cannot be applied to types 'number' and 'false'.
```

----

### Typer

* Rikt utvalg av typer og features
 <p class="smaller">men</p>
* Typer er nullable (må nullsjekkes)


----

### Komme igang

```bash
/git/myRepo $ npm install typescript
/git/myRepo $./node_modules/.bin/tsc hellovoid.ts
```
note: ekstremt lett å komme i gang
objektorientering i ryggmargen - mye java

----

_hellovoid.ts_


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

_.tsconfig.json_

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
    "include": ["src/**/*"],
    "exclude": ["node_modules"]
```


note: HVIS SPØRSMÅL

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
* Flow har bedre sunnhetsforståelse (unngå run-time-feil)
* TypeScript har bedre tooling
* Flow trenger i liten grad å skrive om koden 

note: Angular > TypeScript (java bakgrunn)
React > Flow

lagt opp i eksempler, tutorials og boilerplates

men kan velge selv



----

### Andre statisk typede språk

Som transpilerer til JavaScript

 Elm - Dart - TeJaSasm.js - JavaScript++ - MascaraRoy  - Swym - Typecast.js - PureScript - ActionScript - BuckleScript 

note: lang liste - bare å velge og vrakte til sitt formål

---

### Blir koden bedre?

----

* Lesbarhet - oversikt
* Syntaks-feil
* Sunnhet
* Garantere for data
* Dokumentasjon
* Skiller data og logikk



note:
* Gjenkjennelig stil
* Sunnhet: FLOW kan sjekke returverdier
* Feil ved brudd på interface/klasse-deklarasjon
* Definerer domene-objekter (må ikke overhodes fra backend)
* Slipper unæødvendige "er felt tilstede" sjekker


---

<img src="http://localhost:1948/_assets/img/wantyou.png" alt="You!" style="width: 400px; height:500px; border: none;"/>

note:
* KISS
* strukturer koden din
* vær nøye
* vis arbeidsstoltet
* husk at det er andre som skal jobbe videre på koden når du har reist
* gled deg til jul

---

## Takk for oppmerksomheten


<img src="http://localhost:1948/_assets/img/happy_santa.jpg" alt="Happy Santa!" style="width: 400px; height:300px;"/>

----

* https://flow.org/en/
* https://www.typescriptlang.org/index.html
* https://djcordhose.github.io/flow-vs-typescript/2016_hhjs.html
* https://eslint.org/

