import authApi from "../../support/api/auth.api"

describe('Authentication API', () => {
    let email, passowrd;
    let invalidEmail, invalidPassword;
    before(()=>{
         cy.fixture('user').then((users)=>{
                    const invalidUser = users.find(user => user.type === "invalid")
                    invalidEmail = invalidUser.email;
                    invalidPassword = invalidUser.password;
                })
         cy.fixture('user').then((users)=>{
                    const validUser = users.find(user => user.type === "valid")
                    email = validUser.email;
                    passowrd = validUser.password;
                })
    })

    it("Verify valid email address",()=>{
        authApi.verifyLogin(email,passowrd).then((response)=>{
            const body = JSON.parse(response.body)
            expect(response.status).to.eq(200);
            expect(body.message).to.eq("User exists!");
        })
    })

    it("Verify Invalid email address",()=>{
        authApi.verifyLogin(invalidEmail,invalidPassword).then((response)=>{
             console.log(JSON.stringify(response.body));
             const body= JSON.parse(response.body)
            expect(body.responseCode).to.eq(404);
            expect(body.message).to.eq("User not found!");
        })
    })
})