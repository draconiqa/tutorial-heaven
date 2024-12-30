import { getTitle } from '../support/app.po';

describe('cms-e2e', () => {
  beforeEach(() => cy.visit('/'));

  it('should have page title', () => {
    // Custom command example, see `../support/commands.ts` file
    cy.login('my-email@something.com', 'myPassword');

    // Function helper example, see `../support/app.po.ts` file
    getTitle().should('have.text', 'cms');
  });
});
