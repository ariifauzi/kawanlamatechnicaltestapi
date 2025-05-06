<reference types="cypress" />

describe("HTTP Requests", ()=> {

    it("GET User", ()=>{
        cy.request('GET', 'https://petstore.swagger.io/v2/user/Aser')
        .its('status')
        .should('equal', 200);
    })

    it("POST User", ()=> {
        cy.request({
                method: 'POST',
                url: 'https://petstore.swagger.io/v2/user',
                body: {
                        id: 1,
                        username: "Aser",
                        firstName: "Ashari",
                        lastName: "Fauzi",
                        email: "test@gmail.com",
                        password: "12345678",
                        phone: "08123456789",
                        userStatus: 0
                }
        })

        .its('status')
        .should('equal', 200);
    })

    it("PUT User", ()=>{
        cy.request({
            method: 'PUT',
            url: 'https://petstore.swagger.io/v2/user/Aser',
            body: {
                    id: 1,
                    username: "Aser",
                    firstName: "Ashari",
                    lastName: "Fauzi",
                    email: "test@gmail.com",
                    password: "123456789",
                    phone: "08123456789",
                    userStatus: 0
            }
        })
        
        .its('status')
        .should('equal', 200);
    })

})