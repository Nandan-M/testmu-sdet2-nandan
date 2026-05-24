class ProductApi{

    getAllProducts(){

        return cy.request({
            method : "GET",
            url : "/api/productsList"
        })
    }

    searchProduct(productName){
        return cy.request({
            method: "POST",
            url: '/api/searchProduct',
            form : true,
            body:{
                search_product : productName,
            }
        })
    }
}export  default new ProductApi;