let Name = "prosper";
console.log(Name)
let Age = 18;
if (Age >= 18) 
	console.log('Adult.');{
        console.log('Minor.')
    }
   for (let i = 1; i <= 5; i++) {
    console.log("Number: " + i);}
const output = document.querySelector('#output');

function displayGreeting(name, age) {
	const ageMessage = age >= 18
		? 'You are 18 or older.'
		: 'You are under 18.';
	const count = [];

	for (let number = 1; number <= 5; number += 1) {
		count.push(number);
	}

	output.innerHTML = `
		<h2>Hello, ${name}!</h2>
		<p>${ageMessage}</p>
		<p class="count-label">Counting from 1 to 5:</p>
		<ol>${count.map(number => `<li>${number}</li>`).join('')}</ol>
	`;
}

document.getElementById('greetme').addEventListener('click', () => {
	const name = document.querySelector('#name').value.trim() || 'Prosper';
	const age = Number(document.querySelector('#age').value);

	displayGreeting(name, age);
});
