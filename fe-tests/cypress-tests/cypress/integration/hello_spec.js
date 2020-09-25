
describe('My First Test', () => {
          it('Does not do much!', () => {
                    expect(true).to.equal(true)
          })
})

describe('My Second Test', () => {
          it('finds the content "type"', () => {
                    cy.visit('https://example.cypress.io')

                    cy.contains('type')
          })
})

describe('My Third Test', () => {
          it('clicks the link "type"', () => {
                    cy.visit('https://example.cypress.io')

                    cy.contains('type').click()
          })
})

describe('My Fourth  Test', () => {
          it('clicking "type" navigates to a new url', () => {
                    cy.visit('https://example.cypress.io')

                    cy.contains('type').click()

                    // Should be on a new URL which includes '/commands/actions'
                    cy.url().should('include', '/commands/actions')
          })
})


describe('My Fifth Test', () => {
          it('Gets, types and asserts', () => {
                    cy.visit('https://example.cypress.io')

                    cy.contains('type').click()

                    // Should be on a new URL which includes '/commands/actions'
                    cy.url().should('include', '/commands/actions')

                    // Get an input, type into it and verify that the value has been updated
                    cy.get('.action-email')
                              .type('fake@email.com')
                              .should('have.value', 'fake@email.com')
          })
})

describe('My Sixth Test', () => {
          it('clicking "type" shows the right headings', () => {
            cy.visit('https://example.cypress.io')
        
            cy.pause()
        
            cy.contains('type').click()
        
            // Should be on a new URL which includes '/commands/actions'
            cy.url().should('include', '/commands/actions')
        
            // Get an input, type into it and verify that the value has been updated
            cy.get('.action-email')
              .type('fake@email.com')
              .should('have.value', 'fake@email.com')
          })
        })