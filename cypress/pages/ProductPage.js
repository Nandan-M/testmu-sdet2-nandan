class ProductPage{

    elements={
        productTab : " Products",
        searchProductInput :()=> cy.get("#search_product"),
        searchResults: ()=> cy.get(".single-products p"),
        searchButton: ()=>cy.get("#submit_search"),
        productAddToCart :(productName)=> cy.contains('.productinfo',productName).find('.add-to-cart'),

    };

    clickonProductTab(){
        cy.clickOnTab(this.elements.productTab);
    }

    searchProducts(searchTerm){
        cy.wrap(searchTerm).as('searchTerm')
        this.elements.searchProductInput().should("be.visible").type(searchTerm);
        this.elements.searchButton().click();
    }

    checkSearchResult(){
         cy.get('@searchTerm')
      .then((searchTerm) => {
        this.elements.searchResults()
          .should('contain.text', searchTerm);
      });
    }

    addReqProductToCart(productName){

        const productList = Array.isArray(productName)?productName:[productName]

        productList.forEach((product)=>{
            this.elements.productAddToCart(product).click({force:true});
            cy.clickContinue();
        })
    }






}export default new ProductPage;