import {Unit} from "./Unit";
import {CardStack} from "./CardStack";
import {Card} from "./Card";

// Warrior hold information about unit, deck card stack for the round
// active affects
// is warrior alive, dealed damage to him
export class Warrior {

    private _unit: Unit // Unit object holds information about stats skills parameters, weapon armour
    private _activeEffects: []
    private _deck: CardStack
    private _damage: number = 0

    constructor(unit: Unit) {
        this._unit = unit
        // unpack Unit effects
    }

    get initiative(): number {
        return this._unit.parameters.basic.initiative
    }

    get deck(): CardStack {
        return this._deck;
    }

    set deck(value: CardStack) {
        this._deck = value;
    }

    get damage(): number {
        return this._damage;
    }

    set damage(value: number) {
        this._damage = this.damage + value;
    }

    get health() {
        return this._unit.parameters.basic.health - this.damage
    }

    makeDamage() {
        return this._unit.calculateHitDamage()
    }

    getCard(): Card {
        const card = this.deck.current()
        card.initiative = card.initiative + this.initiative
        return card
    }

    isDead(): boolean {
        return this.health <= 0
    }
}