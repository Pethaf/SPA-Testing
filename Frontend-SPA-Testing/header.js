import { changePage } from "./router.js";

//Help function to create the buttons
const registerMenuButton = (id,page) =>{
    const button = document.getElementById(id);
    button.addEventListener('click', () =>{
        changePage(page);
    });
}

export class Header {
    constructor(element){

        registerMenuButton('LoginButton', 'login');
        registerMenuButton('ExpenseButton', 'expense');
        registerMenuButton('CategoryButton', 'category');
        registerMenuButton('LogoutButton', 'logout');
        registerMenuButton('RegisterButton', 'register');
        
    }
}