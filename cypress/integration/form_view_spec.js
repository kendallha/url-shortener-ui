describe('formDisplay', () => {
  beforeEach(() => {
    cy.intercept('http://localhost:3001/api/v1/urls',
      {
        "urls": [
          {
          "id": 11,
          "long_url": "https://i.ytimg.com/vi/vYyUb_MI7to/maxresdefault.jpg",
          "short_url": "http://localhost:3001/useshorturl/11",
          "title": "Cool cat"
          }
        ]
      }
    )
      .visit('http://localhost:3000')
  })

  it('Should have a form to add a URL to be shortened', () => {
    cy.get('form').find('input')
    cy.get('form')
      .find('button')
      .should('have.text', 'Shorten Please!' )
  })

  it('Should show the information the user has typed in the input fields', () => {
    cy.get('.title-input')
      .type('Best recipe ever!')
      .should('have.value', 'Best recipe ever!')
    cy.get('.url-input')
      .type('https://sallysbakingaddiction.com/chewy-chocolate-chip-cookies/')
      .should('have.value', 'https://sallysbakingaddiction.com/chewy-chocolate-chip-cookies/')
  })
})