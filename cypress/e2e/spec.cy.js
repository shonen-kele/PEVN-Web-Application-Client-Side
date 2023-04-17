describe('template spec', () => {
  it('passes', () => {
    cy.visit('http://localhost:3000/arena-3')
    .get('#text-editor')
    
  })
})