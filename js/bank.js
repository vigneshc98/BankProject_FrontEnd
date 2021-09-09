const eye=document.querySelector('#togglePassword');
const pass=document.querySelector('#passShow');

eye.addEventListener('click', function (){
    const type=pass.getAttribute('type') == 'password'? 'text':'password';
    pass.setAttribute('type',type);
    this.classList.toggle('bi-eye');
});

const  error1=document.querySelector('#formErro1');
error1.innerHTML="invalid username/password";


