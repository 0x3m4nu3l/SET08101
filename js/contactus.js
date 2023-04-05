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
        SecureToken : "8337609a-e282-4c6d-a1bb-de3795e64e33", //add your token here
        To : 'mario.lee.rossi@gmail.com', 
        From : "mario.lee.rossi@gmail.com",
        Subject : "The Italian Way query",
        Body : ebody
    }).then(
      message => alert(message)
    );
});
