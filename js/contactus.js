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
        SecureToken : "a5b5a46a-70db-46f1-9b54-ddaf8e3dedcb", //add your token here
        To : 'emanuel.co.uk@gmail.com', 
        From : "website visitor",
        Subject : "The Italian Way query",
        Body : ebody
    }).then(
      message => alert(message)
    );
});
