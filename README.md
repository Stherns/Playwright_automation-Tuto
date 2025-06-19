# 🎯 Playwright Automation Tutorial

Un projet complet de démonstration d’automatisation de tests end-to-end (E2E) avec **Playwright** en JavaScript/TypeScript.
L’objectif est de couvrir plusieurs fonctionnalités avancées de Playwright pour différents types d’interactions UI.

---

## 📚 Objectifs pédagogiques

* Maîtriser **Playwright** pour automatiser des tests web modernes.
* Manipuler plusieurs types de sélecteurs : CSS, XPath, role, label, text...
* Gérer des fenêtres multiples, frames, dropdowns, sliders, drag & drop...
* Travailler avec des fixtures, contextes et différents navigateurs.
* Illustrer la robustesse et la simplicité de Playwright dans des cas concrets.

---

## 🗂 Structure du projet

```bash
.
├── tests/
│   ├── cssAndXpathLocator.spec.js
│   ├── demo-todo-app.spec.js
│   ├── example.spec.js
│   ├── filterDemo.spec.js
│   ├── firsttest.spec.js
│   ├── fixturesAndContext.spec.js
│   ├── getByAltText.spec.js
│   ├── getByLabel.spec.js
│   ├── getByPlaceholder.spec.js
│   ├── getByRole.spec.js
│   ├── getByText.spec.js
│   ├── getByTitle.spec.js
│   ├── handleMultipleWindows.spec.js
│   ├── iframeDemo.spec.js
│   ├── keyBoardDemo.spec.js
│   ├── listDemo.spec.js
│   ├── locatorOperators.spec.js
│   ├── mouseOverAndMouseMove.spec.js
│   ├── radioAndCheckbox.spec.js
│   ├── rightClickAndDblClick.spec.js
│   ├── selectDynamicDropdown.spec.js
│   ├── selectStaticDropdown.spec.js
│   └── sliderOrDragAndDrop.spec.js
│
├── playwright.config.js
├── package.json
├── package-lock.json
└── README.md
```

---

## ⚙️ Technologies utilisées

* **Playwright** (`@playwright/test` v1.51.1)
* **Node.js** (v22+)
* **JavaScript (ES6)**

---

## 📦 Prérequis

* **Node.js** >= v18 ou v20 (v22 recommandé selon package.json)
* npm (ou yarn) installé

---

## 🛠 Installation

Cloner le projet :

```bash
git clone https://github.com/Stherns/Playwright_automation-Tuto.git
cd Playwright_automation-Tuto
```

Installer les dépendances :

```bash
npm install
```

Installer les navigateurs nécessaires à Playwright :

```bash
npx playwright install
```

---

## 📋 Configuration Playwright

La configuration se trouve dans `playwright.config.js`.
Quelques points clés :

* Exécution en parallèle possible
* Multi-navigateurs configurés : **Chromium, Firefox, WebKit, Edge, Chrome**
* Résolution par défaut : 500x300
* Retries automatiques activés : `retries: 1`
* Timeout configurable

Extrait :

```javascript
projects: [
  { name: 'chromium', use: { ...devices['Desktop Chrome'] } },
  { name: 'firefox', use: { ...devices['Desktop Firefox'] } },
  { name: 'webkit', use: { ...devices['Desktop Safari'] } },
  { name: 'Microsoft Edge', use: { channel: 'msedge' } },
  { name: 'Google Chrome', use: { channel: 'chrome' } }
],
```

---

## 🔎 Exemples de cas de tests couverts

### 1️⃣ Gestion multi-fenêtres — `handleMultipleWindows.spec.js`

```javascript
const { test, expect } = require('@playwright/test');

test('Handle Multiple Windows or Tabs', async ({ browser }) => {
  const context = await browser.newContext();
  const page = await context.newPage();
  await page.goto('https://training.rcvacademy.com/');

  const [newPage] = await Promise.all([
    context.waitForEvent('page'),
    page.locator("xpath selector ici").click()
  ]);

  await newPage.getByRole('button', { name: 'Cancel' }).click();
  await newPage.getByRole('textbox', { name: 'Your name' }).pressSequentially('MOUSSAVOU', { delay: 500 });
  await page.close();
});
```

### 2️⃣ Sélecteurs avancés

* `getByRole.spec.js` — usage des rôles ARIA
* `getByLabel.spec.js` — champs formulaires par label
* `getByText.spec.js` — sélecteurs par texte partiel
* `getByTitle.spec.js` — via attribut title

### 3️⃣ Autres interactions UI

* `radioAndCheckbox.spec.js`
* `sliderOrDragAndDrop.spec.js`
* `rightClickAndDblClick.spec.js`
* `selectDynamicDropdown.spec.js`

---

## 🚀 Exécution des tests

Pour lancer tous les tests :

```bash
npx playwright test
```

Lancer un test spécifique :

```bash
npx playwright test tests/handleMultipleWindows.spec.js
```

Exécuter en mode headful (avec UI visible) :

```bash
npx playwright test --headed
```

Pour voir les traces en mode interactif après l’échec d’un test :

```bash
npx playwright show-report
```

---

## 📊 Rapport

À chaque exécution, Playwright génère automatiquement un **rapport HTML interactif** via :

```bash
npx playwright show-report
```

---

## 🚩 Extensions possibles

✅ Intégration dans une CI/CD (GitHub Actions, GitLab CI, Jenkins…)
✅ Génération de tests via Playwright Codegen
✅ Scénarios mobiles (Pixel, iPhone) via `devices`
✅ Ajout de fixtures globales et hooks avant/après tests

---

## 📄 Licence

Licence MIT

---
