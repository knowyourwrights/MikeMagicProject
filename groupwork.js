var book = document.querySelector('.book');
var spell1 = document.getElementById('spell1');
var spell2 = document.getElementById('spell2');
var spell3 = document.getElementById('spell3');
var spell4 = document.getElementById('spell4');

var text1 = spell1.getAttribute('data-text');
var text2 = spell2.getAttribute('data-text');
var text3 = spell3.getAttribute('data-text');
var text4 = spell4.getAttribute('data-text');

function openBook() {

book.classList.toggle('open');

if (book.classList.contains('open')){
writeSpell(spell1, text1, function(){
writeSpell(spell2, text2, function(){
writeSpell(spell3, text3, function(){
writeSpell(spell4, text4, function(){
});
});
});
})
}
}

function writeSpell(element, text, callback) {
element.style.opacity = 1;
element.textContent = "";
var i = 0;
var interval = setInterval(function() {
element.textContent += text.charAt(i);
console.log(text.charAt(i));
i++;
if (i >= text.length) {
clearInterval(interval);
if (callback) callback();
}
}, 50);
}