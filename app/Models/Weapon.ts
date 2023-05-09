const w = {
    name: 'knife',
    damage: 25,
    durability: 300,
    destruction: 20,
    actions: []
}

export class Weapon {
    name: string
    uuid: string
    damage: number
    durability: number
    destruction: number
    actions: any[] = []

    constructor(name: string, uuid: string, damage: number, durability: number, destruction: number, actions: any[] = []) {
        this.name = name;
        this.uuid = uuid;
        this.damage = damage;
        this.durability = durability;
        this.destruction = destruction;
        this.actions = actions;
    }
}