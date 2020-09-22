describe('friends page: ', () => {
  // beforeEach(() => {
  before(() => {
    cy.visit('/friends')
  })

  it('basic layout', () => {
    cy.id('header').should('be.visible')
    cy.id('header-search').should('be.visible')
    cy.id('header-search-icon').should('be.visible')

    cy.id('friends-content').should('be.visible')

    cy.id('footer').should('be.visible')
  })
})
