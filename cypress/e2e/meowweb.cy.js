describe('fluxo-pagina', () => {
  it('busca por raça de gato', () => {
  
    cy.intercept('GET', '**/api.thecatapi.com/v1/breeds').as('catAPI')
    
    cy.visit('http://127.0.0.1:5500/index.html')
    cy.get('#busca').type('siamese')
    cy.get('#search-button').click()
    cy.url().should('include', 'http://127.0.0.1:5500/detalhes.html')
    
    cy.wait('@catAPI').then((interception) => {
      const siameseAPI = interception.response.body.find(cat => 
        cat.name.toLowerCase().includes('siamese')
      )
      
      expect(siameseAPI).to.exist
      cy.get('#resultado').should('contain', 'Siamese')
      cy.get('#resultado').should('contain', siameseAPI.origin)
      cy.get('#resultado').should('contain', siameseAPI.weight.metric)
      cy.get('#resultado').should('contain', siameseAPI.temperament)

    
    })
  })
})

describe('favoritar-gatos', () => {
  it('favorite um gato', () => {
  
    cy.intercept('GET', '**/api.thecatapi.com/v1/breeds').as('catAPI')
    
    cy.visit('http://127.0.0.1:5500/index.html')
    cy.get('#busca').type('siamese')
    cy.get('#search-button').click()
    cy.url().should('include', 'http://127.0.0.1:5500/detalhes.html')
    
    cy.wait('@catAPI').then((interception) => {
      const siameseAPI = interception.response.body.find(cat => 
        cat.name.toLowerCase().includes('siamese')
      )
      
      expect(siameseAPI).to.exist
      cy.get('#resultado').should('contain', 'Siamese')
      cy.get('#resultado').should('contain', siameseAPI.origin)
      cy.get('#resultado').should('contain', siameseAPI.weight.metric)
      cy.get('#resultado').should('contain', siameseAPI.temperament)

      cy.get('.fav-btn').click()
      
      cy.visit('http://127.0.0.1:5500/favoritos.html')
      cy.get('#lista').should('contain', 'Siamese')
      cy.get('#lista').should('contain', siameseAPI.origin)
      cy.get('#lista').should('contain', siameseAPI.weight.metric)
      cy.get('#lista').should('contain', siameseAPI.temperament)
    })
  })
})

describe('remover favorito', () => {
  it('remove um gato dos favoritos', () => {

 cy.intercept('GET', '**/api.thecatapi.com/v1/breeds').as('catAPI')
    
    cy.visit('http://127.0.0.1:5500/index.html')
    cy.get('#busca').type('siamese')
    cy.get('#search-button').click()
    cy.url().should('include', 'http://127.0.0.1:5500/detalhes.html')
    
    cy.wait('@catAPI').then((interception) => {
      const siameseAPI = interception.response.body.find(cat => 
        cat.name.toLowerCase().includes('siamese')
      )
      
      expect(siameseAPI).to.exist
      cy.get('#resultado').should('contain', 'Siamese')
      cy.get('#resultado').should('contain', siameseAPI.origin)
      cy.get('#resultado').should('contain', siameseAPI.weight.metric)
      cy.get('#resultado').should('contain', siameseAPI.temperament)

      cy.get('.fav-btn').click()
      
      cy.visit('http://127.0.0.1:5500/favoritos.html')
      cy.get('#lista').should('contain', 'Siamese')
      cy.get('#lista').should('contain', siameseAPI.origin)
      cy.get('#lista').should('contain', siameseAPI.weight.metric)
      cy.get('#lista').should('contain', siameseAPI.temperament)

      cy.get('.remove-fav-btn').click()
      cy.get('#lista').should('not.contain', 'Siamese')
      cy.get('#lista').should('not.contain', siameseAPI.origin)
      cy.get('#lista').should('not.contain', siameseAPI.weight.metric)
      cy.get('#lista').should('not.contain', siameseAPI.temperament)

      cy.get()

    })
  })
})