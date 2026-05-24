import LoginPage from "../../pages/LoginPage";
import ProductPage from "../../pages/ProductPage";
import CartPage from "../../pages/CartPage"

describe("Verify tests in cart page",()=>{
    beforeEach(() => {
        cy.intercept("GET", "/view_cart").as("viewCart");
        cy.intercept("GET", "/checkout").as("checkout");
        cy.intercept("GET", "/delete_cart/*").as("deleteProduct")

        cy.visit("/");
        LoginPage.clickOnLoginButton();
        cy.fixture('user').then((users) => {
            const validUser = users.find(users => users.type === "valid");
            LoginPage.login(validUser.email, validUser.password);
        })
    })

    let productList = ["Full Sleeves Top Cherry - Pink","Printed Off Shoulder Top - White"];
    let unNeccesaryItem = "Full Sleeves Top Cherry - Pink"

    it("Check products added to Cart",()=>{
        ProductPage.addReqProductToCart(productList);
        CartPage.clickOnCart();
        cy.validateIntercept("@viewCart");
        CartPage.verifyProductsInCart(productList);
    })

    it("Move to checkout and verify productList",()=>{
        CartPage.clickOnCart();
        cy.validateIntercept("@viewCart");
        CartPage.proceedtoCheckout();
        cy.validateIntercept("@checkout");
        CartPage.verifyProductsInCart(productList);
    })

    it("Delete un-neccesary item from cart",()=>{
        CartPage.clickOnCart();
        cy.validateIntercept("@viewCart");
        CartPage.deleteProducts(unNeccesaryItem);
        cy.validateIntercept("@deleteProduct")
    })
})