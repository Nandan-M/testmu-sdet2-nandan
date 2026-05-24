class LoginPage {
    elements={
        signUpLoginButton : " Signup / Login",
        emailField : ()=> cy.get("input[data-qa='login-email']"),
        passwordInput: () => cy.get('input[data-qa="login-password"]'),
        loginBtn: () => cy.get('button[data-qa="login-button"]'),
        loggedInUser: () => cy.get('a:contains("Logged in as")'),
        loginError:()=> cy.get('p:contains("Your email or password is incorrect!")'),
    };

    clickOnLoginButton() {
        cy.clickOnTab(this.elements.signUpLoginButton);
    }

    login(email, password){
        this.elements.emailField().should("be.visible").type(email);
        this.elements.passwordInput().should("be.visible").type(password);
        this.elements.loginBtn().should("be.enabled").click();
    }

    verifyLogin(){
        this.elements.loggedInUser().should("be.visible");
    }

    verifyWrongLogin(){
        this.elements.loginError().should("be.visible");
    }

    }export default new LoginPage;