const fname = document.getElementById('fname');
const email = document.getElementById('email');
const submit = document.getElementsByClassName('form-contact')[0];

submit.addEventListener('submit',(e)=>{
    e.preventDefault();
    let ebody = `
    <h1>Full name: </h1>${fname.value}
    <br>
    <h1>Email: </h1>${email.value}
    <br>
    <h1>Message: </h1>${document.getElementById('message').value}
    `;

    Email.send({
        SecureToken : "13029bad-ffc9-49c6-ae8b-bf59da11d118", //add your token here
        To : 'mario.lee.rossi@gmail.com', 
        From : "emanuel.co.uk@gmail.com",
        Subject : "The Italian Way query",
        Body : ebody
    }).then(
      message => alert(message)
    );
});