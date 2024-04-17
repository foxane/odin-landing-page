const btn1 = document.querySelector('.hero__btn')
const btn2 = document.querySelector('.cta__btn')

let clicked = 0;

const clickAlert = function(){
    if(clicked === 2){
        alert("Button has no effect! They're strictly visual.")
    }
    else if(clicked === 4) {
        alert('Stop it!')
    } else if (clicked === 6 ) {
        alert('alright, say bye to your button');
        btn1.style.display = 'none'
        btn2.style.display = 'none'
    }
}

btn1.addEventListener('click', function(){
    clicked++
    clickAlert()
})

btn2.addEventListener('click', function(){
    clicked++
    clickAlert()
})
