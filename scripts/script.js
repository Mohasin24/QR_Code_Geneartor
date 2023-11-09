
const qrImg = document.getElementById("qr-img");
const imgBox = document.getElementById("imgBox");
const urlText = document.getElementById("url-text");
let apiUrl = "https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=";

function generateQR() {
    if(urlText.value != ""){
        qrImg.src = apiUrl + urlText.value;
        
        qrImg.onload = ()=>{
            imgBox.style.border = '2px solid black';
            imgBox.style.padding = '15px';
            imgBox.style.margin = '2px auto';
        }
    }
    else{
        alert("Enter text or URL")
    }
}