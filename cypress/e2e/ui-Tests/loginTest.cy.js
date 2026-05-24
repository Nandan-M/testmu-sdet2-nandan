import LoginPage from "../../pages/LoginPage";

describe("valid and invaild Login Test",()=>{
    beforeEach(()=>{
        cy.visit('/');
    })

    it("Login with valid user", ()=>{
        LoginPage.clickOnLoginButton();
        // cy.fixture('user').then((user)=>{
        //     const users = user[0];

        //     LoginPage.login(users.email, users.password);
        // })
        LoginPage.login(Cypress.env("email"), Cypress.env("password"));
        LoginPage.verifyLogin();    
    })

    it("Login with invalid Credentials" ,()=>{
        LoginPage.clickOnLoginButton();
        cy.fixture('user').then((users)=>{
            const invalidUser = users.find(user => user.type === "invalid")
            LoginPage.login(invalidUser.email,invalidUser.password);
        })
        LoginPage.verifyWrongLogin();
    })
})