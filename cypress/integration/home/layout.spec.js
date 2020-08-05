describe('home page: ', () => {
  // beforeEach(() => {
  before(() => {
    cy.visit('/home/posts')
  })

  it('basic layout should be visible', () => {
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

  it('doramon Comp should be seen after search icon clicked', () => {
    cy.id('header-search').click()
    cy.id('doraemon-panel').should('be.visible')
  })

  it('doramon Comp should close after shortcut pressed', () => {
    // ctrl + C pressed
    cy.id('header-search').click()
    cy.id('doraemon-inputer').should('be.visible')
    cy.id('doraemon-inputer').type('{ctrl}C')
    cy.id('doraemon-inputer').should('not.be.visible')

    // ctrl + G pressed
    cy.id('header-search').click()
    cy.id('doraemon-inputer').should('be.visible')
    cy.id('doraemon-inputer').type('{ctrl}G')
    cy.id('doraemon-inputer').should('not.be.visible')

    // esc pressed
    cy.id('header-search').click()
    cy.id('doraemon-inputer').should('be.visible')
    cy.id('doraemon-inputer').type('{esc}')
    cy.id('doraemon-inputer').should('not.be.visible')
  })
})
