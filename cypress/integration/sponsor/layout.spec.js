describe('sponsor page: ', () => {
  // beforeEach(() => {
  before(() => {
    cy.visit('/sponsor')
  })

  it('basic layout', () => {
    cy.id('header').should('be.visible')
    cy.id('header-search').should('be.visible')
    cy.id('header-search-icon').should('be.visible')

    cy.id('sponsor-content').should('be.visible')

    cy.id('footer').should('be.visible')
  })
})
