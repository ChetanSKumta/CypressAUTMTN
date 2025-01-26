describe("Classic CRM Login Test", ()=>{

    it("login test", ()=>{

        cy.visit("https://classic.crmpro.com/"); 
        //cy.title().contains('CRMPro Log In Screen').should('exist');
        cy.get("input[name='username']").type('groupautomation');
        cy.get("input[name='password']").type('Test@12345');
        cy.get("input[value='Login']").click();
        cy.origin("https://classic.freecrm.com/", ()=>{
            cy.title().should('contains',"CRMPRO");
            //cy.get("a[href*='action=contact']").click();
        });
        

    });
});