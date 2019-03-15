/* eslint-disable spaced-comment */
/* eslint-disable no-undef */

/// <reference types="Cypress" />

context('Application', () => {
    beforeEach(() => {
        cy.restoreLocalStorage();
        cy.visit('http://localhost:8080');
    });

    afterEach(() => {
        cy.saveLocalStorage();
    });

    it('App should show search input by default', () => {
        cy.get('.search-input').should('exist');
    });

    it('App should search something', () => {
        cy.get('input').first().type('star wars');
        cy.get('button[type="button"]').first().click();
        cy.get('.movie-card').should('exist');
    });

    it('App should restore state', () => {
        cy.get('.movie-card').should('exist');
    });
});
