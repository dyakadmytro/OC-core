import {UnitFactory} from "./Factories/UnitFactory";
import {ArmourFactory} from "./Factories/ArmourFactory";
import {WeaponFactory} from "./Factories/WeaponFactory";
import {factoryStandards} from "./bootstrap/config";
import {CardFactory} from "./Factories/CardFsctory";
import {ActionCard, Card, DefenceCard, PositionCard} from "./Models/Card";
import {randomIntBetween} from "./functions";
import {Warrior} from "./Models/Warrior";
import {RoundMaster} from "./Services/RoundMaster";
import {CardStack, CardStackArr} from "./Models/CardStack";

const AF = new ArmourFactory(factoryStandards.armour)
const WPF = new WeaponFactory(factoryStandards.weapon)
const WF = new UnitFactory(factoryStandards.unit)
function getRandomCardType(): [any, string] {
    const cardKeys = Object.keys(factoryStandards.card);
    const cardKey = cardKeys[randomIntBetween(0, cardKeys.length - 1)];
    const randomType = factoryStandards.card[cardKey];
    const randomElement = randomType[randomIntBetween(0, randomType.length - 1)];
    return [randomElement, cardKey];
}

function shuffleArray(array: any): any[] {
    const shuffledArray = [...array];
    for (let i = shuffledArray.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [shuffledArray[i], shuffledArray[j]] = [shuffledArray[j], shuffledArray[i]];
    }
    return shuffledArray;
}

function makeRandomStack(): CardStackArr {
    const stackSize = 5;
    const numAttack = Math.round(stackSize * 0.4);
    const numDefence = Math.round(stackSize * 0.4);
    const numPosition = stackSize - numAttack - numDefence;

    const cardStack = [];

    for (let i = 0; i < stackSize; i++) {
        let targetType = "";

        if (i < numAttack) {
            targetType = "attack";
        } else if (i >= numAttack && i < numAttack + numDefence) {
            targetType = "defence";
        } else {
            targetType = "position";
        }

        const [type, key] = getRandomCardTypeFor(targetType);
        cardStack.push(cardFactory.make(type, typeMapping[key]));
    }
//@ts-ignore
    return cardStack;
}

function getRandomCardTypeFor(targetType: string): [any, string] {
    const cardKey = targetType;
    const randomType = factoryStandards.card[cardKey];
    const randomElement = randomType[randomIntBetween(0, randomType.length - 1)];
    return [randomElement, cardKey];
}


// Type mapping and process function mapping
const typeMapping = {
    attack: ActionCard,
    defence: DefenceCard,
    position: PositionCard,
};

// Main logic
const cardFactory = new CardFactory();

const unit1 = WF.random()
unit1.weapon = WPF.random()

const unit2 = WF.random()
unit2.weapon = WPF.random()

const warrior1 = new Warrior(unit1)
const warrior2 = new Warrior(unit2)


let round = 1
while (!warrior1.isDead() && !warrior2.isDead()) {
    console.log('ROUND:', round)
    warrior1.deck = new CardStack(shuffleArray(makeRandomStack()) as CardStackArr)
    warrior2.deck = new CardStack(shuffleArray(makeRandomStack()) as CardStackArr)

    const roundMaster = new RoundMaster(warrior1, warrior2)
    roundMaster.processStep()
    roundMaster.processStep()
    roundMaster.processStep()
    roundMaster.processStep()
    roundMaster.processStep()
    round++
    console.log('WARRIOR-1:', warrior1.health)
    console.log('WARRIOR-2:', warrior2.health)
}


// const unit = WF.random()
// const weapon1 = WPF.random()
// unit.weapon = weapon1
// unit.armour.head = AF.random('head')
// unit.armour.body = AF.random('body')
// unit.armour.legs = AF.random('legs')
// console.log(unit)

 // I need game step and round process implementation
 // I need user actions cards stack implementation. Add cards to stack and process it
 // I need compare players cards in step
 // I need
 // I want to be able to attack at body part and process multiple attack queue
