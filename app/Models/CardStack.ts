import {Card} from "./Card";

type CardStackArr = [Card, Card, Card, Card, Card]

class CardStack {
    private _stack: CardStackArr
    private key: number = 0

    constructor(data: CardStackArr) {
        this._stack = data
    }

    current(): Card {
        return this._stack[this.key]
    }

    next(): CardStack {
        this.key++
        return this
    }
}

export {
    CardStackArr,
    CardStack
}