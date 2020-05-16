describe('home page layout: ', () => {
  // beforeEach(() => {
  before(() => {
    cy.visit('/home/posts')
  })

  it('basic layout shoud be visible', () => {
    cy.id('header').should('be.visible')
    cy.id('header-search').should('be.visible')
    cy.id('header-search-icon').should('be.visible')

    cy.id('sidebar').should('be.visible')

    cy.id('community-banner').should('be.visible')
    cy.id('community-content').should('be.visible')

    cy.id('footer').should('be.visible')
  })

  it('home link should not be highlight', () => {
    cy.id('header-home-link')
      // .should('have.css', 'background')
      // .should('not.have.css', 'border-bottom')
      .and('not.have.css', 'padding', '5px 3px 3px 3px')
  })
})
