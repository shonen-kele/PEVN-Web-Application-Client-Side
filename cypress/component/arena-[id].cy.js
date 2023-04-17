import Arena from '../../src/pages/arena-[id].vue'
describe('arena-[id].cy.js', () => {
  it('gets text editor', () => {
     cy.mount(Arena)
     .get(TextEditor)
  })
})