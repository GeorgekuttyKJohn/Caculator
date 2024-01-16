let inputBox =  document.getElementById('inputBox')
let buttons = document.querySelectorAll('button')

let string =''

buttons.forEach(element =>{
    element.addEventListener('click' ,(b)=>{
        if(
            b.target.innerText=='='
        )
        {
            string= String(eval(string))
            inputBox.value = string;
        }
        else if
            (b.target.innerText=='AC'){
                string =''
                inputBox.value = string;
            }
        else if( b.target.innerText == 'DEL'){
            string = string.substring(0,string.length-1)
            inputBox.value=string;
        } 
        else if(b.target.id=='plusMinus'){
            string=String(-eval(string))
            inputBox.value=string
        }  
        
        else{
            string += b.target.innerText
            inputBox.value = string
        }
    })
})


















// // Function to save form data to localStorage
// function saveFormData() {
//     var name = document.getElementById('name').value;
//     var email = document.getElementById('email').value;
//     var message = document.getElementById('message').value;

//     // Save form data to localStorage
//     localStorage.setItem('name', name);
//     localStorage.setItem('email', email);
//     localStorage.setItem('message', message);
// }

// // Function to load form data from localStorage
// function loadFormData() {
//     var name = localStorage.getItem('name');
//     var email = localStorage.getItem('email');
//     var message = localStorage.getItem('message');

//     // Set form fields with saved data
//     document.getElementById('name').value = name || '';
//     document.getElementById('email').value = email || '';
//     document.getElementById('message').value = message || '';
// }

// // Function to clear localStorage
// function clearFormData() {
//     localStorage.removeItem('name');
//     localStorage.removeItem('email');
//     localStorage.removeItem('message');
// }

// // Function to validate the form
// function validateForm() {
//     var name = document.getElementById('name').value;
//     var email = document.getElementById('email').value;
//     var message = document.getElementById('message').value;

//     if (name === "" || email === "" || message === "") {
//         alert("Please fill out all fields");
//         return false;
//     }

//     // Save form data to localStorage before submission
//     saveFormData();

//     // Additional validation logic can be added here

//     // If all validation passes, you can submit the form
//     return true;
// }

// // Load form data when the page is loaded
// window.onload = function () {
//     loadFormData();
// };


