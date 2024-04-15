const form = document.querySelector('form');
// this usecase will give you empty
// const height = parseInt(document.querySelector('#height').value)

form.addEventListener('submit', function (e) {
  e.preventDefault();

  const height = parseInt(document.querySelector('#height').value);
  const weight = parseInt(document.querySelector('#weight').value);
  const results = document.querySelector('#results');

  if (height === '' || height < 0 || isNaN(height)) {
    results.innerHTML = `Please give a valid height ${height}`;
  } else if (weight === '' || weight < 0 || isNaN(weight)) {
    results.innerHTML = `Please give a valid weight ${weight}`;
  } else {
    const bmi = (weight / ((height * height) / 10000)).toFixed(2)
    // results.innerHTML = `<span>${bmi}</span>`;
    

    if(bmi < 18.5){ 
    results.innerHTML = `BMI is ${bmi}<p>Under Weight : Less than 18.6 </p>`
    } else if(bmi >= 18.5 && bmi < 24.4 ){
        results.innerHTML = `BMI is ${bmi}<p>Normal Range = 18.6 and 24.9 </p>`
    } else{
        results.innerHTML = `BMI is ${bmi}<p>Overweight = Greater than 24.9`
    }
    

}


});

