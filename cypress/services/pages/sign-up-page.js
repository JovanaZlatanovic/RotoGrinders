import * as signUpSelectors from '/cypress/selectors/signUpSelectors.json'

export class SignUpPage {

    getUsername() {
        return cy.get(signUpSelectors.usernameField);
    }

    getEmail() {
        return cy.get(signUpSelectors.emailFieldList).eq(0);
    }

    getPassword() {
        return cy.get(signUpSelectors.passwordField);
    }

    getSignUpBtn() {
        return cy.get(signUpSelectors.signUpButton);
    }

    getRotoGrindersAppModal() {
        return cy.get(signUpSelectors.rotoGrindersAppModal);
    }
}

export default new SignUpPage()