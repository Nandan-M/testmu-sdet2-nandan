class Authentication{

    verifyLogin(email , password){
        return cy.request({
            method: "POST",
            url: "api/verifyLogin",
            form:true,
            body:{
                email: email,
                password: password 
            }
        })
    }
}export default new Authentication;