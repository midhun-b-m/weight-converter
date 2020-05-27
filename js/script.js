let cards = document.getElementById('output')
let input = document.getElementById('Input');
let grams = document.getElementById('gramsoutput');
let kilograms = document.getElementById('kgoutput');
let ounces = document.getElementById('ozoutput');
let pounds = document.getElementById('poutput');
let pradio = document.getElementById('PRadio');
let gradio = document.getElementById('GRadio');
let kgradio = document.getElementById('KGRadio');
let ozradio = document.getElementById('OZRadio');

cards.style.visibility = 'hidden';

function poundCon(val){
		
		grams.innerHTML = val/0.0022046;
		kilograms.innerHTML = val/2.2046;
		ounces.innerHTML = val*16;
		pounds.innerHTML = val;
		cards.style.visibility = 'visible';
		
		}	

function gramCon(val){
		
		grams.innerHTML = val;
		kilograms.innerHTML = val/1000;
		ounces.innerHTML = val/28.3495;
		pounds.innerHTML = val*0.0022046;
		cards.style.visibility = 'visible';
		
		}	

function kgCon(val){
		
		grams.innerHTML = val*1000;
		kilograms.innerHTML = val;
		ounces.innerHTML = val*35.274;
		pounds.innerHTML = val*2.2046;
		cards.style.visibility = 'visible';
	
		}	

function ozCon(val){
		
		grams.innerHTML = val*28.3495;
		kilograms.innerHTML = val/35.274;
		ounces.innerHTML = val;
		pounds.innerHTML = val/16;
		cards.style.visibility = 'visible';
	
		}							

	input.addEventListener('input', (e)=>{
		let input = e.target.value;
		poundCon(input);
	});	


pradio.addEventListener('click',()=>{
	input.placeholder = "Enter weight in pounds...";
	input.addEventListener('input', (e)=>{
		let input = e.target.value;
		poundCon(input);
	});	
});

gradio.addEventListener('click',()=>{
	input.placeholder = "Enter weight in grams...";
	input.addEventListener('input', (e)=>{
		let input = e.target.value;
		gramCon(input);
		
	});
});

kgradio.addEventListener('click',()=>{
	input.placeholder = "Enter weight in kilograms...";
	input.addEventListener('input', (e)=>{
		let input = e.target.value;
		kgCon(input);
		
	});
});

ozradio.addEventListener('click',()=>{
	input.placeholder = "Enter weight in ounces...";
	input.addEventListener('input', (e)=>{
		let input = e.target.value;
		ozCon(input);
	});
});




