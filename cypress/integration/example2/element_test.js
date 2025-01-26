describe('My first test suite', function(){

    
    it('My Second test case', ()=>{
    
       let a= cy.visit("https://fresherworks.com/")
        cy.contains("Job Listings")
        cy.contains("Job Listings").click();
        cy.url().should("include","https://fresherworks.com/login-with-message/?")
    
    })
    
    })