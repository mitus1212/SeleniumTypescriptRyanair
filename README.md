Tests were implemented using Typescript and Selenium-webdriver.
The newest nodeJs installed is required to run the tests.

Before running tests, you need to install the dependencies:
```
npm install --save-dev
```
To run tests:
```
npm run test
```
To analyze the code run eslint:
```
npm run lint
```

* Function countTimesToClick() is working only for the current and next year because Ryanair's schedule is only 1 year ahead.
* The scenario has more steps for a better debugging process and the smaller steps could be reused easier.
* The env file is separately created in the GitHub workflow from the provided github's secrets to assure data security.
* The reports are generated using different formats(xml, txt, html, json) in the "/reports" folder, which can be gathered and imported to visualization tools.
