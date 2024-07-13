it('should verify text in paragraphs and list items', () => {
    cy.get('p').eq(0).should('have.text', para_text); // Verify paragraph text
    
    // Verify each list item text
    list_texts.forEach((text, idx) => {
        cy.get('li').eq(idx).should('have.text', text);
    });
});
Make sure that para_text and list_texts are defined correctly wit
