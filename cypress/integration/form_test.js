describe('form test', () => {
    it('test that the form is working', () => {
        cy.visit('/')

        cy.get('[placeholder="Full name"]')
        .type('drew rodriguez')
        .should('have.value', 'drew rodriguez')

        cy.get('[placeholder="Address"]')
        .type('drewmrodriguez@gmail.com')
        .should('have.value', 'drewmrodriguez@gmail.com')

        cy.get('select.input-field')
        .select('lambda special')
        .should('have.value', 'lambda special')

        cy.get(':nth-child(9) > span')
        .type('original red')

        cy.get(':nth-child(14) > span')
        .type('pepperoni')

        cy.get('.switch > :nth-child(2)')

        cy.get('#textarea1')
        .type('well done')
        
        cy.get('.btn')
        .type('form submitted')
        
    })
})
