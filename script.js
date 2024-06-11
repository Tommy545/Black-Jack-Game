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
let textcontent = document.getElementById("text")

var dealerc = []
var playerc = []


newgamebutton.addEventListener("click", function(){
    deck = newgame();
    shuffle(deck);

    dealerc = [nextcard(), nextcard()]
    playerc = [nextcard(), nextcard()]
    console.log(dealerc, " ", playerc);

    textcontent.innerHTML = "Dealer: <br>" + convertor(dealerc) + "Points: <br>" + "<br> Player: <br>" + convertor(playerc) + "Points: <br>"
});

hitbutton.addEventListener("click", function(){
    playerc.push(nextcard())
    textcontent.innerHTML = "Dealer: <br>" + convertor(dealerc) + "Points: <br>" + "<br> Player: <br>" + convertor(playerc) + "Points: <br>"
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
    }
};

function nextcard(){
   return deck.shift()
}

function convertor(array){
    let cards = "";

    for(i = 0; i < array.length; i++){
        cards += array[i]['value'] + " of " + array[i]['suit'] + "<br>"
    }
    return cards;    
}