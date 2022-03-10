let data= [];
let q={};
function quotes(){
     q= data[Math.floor(Math.random() * data.length )];
     document.querySelector("#quote").innerHTML=q.text;
     document.querySelector("#author").innerHTML=q.author;
}

async function getQuotes(){
    const response = await fetch('https://type.fit/api/quotes');
    data = await response.json();
    quotes();
}
getQuotes();
const nbutton = document.querySelector("#new-quote");
const tbutton = document.querySelector("#twitter");
nbutton.addEventListener('click',getQuotes);
tbutton.addEventListener('click',()=>{
     window.open(`https://twitter.com/intent/tweet?text=${document.querySelector("#quote").innerHTML=q.text} - ${ document.querySelector("#author").innerHTML=q.author}`,'_blank');
});