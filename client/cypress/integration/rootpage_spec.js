const { firstCharLowerCase } = require('xml2js/lib/processors')

describe('root page', () => {
  it('has welcome section', () => {
    cy.visit('http://localhost:3000')
    cy.contains('Entdecke Open Data in Norddeutschland')
  })

  it('datasets details page opens after clicking dataset', () => {
    cy.visit('http://localhost:3000')
    cy.contains('Datensätze').next().scrollIntoView()
    cy.get('h3').first().click({ force: true })
    cy.contains('Herausgeber')
  })

  it('searches and finds datsets', () => {
    cy.visit('http://localhost:3000')
    cy.get('input').type('polizei')
    cy.contains('Polizeidienststellen')
  })
})
