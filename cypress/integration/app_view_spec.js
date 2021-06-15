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
  })
})