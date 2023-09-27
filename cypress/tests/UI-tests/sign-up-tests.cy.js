/// <reference types="Cypress" />
import signUpSteps, { SignUpSteps } from "../../services/steps/sign-up-steps";


describe('Sign up page suite', () => {
    beforeEach('Visit page', () => {
        cy.clearLocalStorage();
        cy.viewport(412, 914);
        cy.visit('/');
    })

    it('Account creating', { tags: ['@regression'] }, () => {
        signUpSteps.signUpWithAllData(Cypress.env('validUsername'), Cypress.env('validEmail'), Cypress.env('validPassword'));
        signUpSteps.rotoGrindersAppModalIsDisplayed();
        signUpSteps.userIsOnRGPage();
    });

    it('Account creation without data', { tags: ['@smoke', '@regression'] }, () => {
        signUpSteps.clickCreateAccount();
        signUpSteps.errorIsDisplayed();
        signUpSteps.usernameIsRequiredValidation();
        signUpSteps.emailIsRequiredValidation();
        signUpSteps.passwordIsRequiredValidation();
    });

    it('Account creation with a username only', { tags: ['@smoke', '@regression'] }, () => {
        signUpSteps.signUpWithUsernameOnly(Cypress.env('testUsername'));
        signUpSteps.errorIsDisplayed();
        signUpSteps.emailIsRequiredValidation();
        signUpSteps.passwordIsRequiredValidation();
    });

    it('Account creation with email only', { tags: ['@smoke', '@regression'] }, () => {
        signUpSteps.signUpWithEmailOnly(Cypress.env('testEmail'));
        signUpSteps.errorIsDisplayed();
        signUpSteps.usernameIsRequiredValidation();
        signUpSteps.passwordIsRequiredValidation();
    });

    it('Account creation with a password only', { tags: ['@smoke', '@regression'] }, () => {
        signUpSteps.signUpWithPasswordOnly(Cypress.env('testPassword'));
        signUpSteps.errorIsDisplayed();
        signUpSteps.usernameIsRequiredValidation();
        signUpSteps.emailIsRequiredValidation();
    });

    it('Account creation with username and email', { tags: ['@smoke', '@regression'] }, () => {
        signUpSteps.signUpWithUsernameAndEmail(Cypress.env('testUsername'), Cypress.env('testEmail'));
        signUpSteps.errorIsDisplayed();
        signUpSteps.passwordIsRequiredValidation();
    });

    it('Account creation with username and password', { tags: ['@smoke', '@regression'] }, () => {
        signUpSteps.signUpWithUsernameAndPassword(Cypress.env('testUsername'), Cypress.env('testPassword'));
        signUpSteps.errorIsDisplayed();
        signUpSteps.emailIsRequiredValidation();
    });

    it('Account creation with email and password', { tags: ['@smoke', '@regression'] }, () => {
        signUpSteps.signUpWithEmailAndPassword(Cypress.env('testEmail'), Cypress.env('testPassword'));
        signUpSteps.errorIsDisplayed();
        signUpSteps.usernameIsRequiredValidation();
    });

    it('Account creation with already taken username and other data', { tags: ['@smoke', '@regression'] }, () => {
        signUpSteps.signUpWithAllData(Cypress.env('testUsername'), Cypress.env('testEmail'), Cypress.env('testPassword'));
        signUpSteps.errorIsDisplayed();
        signUpSteps.alreadyTakenUsernameValidation();
    });

    it('Account creation with already taken username ', { tags: ['@smoke', '@regression'] }, () => {
        signUpSteps.signUpWithUsernameOnly(Cypress.env('testUsername'));
        signUpSteps.errorIsDisplayed();
        signUpSteps.emailIsRequiredValidation();
        signUpSteps.passwordIsRequiredValidation();
        signUpSteps.alreadyTakenUsernameValidation();
    });

    it('Account creation with already taken email and other data', { tags: ['@smoke', '@regression'] }, () => {
        signUpSteps.signUpWithAllData(Cypress.env('testUsername'), Cypress.env('validEmail'), Cypress.env('testPassword'));
        signUpSteps.errorIsDisplayed();
        signUpSteps.alreadyTakenEmailValidation();
    });

    it('Account creation with already taken email', { tags: ['@smoke', '@regression'] }, () => {
        signUpSteps.signUpWithEmailOnly(Cypress.env('validEmail'));
        signUpSteps.errorIsDisplayed();
        signUpSteps.usernameIsRequiredValidation();
        signUpSteps.passwordIsRequiredValidation();
        signUpSteps.alreadyTakenEmailValidation();
    });

    //username with space
    it('Account creation with invalid username and other data', { tags: ['@smoke', '@regression'] }, () => {
        signUpSteps.signUpWithAllData(Cypress.env('usernameWithSpace'), Cypress.env('testEmail'), Cypress.env('testPassword'));
        signUpSteps.errorIsDisplayed();
        signUpSteps.invalidUsernameValidation();
    });

    // username as an email
    it('Account creation with invalid username and other data', { tags: ['@smoke', '@regression'] }, () => {
        signUpSteps.signUpWithAllData(Cypress.env('testEmail'), Cypress.env('testEmail'), Cypress.env('testPassword'));
        signUpSteps.errorIsDisplayed();
        signUpSteps.invalidUsernameValidation();
    });

    it('Account creation with username long 100 characters', { tags: ['@smoke', '@regression'] }, () => {
        signUpSteps.signUpWithAllData(Cypress.env('usernameWith100characters'), Cypress.env('testEmail'), Cypress.env('testPassword'));
        signUpSteps.errorIsDisplayed();
    });

    it('Account creation with non-existent email email and other data', { tags: ['@smoke', '@regression'] }, () => {
        signUpSteps.signUpWithAllData(Cypress.env('testUsername'), Cypress.env('notExistentEmail'), Cypress.env('testPassword'));
        signUpSteps.errorIsDisplayed();
    });

    it('Account creation with email long 100 characters', { tags: ['@smoke', '@regression'] }, () => {
        signUpSteps.signUpWithAllData(Cypress.env('testUsername'), Cypress.env('emailLong100Characters'), Cypress.env('testPassword'));
        signUpSteps.errorIsDisplayed();
        signUpSteps.invalidEmailFormatValidation();
    });

    //this test fails --> there is no limit for password 
    it('Account creation with password long 50 characters', { tags: ['@smoke', '@regression'] }, () => {
        signUpSteps.signUpWithAllData(Cypress.env('testUsername2'), Cypress.env('testEmail2'), Cypress.env('passwordLong100Characters'));
        signUpSteps.errorIsDisplayed();
        signUpSteps.invalidEmailFormatValidation();
    });
})