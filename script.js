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
    console.log(deck);
    console.log(dealerc, " ", playerc);

    textcontent.innerHTML = "Dealer: <br>" + convertor(dealerc) + "Points:" + check(dealerc) + "<br>" + "<br> Player: <br>" + convertor(playerc) + "Points:" + check(playerc) + "<br>"
});

hitbutton.addEventListener("click", function(){
    playerc.push(nextcard())
    textcontent.innerHTML = "Dealer: <br>" + convertor(dealerc) + "Points:" + check(dealerc) + "<br>" + "<br> Player: <br>" + convertor(playerc) + "Points:" + check(playerc) + "<br>"

    
});

function checknumberval(card){
    switch(card.value){
        case "Ace":
        return 1;
        case "Two":
        return 2;
        case "Three":
        return 3;
        case "Four":
        return 4;
        case "Five":
        return 5
        case "Six":
        return 6;
        case "Seven":
        return 7;
        case "Eight":
        return 8;
        case "Nine":
        return 9;
        default:
        return 10
    }
}

function check(cards){
    console.log(cards)
    let value = 0;
    for(let i = 0; i < cards.length; i++){
        value = value + checknumberval(cards[i]);
        if(cards.length - 1 == i){
            return value;
        }
    }
}

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