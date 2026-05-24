class CartPage{
    elements ={
        cartTab :" Cart" ,
        productList :()=> cy.get(".cart_description a"),
        proceedToCheckout :  "Proceed To Checkout",
        deleteProduct : (productName)=> cy.contains(".cart_description", productName).parent('tr').find(".cart_quantity_delete"),
    }

    clickOnCart(){
         cy.clickOnTab(this.elements.cartTab);
    }

    verifyProductsInCart(productList){
        const products = Array.isArray(productList)? productList : [productList];
        products.forEach((product)=>{
            this.elements.productList().should('contain.text', product);
        })
            
        
        
    }

    deleteProducts(productName){
        this.elements.deleteProduct(productName).click();
    }

    proceedtoCheckout(){
        cy.contains(this.elements.proceedToCheckout).click();
    }
}export default new CartPage;