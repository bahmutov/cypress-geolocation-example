/// <reference types="cypress" />
it('finds me', () => {
  cy.visit('/')
  cy.get('#search-location').type('Boston')
  cy.get('[data-cy=suggestion]').should('have.length.gt', 1)
})
