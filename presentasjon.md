## Eika case study

#### Wazzup hos Eika forsikring anno 2023

<section data-auto-animate>
    <img src="http://localhost:1948/_assets/img/eika-main.png" alt="Eika logo - eikeblad" class="eikalogo"/>
</section>
<section data-auto-animate>
  <img src="http://localhost:1948/_assets/img/scrat.webp" alt="Scrat" class="eikalogo"/>
</section>

<br />

<p class="copy" ><sub>&copy;Ratatosk productions inc</sub></p>

---

### Eika-alliansen

> &quot;Eika Alliansen består av over 50 lokalbanker, Eika Gruppen og Eika Boligkreditt. Vi ønsker at privatpersoner og bedrifter i hele landet skal oppleve fordelene med sterke og omsorgsfulle banker i sitt eget nærområde. Vi vil være en drivkraft for bærekraftig vekst og utvikling - både for deg og ditt lokalsamfunn. &quot;

---

### Eika-forsikring

<p class="leftify"> 
Administrerer person- og skadeforsikringsløsninger på vegne av de 50+ lokalbankene i Eika-gruppen,
samt en håndfull partnere<sup class="footnote">[1]</sup>
</p>
<sub class="footnote mt" style="--mt:18rem">[1]: Eika-partnere er ikke fullverdige lokalbanker, men samarbeidspartnere som tilbys et utvalg produkter.</sub>

---

### Personforsikring

> &quot;Det er mye vi kan planlegge her i livet, men å forutse fremtiden kan ingen. Det eneste vi kan gjøre er å sikre oss som best vi kan - passe på de vi er glade i - beskytte flokken vår. Du kan ikke forsikre kjærligheten. Men du kan forsikre deg av kjærlighet - derfor kaller vi det Kjærlighetsforsikringer! &quot;

<ul class="ml" style="--ml:8rem">
<li>Forsikring ved kritisk sykdom</li>
<li>Barneforsikring</li>
<li>Dødsfallforsikring</li>
<li>Uføreforsikring</li>
</ul>

<!--v-->

### Ansvarsområde

<dl class="responsibilities">
 <dt>salgsfront-intraweb</dt><dd>Internt salgsverktøy (Angular 1.5)</dd>
 <dt>helseerklæring-intraweb</dt><dd> Arbeidslista  - internt admintool</dd>
 <dt>helseerklæring-web</dt><dd>Utfylling av helseerklæring (Magnum) </dd>
 <dt>person-web</span></dt><dd> Utfylling av helseerklæring (Reflex)</dd>
 <dt>person-partner-web</dt><dd>Ekstern salgsløsning for partnere</dd>
 <dt>barneforsikring-web</dt><dd>Kunde direktesalg ++ </dd>
</dl>

<!--v-->

### Delt ansvar

#### ===

#### ingens ansvar

<dl class="responsibilities">
 <dt>min-side-web</dt><dd>Integrering mot felles kunde-plattform </dd>
 <dt>partner-web</dt><dd>Rendring av apper utenfor tradisjonell Eika-kontekst (SiteCore emulering)</dd>
 <dt>intraweb-styleguide</dt><dd>Felles komponenter for alle Eikas intraweb-apper</dd>
 <dt>forsikring-styleguide</dt><dd>Felles komponenter for forsikrings-apper</dd>
 <dt>frontend-utils</dt><dd>Workspace-basert multi-repo med ulike frontendbiblioteker</dd>
</dl>

<!--v-->

<ul class="leftify mt" style="--mt:2rem">
    <li><i>DMZ</i> backends</li>
    <li><i>MZ</i> services</li>
    <li>Rundeck-kontrollerte services, proxies, mv</li>
</ul>

<!--v-->

### Helseerklæring

<p class="leftify">
En helseerklæring er et skjema som det er lovpålagt å fylle ut når man kjøper personforsikring. Helseerklæringsskjemaet inneholder spørsmål om din helse, yrke og livsstil. Vi trenger denne informasjonen for å kunne beregne riktig pris og vilkår for deg <sup class="footnote">[1]</sup>.
</p>

<p class="leftify">
Underwriter er en forsikringsspesialist som vurderer og avgjør om og på hvilke betingelser en risiko kan overtas. 
<sup class="footnote">[2]</sup>
</p>

