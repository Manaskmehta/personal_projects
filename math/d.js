window.onload = () =>{
    document.querySelector('#calculate').onclick = calculatepercent;
}

function calculatepercent() {
    let s1 = parseInt(document.querySelector('#s1').value) || 0;
    let s2 = parseInt(document.querySelector('#s2').value) || 0;
    let s3 = parseInt(document.querySelector('#s3').value) || 0;
    let s4 = parseInt(document.querySelector('#s4').value) || 0;
    let s5 = parseInt(document.querySelector('#s5').value) || 0;

    let total = s1 + s2 + s3 + s4 + s5;
    console.log(total);
    let percent = (total / 500) * 100;
    

    document.querySelector('#percent').innerHTML = percent ;
}

