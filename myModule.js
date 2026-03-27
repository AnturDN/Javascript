
export let text = "Welcome to mudule";

export function setText(txt){
    text = txt;
}

// we can change the name like this, here text turned into message
let text = "Hello";
export {text as message}

