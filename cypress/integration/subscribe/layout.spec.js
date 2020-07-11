describe('subscribe page: ', () => {
  // beforeEach(() => {
  before(() => {
    cy.visit('/subscribe')
  })

  it('basic layout', () => {
    cy.id('header').should('be.visible')
    cy.id('header-search').should('be.visible')
    cy.id('header-search-icon').should('be.visible')

    cy.id('subscribe-content').should('be.visible')

    cy.id('footer').should('be.visible')
  })

  it('filter bar', () => {
    cy.id('filter-bar').should('be.visible')
    cy.id('filter-navi-intro').should('be.visible')
    cy.id('filter-searchbox').should('be.visible')
    cy.id('filter-navi-menu').should('be.visible')
  })
})
