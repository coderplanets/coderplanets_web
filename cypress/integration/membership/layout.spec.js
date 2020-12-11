describe('membership page: ', () => {
  // beforeEach(() => {
  before(() => {
    cy.visit('/membership')
  })

  it('basic layout shoud be visible', () => {
    cy.id('header').should('be.visible')
    cy.id('header-search').should('be.visible')
    cy.id('header-search-icon').should('be.visible')

    cy.id('membership-content').should('be.visible')

    // cypress can not load dynamic Footer
    // cy.id('footer').should('be.visible')
  })
})
