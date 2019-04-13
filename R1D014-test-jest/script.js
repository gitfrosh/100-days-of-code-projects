const fetch = require('node-fetch');

const googleDatabase = [
    'cats.com',
    'dogs.com',
    'flowers.com',
    'trees.com',
    'catpictures.com'
]

const googleSearch = (searchInput, db) => {
    const matches = db.filter(website => {
        return website.includes(searchInput)
    })
    return matches;
}

// console.log(googleSearch('cat', googleDatabase));

// getPeople = fetch => {
//     return fetch('https://swapi.co/api/people')
//     .then(response => response.json())
//     .then(data => {
//         console.log(data);
//         return {
//             count: data.count,
//             results: data.results
//         }
//     })
// }

const getPeople = async (fetch) => {
    const getRequest = await fetch('https://swapi.co/api/people')
    return await getRequest.json();
    // console.log(data)
}


getPeople(fetch);

module.exports = {
    googleSearch,
    getPeople
}
    