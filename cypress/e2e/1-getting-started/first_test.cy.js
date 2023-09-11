// describe('Visit a website', () => {
//     it('should navigate to https://context.reverso.net/', () => {
//       cy.visit('https://context.reverso.net/');
//     });
//   });

context('Actions', () => {
  beforeEach(() => {
    cy.visit('https://example.cypress.io')
  })

  describe('Check page behaviour', () => it('finds the content "type"', () => {
    cy.contains('type').click()
    cy.url().should('include', 'commands/actions')
    cy.get('.action-email').type('fake980987987@mail.com')
    cy.get('.action-email').should('have.value', 'fake980987987@mail.com')

  }))



})
