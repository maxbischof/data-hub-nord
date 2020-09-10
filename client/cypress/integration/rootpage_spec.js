describe('root page', () => {
  it('has welcome section', () => {
    cy.visit('http://localhost:3000')
    cy.contains('Entdecke Open Data in Norddeutschland')
  })

  it('datasets section is visible after clicking button', () => {
    cy.visit('http://localhost:3000')
    cy.contains('Daten anzeigen').click()
    cy.contains('Datensätze').should('be.visible')  
  })

  it('datasets details page opens after clicking dataset', () => {
    cy.visit('http://localhost:3000')
    cy.contains('Datensätze').next().scrollIntoView()
    cy.contains('Datensätze').next().click({force: true}) 
    cy.contains('Herausgeber')
  })
})