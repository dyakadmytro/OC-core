import {Warrior} from "../Models/Warrior";
import {ActionCard, Card, DefenceCard, PositionCard} from "../Models/Card";
import {getBodyPartsMapping, intersectMatrix, isMatrixEmpty, randomIntBetween, sortCards} from "../functions";

enum RoundStatus {
    Start,
    Complete
}
type cardMappedRes = {
    type: 'aa'| 'pa'| 'da'| 'dd'| 'dp'| 'pp',
    result: string,
    active: Card,
    passive: Card,
    part: string|null
}

    function processAA(card1: Card, card2: Card): cardMappedRes[] {
        const result = []
        const cross = intersectMatrix(card1.actionGrid, card2.actionGrid);

        if (cross) {
            result.push({
                type: 'aa',
                result: 'defence',
                active: card2,
                passive: card1,
                part: null
            })
            return result;
        }

        // Determine the order of the cards based on initiative
        let firstCard, secondCard;
        if (card1.initiative > card2.initiative) {
            firstCard = card1;
            secondCard = card2;
        } else if (card1.initiative < card2.initiative) {
            firstCard = card2;
            secondCard = card1;
        } else {
            const cardTemporaryList = [card1, card2];
            firstCard = cardTemporaryList.splice(randomIntBetween(0, cardTemporaryList.length - 1), 1)[0];
            secondCard = cardTemporaryList[0];
        }

        // Calculate the hits and misses
        const tt1 = intersectMatrix(firstCard.positionGrid, secondCard.actionGrid, true);
        const tt2 = intersectMatrix(secondCard.positionGrid, firstCard.actionGrid, true);

        const type1 = typeof tt1 === "number" ? "hit" : "miss";
        const type2 = typeof tt2 === "number" ? "hit" : "miss";
        result.push({
            type: 'pa',
            result: type1,
            active: secondCard,
            passive: firstCard,
            //@ts-ignore
            part: getBodyPartsMapping[tt1]
        })
        result.push({
            type: 'pa',
            result: type2,
            active: firstCard,
            passive: secondCard,
            //@ts-ignore
            part: getBodyPartsMapping[tt2]
        })
        return result
    }
    function processDA(card1: Card, card2: Card) {
        const bodyPartsMapping = getBodyPartsMapping();
        const result = []
        const cross = intersectMatrix(card1.actionGrid, card2.actionGrid);

        if (cross) {
            result.push({
                type: 'da',
                result: 'defence',
                active: card2,
                passive: card1,
                part: null
            })
            return result;
        }

        // Determine the order of the cards based on initiative
        let firstCard = card1, secondCard = card2;

        // Calculate the hits and misses
        const tt1 = intersectMatrix(card2.positionGrid, card1.actionGrid, true);

        const type1 = typeof tt1 === "number" ? "hit" : "miss";
        result.push({
            type: 'da',
            result: type1,
            active: card2,
            passive: card1,
            part: null
        })
        return result;
    }
    function processPA(card1: Card, card2: Card) {
        const bodyPartsMapping = getBodyPartsMapping();
        const result = []
        const cross = intersectMatrix(card1.actionGrid, card2.actionGrid);

        if (cross) {
            result.push({
                type: 'pa',
                result: 'defence',
                active: card2,
                passive: card1,
                part: null
            })
            return result;
        }

        // Determine the order of the cards based on initiative
        let firstCard = card1, secondCard = card2;

        // Calculate the hits and misses
        const tt1 = intersectMatrix(card2.positionGrid, card1.actionGrid, true);

        const type1 = typeof tt1 === "number" ? "hit" : "miss";
        if (type1 == 'miss') {
            result.push({
                type: 'pa',
                result: type1,
                active: card1,
                passive: card2,
                part: null
            })
        } else {
            result.push({
                type: 'pa',
                result: type1,
                active: card1,
                passive: card2,
                //@ts-ignore
                part: bodyPartsMapping[tt1]
            })
        }

        return result
    }
    function processDP(card1: Card, card2: Card) {
        const bodyPartsMapping = getBodyPartsMapping();
        const result = []
        const cross = intersectMatrix(card1.actionGrid, card2.actionGrid);

        if (cross) {
            result.push({
                type: 'dp',
                result: 'defence',
                active: card2,
                passive: card1,
                part: null
            })
            return result;
        }

        if (isMatrixEmpty(card2.actionGrid)) {
            result.push({
                type: 'dp',
                result: 'pass',
                active: card2,
                passive: card1,
                part: null
            })
            return result;
        }
        // Calculate the hits and misses
        const tt1 = intersectMatrix(card1.positionGrid, card2.actionGrid, true);
        const type1 = typeof tt1 === "number" ? "hit" : "miss";
        result.push({
            type: 'dp',
            result: type1,
            active: card2,
            passive: card1,
            part: null
        })
        return result
    }
    function processDD(card1: Card, card2: Card) {
        const result = []
        result.push({
            type: 'dd',
            result: 'blocking',
            active: card2,
            passive: card1,
            part: null
        })
        return result
    }
    function processPP(card1: Card, card2: Card) {
        const bodyPartsMapping = getBodyPartsMapping();
        const result = []
        const cross = intersectMatrix(card1.actionGrid, card2.actionGrid);
        if (cross) {
            result.push({
                type: 'pp',
                result: 'defence',
                active: card2,
                passive: card1,
                part: null
            })
            return result;
        }

        // Determine the order of the cards based on initiative
        let firstCard, secondCard;
        if (card1.initiative > card2.initiative) {
            firstCard = card1;
            secondCard = card2;
        } else if (card1.initiative < card2.initiative) {
            firstCard = card2;
            secondCard = card1;
        } else {
            const cardTemporaryList = [card1, card2];
            firstCard = cardTemporaryList.splice(randomIntBetween(0, cardTemporaryList.length - 1), 1)[0];
            secondCard = cardTemporaryList[0];
        }

        // Calculate the hits and misses
        const tt1 = intersectMatrix(firstCard.positionGrid, secondCard.actionGrid, true);
        const tt2 = intersectMatrix(secondCard.positionGrid, firstCard.actionGrid, true);

        const type1 = typeof tt1 === "number" ? "hit" : "miss";
        const type2 = typeof tt2 === "number" ? "hit" : "miss";

        if(tt1 == false && tt2 == false && isMatrixEmpty(firstCard.actionGrid) && isMatrixEmpty(secondCard.actionGrid)) {
            result.push({
                type: 'pa',
                result: 'pass',
                active: secondCard,
                passive: firstCard,
                part: null
            })
        } else if(tt1 == false && tt2 == false && (isMatrixEmpty(firstCard.actionGrid) || isMatrixEmpty(secondCard.actionGrid))){
            result.push({
                type: 'pa',
                result: 'miss',
                active: secondCard,
                passive: firstCard,
                part: null
            })
        } else {
            result.push({
                type: 'pa',
                result: type1,
                active: secondCard,
                passive: firstCard,
                //@ts-ignore
                part: bodyPartsMapping[tt1]
            })
            result.push({
                type: 'pa',
                result: type2,
                active: firstCard,
                passive: secondCard,
                //@ts-ignore
                part: bodyPartsMapping[tt2]
            })
        }
        return result
    }


