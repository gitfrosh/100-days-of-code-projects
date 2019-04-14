const googleSearch = require('./script');
const fetch = require('node-fetch');

const swapi = require('./script');

describe('async tests', () => {
    it('swapi calls without mock', async () => {
        expect.assertions(2);
            const data = await swapi.getPeople(fetch);
            expect(data.count).toEqual(87);
            expect(data.results.length).toBeGreaterThan(5);
    })

    it('swapi calls with mock', async () => {
        // we don't need to test the 3rd party fetch lib
        // so make a mock fetch
        const mockFetch = jest.fn()
            .mockReturnValue(Promise.resolve({json: () => 
                Promise.resolve({
                    count: 87,
                    results: [0, 1, 2, 3, 4, 5]
            })}))
        expect.assertions(4);
        const data = await swapi.getPeople(mockFetch);
        expect(mockFetch.mock.calls.length).toBe(1);
        expect(mockFetch).toBeCalledWith('https://swapi.co/api/people');
        expect(data.count).toEqual(87);
        expect(data.results.length).toBeGreaterThan(5);
    })
})



dbMock = [
    'dog.com',
    'web.com'
]

describe('very basic tests', () => {
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