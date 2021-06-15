describe ('networkRequestError', () => {

  it('Should display an error if there is a failed get request', () => {
    cy.intercept('http://localhost:3001/api/v1/urls', {
      statusCode: 404
    })
      .visit('http://localhost:3000')
      .get('.error').should('have.text', 'Oh no, something went wrong. Please try again.')
  })
})