describe('basic layout', () => {
  // beforeEach(() => {
  before(() => {
    cy.visit('/home/posts')
  })

  it('basic layout shoud be seen', () => {
    cy.get('[data-testid=header]').should('be.visible')
    cy.get('[data-testid=sidebar]').should('be.visible')

    cy.get('[data-testid=community-banner]').should('be.visible')
    cy.get('[data-testid=community-content]').should('be.visible')

    cy.get('[data-testid=footer]').should('be.visible')
  })

  it('header content', () => {
    cy.get('[data-testid=header-search]').should('be.visible')
    cy.get('[data-testid=header-search-icon]').should('be.visible')
  })
})
