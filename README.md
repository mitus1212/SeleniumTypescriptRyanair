# qa-web-challenge
## Requirements
- Please automate a test to search for a flight, select VALUE/BASIC fare, skip login after fare select, navigate through extras pages selecting seats and 20kg bags and verify a login popup is displayed before payment on https://www.ryanair.com/ie/en/
- Use any one of the following languages:
  - JavaScript (selenium-webdriver) - preferred
  - Java
  - Python
- Use Page Object Pattern
- Give some documentation on why you chose what you did and documentation on how to run these tests
- Show reporting for your results
- We are fans of BDD and Cucumber in Ryanair, use these if you can
- Use all your testing and programming skills to prove your knowledge & ability

## Example test input
```
Given I search for a flight from "DUB" to "STN" on 12/01/2023 for 2 adults and 1 child
When I proceed to pay with selected seats and 20kg bags added
Then login popup shows up
```



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
