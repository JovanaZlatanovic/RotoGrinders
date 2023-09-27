# RotoGrinders Project in Cypress

## Getting started

RotoGrinders Automated UI tests serve to confirm and improve the quality of the application. In this project, we use Cypress and JavaScript.


Test sections:
* Sign-up tests


Tests can be performed on multiple environments, while those environments are defined in the cypress.config.js file.
Also, it is possible to run it on multiple browsers [chrome, electron, firefox, edge ] and run tests by tags. Report generation is done in both ways, html and xml and you can find them in the Reports directory. And after each successful and unsuccessful test, we get a screenshot for easier debugging and finding defects in the app.

The Selectors directory contains json files in which we store the selectors of each page.

Services are branched into Page and Steps, while Page classes are responsible for using selectors and creating Locator elements from them, which we later use in Steps classes to create user-like tests.

The tests directory contains the tests, and there we directly use the steps functions from the steps class to form the test.
The test data directory is used to store all test data that we use for assertion.


Needed installation locally:

Visual Studio
node.js

The first thing you need to do is install all the necessary packages that this project uses. Write the command below in your terminal.

npm install
npx cypress install


Setup tag structure
tags = {"@smoke or @regression or @healthCheck"}

Page Object Pattern ready
The Page-Object-Pattern is used in the framework.

Take Screenshots
On test failures, screenshots will automatically be taken and stored in the work directory. The screenshot files

Credentials
All needed data is stored in cypress.env.json.file.


Running tests

"npx cypress run --env environment=${ENVIRONMENT},grepTags=${TAGS} --browser ${BROWSER} --spec ${SPEC}"

For instance:
npx cypress open --env environment=dev,grepTags=@regression - regression tests on the dev environment

npx cypress open --env environment=dev,grepTags=@smoke - smoke tests on dev environment


Note: cy.viewport (412, 914) provides mobile simulation for Samsung Galaxy A51 / A71, which is used by a large number of people, for this reason, it is taken as an example for these tests. Of course, it is possible to set other resolutions, depending on the testing goals.


Jenkins setup
 1. Jenkins file is created inside project
 2. Jenkins setup: In project folder select "New Item" 
 3. Then select "Pipeline"
 4. Input project data(Description, GitLab Connection)
 5. Pipeline --> Definition : Pipeline wcript from SCM; SCM : Git, Repository url: "your path on git from project", Credentials: xxx 
 6. Branches to build : Branch Specifier --> for instance: */main
 7. Repository browser : (Auto)
 8. Script Path : JenkinsFile, Check Lightweight checkout --> Save