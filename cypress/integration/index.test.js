describe("index", () => {
  let pets;
  before(() => {
    pets = require("../fixtures/pets");
    cy.intercept("*/pets*", (req) => {
      req.reply({ body: pets });
    }).as("petsBody");

    const { PORT = 3000 } = process.env;
    cy.visit(`http://localhost:${PORT}`);
    cy.waitForReact();
  });

  it("should have a nav bar", () => {
    cy.get("nav").should("contain.text", "New Client Sign-up");
  });

  it("should allow a new client to select if it is their first pet", () => {
    cy.get('[type="checkbox"]').check();
    cy.get(".first-pet h5").should("contain.text", "Yes");
    cy.get('[type="checkbox"]').uncheck();
    cy.get(".first-pet h5").should("contain.text", "No");
  });

  it("should allow a new client to select their number of pets", () => {
    cy.get("#less").click();
    cy.get(".num-of-pets h5").should("contain.text", 0);
    cy.get("#more").click();
    cy.get(".num-of-pets h5").should("contain.text", 1);
    cy.get("#more").click();
    cy.get(".num-of-pets h5").should("contain.text", 2);
    cy.get("#more").click();
    cy.get(".num-of-pets h5").should("contain.text", 3);
    cy.get("#less").click();
    cy.get(".num-of-pets h5").should("contain.text", 2);
  });

  it("should allow a new client to type information", () => {
    cy.get("#firstName").type("Charlie");
    cy.get("#lastName").type("Brown");
    cy.get("#phone").type("1-555-555-5555");
    cy.get("#email").type("charlie.brown@peanuts.com");
    const article = cy.get(".new-client article");
    article.should("contain.text", "Charlie");
    article.should("contain.text", "Brown");
    article.should("contain.text", "1-555-555-5555");
    article.should("contain.text", "charlie.brown@peanuts.com");
  });

  it("should allow a new client to add and remove types of animals", () => {
    const animals = ["dog", "cat", "ferret", "bird", "fish", "snake", "lizard"];
    cy.get(".animal-types ol>li")
      .each(($el, index) => {
        cy.wrap($el).should("contain.text", animals[index]);
      })
      .then(() => {
        animals.shift();
        cy.get(".animal-types ol>li button")
          .first()
          .click()
          .then(() => {
            cy.get(".animal-types ol>li").each(($el, index) => {
              cy.wrap($el).should("contain.text", animals[index]);
            });
          });
      })
      .then(() => {
        cy.get("#animal-type").type("chinchilla");
        cy.get(".animal-types form").submit();
        cy.get(".animal-types ol").contains(/chinchilla/);
      });
  });

  it("should, show a list of pets already registered", () => {
    cy.get(".pet-list div").each(($el, index) => {
      cy.wrap($el).should("contain.text", pets[index].name);
    });
  });
  it("should have a footer bar", () => {
    cy.get("footer").should("contain.text", "Footer");
  });
});
