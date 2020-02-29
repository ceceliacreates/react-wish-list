
describe('ui elements render properly', function () {
    
    beforeEach(function () {
    cy.fixture('products.json').as('products')
    cy.visit('localhost:3000')
  })
    it('validates header component loaded', function () {
        cy.contains('Wish List')        
    })

    it('validates all WishListItems loaded', function () {
        const productsLength = this.products.length;
        cy.get('[data-cy=WishListItem]').should('have.length', productsLength)
    })

    it('validates SendList component loaded', function () {
        cy.contains('Send Your List')
    })

    it('validates SelectedList component loaded', function () {
        cy.contains('Select some items above!')
    })
})

describe('like button behavior', function() {
    this.beforeEach(function () {
        cy.visit('localhost:3000')
    })
    it('adds to selected on first click', function () {
        cy.get('[data-cy=LikeButton]').first().click().should('have.class', 'MuiIconButton-colorSecondary')
    })

    it('removes from selected on second click', function () {
        cy.get('[data-cy=LikeButton]').first().click().click().should('not.have.class', 'MuiIconButton-colorSecondary')
    })
})

describe('selected list behavior', function() {
    this.beforeEach(function () {
        cy.visit('localhost:3000')
    })
    it('adds selected item to list when like button clicked', function () {
        cy.get('[data-cy="LikeButton"]')
    })
})