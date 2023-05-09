
// effects can be like:
// add damage points, add damage percents to warrior or to weapon or to armour
// sub damage points, sub damage percents to warrior or to weapon or to armour
// pass next step

// maybe add effect types:
//
class Effect {
    name: string
    description: string
    private type: string // types: passive, aggressive
    private tier: number // > 0 1,2,3,4,5
    private code: number // number uuid for local mapping
    private _rounds: number // how match rounds it takes > 0
    private _steps: number // how match steps it takes > 0

}