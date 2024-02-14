window.onload = () =>{
		document.querySelector('#calculate').onclick = calculateTip;
	}

function calculateTip() { 
	

	let amount = document.querySelector ('#amount').value ;
	let persons = document.querySelector ('#persons').value;
	let service = document.querySelector('#services').value;

	
	let total = (amount * service) / persons;	

	if(amount <=0 || persons <=0){
		alert("please enter valid value")
	}
	document.querySelector('#total').innerHTML = total ;
}

