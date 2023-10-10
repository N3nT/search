const search = document.querySelector('.wyszukiwarka');
const li = document.querySelectorAll('ul li');

const szukaj = (e) => {
    const tekst = e.target.value.toLowerCase();
    console.log(tekst);
    li.forEach((el) => {
        if(el.textContent.toLowerCase().indexOf(tekst) == '-1'){
            el.style.display = "none";
        }
        else{
            el.style.display = "block";
        }
    })
}

search.addEventListener('keyup', szukaj);