<p class="leftify">
Reflex er et system for å samle inn data og beregne risiko forbundet med personforsikring. Levert av HannoverRe
</p>

<sub class="footnote mt" style="--mt:4rem">
[1]: Sparebank 1 <br />
[2]: Store Norske Leksikon

</sub>

<!--v-->

### NICE

<p class="leftify">
Fagsystem som ligger til grunn for forsikringene som tilbys hos Eika kalles NICE (Norwegian Insurance Computer Environment) og eies av Vitec Nice. Systemet utvikles i IBM RPG<sup class="footnote">[1]</sup> og har store lokale tilpassninger hos Eika - eget team
</p>

<sub class="footnote mt" style="--mt:16rem">[1]:
RPG is a high-level programming language for business applications, introduced in 1959 for the IBM 1401. It is most well known as the primary programming language of IBM's midrange computer product line, including the IBM i operating system. RPG has traditionally featured a number of distinctive concepts, such as the program cycle, and the column-oriented syntax. The most recent version is RPG IV, which includes a number of modernization features, including free-form syntax.

</sub>

---

### Løsningene

<strong>Eika-bootstrap</strong> genererer repo som inkluderer både frontend (React) og _backend-for-frontend_. Disse settes opp med standard Eika avhengigher - maven og npm. det er bare å fjerne de man ikke trenger, bygge og kjøre `npm start`

<!--v-->

### Typisk repo

```bash
> ls -la
-rw-r--r-- 1 hansogj hansogj  357 aug.  29 15:01 eikacli-local.yaml
-rw-r--r-- 1 hansogj hansogj  380 aug.   7 14:36 forsikring-person-web.iml
-rw-r--r-- 1 hansogj hansogj  411 feb.  27  2023 Jenkinsfile
-rw-r--r-- 1 hansogj hansogj  30K aug.  29 15:01 pom.xml
drwxr-xr-x 5 hansogj hansogj 4,0K aug.  30 16:33 react-app/
-rw-r--r-- 1 hansogj hansogj 2,2K nov.   2  2022 README.md
drwxr-xr-x 4 hansogj hansogj 4,0K aug.  30 16:33 src/

> ls -la react-app/
-rw-r--r--  1 hansogj hansogj  290 april 12 11:53 babel.config.json
-rw-r--r--  1 hansogj hansogj 4,8K aug.  30 08:18 package.json
-rw-r--r--  1 hansogj hansogj 1,5M aug.  29 15:01 package-lock.json
-rw-r--r--  1 hansogj hansogj 2,5K aug.  29 15:01 README.md
drwxr-xr-x 13 hansogj hansogj 4,0K aug.  30 16:33 src/
-rw-r--r--  1 hansogj hansogj  250 nov.   2  2022 tsconfig.json
-rw-r--r--  1 hansogj hansogj 2,1K aug.  17 08:23 webpack.config.js

```

<!--v-->

#### npm dependencies

```json
{
  "@eika-infrastruktur/dependencies4lib-react": "3.0.10",
  "@eika-infrastruktur/dependencies4lib-redux": "1.7.9",
  "@eika-infrastruktur/mobilbank-lib": "5.2.0",
  "@eika-infrastruktur/request": "4.2.0",
  "@eika-infrastruktur/ui-engine-render": "3.0.0",
  "@eika/button": "7.0.9",
  "@eika/card": "4.8.2",
  "@eika/checkbox": "1.12.11",
  "@eika/core-style": "4.8.2",
    ....
}
```

#### npm devDependencies

```json
{
  "@eika-infrastruktur/config-provider": "^2.2.0",
  "@eika-infrastruktur/dependencies4lib-babel-dev": "4.7.0",
  "@eika-infrastruktur/dependencies4lib-redux-dev": "2.0.11",
  "@eika-infrastruktur/dependencies4lib-test-typescript-dev": "4.2.4",
  "@eika-infrastruktur/eslint-config-typescript-dev": "3.2.3",
  "@eika-infrastruktur/prettier-config": "1.0.11",
  "@eika-infrastruktur/style-web-lib": "8.7.28",
  "@eika-infrastruktur/webpack-dev": "11.2.3",
  "@eika/engine-view": "3.9.57",
  ...
  "webpack-cli": "5.1.4"
}

```

<!--v-->

### SiteCore

[coldsweat]: http://localhost:1948/_assets/img/coldsweat.png

