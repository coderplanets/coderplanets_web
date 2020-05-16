describe('cool-guide page: ', () => {
  // beforeEach(() => {
  before(() => {
    cy.visit('/cool-guide')
  })

  it('basic layout shoud be visible', () => {
    cy.id('header').should('be.visible')
    cy.id('header-search').should('be.visible')
    cy.id('header-search-icon').should('be.visible')

    cy.id('cool-guide-content').should('be.visible')
    cy.id('filter-bar').should('be.visible')

    cy.id('footer').should('be.visible')
  })
})
