//
describe('discovery page: ', () => {
  // beforeEach(() => {
  before(() => {
    cy.visit('/discovery')
  })

  it('basic layout', () => {
    cy.id('header').should('be.visible')

    cy.id('header-search').should('be.visible')
    cy.id('header-search-icon').should('be.visible')

    cy.id('sidebar').should('be.visible')

    cy.id('discovery-banner').should('be.visible')
    cy.id('footer').should('be.visible')
  })

  it('discovery link should be highlight', () => {
    cy.id('header-discovery-link')
      .should('not.have.css', 'background', 'transparent')
      .and('have.css', 'padding', '5px 3px 3px')
  })
})
