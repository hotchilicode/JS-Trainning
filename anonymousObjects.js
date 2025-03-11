 // anonymous objects = objects without a name
        //                     Not directly referenced
        //                     Less syntax. No need for unique names

        class Card {
            constructor(value, suit) {
                this.value = value;
                this.suit = suit;
            }
        }

        let cards = [new Card("Queen", "Hearts"),
            new Card("Queen", "Clubs"),
            new Card("Queen", "Spades"),
            new Card("Queen", "Diamonds"),
            new Card("King", "Hearts"),
            new Card("King", "Clubs"),
            new Card("King", "Spades"),
            new Card("King", "Diamonds"),
            new Card("Jack", "Hearts"),
            new Card("Jack", "Clubs"),
            new Card("Jack", "Spades"),
            new Card("Jack", "Diamonds")];

        // console.log(cards[5].value + cards[2].suit);

        cards.forEach(card => console.log(card.value + " of " + card.suit));
