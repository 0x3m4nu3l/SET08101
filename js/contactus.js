const fname = document.getElementById('fname');
const email = document.getElementById('email');
const submit = document.getElementsByClassName('form-contact')[0];

submit.addEventListener('submit',(e)=>{
    e.preventDefault();
    let ebody = `
    <h1>Full name: </h1>${fname.value}
    <br>
    <h1>Email: </h1>${email.value}
    `;

    Email.send({
        SecureToken : "cd70f837-5c43-4535-9646-428b42a1840f", //add your token here
        To : 'mario.lee.rossi@gmail.com', 
        From : "mario.lee.rossi@gmail.com",
        Subject : "The Italian Way query",
        Body : ebody
    }).then(
      message => alert(message)
    );
});
