describe('basic layout', () => {
  // beforeEach(() => {
  before(() => {
    cy.visit('/home/posts')
  })

  it('basic layout shoud be visible', () => {
    cy.id('header').should('be.visible')
    cy.id('sidebar').should('be.visible')

    cy.id('community-banner').should('be.visible')
    cy.id('community-content').should('be.visible')

    cy.id('footer').should('be.visible')
  })

  it('header content', () => {
    cy.id('header-search').should('be.visible')
    cy.id('header-search-icon').should('be.visible')
  })

  it('communities page', () => {
    cy.visit('/communities')
    cy.id('header-search').should('be.visible')
    cy.id('header-search-icon').should('be.visible')

    cy.id('communities-banner').should('be.visible')

    cy.id('footer').should('be.visible')
  })
})
