describe('Hello API', () => {
  it('should display hello world message', () => {
    cy.request('http://localhost:5000/api/hello').then((response) => {
      expect(response.status).to.eq(200);
      expect(response.body).to.have.property('message', 'Hello World');
    });
  });
});
