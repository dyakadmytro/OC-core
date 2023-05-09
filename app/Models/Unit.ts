import {Weapon} from "./Weapon";
import {BodyArmour, HeadArmour, LegsArmour} from "./Armour";


interface UnitMeta {
    name: string
    uuid: string
    owner: string
}

interface BasicParameters {
    health: number,
    agility: number,
    stamina: number,
    initiative: number
}

interface UnitSkills {
    attack: number,
    defence: number,
}

type UnitParameters = {
    basic: BasicParameters
    skills: UnitSkills
}

interface UnitArmour {
    head: HeadArmour | null
    body: BodyArmour | null
    legs: LegsArmour | null
}

class Unit {
    meta: UnitMeta
    parameters: UnitParameters
    private _weapon: Weapon | null
    armour: UnitArmour

    constructor(meta: UnitMeta, parameters: UnitParameters, weapon: Weapon | null, armour: UnitArmour) {
        this.meta = meta;
        this.parameters = parameters;
        this._weapon = weapon;
        this.armour = armour;
    }

    set weapon(value: Weapon | null) {
        this._weapon = value;
    }

    get weapon(): Weapon | null {
        return this._weapon;
    }

     calculateHitDamage(): number {
        const attackSkill = this.parameters.skills.attack;
        const weaponDamage = this.weapon.damage;

        return Math.round(attackSkill * weaponDamage) ;
    }

     calculatePartResist(damage: number, part: 'head' | 'body' | 'legs'): number {

        return Math.round( (this.armour[part].durability * this.armour[part].resist) ) ;
    }

     calculateHitChance(): number {
        const attackSkill = this.parameters.skills.attack;
        const initiative = this.parameters.basic.initiative;

        return Math.round(((attackSkill) * initiative ) / 10 ) ;
    }

     calculateDodgeChance(): number {
        const defenceSkill = this.parameters.skills.defence;
         const agility = this.parameters.basic.agility;

         return Math.round(((defenceSkill) * agility ) / 10 ) ;
    }

     calculateDefenceChance(): number {
        const defenceSkill = this.parameters.skills.defence;
         const initiative = this.parameters.basic.initiative;

         return Math.round(((defenceSkill) * initiative ) / 10 ) ;
    }

     calculateClashChance(): number {
        const defenceSkill = this.parameters.skills.defence;
        const attackSkill = this.parameters.skills.attack;
        const agility = this.parameters.basic.agility;
        const initiative = this.parameters.basic.initiative;

        return Math.round((defenceSkill * attackSkill * agility * initiative ) / 100 ) ;
    }
}

export {Unit, UnitMeta, UnitArmour, UnitParameters}