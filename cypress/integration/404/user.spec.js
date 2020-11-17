describe('404 user page page: ', () => {
  // beforeEach(() => {
  before(() => {
    cy.visit('/user/no-exsit-user')
  })

  it('basic layout should be visible', () => {
    cy.id('error-page').should('be.visible')
    cy.id('site-logo').should('be.visible')

    cy.id('spin-planet').should('be.visible')
    cy.id('code-snippets').should('be.visible')
  })

  it('no-exsit-community title should be visible', () => {
    const el = cy.id('user-error-title')

    el.should('be.visible')
    el.contains('no-exsit-user')
  })
})
