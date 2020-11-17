describe('404 community page page: ', () => {
  // beforeEach(() => {
  before(() => {
    cy.visit('/no-exsit-community/posts')
  })

  it('basic layout should be visible', () => {
    cy.id('error-page').should('be.visible')
    cy.id('site-logo').should('be.visible')

    cy.id('spin-planet').should('be.visible')
    cy.id('code-snippets').should('be.visible')
  })

  it('no-exsit-community title should be visible', () => {
    const el = cy.id('community-error-title')

    el.should('be.visible')
    el.contains('no-exsit-community')
  })
})
