window.onload = () =>
	{
		document.querySelector('#calculate').onclick = calculateTip;
	}

function calculateTip() { 
	
	let amount = document.querySelector ('#amount').value ;
	let persons = document.querySelector ('#persons').value;
	let service = document.querySelector('#services').value ;
	let total = (amount * service) / persons;
	
	document.querySelector('#total').innerHTML = total ;
}