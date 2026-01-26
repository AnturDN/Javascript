
// Axios is a JS library
// It helps to make request from browser (plain js/ Vue/ React/ Angular), node.JS


//--------------Axios---------------

// + very easy to use
// + it supports all modern browser including IE
// + throws error brilliantly
// + No need to set header couse axios is intelligent

// axios (config)
// asios(url [, config])

// asios.get(url [, config])
// asios.post(url [, config])
// asios.put(url [, config])
// asios.patch(url [, config])
// asios.delete(url [, config])

// axios returns response object - data, status, statusText, headers, config


console.clear();
//----------------get----------------------
// axios
// .get("https://jsonplaceholder.typicode.com/posts/")
// .then((res) => console.log(res.data))
// .catch((err) => console.log(err))

// //----------------post-----------------------
// axios
// .post("https://jsonplaceholder.typicode.com/posts/", {

//     method: 'POST',
//     body: JSON.stringify({
//       title: 'foo',
//       body: 'bar',
//       userId: 1,
//     }),
 
// })
// .then((res) => console.log(res.data))
// .catch((err) => console.log(err))

//----------------put----------------------------

// axios
// .put("https://jsonplaceholder.typicode.com/posts/1", {

//     method: 'PUT',
//     body: JSON.stringify({
//         id: 1,
//       title: 'fooraa',
//       body: 'barjaa',
//       userId: 1,
//     }),
 
// })
// .then((res) => console.log(res.data))
// .catch((err) => console.log(err))

//--------------------patch---------------------

// axios
// .patch("https://jsonplaceholder.typicode.com/posts/1", {

    
//     body: JSON.stringify({
//         body: "newbodyyyyyyyyyyyy",
//     }),
 
// })
// .then((res) => console.log(res.data))
// .catch((err) => console.log(err))

//------------------delete------------------------


// axios
// .delete("https://jsonplaceholder.typicode.com/posts/1")
// .then((res) => console.log(res.data))
// .catch((err) => console.log(err))

//-----------------Now we will use Axios using async and await------------


const makeRequest = async(config) => {
    
    return await axios(config);
};

//-----------------patch---------------


const patchData = () =>{
    makeRequest({
        url : "https://jsonplaceholder.typicode.com/posts/1'",
        method: "PATCH",
            body: JSON.stringify({
        body: "fooraaa",
    }),
    })

    .then((res) =>console.log(res.data))
    .catch((err) =>console.log(err))
};
patchData();

//-----------------deletData-----------------

// const deleteData = () =>{
//     makeRequest({
//         url : "https://jsonplaceholder.typicode.com/posts/1",
//         method: "DELETE",
//     })

//     .then((res) =>console.log(res.data))
//     .catch((err) =>console.log(err))
// };
// deleteData();

//-----------------updateData--------------------

// const updateData = () =>{
//     makeRequest({
//         url : "https://jsonplaceholder.typicode.com/posts/1",
//         method: "PUT",
//         data: JSON.stringify({
//             id : 1,
//           title: 'foodeeeee',
//           body: 'barbeeeee',
//           userId: 1,
//         }),
//     })

//     .then((res) =>console.log(res.data))
//     .catch((err) =>console.log(err))
// };
// updateData();

//------------------creatData--------------------

// const creatData = () =>{
//     makeRequest({
//         url : "https://jsonplaceholder.typicode.com/posts",
//         method: "POST",
//         data: JSON.stringify({
//           title: 'foo',
//           body: 'bar',
//           userId: 1,
//         }),
//     })

//     .then((res) =>console.log(res))
//     .catch((err) =>console.log(err))
// };
// creatData();


//------------------getData-----------------------

// const getData = () =>{
//     makeRequest("https://jsonplaceholder.typicode.com/posts/1")

//     .then((res) =>console.log(res))
//     .catch((err) =>console.log(err))
// };
// getData();



