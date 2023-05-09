import {Unit, UnitArmour, UnitMeta, UnitParameters} from "../Models/Unit";
import {Weapon} from "../Models/Weapon";
import { v1 as uuidv1 } from 'uuid';
import {randomIntBetween, randomIntBetweenStep} from "../functions";
import {UnitStd} from "../bootstrap/config";
import {faker} from "@faker-js/faker";

export class UnitFactory {
    private standards: UnitStd

    constructor(standards: UnitStd) {
        this.standards = standards;
    }

    make(meta: UnitMeta, parameters: UnitParameters, weapon: Weapon, armour: UnitArmour): Unit {
        return new Unit(meta, parameters, weapon, armour )
    }

    random(): Unit {
        const meta: UnitMeta = {
            name: faker.name.fullName(),
            uuid: uuidv1(),
            owner: ''
        }

        const parameters: UnitParameters = {
            basic: {
                health: randomIntBetweenStep(this.standards.basic.health.min, this.standards.basic.health.max, 10),
                agility: randomIntBetween(this.standards.basic.agility.min, this.standards.basic.agility.max),
                stamina: randomIntBetween(this.standards.basic.stamina.min, this.standards.basic.stamina.max),
                initiative: randomIntBetween(this.standards.basic.initiative.min, this.standards.basic.initiative.max),
            },
            skills: {
                attack: randomIntBetween(this.standards.skills.attack.min, this.standards.skills.attack.max),
                defence: randomIntBetween(this.standards.skills.defence.min, this.standards.skills.defence.max),
            }
        }
        const weapon = null
        const armour: UnitArmour = {
            head: null,
            body: null,
            legs: null
        }

        return this.make(meta, parameters, weapon, armour)
    }
}