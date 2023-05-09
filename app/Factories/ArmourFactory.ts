import {Armour, BodyArmour, HeadArmour, LegsArmour} from "../Models/Armour";
import { v1 as uuidv1 } from 'uuid';
import {ArmourStd} from "../bootstrap/config";
import {randomFloatBetween, randomIntBetween} from "../functions";

export class ArmourFactory {

    private standards: ArmourStd

    constructor(standards: ArmourStd) {
        this.standards = standards;
    }

    random(type: 'head' | 'body' | 'legs'): Armour {
        const wtype = this.standards.parts[type][Math.floor(Math.random() * this.standards.parts[type].length)]
        const quality = this.standards.qualities[Math.floor(Math.random() * this.standards.qualities.length)]
        const name =  quality.name.toUpperCase() + ' ' + wtype.name.toUpperCase()
        const uuid = uuidv1()
        const r1 = randomFloatBetween(wtype.resist.min, wtype.resist.max), r2 = randomFloatBetween(quality.resistMD.min, quality.resistMD.max)
        const resist =( Math.round((r1 + r2) * 100) / 100)
        const durability = Math.floor(randomIntBetween(wtype.durability.min, wtype.durability.max) * randomFloatBetween(quality.durabilityMD.min, quality.durabilityMD.max))
        const destruction = Math.floor(randomIntBetween(wtype.destruction.min, wtype.destruction.max) * randomFloatBetween(quality.destructionMD.min, quality.destructionMD.max))

        if (type == 'head') {
            return new HeadArmour(name, uuid, durability, resist, destruction)
        } else if(type == 'body') {
            return new BodyArmour(name, uuid, durability, resist, destruction)
        } else if(type == 'legs') {
            return new LegsArmour(name, uuid, durability, resist, destruction)
        }
    }
}