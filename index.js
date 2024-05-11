const openMenu = document.getElementById('openMenu');
const closeMenu = document.getElementById('closeMenu');
const menu = document.getElementById('menu');

function toggleMenu (id, menu) {
    id.addEventListener('click', ()=> {
        menu.classList.toggle('hidden');
    })
}

toggleMenu(openMenu, menu);
toggleMenu(closeMenu, menu);

const arrFrance = [
    {
        img:'img/france1.png',
        author:'Марсель Руссо',
        name:'Охота Амура',
        description:'Холст, масло (50х80)',
        price:14500,
    },
    {
        img:'img/france2.png',
        author:'Анри Селин',
        name:'Дама с собачкой',
        description:'Акрил, бумага (50х80)',
        price: 16500,
    },
    {
        img:'img/france3.png',
        author:'Франсуа Дюпон',
        name:'Процедура',
        description:'Цветная полиграфия (40х60)',
        price:200000,
    },
    {
        img:'img/france4.png',
        author:'Луи Детуш',
        name:'Роза',
        description:'Бумага, акрил (50х80)',
        price:12000,
    },
    {
        img:'img/france5.png',
        author:'Франсуа Дюпон',
        name:'Птичья трапеза',
        description:'Цветная полиграфия (40х60)',
        price:22500,
    },
    {
        img:'img/france6.png',
        author:'Пьер Моранж',
        name:'Пейзаж с рыбой',
        description:'Цветная полиграфия (40х60)',
        price:200000,
    },
]

const cards = document.getElementById('cards');

document.addEventListener('DOMContentLoaded', () => {
    arrFrance.map(el => {
        createCard(cards, el.img, el.author, el.name, el.description, el.price)
    })
})


function createCard (arg, pathImg, author, name, description, price) {
    
    let article = document.createElement('article');
    let figure = document.createElement('figure');
    let img = document.createElement('img');
    let figcaption = document.createElement('figcaption');
    let div = document.createElement('div');
    let h2 = document.createElement('h2');
    let h5 = document.createElement('h5');
    let p = document.createElement('p');
    let button = document.createElement('button');
    
    arg.append(article);
    article.classList.add('p-5', 'bg-firm_lGreen', 'flex', 'flex-col', 'gap-[10px]', 'min-w-[340px]')
    article.append(figure);
    figure.classList.add('flex', 'flex-col', 'gap-5')
    figure.append(img);
    img.src = pathImg;
    img.alt = name;
    figure.append(figcaption);
    figcaption.classList.add('text-firm_gray', 'text-lg');
    figcaption.textContent = author;

    article.append(div);
    div.classList.add('flex', 'flex-col', 'gap-2', 'text-firm_black');
    div.append(h2);
    h2.classList.add('text-[30px]');
    h2.textContent = name;
    div.append(h5);
    h5.classList.add('text-lg')
    h5.textContent = description;

    if (div.className.includes('text-firm_black')) {
        let div = document.createElement('div');

        article.append(div);
        div.classList.add('flex', 'flex-col', 'mt-5', 'gap-5', 'text-firm_hoverGreen')
        div.append(p);
        p.classList.add('text-2xl');
        let format = String(price).slice(0,2) + ' ' + String(price).slice(2);
        p.textContent = format + 'руб';
        div.append(button);
        button.classList.add('border', 'border-firm_hoverGreen', 'rounded', 'py-5', 'text-xl')
        button.textContent = 'В корзину'
    }
}

