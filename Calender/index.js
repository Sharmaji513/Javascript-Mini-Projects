
const calDay = document.querySelector('.Day')
const calDate = document.querySelector('.Date')
const calMonth = document.querySelector('.month')
const calYear = document.querySelector('.year')



const date = new Date();
calDate.innerText = date.getDate()
calDay.innerText = date.toLocaleDateString('en-US', { weekday: 'long' })
calMonth.innerText = date.toLocaleDateString('en-US', { month: 'long' })
calYear.innerText = date.getFullYear()