- CMS
- CDN
  - react.js, core.js
  - theme, css
  - grid, kort, paneler
- Injserer micro-frontends
  - html-containers
  - `<script data-react="app-name" ... >{config}</script>`
  - react-bundles
  - `<link rel="preload" href=".../app.js" as="script" />`
- Granulert konfigurering
  - eika (global)
  - mobilbank
  - 50+ lokalbanker ![header-gif][coldsweat]
  - test, qa, prod ![header-gif][coldsweat] ![header-gif][coldsweat] ![header-gif][coldsweat]

<!--v-->

```html
<header>
  <script type="text/javascript" src="/eika/react.js" />
  <link rel="stylesheet" href="eika/theme.[green|blue|gray|yellow].css" />
  <link rel="stylesheet" href="/eika/global.css" />
</header>
...

<div class="container-cards sgw-layout-item  ">
  <div class="container-content">
    <script
      data-react="forsikring.[app-name]"
      data-src="/forsikring-[app-name]-web/app.js"
      data-css-src="/forsikring-[app-name]/app.css"
      type="text/json"
    >
      {
          "bankregnr": "0770",
          "data": {
          "siteLang": "nb",
          "links": { exit: { title: "Gå til forsiden", url: "www.eika.no" }, ... },
              text: { "main.header": "Velkommen til Eika", ... }
          }
      }
    </script>
    <link rel="preload" href="/forsikring-[app-name]/app.js" as="script" />
    <link rel="preload" href="/forsikring-[app-name]/app.css" as="style" />
  </div>
</div>
```

<!--v-->

#### 2 bygg fra webpack

- Bygg for deployment til SiteCore som rendres inn i matchende container
- Bygg for lokal utvikdling. Dette bygget kommer med en engine som rendrer applikasjonen og angir (_provider_) konfigurasjon (default values)

<!--v-->

### App injection 3

```tsx
import loadContainers from "@eika-infrastruktur/ui-engine-render";
import React from "react";
import { Provider } from "react-redux";
import { defaultConfig } from "./config/default-config";
import { App as BarneforsikringApp } from "./containers/App";
import { store } from "./redux";

const globalCssNamespace = "no-eika-barneforsikring";
const REPO_NAMESPACE = "forsikring-person";

const renderApp = (
  MyApp: React.ComponentType,
  namespace: string,
  appDefaultConfig: Record<string, unknown> = defaultConfig
): void => {
  loadContainers(
    `${REPO_NAMESPACE}.${namespace}`,
    () => (
      <React.StrictMode>
        <Provider store={store}>
          <div className={globalCssNamespace}>
            <MyApp />
          </div>
        </Provider>
      </React.StrictMode>
    ),
    appDefaultConfig
  );
};

renderApp(BarneforsikringApp, `barneforsikring`);
```

<!--v-->

### EikaCli

`ec deploy -b -e qa`

<p class="leftify">
Eika-klienten blir hyppig brukt til ting som å klone nytt repo, deploye ulike branches til ulike miljø, generere RFC og releases, aksessere logger og å sjekke ukas lunsj-meny. Kjekt verktøy med ok interaktivt grensesnitt
</p>

```yml
// eikacli-local.yaml
maintainer_team: forsikring-person
systemeier: ms@eika.no
release_ansvarlig: kkr@eika.no
fagansvarlig: mk@eika.no
tester:
  - pb@eika.no
default-reviewers:
  - h805168 # Hans Ole
  - H805331 # Nikolai
  ....

```

---

### P1: Reflex Helseerklæring

- Utgående avtale på Magnum (tidsramme ett år)
- Migrere til Reflex levert av HannoverRe (tysk/svensk)
- Overfladisk forarbeide - mange uklarheter

<!--v-->

#### Tre mulige tilnærmelser

- Komplett løsning / hyllevare
  - Kjøpe både frontend og backend som ferdige moduler.
  - Ingen Eika-profilering
- Semi-integrasjon
  - Frontend-modul fra HannoverRe
  - Bygge egen backend med integrasjon mot HannoverRe.
  - Uvisst omfang på oppgaven
- Ren integrasjon
  - Utvikle egen frontend og egen backend imot integrasjoner fra HannoverRe.
  - Meget stor og tidkrevende oppgave

<!--v-->

<img src="http://localhost:1948/_assets/img/reflex-flow.png" alt="reflex-flow" />

