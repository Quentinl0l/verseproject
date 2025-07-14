import Data, { persos } from './data';

const data = new Data();

const persoButton = document.querySelector('.perso');
const acceuilButton = document.querySelector('.acceuilB');
const proposButton = document.querySelector('.propos');

persoButton.addEventListener('click', sectionPersos);
acceuilButton.addEventListener('click', acceuil);
proposButton.addEventListener('click', propos);
//boutonSuivant.addEventListener('click', event => {event.preventDefault();data.setData(1);});

function sectionPersos(event){
    event.preventDefault();
    event.stopPropagation();
    const sectionAcceuil = document.querySelector('.active');
    sectionAcceuil.classList.remove('active');
    const sectionPerso = document.querySelector('.personnages');
    sectionPerso.classList.add('active');
    data.setData();
}

function acceuil(event){
    event.preventDefault();
    const sectionAcceuil = document.querySelector('.acceuil');
    const active = document.querySelector('.active');
    active.classList.remove('active');
    sectionAcceuil.classList.add('active');
}

function propos(event){
    event.preventDefault();
    const active = document.querySelector('.active');
    active.classList.remove('active');
    const sectionPropos = document.querySelector('.aPropos');
    sectionPropos.classList.add('active');
}

let html = '';
persos.forEach(perso => {
    html += `<a class="persoCliquable" href="${perso.name}"><img src="img/persos/${perso.name.toLowerCase()}.png" alt="${perso.name}"></a>`;
})
document.querySelector('.personnages').innerHTML += html;

const persosCliquable = document.querySelectorAll('.persoCliquable');
persosCliquable.forEach(perso => {
    perso.addEventListener('click', event => {
        event.preventDefault();
        data.findData(perso.getAttribute('href'));
        data.setData();
    })
})