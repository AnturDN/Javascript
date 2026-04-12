
// Web storage API - allows us to store & read data in browser
// Web storage API - localstorage, sessionStorage

// localStorage - permanent storage (it has no expiry date), 10mb memory
// sessionStorage - temporary storage/ after closing the browser it will also close, 5mb memory

// localStorage - store, read, update and remove data
// no expiry date : data never gets lost even if you close the browser

// localStorage store data as key value pair - string
// setItem(key, value)


//-------------localStorage-------------

// -------setItem(key, value)----------

// localStorage.setItem("userName", "Antur Deb Nath");
// localStorage.setItem("password", "0123456789");

//------------getItem(key)---------------

// const userName = localStorage.getItem("userName");
// const userPassword = localStorage.getItem("password");
// console.log(userName,userPassword);

// localStorage.setItem("userName", "Shuvra Deb Nath"); // update the name from Antur Deb Nath to Shuvra Deb Nath
// localStorage.setItem("password", "0123456789");

//-------------removeItem(key)--------------

// localStorage.removeItem("userName");
// localStorage.removeItem("password");

//------using string-------------

// const countries = ["Bangladesh", "USA", "Nepal"];
// localStorage.setItem("countries", JSON.stringify(countries)); // use of string
// localStorage.setItem("password", "0123456789");

// // getItem(key)
// const countriesList = JSON.parse(localStorage.getItem("countries")); // using string during getItem()
// console.log(countriesList);




// If you want to use the LocalStorage part then you have to comment down the all code of sessionStorage
// and If you want to use the sessionStorage part then you have to comment down the all code of LocalStorage





//-------------------------------sessionStorage-----------------------------


// --------setItem()------------
// sessionStorage.setItem("user", "Antur");

//----------getItem()-----------
// const userName = sessionStorage.getItem("user", "Antur");
// console.log(userName);

//----------removeItem()-------------

//  sessionStorage.removeItem("user", "Antur");

 //----------clear()------------------

//  sessionStorage.setItem("user1", "Antur");
//  sessionStorage.setItem("user2", "Antur");

// sessionStorage.clear();

//------------------Array--------------

// const user = {id : "101", name : "Antur"};
// sessionStorage.setItem("user", JSON.stringify(user));

// const userInfo = JSON.parse(sessionStorage.getItem("user"));
// console.log(user);




//-------------------------------Cookie---------------------------------

// we can set it's expiry manually


document.cookie = "username=Antur; expires=Thu, 27 Mar 2024 6:24:00 GMT";

console.log(document.cookie);