<!--v-->

#### Web-component

```js
import "reflex-cep-questionnaire/polyfills";
import "reflex-cep-questionnaire/questionnaire";
```

```js
export default `
<cep-web-questionnaire id="cep-web-questionnaire">
    <div slot="before">
        <cep-web-question-reminder [offset]="54"></cep-web-question-reminder>
        <cep-web-blocked-pagination-alert></cep-web-blocked-pagination-alert>                
    </div>
    <div slot="after">
    <cep-web-prev-next-pagination></cep-web-prev-next-pagination>
        <cep-web-questionnaire-legend></cep-web-questionnaire-legend>
    </div>               
</cep-web-questionnaire>`;
```

<!--v-->

```tsx
/* eslint-disable react/no-danger */
import React, { FC } from "react";
import { useRouteMatch } from "react-router";
import { paths } from "../../paths";
import { Container, ContentCard } from "../Presentation";
import __html from "./questionnaire.dangerous.html";
import "./styles/index.scss";

export const ReflexPreloader: FC = () => (
  <Container hidden={!useRouteMatch(paths.sak.reflex.assessment)} expanded={false}>
    <ContentCard className="leftify">
      <div className="reflex-questionnaire" dangerouslySetInnerHTML={{ __html }} />
    </ContentCard>
  </Container>
);
```

<!--v-->

```tsx
    const QuestionnaireComponent = () => {
    ...
    useEffect(() => {
        configureSubmitButton(questionnaireEvent, submitRef.current);
        focusFirstInput(questionnaireEvent);
        dispatchEvent(questionnaireEvent, onEvent);
        scrollToTop(questionnaireEvent, namespace);
        restrainNumberInput(questionnaireEvent, namespace);
        triggerSubmitModal(questionnaireEvent, setShowConfirmModal);
    }, [questionnaireEvent, onEvent, namespace]);
    ...

```

<!--v-->

```json
{
  "defaultTranslation": "no",
  "autoSubmit": "reflexive",
  "autoSaveEnabled": true,
  "autoSaveInterval": 10000,
  "backendTimeoutWarning": 15000,
  "backendTimeout": 20000,
  "minLettersForSearch": 2,
  "showCheckboxKey": true,
  "showParentValidations": true,
  "initialAnswerByProductChangeMarked": true,
  "api": {
    "urlPrefix": "/reflex-proxy-web/cep-core",
    "assessmentService": {
      "assessmentPath": "/assessment",
      "search": "/search"
    },
    "documentServicePath": "/documents"
  },
  "questionAnnotation": {
    "required": false,
    "optional": "denote"
  },
  "pagination": {
    "freePagination": false,
    "ignoreValidityOnBackwardsPagination": true,
    "dismissAlertDelay": 10000
  },
...
}
```

<!--v-->

#### Signering

```tsx
const SignDocumentsComponent = ({ inlineSignUrl: src, title }: SakComponentProps) => {
  useEffect(() => {
    window.scroll(0, 0);
  }, []);
  return (
    <ContentCard {...{ className: "sign-documents-container", title }}>
      {src ? <iframe {...{ title, src }} /> : <Loader />}
    </ContentCard>
  );
};
```

```ts
export function* counterRaceController() {
  const counter: number = yield select(getCepCounter);

  if (counter === 0) {
    yield put({ type: CepCounterActions.START_RACE });
    yield put({ type: CepCounterActions.ITERATE });
    yield delay(cepRace.idleTimeLimit);
    yield put({ type: CepCounterActions.DELAY_TIMED_OUT });
  } else if (counter < cepRace.eventsLimit) {
    yield put({ type: CepCounterActions.ITERATE });
  } else {
    yield put({ type: CepCounterActions.REACHED_MAX_LIMIT });
  }
}
```

---

### P2: Partnerløsnig (partner-web)

- Apper distribuert og konfigurert vha SiteCore
- Ikke mulig å koble på partner uten bank-tilknytning - økt satsning
- Hver applikasjon satt opp med mange bygg
  - SiteCore (nytt design)
  - Gammel SiteCore (design)
  - Developement (localhost)
  - Partner (stand alone)
- Løsning: ny applikasjon for å emulere SiteCore på standard bygg

<!--v-->

#### Generator