class RoundMaster {
    private _leftCorner: Warrior
    private _rightCorner: Warrior
    private _currentStep: number = 1
    private _maxSteps: number = 5
    private _status: RoundStatus

    //  Responsibilities: map stacks, pass to attack, round status
    constructor(leftCorner: Warrior, rightCorner: Warrior) {
        this._leftCorner = leftCorner;
        this._rightCorner = rightCorner;
        this._currentStep = 1;
        this._maxSteps = 5;
        this._status = RoundStatus.Start;
    }

    get status(): RoundStatus {
        return this._status;
    }

    get currentStep(): number {
        return this._currentStep;
    }

    isComplete(): boolean {
        const res = this.status == RoundStatus.Complete || this.currentStep > this._maxSteps
        if (res && this.status != RoundStatus.Complete) this._status = RoundStatus.Complete
        return res
    }

    processStep(): void {
        if ( this.isComplete()) return;
        const leftCorner = {
            warrior: this._leftCorner,
            card: this._leftCorner.getCard()
        }
        const rightCorner = {
            warrior: this._rightCorner,
            card: this._rightCorner.getCard()
        }
        // compare cards and find which body part is damaged
        // so farther process will be:
        // apply filter/validator for card combination
        const processFunctionMapping: { [key: string]: (card1: Card, card2: Card) => any } = {
            "ActionCard-ActionCard": processAA,
            "ActionCard-DefenceCard": processDA,
            "ActionCard-PositionCard": processPA,
            "DefenceCard-PositionCard": processDP,
            "DefenceCard-DefenceCard": processDD,
            "PositionCard-PositionCard": processPP,
        };
        const sortedCardNames = [leftCorner.card.constructor.name, rightCorner.card.constructor.name].sort();
        const combinationKey = sortedCardNames.join('-');
        const processFn = processFunctionMapping[combinationKey];
        if (processFn) {
            let [leftCard, rightCard] = sortCards(leftCorner.card, rightCorner.card);
            const result = processFn(leftCard, rightCard);

            result.map(function (item: cardMappedRes) {
                if(item.result == 'hit') {
                    const attacker = leftCard === item.active ? leftCorner.warrior : rightCorner.warrior;
                    const defender = leftCard === item.active ? rightCorner.warrior : leftCorner.warrior;
                    const damage = attacker.makeDamage();
                    console.log("DAMAGE", damage)
                    defender.damage = damage;
                } else {
                    console.log(item.result)
                }
                console.log(result)
            })
        } else {
            console.log("Unknown card combination");
        }
        // pass cards to related process
        // apply result of process to warriors



        // process effects
        // need to process effects from warrior or weapon

        // process damage
        // some logic for processing damage to warrior,



        this._leftCorner.deck.next()
        this._rightCorner.deck.next()
        this._currentStep++
    }

