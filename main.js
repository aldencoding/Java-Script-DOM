// dataUser
const userId = "F-007";
const userPass = "123";
// formLogin
let myForm = document.getElementById('myForm').addEventListener('submit',function(events){
    events.preventDefault()    
    //inputData
    let inputId = document.getElementById('input-id').value;
    let inputPass = document.getElementById('input-pass').value;
    
    const inputCheck = document.querySelector('input')
    
if ((inputId !== "") && (inputPass !== "") ){
    if((userId === inputId) && (inputPass === userPass)){
        setTimeout(function(){ 
        window.location.href ='lab.html';
        },2000);
    }else{
        alert('Maaf ID atau Sandi Anda Salah');
        document.getElementById('input-id').value = "";
        document.getElementById('input-pass').value = "";
    }
    }else{
        alert("Masukan data dengan lengkap")
    }
})
