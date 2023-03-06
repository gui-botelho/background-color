var button = document.getElementById("enter");
var input = document.getElementById("userinput");
var ul = document.querySelector("ul");
var lis = document.querySelectorAll("li");
var btns = document.querySelectorAll('.delete')
var colorOne = document.getElementById('colorOne')
var colorTwo = document.getElementById('colorTwo')
var body = document.querySelector('body')
var hexValues= document.getElementById('hexValues')
var angle = document.getElementById('angle')


function getCurrentDate(selector, sentence=''){
var date = new Date()
var dateString = sentence + date.getDate() + '/' + (date.getMonth()+1) + '/' + date.getFullYear()
document.querySelector(selector).innerHTML = dateString
}

getCurrentDate('#first')

function inputLength() {
	return input.value.length;
}

function createListElement() {
	var li = document.createElement("li");
	li.appendChild(document.createTextNode(input.value));
	li.addEventListener('click', function(event){
		if(event.target.type != 'submit'){
			event.target.classList.toggle('done')}});	

	ul.appendChild(li);
	input.value = "";

	var btn = document.createElement('button');
	btn.appendChild(document.createTextNode('Delete'));
	btn.classList.add('btn', 'btn-outline-primary')
	btn.addEventListener('click', function(event){
		event.target.parentNode.remove();
	})
	li.appendChild(btn);

	getCurrentDate('#second', 'Atualizado pela &uacuteltima vez em:');


}

function addListAfterClick() {
	if (inputLength() > 0) {
		createListElement();
	}
}

function addListAfterKeypress(event) {
	if (inputLength() > 0 && event.keyCode === 13) {
		createListElement();
	}
}

function updateBg(event){
	body.style.background = 'linear-gradient(' + angle.value + 'deg, ' + colorOne.value + ', ' + colorTwo.value  + ')';
	hexValues.textContent = '' + body.style.background
}

button.addEventListener("click", addListAfterClick);

input.addEventListener("keypress", addListAfterKeypress);

for(var i=0; i<lis.length; i++){
	lis[i].addEventListener('click', function(event){
		if(event.target.type != 'submit'){
			event.target.classList.toggle('done')};	
	})
	btns[i].addEventListener('click', function(event){
		event.target.parentNode.remove();
	})
}

colorOne.addEventListener('input', updateBg, false)
colorTwo.addEventListener('input', updateBg, false)
angle.addEventListener('input', updateBg, false)