```js
if (mode === "app") {
  return mkDir(paths.applications(target))
    .then(() => writeFile(paths.applications(target, "index.ts"), app.indexTs))
    .then(() => writeFile(paths.applications(target, "config.json"), app.configJson))
    .then(() => writeFile(paths.applications(target, "env.data.config.json"), app.envDataConfig))
    .then(() => readFile(reactRenderContainerHtml()))
    .then((data) => writeFile(reactRenderContainerHtml(), data.replace(anchor, `${app.container}\n${anchor}`)))
    .then(() => console.log(`${target} ble generert i ${paths.applications(target)}`))
    .catch((err) => console.error(err));
}

if (mode === "partner") {
  return mkDir(paths.partners(target))
    .then(() => shell(`cp -r ${paths.templateAssets()}  ${paths.partners(target)}`))
    .then(() => writeFile(paths.partners(target, "main.ts"), partner.mainTs))
    .then(() => writeFile(paths.partners(target, "style.scss"), partner.styleScss))
    .then(() => writeFile(paths.partners(target, "config.json"), partner.configJson))
    .then(() => writeFile(paths.partners(target, "index.html"), partner.indexHtml))
    .then(() => console.log(`${target} ble generert i ${paths.partners(target)}`))
    .catch((err) => console.log(err));
}
```

<!--v-->

#### Fil-struktur

```bash
> tree src/applications
├── avtalegiro-kvittering-web
├── barneforsikring-web
...
└── ungforsikring-web-detaljer

> tree src/partners
├── econa
├── fana
└── more

```

<!--v-->

#### Bygg-struktur

```bash
> tree build
├── econa
│   ├── avtalegiro-kvittering-web
│   ├── barneforsikring-web
│   ...
│   └── ungforsikring-web-detaljer
├── fana
│   ├── avtalegiro-kvittering-web
│   ├── barneforsikring-web
│   ...
│   └── ungforsikring-web-detaljer
└── more
    ├── avtalegiro-kvittering-web
    ├── barneforsikring-web
    ...
    └── ungforsikring-web-detaljer
```

<!--v-->

#### Url-struktur

```js
 urls = [
  `${window.location}/econa/avtalegiro-kvittering-web/`,
  `${window.location}/econa/barneforsikring-web/`,
  `${window.location}/econa/ungforsikring-web-detaljer/`,
  `${window.location}/fana/avtalegiro-kvittering-web/`,
  `${window.location}/fana/barneforsikring-web/`,
  `${window.location}/fana/ungforsikring-web-detaljer/`,
  ...
 ]
```

<!--v-->

#### Rendering

```tsx
export const scriptInjector = ({ reactApp, appSrc, appCssSrc, appConfig }: ScriptInjectorProps): DocumentFragment => {
  const content = html(`<script
        async    
        type="text/json"
        data-react="${reactApp}"
        data-src="${appSrc}" 
        data-css-src="${appCssSrc}"  
    >${JSON.stringify(appConfig, null)}</script>`);

  return find(`[data-react-component="${reactApp}"]`, document.body)
    .map((container) => container.parentNode)
    .filter((container) => !!container)
    .map((container) => container!.appendChild(content))
    .shift()!;
};
```

<!--v-->

### Demotid

```bash
>  npm run generate -- --partner new-partner
>  npm run generate -- --app new-app

```

---

### P3: Econa

- Fordelsprogram gjennom medlemskap i Econa
- Tilbyr selv forsikring
- Ønsket vurdering av helseerklæring gjennom Eika

<!--v-->

#### Utfordinger

- Løsningen (as is) tett knyttet opp imot NICE
- Innlogging til intraweb
- Intarweb, et forsømt barn
  -Kraftig løft av <strong>intraweb-styleguide</strong>

---

### P4: Barneforskring

- Første direktesalg av personforsikring
- Standard CR(UD)-app
- Flaskehals i NICE-systemet

---

### Next step

- Reflex 2.x
- Econa 2.x - hallo iterasjon

---

### Summa summarum

- Hyggelig sosialt miljø
- Effektiv corona-onboarding
- Løser oppdraget fra oppdragsgivere
- Sterk vekst i salg av forsikringer
- Reflex & partner-løsning

<!--v-->

### men også

- 50+ kokker - er det skalerbart?
- Min tue!!!
- Fortsatt frykt etter Terra-skandalen
- Budsjettrammer & vannfall
