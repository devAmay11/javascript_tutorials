const clock = document.querySelector('#clock');

setInterval(()=> {
    const date = new Date();
    const getDate = date.toLocaleTimeString();
    clock.innerHTML = getDate;
},1000)

