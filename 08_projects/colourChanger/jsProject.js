const button = document.querySelectorAll('.button');
const body = document.querySelector('body');
button.forEach((color) =>{
    color.addEventListener('click',(e)=>{
        const gotColorId = e.target.id;
        if(gotColorId){
            body.style.backgroundColor = gotColorId;

        }

    })
})