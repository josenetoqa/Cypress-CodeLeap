// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
Cypress.Commands.add('login', (name) => { 
    cy.get('input').type(name)
    cy.get('button[type="submit"]').click()
 })
 Cypress.Commands.add('post', (title,content) => { 
    cy.get('.sc-crXcEl').within( () => {
    cy.get('input').type(title)
    cy.get('textarea').type(content)
    })
    cy.get('button[type="submit"]').click()
 })

 
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })