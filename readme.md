# Welcome to my eCommerce Site Test Automation Suite!

This is a sample project that includes some automated UI tests for the eCommerce site [Etsy](www.etsy.com).  It is written in TypeScript using the [WebdriverIO](www.webdriver.io) automation framework.  JavaScript is the language of the browser, so it is my preference to use it for web UI automation projects.  TypeScript was chosen for its type-safety and other benefits over vanilla JS.  WebDriverIO was chosen as the framework because it is incredibly easy to use, does not have a DSL, and with very little configuration runs on major browsers locally or in other environments.

## Overview

This project follows the popular Page Object Model for UI automation.  It treats individual web pages and components of pages (e.g., navigation bars, modal dialogues, etc) as programmatic objects that can be reused across the entire test suite.

```
.
├── test                             //root
│   ├── data                         //json data files 
│   ├── pageobjects                  //page object repositories
│   |  └── components                //smaller components
│   ├── specs                        //test scripts
|   |  ├── e2e                       //end-to-end tests
│   |  └── features                  //modular tests of specific features or pages
```

## Getting started

Pre-requisites that need to be installed:
- NodeJS
- TypeScript
- Yarn

Install dependencies:
`yarn`

Create environment variables:
`cp example.env .env`

Run the tests:
`yarn test`
