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
// Cypress.Commands.add('login', (email, password) => { ... })
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

Cypress.Commands.add('clickOnTab' , (tabText)=>{
    cy.contains('a', tabText).should("be.visible").click();
})


Cypress.Commands.add('validateIntercept' , (alias)=>{
    const arrayAlias  = Array.isArray(alias)?alias : [alias] // if its single convert it as an array 
    arrayAlias.forEach((alias)=>{
        cy.wait(alias).then((interception) =>{
           expect(interception.response.statusCode).to.eq(200);
        })
    })
})

Cypress.Commands.add('clickContinue',()=>{
    cy.get('body').then(($body)=>{
        if(cy.wrap($body).contains('Continue Shopping')){
            cy.wrap($body).contains('Continue Shopping').click();
        }
        else{
            "Item added to cart directly";
        }
    })
})