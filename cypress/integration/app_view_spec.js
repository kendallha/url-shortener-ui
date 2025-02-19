describe('mainAppView', () => {
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

  it('Should display the title of the app', () => {
    cy.get('.app-name').should('have.text', 'URL Shortener')
  })

  it('Should display all existing shortened URLs', () => {
    cy.get('.short-url').should('have.text', 'http://localhost:3001/useshorturl/11')
      .get('.url-title').should('have.text', 'Cool cat')
      .get('.long-url').should('have.text', 'https://i.ytimg.com/vi/vYyUb_MI7to/maxresdefault.jpg')
  })
})