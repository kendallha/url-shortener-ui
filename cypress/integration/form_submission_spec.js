describe('formSubmission', () => {
  

  it('Should display a new shortened URL after the user submits the form', () => {
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
    cy.get('.title-input')
      .type('Yummy')
      .should('have.value', 'Yummy')
    cy.get('.url-input')
      .type('https://sallysbakingaddiction.com/chewy-chocolate-chip-cookies/')
      .should('have.value', 'https://sallysbakingaddiction.com/chewy-chocolate-chip-cookies/')
    cy.intercept('POST', 'http://localhost:3001/sightings', {
        statusCode: 201,
        body: {
          id: 12,
          long_url: 'https://sallysbakingaddiction.com/chewy-chocolate-chip-cookies/',
          short_url: 'http://localhost:3001/useshorturl/12',
          description: 'Yummy'
    },
    })
    cy.get('button').click()
    cy.get('.short-url').contains('http://localhost:3001/useshorturl/12')
  })

})
