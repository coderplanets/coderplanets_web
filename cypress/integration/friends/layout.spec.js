describe('support-us page: ', () => {
  // beforeEach(() => {
  before(() => {
    cy.visit('/support-us')
  })

  it('basic layout', () => {
    cy.id('header').should('be.visible')
    cy.id('header-search').should('be.visible')
    cy.id('header-search-icon').should('be.visible')

    cy.id('support-us-content').should('be.visible')

    // cypress can not load dynamic Footer
    // cy.id('footer').should('be.visible')
  })
})
