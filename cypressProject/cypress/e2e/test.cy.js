///<reference types = "cypress"/>

it('Go to Amazon',() => {

    /* 1.Search Product:*/
 /// Automate the process of opening Amazon.in///
    cy.visit('https://amazon.in')
 
 
 /// Search for a specified product (e.g., "Titan watch").
 ///Click on the search box and search for the titan watch///   
    cy.get('#twotabsearchtextbox').click().type('Titan watch')

 ///click on the serach submit button///
    cy.get('#nav-search-submit-button',{timeout:5000}).click()

 ///Capturetheproduct details including name, price, and link to the product.///
 /// Capture the product name///
 cy.get('[data-asin="B00ISNVQMW"] > .sg-col-inner > .s-widget-container > [data-action="puis-card-container-declarative"] > [data-cy="asin-faceout-container"] > .a-spacing-base > .a-spacing-small > [data-cy="title-recipe"] > .a-spacing-none > .a-link-normal > .a-size-base-plus').invoke('text').then((name) => {
    cy.log('Product Name: ${name.trim()}')
     });

 /// Capture the product price///
    cy.get('[data-asin="B08JM33QNK"] > .sg-col-inner > .s-widget-container > [data-action="puis-card-container-declarative"] > [data-cy="asin-faceout-container"] > .a-spacing-base > .a-spacing-small > [data-cy="price-recipe"] > .a-size-base > :nth-child(1) > .a-link-normal > .a-price > [aria-hidden="true"] > .a-price-whole').invoke('text').then((price) => {
    cy.log('Product Price: ${price.trim()}')
  });

 /// Capture the product link///
    cy.url().then((url) => {
    cy.log('Product Link: ${url}')
  });


     
    /*2.Navigate to Add to Cart Screen*/
      ///Select the first product from the search results///
      cy.get('[data-asin="B00ISNVQMW"] > .sg-col-inner > .s-widget-container > [data-action="puis-card-container-declarative"] > [data-cy="asin-faceout-container"] > .a-spacing-base > [data-cy="image-container"] > .s-image-padding > .rush-component > .a-link-normal > .a-section > .s-image').first().click()
      
      ///New tab is not supported by cypress so handled 
      cy.visit('https://www.amazon.in/Titan-Karishma-Stainless-Watch-NL1639SM02-NN1639SM02/dp/B00ISNVQMW/ref=sr_1_1?crid=A4ZJQ7AZ2ATI&dib=eyJ2IjoiMSJ9.idBQvROVC3k9YxaFZNE98B_jGPpf2mbMQYhEARA8tdW7sC-zxIwrXTewR06czD3rRUV99OSpwVUM6M1mosb3nSf6u0xGE6ugv4IAz6rg1d04rrrPSQk9gFF_8R8fYBRrEUxsTQVVzfAORPa6DdpTQN-t9Oxbg74xpsx1nXBn6lyh9nF7a-bZWS78QmiE3356IfpUoYhzBvGmAec519kINiJy76_NZqEpK6GEf3KHsNfcL-ZNUHqfBitlOEmXzeSl4qeYgplj_9A6UhglS7W2zyjMVXtJz9uTzoVaPEnjHus.23sRLJ8y0OSoGcj6xGKSuZaFd8XW2YUSh14pfs2f4Ws&dib_tag=se&keywords=titan+watch&qid=1725017692&sprefix=%2Caps%2C183&sr=8-1')
      
      /// Ensure the product page has loaded
      cy.url().should('include', '/dp/')
      
       ///add to cart///
      cy.get('#add-to-cart-button').click()

      ///Wait ///
      cy.wait(4000)

      
      ///Warranty screen pop handle///
      cy.get('body' ,{ timeout: 10000 }).click({ force: true })
      cy.get('#attach-warranty-display > :nth-child(5) > .a-span4 > .a-spacing-base > :nth-child(1) > .a-section > .a-button-stack').click()
      cy.get('#attach-popover-lgtbox').click({ force: true })

      ///click on proceed to buy button///   
      cy.get('#sc-buy-box-ptc-button > .a-button-inner > .a-button-input').click()
      
      ///Wait ///
      cy.wait(4000)

      ///Navigate to the Payment Gateway Screen but redirected to login page.///
      /// We need to handle login if not already logged in for this i am using my email address///
      cy.get('#ap_email').type('9784827427').click()
      cy.get('.a-button-inner > #continue').click()
      cy.get('#ap_password').type('Password@123').click()
      cy.get('#signInSubmit').click()
      cy.get('#auth-signin-button').click()
      /// Wait///
      cy.wait(4000)

      ///Two way authentication ///
      cy.get('#auth-mfa-otpcode').click()

      /// Otp for verification///
      cy.wait(4000)

      ///Submit button ///
      cy.get('#auth-signin-button').click()

   


})