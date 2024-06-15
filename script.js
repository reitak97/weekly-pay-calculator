const hourlyRate = document.querySelector('#hourly-rate');
const mondayHours = document.querySelector('#monday-hours');
const tuesdayHours = document.querySelector('#tuesday-hours');
const wednesdayHours = document.querySelector('#wednesday-hours');
const thursdayHours = document.querySelector('#thursday-hours');
const fridayHours = document.querySelector('#friday-hours');

const mondayMinutes  = document.querySelector('#monday-minutes');
const tuesdayMinutes = document.querySelector('#tuesday-minutes');
const wednesdayMinutes = document.querySelector('#wednesday-minutes');
const thursdayMinutes = document.querySelector('#thursday-minutes');
const fridayMinutes = document.querySelector('#friday-minutes');
const result = document.querySelector('#result');


function calculateWeeklyPay() {
    // Check if any input is empty and set it to 0
    const inputs = document.querySelectorAll('input');
    inputs.forEach(input => {
        if (input.value === '') {
            input.value = 0;
        }
    });
    const rate = parseFloat(hourlyRate.value);
    const monday = parseFloat(mondayHours.value) + parseFloat(mondayMinutes.value) / 60;
    const tuesday = parseFloat(tuesdayHours.value) + parseFloat(tuesdayMinutes.value) / 60;
    const wednesday = parseFloat(wednesdayHours.value) + parseFloat(wednesdayMinutes.value) / 60;
    const thursday = parseFloat(thursdayHours.value) + parseFloat(thursdayMinutes.value) / 60;
    const friday = parseFloat(fridayHours.value) + parseFloat(fridayMinutes.value) / 60;
    
    const total = monday + tuesday + wednesday + thursday + friday;
    const pay = rate * total;
    result.textContent = `Your weekly pay is $${pay.toFixed(2)}`;
    
    
    
}


document.querySelector('#calculate').addEventListener('click', calculateWeeklyPay);
