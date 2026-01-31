
console.clear();

// event - onload(), onerror()
// property - response, responseText, responseURL, status, statusText
// function - open(), send(), setRequestHeader()


const makeRequest = (methode, url, data) =>{
    const xhr = new XMLHttpRequest();

    xhr.open(methode, url)//starting the request using open() 

    xhr.setRequestHeader('Content-Type', 'application/json')
    
    xhr.onload = () => {
        let data = xhr.response;
        console.log(xhr.status);
        console.log(JSON.parse(data));
    }

    xhr.onerror = () => { // For error handling
        console.log("Error is here");
    }
    
    xhr.send(JSON.stringify(data));

}



const getData = () =>{

    makeRequest('GET', 'https://jsonplaceholder.typicode.com/posts') // I get the link from here = https://jsonplaceholder.typicode.com/guide/  
}
const sendData = () =>{

    makeRequest('POST', 'https://jsonplaceholder.typicode.com/posts',{
        title: 'foo',
        body: 'bar',
        userId: 1,
    });
}  

const updateData = () =>{

    makeRequest('PUT', 'https://jsonplaceholder.typicode.com/posts/1',{
        id: 1,
        title: 'fooMA',
        body: 'barMA',
        userId: 1,
    });
} 

const updateSingleData = () =>{

    makeRequest('PATCH', 'https://jsonplaceholder.typicode.com/posts/1',{
      
        title: 'This title is changed',
 
    });
}

const deletData = () =>{

    makeRequest('DELET', 'https://jsonplaceholder.typicode.com/posts/1')

}  

deletData();



