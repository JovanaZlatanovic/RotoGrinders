import signUpPage from "../pages/sign-up-page";

export class SignUpSteps {

    signUpIsVisible() {
        signUpPage.getSignUpBtn().should('be.visible');
    }

    typeUsername(username) {
        signUpPage.getUsername().type(username);
    }

    typeEmail(email) {
        signUpPage.getEmail().type(email);
    }

    typePassword(password) {
        signUpPage.getPassword().type(password);
    }

    clickCreateAccount() {
        signUpPage.getSignUpBtn().click();
    }

    signUpWithUsernameOnly(username) {
        this.typeUsername(username);
        this.clickCreateAccount();
    }

    signUpWithEmailOnly(email) {
        this.typeEmail(email);
        this.clickCreateAccount();
    }

    signUpWithPasswordOnly(password) {
        this.typePassword(password);
        this.clickCreateAccount();
    }

    signUpWithUsernameAndEmail(username, email) {
        this.typeUsername(username);
        this.typeEmail(email);
        this.clickCreateAccount();
    }

    signUpWithUsernameAndPassword(username, password) {
        this.typeUsername(username);
        this.typePassword(password);
        this.clickCreateAccount();
    }

    signUpWithEmailAndPassword(email, password) {
        this.typeEmail(email);
        this.typePassword(password);
        this.clickCreateAccount();
    }

    signUpWithAllData(username, email, password) {
        this.typeUsername(username);
        this.typeEmail(email);
        this.typePassword(password);
        this.clickCreateAccount();
    }

    userIsOnRGPage() {
        cy.url().should('contain', Cypress.env('welcomeUrl'));
    }

    rotoGrindersAppModalIsDisplayed() {
        signUpPage.getRotoGrindersAppModal().should('be.visible');
    }

    errorIsDisplayed() {
        cy.contains(Cypress.env('errorIsDisplayed')).should('be.visible');
    }

    usernameIsRequiredValidation() {
        cy.contains(Cypress.env('usernameIsRequiredValidation')).should('be.visible');
    }

    emailIsRequiredValidation() {
        cy.contains(Cypress.env('emailIsRequiredValidation')).should('be.visible');
    }

    passwordIsRequiredValidation() {
        cy.contains(Cypress.env('passwordIsRequiredValidation')).should('be.visible');
    }

    alreadyTakenUsernameValidation() {
        cy.contains(Cypress.env('alreadyTakenUsernameValidation')).should('be.visible');
    }

    alreadyTakenEmailValidation() {
        cy.contains(Cypress.env('alreadyTakenEmailValidation')).should('be.visible');
    }

    invalidEmailValidation() {
        cy.contains(Cypress.env('invalidEmailValidation')).should('be.visible', { force: true });
    }

    invalidUsernameValidation() {
        cy.contains(Cypress.env('invalidUsernameValidation')).should('be.visible', { force: true });
    }

    invalidEmailFormatValidation() {
        cy.contains(Cypress.env('invalidEmailFormatValidation')).should('be.visible', { force: true });
    }
}

export default new SignUpSteps()