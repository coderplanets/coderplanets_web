describe('preview action: ', () => {
  before(() => {
    cy.visit('/home/posts')
  })

  it('should be visible when state-tree icon clicked', () => {
    cy.id('mst-state').trigger('mouseover')
    cy.id('mst-state').should('be.visible')

    cy.id('mst-state').click()
    cy.id('preview-sidebar-panel').should('be.visible')

    // cypress has issue for dynamic load component
    // see https://github.com/cypress-io/cypress/issues/1379
    // cy.id('state-viewer').scrollIntoView().should('be.visible')
  })
})
