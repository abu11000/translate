let btn = document.querySelector('button')
let select1 = document.querySelector('.select1')
let select2 = document.querySelector('.select2')
let input = document.querySelector('input')
let b = document.querySelector('b') 


btn.addEventListener('click', () => {
    fetch(`https://api.mymemory.translated.net/get?q=${input.value}&langpair=${select1.value}|${select2.value}`)
    .then(response => response.json())
    .then(data => {
        b.innerHTML = data.responseData.translatedText;
    })
})