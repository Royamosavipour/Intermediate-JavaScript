// events check

let $ = document
// let locationKey = $.querySelector('#location')
// let title = $.querySelector('title')

let keyCodElem=document.querySelector('#keyCode')
let keyElem=document.querySelector('#key')
let locationElem=document.getElementById('location')
let whichElem=document.getElementById('which')
let codeElem=document.getElementById('code')






document.body.addEventListener('keydown', function (event) {
	
	starter.style.display = 'none'
	heading.style.display = 'flex'
	ascii.style.display = 'flex'
	infos.style.display = 'flex'

	event.preventDefault() // f5 or f12 ... dont work
	let eventKeyCod=event.keyCode
	let eventKey=event.key
	let eventLocation=event.location
	let eventWhich=event.which
	let eventCode=event.code

	keyCodElem.innerHTML=eventKeyCod
	keyElem.innerHTML=eventKey
	locationElem.innerHTML=eventLocation
	whichElem.innerHTML=eventWhich
	codeElem.innerHTML=eventCode
	
	



})