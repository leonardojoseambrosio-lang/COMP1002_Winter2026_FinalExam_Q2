// --- DOM ELEMENT SELECTION ---
// Selecting buttons and elements that will be manipulated by JavaScript

//Send Button
let submitBtn = document.getElementById("submitBtn");
let username = document.getElementById("name");
let email = document.getElementById("email");
let thanksMessage = document.getElementById("thanksMessage");

// --- FORM VALIDATION and FEEDBACK ---
// Validates user input and displays a personalized success message
submitBtn.addEventListener("click", function(event){
event.preventDefault()

// Basic validation for empty fields and email format
if(username.value.trim() == ""){
    alert("Type you name.");
    username.focus()
}
else if(email.value.trim() == ""){
    alert("Type your email.");
    email.focus();
}
else if(!email.value.includes("@")){
    alert("Invalid email.");
    email.focus();
}

else{
    // Show the hidden 'thanks' message and insert the user's name
    thanksMessage.classList.add("thanks-style_show")

    thanksMessage.textContent = "Thank you! " + username.value + ", you have been registered."
    
    // Clear form fields after successful 'submission'
    username.value = "";
    email.value = "";
    message.value = "";
}
});