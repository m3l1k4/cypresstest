describe('name of the group', () => {
    it('should', () => {
        expect(true).equal(true)
    })

    it('should', ()=>{
        cy.visit('/')
        cy.get('.App-link')//select by class
        .within(()=>{
          cy.contains('Learn React')  
        })
        
    })
})