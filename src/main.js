let cardsList = [
    {"name" : "Iida", "img_src" : "img/new 1.webp"},
    {"name" : "Kirishima", "img_src" : "img/new 2.webp"},
    {"name" : "Asui", "img_src" : "img/new 3.webp"},
    {"name" : "Uraraka", "img_src" : "img/new 4.webp"},
    {"name" : "Todoroki", "img_src" : "img/new 5.webp"},
    {"name" : "Bakugo", "img_src" : "img/new 6.webp"},
    {"name" : "Midoriya", "img_src" : "img/new 7.webp"},
    {"name" : "Shoji", "img_src" : "img/new 8.webp"},
    {"name" : "Tokoyami", "img_src" : "img/new 9.webp"}
];

let count = 0;
let firstCardGuess = "";
let secondCardGuess = "";
let cardBoard = document.getElementById('card-board');
let grid = document.createElement('div');
grid.setAttribute('class', 'grid');
cardBoard.appendChild(grid);

//duplicate cards

let cardGrid = cardsList.concat(cardsList)

// creating array shuffle for random grid

const shuffleArray =((arr) => {
    for(let i = arr.length - 1; i> 0; i--){
        const j = Math.floor(Math.random() * (i + 1));
        [arr[i],arr[j]] = [arr[j], arr[i]];

    }
    return arr;
})

let shuffledCards = shuffleArray(cardGrid)

const showCardBoard = (() =>{
    shuffledCards.forEach(item => {
        let card = document.createElement('div')
        card.classList.add('card')
        card.dataset.name = item.name;
        card.innerHTML = `<img src = "${item.img_src}">`;
        grid.appendChild(card)
    })
})

showCardBoard();