    // create response
     compareCards(card1: Card, card2: Card) {
         // maybe add filter processing
         // todo ask gpt how to make filter like if both elements has action, if action and defence, if action and position

        if( 'ActionCard'  && 'ActionCard') {
            const cross = intersectMatrix(card1.actionGrid, card2.actionGrid)
            if (cross) {
                // process crosse weapons
            } else {
                //check initiative and make intersect for both warriors and calculate damage
                const w1 = intersectMatrix(card1.positionGrid, card2.actionGrid)
                const w2 = intersectMatrix(card2.positionGrid, card1.actionGrid)

                //  calculate damage for part w1
                //  calculate damage for part w2
            }
        } else if('ActionCard'  && 'DefenceCard') {
            const defence = intersectMatrix(card1.actionGrid, card2.actionGrid)
            if (defence) {
                // process defence
            } else {
                //check initiative and make intersect for both warriors and calculate damage
                const w1 = intersectMatrix(card1.positionGrid, card2.actionGrid)
                const w2 = intersectMatrix(card2.positionGrid, card1.actionGrid)

                //  calculate damage for part w1
            }
        } else if('ActionCard'  && 'PositionCard') {
            const cross = intersectMatrix(card1.actionGrid, card2.actionGrid)
            if (cross) {
                // process cross
            } else {
                //check initiative and make intersect for both warriors and calculate damage
                const dodge = intersectMatrix(card1.positionGrid, card2.actionGrid)
                if (dodge) {
                    // process dodge
                } else {
                    null
                }
                //  calculate damage for part w1
            }
        }

        const intersect = intersectMatrix(card1.actionGrid, card2.actionGrid, true)
        const result = null
        if(typeof intersect === 'number') {
           //todo check index of body part
        }
        return result
    }
}

export {RoundStatus, RoundMaster}