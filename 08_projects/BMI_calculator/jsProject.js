const form = document.querySelector('form');
console.log(form);
form.addEventListener('submit', function(e){
    e.preventDefault();
    const height = parseInt(document.getElementById('height').value);
    console.log(typeof height);
    const weight = parseInt(document.getElementById('weight').value);
    console.log(typeof weight);
    if (height === '' || height < 0 || isNaN(height)){
        results.innerHTML = `Please give a valid height ${height}`;
    }
    else if (weight === '' || weight < 0 || isNaN(weight)){
        results.innerHTML = `Please give a valid weight ${weight}`;
    }else{
        const bmi = (weight / ((height * height) / 10000)).toFixed(2);
        console.log(bmi);
        const results = document.getElementById('results');
        console.log(results);
        results.innerHTML = `Your BMI is ${bmi}`;
    }
    
})