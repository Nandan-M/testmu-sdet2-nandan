import productApi from "../../support/api/product.api"

describe('Products API', () => {


    it('Should get all products', () => {
        productApi.getAllProducts().then((response) => {

            cy.log(JSON.stringify(response.body));
            const body = JSON.parse(response.body)
            expect(response.status).to.eq(200);
            expect(body.products).to.be.an('array');
            expect(body.products.length).to.be.greaterThan(0);
        })
    })


    it('should return matching products', () => {

        productApi.searchProduct('top').then((response) => {

            const body = JSON.parse(response.body)
            cy.log(JSON.stringify(response.body));
                expect(response.status).to.eq(200);
                expect(body.products).to.be.an('array');
                expect(body.products.length).to.be.greaterThan(0);

                body.products.forEach((product) => { 
                    
                    expect(product.name.toLowerCase()).to.contain('top')
                });
        });
    });
})