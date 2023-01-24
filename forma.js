// 274
// 1

// let textarea = document.querySelector('textarea')
// let text = document.querySelector('p')

// textarea.addEventListener('blur', function()
// {
//     text.textContent = textarea.value
// })

// 275
// 1

// let btn = document.querySelector('#btn')
// let inp = document.querySelector('#inp')
// btn.addEventListener('click', function(){
//     inp.disabled = true
// })

// 2

// let btn1 = document.querySelector('#btn1')
// let btn2 = document.querySelector('#btn2')
// let inp = document.querySelector('#inp')
// btn1.addEventListener('click', function(){
//     inp.disabled = true
// })
// btn2.addEventListener('click', function(){
//     inp.disabled = false
// })

// 3

// let btn = document.querySelector('#btn')
// let inp = document.querySelector('#inp')
// btn.addEventListener('click', function(){
//     if(inp.disabled == true ){console.log(true)
//     } else{console.log(false)}
// })

// 276

//1
// let btn1 = document.querySelector('#btn1')
// let btn2 = document.querySelector('#btn2')
// let checkbox = document.querySelector('#checkbox')
// btn1.addEventListener('click', function(){
//     checkbox.checked = true
// })
// btn2.addEventListener('click', function(){
//     checkbox.checked = false
// })

//2

// let checkbox = document.querySelector('#checkbox')
// let btn = document.querySelector('#btn')
// let p = document.querySelector('#p')
// btn.addEventListener('click', function(){
//     if(checkbox.checked == true){p.textContent = 'привет'} else {p.textContent = 'пока' }
// })

// 277

// button.addEventListener('click', function() {
// 	elem.checked = !elem.checked;
// });

// 278

// let radios = document.querySelectorAll('input[type="radio"]');
// let button = document.querySelector('#button');
// let p = document.querySelector('p')

// button.addEventListener('click', function() {
// 	for (let radio of radios) {
// 		if (radio.checked) {
// 			p.textContent = radio.value
// 		}
// 	}
// });

// 279

// let inp = document.querySelector('input');
// let p = document.querySelector('p')
//  inp.addEventListener('change', function(){
//     p.textContent = inp.value
//  })

///280
///1
// let elem = document.querySelector('#elem');

// elem.addEventListener('input', function() {
// 	if(elem.value.length == 5){console.log(5)}
// });

//2
// let elem = document.querySelector('#elem');
// let p = document.querySelector('p')
// elem.addEventListener('input', function() {
// 	if(elem.value.length == 5){console.log(5)} 
//    p.textContent = 5 - elem.value.length 
// });

//281
// let elem1   = document.querySelector('#elem1');
// let elem2   = document.querySelector('#elem2');

// elem1.addEventListener('input', function() {
// 	if(elem1.value.length == 2){elem2.focus()}
// });
// elem2.addEventListener('input', function() {
// 	if(elem2.value.length == 2){elem2.blur()}
// });

//282

//1

// let select = document.querySelector('#select');
// let p = document.querySelector('p')
// let btn = document.querySelector('#btn')
// btn.addEventListener('click', function(){
// 	p.textContent = select.value
// });

//2

// let select = document.querySelector('#select');
// let p = document.querySelector('p')

// select.addEventListener('change', function(){
//     if( select.value % 4 == 0 ){	p.textContent = 'високосный'} else {p.textContent = ' не високосный'}
// });

