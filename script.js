//variables
const body = document.body;
const audio = new Audio('sounds/risa.mp3');
const audioNo = new Audio('sounds/nosound.mp3')

function detectionMethod () {
    Swal.fire({
        title: 'Tu mami se prostituye',
        showDenyButton: true,
        confirmButtonText: 'Claro que si',
        denyButtonText:'ÑO -//w//-',
        allowOutsideClick: false
}).then((result)=>{
    if(result.isConfirmed){
        audio.play();
        Swal.fire({
            title: "Lo hace por tu bien....",
            imageUrl: "https://i.ibb.co/93CFQv5/shirmp-Yes.jpg",
            imageWidth: 500,
            imageHeight: 400,
            imageAlt: "Custom image",
            allowOutsideClick: false
          }).then((result)=>{
            if(result.isConfirmed){
                audio.pause();
                audio.load();
            }
          });
          
        
    }else if (result.isDenied) {
        audioNo.play();
        Swal.fire({
            title: "AJAJJAJA DESEMPLEADO DE VERGA",
            imageUrl: "https://i.ibb.co/L5V3ddZ/shrimpNo.jpg",
            imageWidth: 800,
            imageHeight: 400,
            imageAlt: "Custom image",
            allowOutsideClick: false
          }).then((result)=>{
            if(result.isConfirmed){
                audioNo.pause();
                audioNo.load();
            }
          });
          
      }
}).get
} 

