context('App Auth', () => {
  beforeEach(() => {
    cy.visit('/')
    // cy.viewport('macbook-15')
    cy.viewport('iphone-xr')
  })

  it('basic nav', () => {
    cy.url()
      .should('eq', 'http://localhost:3000/signin')

    cy.contains('Sign in')
      .should('exist')
  })

  it('fails to log in with invalid credentials', () => {
    // Replace 'username' and 'password' with the actual ids, names, or classes of your input fields
    cy.get('input[id="email"]').clear().type('armenr@gmail.com')
    cy.wait(2000)
    cy.get('input[id="password"]').clear().type('cypressTest123!!')
    cy.wait(2000)
    // Replace 'login' with the actual id, name, or class of your login button
    cy.contains('button', 'Log').click()
    cy.wait(2000)

    // Check that the error message appears
    // const value1 = 'Incorrect username or password'
    // const value2 = 'Password attempts exceeded'
    // cy.contains(new RegExp(`${value1}|${value2}`))
    cy.get('.text-red-400').should('be.visible').and('contain', 'Incorrect email or password')
  })

  it('logs in ', () => {
    // respnsive login and normal login
    // Replace 'username' and 'password' with the actual ids, names, or classes of your input fields
    cy.wait(2000)
    cy.get('input[id="email"]').clear().type('vivek@stelth.io')
    cy.get('input[id="password"]').clear().type('Dev@seasia5')
    cy.wait(2000)

    // Replace 'login' with the actual id, name, or class of your login button
    cy.contains('button', 'Log').click()
    cy.wait(5000)

    // Check that the URL changed to the logged-in page
    cy.url().should('include', '/feed')
    cy.wait(2000)
  })
  // it('log Out ', () => {
  //   // Replace 'username' and 'password' with the actual ids, names, or classes of your input fields
  //   cy.wait(2000)
  //   cy.get('input[id="email"]').clear().type('vivek@stelth.io')
  //   cy.get('input[id="password"]').clear().type('Dev@seasia5')
  //   cy.wait(5000)

  //   // Replace 'login' with the actual id, name, or class of your login button
  //   cy.contains('button', 'Log').click()
  //   cy.wait(5000)

  //   // Check that the URL changed to the logged-in page

  //   cy.url().should('include', '/feed')
  //   cy.wait(2000)
  //   cy.get('.transition-all > .inline-block').click()
  //   cy.wait(2000)
  //   cy.get('#logout').click()

  // })

  it('responsive log Out ', () => {
    // Replace 'username' and 'password' with the actual ids, names, or classes of your input fields
    cy.wait(2000)
    cy.get('input[id="email"]').clear().type('vivek@stelth.io')
    cy.get('input[id="password"]').clear().type('Dev@seasia5')
    cy.wait(5000)

    // Replace 'login' with the actual id, name, or class of your login button
    cy.contains('button', 'Log').click()
    cy.wait(5000)

    // Check that the URL changed to the logged-in page

    cy.url().should('include', '/feed')
    cy.wait(2000)
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
