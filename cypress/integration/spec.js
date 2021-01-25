/// <reference types="cypress" />
beforeEach(() => {
  cy.on('window:before:load', (win) => {
    const err = new Error('User denied')
      err.code = GeolocationPositionError.PERMISSION_DENIED
      cy.stub(win.navigator.geolocation, 'getCurrentPosition')
        .callsArgWith(0, err).as('getCurrentPosition')
  })
})
it('finds me', () => {
  cy.visit('/')
  cy.get('#search-location').type('Boston')
  cy.get('@getCurrentPosition').should('have.been.called')
  cy.get('[data-cy=suggestion]').should('have.length.gt', 1)
})

// it('works', () => {
//   cy.visit('/', {
//     onBeforeLoad(win) {
//       const err = new Error('User denied')
//       err.code = GeolocationPositionError.PERMISSION_DENIED
//       cy.stub(win.navigator.geolocation, 'getCurrentPosition').callsArgWith(0, err)
//     }
//   })
//   cy.get('#search-location').type('Boston')
// })
