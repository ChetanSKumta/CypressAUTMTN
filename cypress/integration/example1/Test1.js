describe('My first test suite', function () {
    it('My first test cas!', function () {
        cy.viewport(1440, 900);
        cy.visit("https://rahulshettyacademy.com/seleniumPractise/#/");
        cy.get('input.search-keyword').type('ca');
        cy.get('button.search-button').click();
        cy.wait(3000);
        cy.get('.products').as('productLocator');
        //assertions: 1. check if the product count is 4
        //cy.get('product').should('have.length', 4); //--> this will return 5 elements as there's a hidden element
        //cy.get('.product:visible').should('have.length', 4); //--> this will return 4 elements as we added visible 
        // cy.get('.product h4').should('have.length', 4); // this will return 4 elements
        cy.get('@productLocator').find('.product').should('have.length', 4);//@productLocator is an alias
        //cy.get('.products').find('.product').eq(2).contains('ADD TO CART').click();

        cy.get('.products .product').each(($el, index, $list) => {

            const searcheditems = $el.find('h4.product-name').text();
            cy.log(searcheditems);
            if (searcheditems.includes('Cashews')) {
                // $el.find('button[type="button"]').trigger('click'); both works
                cy.wrap($el).find('button[type="button"]').click();
            }

        })
        cy.log(cy.title());
        cy.get('div.brand').then((lem) => {
            cy.log(lem.text());
        });
        cy.get('img[alt="Cart"]').click();
        cy.get('button[type="button"]').contains('PROCEED TO CHECKOUT').click();
        cy.get('button').contains('Place Order').click();
        cy.get('select').select('India');
        //cy.get('select option').contains('India').click();
        cy.get('input.chkAgree').click();
        cy.get('button').contains('Proceed').click();

    })

})
