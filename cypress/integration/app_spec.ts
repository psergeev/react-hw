/* eslint-disable spaced-comment */
/* eslint-disable no-undef */

/// <reference types="Cypress" />

context('Application', () => {
    beforeEach(() => {
        cy.visit('http://localhost:8080');
    });

    it('App should show search input by default', () => {
        cy.get('.search-input').should('exist');
    });

    it('App should open details on click to movie', () => {
        cy.get('.movie-card').first().click();
        cy.get('.details-line').should('exist');
    });
});
