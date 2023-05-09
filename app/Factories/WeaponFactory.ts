import {Weapon} from "../Models/Weapon";
import { v1 as uuidv1 } from 'uuid';
import {WeaponStd} from "../bootstrap/config";
import {randomFloatBetween, randomIntBetween} from "../functions";

export class WeaponFactory {
    private standards: WeaponStd

    constructor(standards: WeaponStd) {
        this.standards = standards;
    }

    random() {

        const wtype = this.standards.types[Math.floor(Math.random() * this.standards.types.length)]
        const quality = this.standards.qualities[Math.floor(Math.random() * this.standards.qualities.length)]
        const name =  quality.name.toUpperCase() + ' ' + wtype.name.toUpperCase()
        const uuid = uuidv1()


        const damage = Math.floor(randomIntBetween(wtype.damage.min, wtype.damage.max) * randomFloatBetween(quality.damageMD.min, quality.damageMD.max))
        const durability = Math.floor(randomIntBetween(wtype.durability.min, wtype.durability.max) * randomFloatBetween(quality.durabilityMD.min, quality.durabilityMD.max))
        const destruction = Math.floor(randomIntBetween(wtype.destruction.min, wtype.destruction.max) * randomFloatBetween(quality.destructionMD.min, quality.destructionMD.max))
        const actions = []

        return new Weapon(name, uuid, damage, durability, destruction, actions)
    }
}