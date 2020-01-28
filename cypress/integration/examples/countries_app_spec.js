describe("Countries app ", function() {
  beforeEach(function() {
    cy.visit("http://localhost:3000");
    window.localStorage.clear();
  });

  it("can be opened", function() {
    cy.contains("Welcome to the Countries App");
  });

  it("contains button", function() {
    cy.contains("Go to countries");
  });

  it("contains button that redirects to all countries", function() {
    cy.contains("Go to countries").click();
  });

  it("/countries shows loading spinner for the first time", function() {
    cy.contains("Go to countries").click();
    cy.contains("Loading...");
  });

  it("/countries successfully loads the countries", function() {
    cy.contains("Go to countries").click();
    cy.contains(
      "Click on the country to see details or filter by name or population"
    );
  });

  it("clicking on Andorra leads to Andorra's details", function() {
    cy.contains("Go to countries").click();
    cy.contains("Andorra").click();
  });

  it("Andorra's details contains bordering countries", function() {
    cy.contains("Go to countries").click();
    cy.contains("Andorra").click();
    cy.contains("Bordering countries");
  });

  it("clicking on Spain in Andorra's details navigates to Spain's details", function() {
    cy.contains("Go to countries").click();
    cy.contains("Andorra").click();
    cy.contains("Spain").click();
  });

  it("clicking on About link leads to About page", function() {
    cy.contains("Go to countries").click();
    cy.contains("About").click();
  });

  it("clicking on pagination loads new countries", function() {
    cy.contains("Go to countries").click();
    cy.get('[aria-label="Next item"]').click();
    cy.get('[aria-label="Next item"]').click();
    cy.get('[aria-label="Next item"]').click();
    cy.contains("Burkina Faso");
  });
});
