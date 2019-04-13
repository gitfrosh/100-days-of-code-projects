const googleSearch = require('./script');
const fetch = require('node-fetch');

const swapi = require('./script');

it('calls swapi', async () => {
    expect.assertions(1);
        const data = await swapi.getPeople(fetch);
        expect(data.count).toEqual(87);
})

dbMock = [
    'dog.com',
    'web.com'
]

describe('group this together', () => {
    it('this is a test', () => {
        // googleSearch('test', dbMock)
        // expect('hello').toBe('hello')
     
     })
     
     it('is searching google', () => {
         expect(swapi.googleSearch('testtest', dbMock))
             .toEqual([])
         expect(swapi.googleSearch('dog', dbMock))
             .toEqual(['dog.com'])    
     })
})