var TEMP = document.getElementById("temp");
var CARD = TEMP.querySelector(".card");
var TARGET = document.getElementById("target");

class Player{
    constructor(name){
        this.name = name;
        this.cards = [];
    }
    
    addCard(card){
        this.cards.push(card);
    }
};

class Deck{
    constructor(num){
        this.cardCount = num;
        this.cards = [];
        this.make();
    }
    make(){
        for(var i = 0; i < this.cardCount; i++){
            var newCard = new card(i);
            this.cards.push(newCard);
        }
    }
    shuffle(){
        for(var i = 0; i < this.cards.length; i++){
            var rnd = Math.floor(Math.random()*this.cards.length);
            var card1 = this.cards[i];
            var card2 = this.cards[rnd];
            this.cards[i] = card2;
            this.cards[rnd] = card1;
        }
        return this;
    }
    deal(){
        return this.cards.pop();
    }
};

class card{
    constructor(num){
        this.id         = num;
        this.suit       = Math.floor(num/13);
        this.val        = num % 13 + 1;
        this.background = "mine.svg";
        this.suits      = ["H", "S", "C", "D"];
    }
    getSuit(){
        return this.suit;
    }
    getDom(){
        var cardCopy = CARD.cloneNode(true);
        return cardCopy;
    }
    draw(){
        var cardCopy = CARD.cloneNode(true);
        cardCopy.innerHTML = "silver" + this.id;
        cardCopy.style.backgroundPositionX = -(this.id) + "00%";
        cardCopy.style.backgroundPositionY = -Math.floor(this.id/13) + "00%";
        TARGET.append(cardCopy);
    }
}

var makeDeck = function(howMany){
    var deck = [];
    for(var i = 0; i < howMany; i++){
        deck.push(new card(i));
    }
    return deck;
};

var shuffledDeck = function(deck){
    for(var i = 0; i < deck.length; i++){
        var rnd = Math.floor(Math.random()*deck.length);
        var card1 = deck[i];
        var card2 = deck[rnd];
        deck[i] = card2;
        deck[rnd] = card1;
    }
    return deck;
};

var DECK = makeDeck(52);
DECK = shuffledDeck(DECK);
console.log(DECK);
DECK[0].draw();
DECK[1].draw();
DECK[3].draw();