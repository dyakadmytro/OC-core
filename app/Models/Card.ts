import {ActionGridStd} from "../bootstrap/config";
// attack can be in l to r direction and opposite
// grid cell can have value like 1,2,3,4
// add shield grid


abstract class Card {
    name: string
    description: string
    protected _rules: []
    protected _actionEffects: []
    protected _actionGrid: ActionGridStd
    protected _positionGrid: ActionGridStd
    initiative: number

    constructor(name: string, description: string, actionGrid: ActionGridStd, positionGrid: ActionGridStd, rules: []) {
        this.name = name;
        this.description = description;
        this._actionGrid = actionGrid;
        this._positionGrid = positionGrid;
        this._rules = rules;
        this.initiative = 30
    }

    get rules(): [] {
        return this._rules;
    }
    get actionGrid(): ActionGridStd {
        return this._actionGrid;
    }
    get positionGrid(): ActionGridStd {
        return this._positionGrid;
    }
}

class ActionCard extends Card {

}

class DefenceCard extends Card {

}

class PositionCard extends Card {

}

export {
    ActionCard, PositionCard, DefenceCard, Card
}
