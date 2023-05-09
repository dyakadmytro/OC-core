# Outcast Cage Game

## Description
Introducing a fast-paced, tactical PvP card combo battle game where players raise and develop warrior characters to climb global rankings.
Engage in swift battles, enhance characters, trade assets, and compete in thrilling tournaments that challenge your strategic prowess.
Our easy-to-start, user-friendly game promotes fierce competition and fosters camaraderie through trading and collaboration.
Experience adrenaline-inducing PvP combat while you grow your character's abilities and create dynamic battle tactics.
Dive into this captivating, action-packed card game that will keep you hooked with its innovative combo mechanics and immersive gameplay.
---
## Last features
* ArmourFactory
* WeaponFactory
* UnitFactory
* CardFactory
* RoundMaster for processing warriors round

### Example
Of game battle process on random card stacks
```typescript
const unit1 = UF.random()  // unit factory
unit1.weapon = WPF.random() // weapon factory

const unit2 = UF.random()
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
```