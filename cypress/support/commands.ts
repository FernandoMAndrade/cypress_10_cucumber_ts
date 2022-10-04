Cypress.Commands.add('validateResponseStatus', (response:object, status:number) => {
    return expect(response.status).to.eql(status)
})

Cypress.Commands.add('validateValueInResponse', (key:object, value:string|number|boolean) => {
    return expect(key).to.eql(value)
})
