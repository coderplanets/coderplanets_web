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

  it('actions', () => {
    cy.id('subscribe-actions').should('be.visible')
  })
})
