//
describe('explore page: ', () => {
  // beforeEach(() => {
  before(() => {
    cy.visit('/explore')
  })

  it('basic layout', () => {
    cy.id('header').should('be.visible')

    cy.id('header-search').should('be.visible')
    cy.id('header-search-icon').should('be.visible')

    // cy.id('sidebar').should('be.visible')

    cy.id('explore-banner').should('be.visible')
    // cypress can not load dynamic Footer
    // cy.id('footer').should('be.visible')
  })

  it('discovery link should be highlight', () => {
    cy.id('header-explore-link')
      .should('not.have.css', 'background', 'transparent')
      .and('have.css', 'padding', '5px 6px')
  })
})
