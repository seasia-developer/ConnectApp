describe('app Create Post', () => {
  beforeEach(() => {
    cy.visit('/')
  })

  it('basic nav', () => {
    cy.url().should('eq', 'http://localhost:3001/signin')
    cy.wait(3000)
    cy.contains('Sign in')
      .should('exist')
    cy.wait(3000)
  })

  it('create post', () => {
    // Replace 'username' and 'password' with the actual ids, names, or classes of your input fields
    cy.wait(3000)
    cy.get('input[id="email"]').clear().type('vivek@stelth.io')
    cy.get('input[id="password"]').clear().type('Dev@seasia5')
    cy.wait(5000)

    // Replace 'login' with the actual id, name, or class of your login button
    cy.contains('button', 'Log').click()
    cy.wait(5000)

    // Check that the URL changed to the logged-in page

    cy.url().should('include', '/feed')
    cy.wait(2000)
    // click on the text input field add a post
    cy.get('.px-1').clear().type('hello world')
    cy.wait(2000)
    // click on publish button to publish the post
    cy.get('button').contains('Publish').click()
    cy.wait(2000)
    // after publishing the post the post should be visible on the feed page
    cy.wait(5000)
    // click on profile dropdown
    cy.get('.hs-dropdown1').click()
    cy.wait(5000)
    // click on profile to navigate to profile page
    cy.get('.h-full > .block > .flex > :nth-child(1) > .inline-block').click()
    cy.wait(2000)
    // click on logout button
    cy.get('.float-right').click()
    cy.wait(5000)
    // After logging out redirect to login page
    cy.url().should('include', '/signin')
  })
})
