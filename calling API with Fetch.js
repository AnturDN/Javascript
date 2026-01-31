

// 4 ways to call api - XMKHttpRequest, fetch, axios, jquery

// fetch() has replaced XMLHttpRequest
// fetch() - global method for making HTTP Request
// 2 ways to call - then, async, await

// + fetch() is easy to use compare to XMKHttpRequest
// + fetch() returns a promise
// - returned promise can only handle network error
// - does not support all the older browser



//-----------Use of then in fetch------------------------

// console.clear();

// fetch("https://jsonplaceholder.typicode.com/posts/1", { // I get this link from here - https://jsonplaceholder.typicode.com/guide/

//     method: "DELETE",

// })  
// .then((res) => {
//     if(!res.ok){
//         const message = `Error : ${res.status}`
//         throw new Error (message)
//     }
//     return res.json();
// })
// .then((res) => console.log(res))
// .catch((err) => console.log(err));
//--------------------------------------------------------

//----------Use of async, await in fetch------------------

const makeRequest = async(url, config) => {
    const res = await fetch(url, config); 
    if(!res.ok){ // checking if there is any error
        const message = `Error : ${res.status}`;
        throw new Error(message)
    }
    
    const data = await res.json();
    return data;

}

//---------------------deleteData-------------------------------

const deleteData = () => {
    makeRequest('https://jsonplaceholder.typicode.com/posts/1',{ // I get this link from here - https://jsonplaceholder.typicode.com/guide/
        
        method: "DELETE",

        }) 
    .then((res) => console.log(res))
    .catch((err) => console.log(err))
};
deleteData();
//----------------------------------------------------------------
//---------------------updateData--------------------------------

const updateData = () => {
    makeRequest('https://jsonplaceholder.typicode.com/posts/1',{ // I get this link from here - https://jsonplaceholder.typicode.com/guide/
        
            method: "PUT",
            body: JSON.stringify({
                id: 1,
            title: 'fooraaa',
            body: 'barbaaaa',
            userId: 1,
        }),
        headers: {
            'Content-type': 'application/json; charset=UTF-8',
        },
    }) 
    .then((res) => console.log(res))
    .catch((err) => console.log(err))
};
updateData();
//--------------------------------------------------------------------
//-----------------------sendData------------------------

// const sendData = () => {
//     makeRequest('https://jsonplaceholder.typicode.com/posts',{ // I get this link from here - https://jsonplaceholder.typicode.com/guide/
        
//             method: "POST",
//             body: JSON.stringify({
//             title: 'foo',
//             body: 'bar',
//             userId: 1,
//         }),
//         headers: {
//             'Content-type': 'application/json; charset=UTF-8',
//         },
//     }) 
//     .then((res) => console.log(res))
//     .catch((err) => console.log(err))
// };
// sendData();

//-----------------------------------------------------------------

//----------------------getData-----------------------------

// const getData = () => {
//     makeRequest('https://jsonplaceholder.typicode.com/posts') // I get this link from here - https://jsonplaceholder.typicode.com/guide/
//     .then((res) => console.log(res))
//     .catch((err) => console.log(err))
// }
// getData();
//-------------------------------------------------------------



