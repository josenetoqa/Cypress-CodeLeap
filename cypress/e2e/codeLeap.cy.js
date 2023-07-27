describe('template spec', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000/')
  })
  it.only('Validate login in with valid credentials.', () => {
    cy.login('José')
    cy.get('.sc-iqcoie > :nth-child(1) > h1').should("be.visible")
  })
  it(' Validate if a user can open a delete button for their own post.', () => {
    cy.login('José')
    cy.post('Title of the post', 'Content of the post')
    cy.get(':nth-child(1) > .sc-gKXOVf > div > :nth-child(1)').click().should('be.visible')
    cy.get('.sc-hKMtZM > div > :nth-child(2)').click()
  })

})