let suits = ['Hearts', 'Clubs', 'Diamonds', 'Spades'];

let numbers = [
    "Ace",
    "Two",
    "Three",
    "Four",
    "Five",
    "Six",
    "Seven",
    "Eight",
    "Nine",
    "Ten",
    "Jack",
    "Queen",
    "King"
];

let newgamebutton = document.getElementById("newgame")
let hitbutton = document.getElementById("hit")
let standbutton = document.getElementById("stand")

var dealerc = []
var playerc = []


newgamebutton.addEventListener("click", function(){
    deck = newgame();
    shuffle(deck);

    dealerc = [nextcard(), nextcard()]
    playerc = [nextcard(), nextcard()]
    console.log(dealerc, " ", playerc);
});

function newgame() {
    deck = [];

    for(i = 0; i < suits.length; i++){
        for(y = 0; y < numbers.length; y++){
            let card = {
                suit: suits[i],
                value: numbers[y]
            }
            deck.push(card);
        }
    }
    return deck;
}

function shuffle(deck){
    for(i = 0; i < deck.length; i++){
        let swapint = Math.trunc(Math.random() * deck.length)
        let temp = deck[swapint];
        deck[swapint] = deck[i];
        temp = deck[i];
    }
};

function nextcard(){
   return deck.shift()
}