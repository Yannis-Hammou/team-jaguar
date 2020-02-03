var window = this;

let h1 = document.querySelector('h1');
if (h1) {
    let text = h1.innerHTML;
    animateText(h1,text);
}

function animateText(el,text){
    el.innerHTML='';
    console.log(text,text.length, text[0], text[1]);
    for (var i = 0; i < text.length; i++) {
        const letter =text[i];
        setTimeout(function(){
            el.innerHTML += letter;
        }, i*300);
    }
}