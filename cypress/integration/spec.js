/// <reference types="cypress" />
it('works', () => {
  cy.visit('/', {
    onBeforeLoad(win) {
      // delete win.navigator.__proto__.geolocation
      const err = new Error('User denied')
      err.code = GeolocationPositionError.PERMISSION_DENIED
      cy.stub(win.navigator.geolocation, 'getCurrentPosition').callsArgWith(0, err)
    }
  })
  cy.get('#search-location').type('Boston')
})
