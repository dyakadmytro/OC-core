class Armour {
    name: string
    uuid: string
    durability: number
    destruction: number
    resist: number
    effects: any[]

    constructor(name: string, uuid: string, durability: number, resist: number, destruction: number, effects: any[] = []) {
        this.name = name;
        this.uuid = uuid;
        this.durability = durability;
        this.destruction = destruction;
        this.resist = resist;
        this.effects = effects;
    }
}

class HeadArmour extends Armour {

}

class BodyArmour extends Armour {

}

class LegsArmour extends Armour {

}

export {Armour, LegsArmour, BodyArmour, HeadArmour}