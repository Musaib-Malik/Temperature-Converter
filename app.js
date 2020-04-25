// UI variables
const form = document.getElementById('myForm');
const tempInput = document.querySelector('.temperature-input');
const selectList = document.getElementById('converter-list');
const first = document.querySelector('.first');
const second = document.querySelector('.second');
const item = document.querySelector('.item-1');
const item3 = document.querySelector('.item-3');
const item4 = document.querySelector('.item-4');
const clear = document.querySelector('.clear');

// Event Handler
form.addEventListener('submit', convert);
clear.addEventListener('click', clearForm);

// Convert the temperature
function convert(e) {
  e.preventDefault();
  // Celsius to Fahrenheit & Kelvin
  const celsiusToFahrenheit = parseFloat((tempInput.value * 9 / 5) + 32).toFixed(2);
  const celsiusToKelvin = parseFloat(tempInput.value + 273.15).toFixed(2);

  // Fahrenheit to Celsius & Kelvin
  const fahrenheitToCelsius = parseFloat((tempInput.value - 32) * 5 / 9).toFixed(2);
  const fahrenheitToKelvin = parseFloat(tempInput.value - 32) * 5 / 9 + 273.15;

  // Kelvin to Celsius & Fahrenheit
  const kelvinToCelsius = parseFloat((tempInput.value - 273.15)).toFixed(2);
  const kelvinToFahrenheit = parseFloat((tempInput.value - 273.15) * 9 / 5 + 32).toFixed(2);

  // Input validation
  if (tempInput.value == '') {

    // Error Shower
    alert('Please check your numbers!')
  }

  // Conversion based on User Input
  else {
    if (selectList.value === 'C') {
      first.value = `${celsiusToFahrenheit} fahrenheit`;
      second.value = `${celsiusToKelvin} kelvin`;

    } else if (selectList.value === 'F') {
      first.value = `${fahrenheitToCelsius} celsius`;
      second.value = `${fahrenheitToKelvin} kelvin`;
    } else if (selectList.value === 'K') {
      first.value = `${kelvinToCelsius} celsius`;
      second.value = `${kelvinToFahrenheit} fahrenheit`;
    }

    // Display results
    item3.style.display = 'block';
    item4.style.display = 'block';
    clear.style.display = 'block';

  }

  e.preventDefault();
}

// Clear Form
function clearForm(e) {
  window.location.reload();
}