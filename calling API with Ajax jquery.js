
// 4 ways to call api - XMLHttpRequest, fetch, axios, jquery
// add jquery library cdn
// ajax - asynchronous javascript and xml

console.clear();

const makeRequest = async(url, method, data) => {
try{
    const result = await $.ajax({
        url : url,
        method : method,
        data : data,
    });
    return result;
}catch(err){
    console.log(err);
}
};

const deleteData = () => {
    makeRequest("https://jsonplaceholder.typicode.com/posts/1", "DELETE")

    .then((res) => console.log(res));
};
deleteData();

//-------------updateData--------------------

// const updateData = () => {
//     makeRequest("https://jsonplaceholder.typicode.com/posts/1", "PUT", {

//           title: 'foofaaaaa',
//           body: 'bardyyyyy',
//           userId: 1,
        
//     }).then((res) => console.log(res));
// };
// updateData();

//--------creatData---------------------------

// const createData = () => {
//     makeRequest("https://jsonplaceholder.typicode.com/posts/", "POST", {

//           title: 'foo',
//           body: 'bar',
//           userId: 1,
        
//     }).then((res) => console.log(res));
// };
// createData();

//-------------getData------------------

// const getData = () => {
//     makeRequest("https://jsonplaceholder.typicode.com/posts/1", "GET")
//     .then((res) => console.log(res)
//     );
// };
// getData();

