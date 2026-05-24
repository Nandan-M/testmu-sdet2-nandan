import LoginPage from "../../pages/LoginPage";
import ProductPage from "../../pages/ProductPage";

describe("Complete flow on Product page" ,()=>{
    beforeEach(()=>{
        cy.intercept("GET", "/products?search=*").as("searchProducts")
        cy.intercept("GET", "/products").as('productTab')

        cy.visit("/");
        LoginPage.clickOnLoginButton();
        cy.fixture('user').then((users)=>{
            const validUser = users.find(users => users.type === "valid");
            LoginPage.login(validUser.email, validUser.password);
        })
    })

    it("Search for the product" ,()=>{
        ProductPage.clickonProductTab();
        cy.validateIntercept('@productTab')
        ProductPage.searchProducts("Blue");
        cy.validateIntercept('@searchProducts');
        ProductPage.checkSearchResult();
    })

    it("add required products to cart",()=>{
        ProductPage.clickonProductTab();
        cy.validateIntercept('@productTab');
        ProductPage.addReqProductToCart(["Summer White Top","Printed Off Shoulder Top - White"]);
    })
})