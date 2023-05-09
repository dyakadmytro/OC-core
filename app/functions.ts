import {ActionGridStd} from "./bootstrap/config";
import {Card} from "./Models/Card";

function randomIntBetween(min: number, max: number) {
    return Math.floor(Math.random() * (max - min + 1) + min)
}

function randomFloatBetween(min: number, max: number) {
    return Math.random() * (max - min) + min
}

function randomIntBetweenStep(min: number, max: number, step: number = 1) {
    const steps = Math.floor((max - min) / step)
    const randomStep = Math.floor(Math.random() * steps);
    return min + randomStep * step
}

function intersectMatrix(matrix1: ActionGridStd, matrix2: ActionGridStd, value: boolean = false): number | boolean {
    if (matrix1.length !== matrix2.length || matrix1[0].length !== matrix2[0].length) {
        throw new Error("Matrices must have the same dimensions.")
    }
    let result: number|boolean = false
    const rows = matrix1.length
    const cols = matrix1[0].length
    let  stop = false

    for (let row = 0; row < rows; row++) {
        if(stop) break
        for (let col = 0; col < cols; col++) {
            value
            if (matrix1[row][col] > 0 && matrix2[row][col] > 0) {
                if (value) {
                    result = matrix1[row][col]
                }
                else result = true
                stop = true
                break
            }
            else result = false
        }
    }
    return result;
}
function isMatrixEmpty(matrix) {
    for (let row = 0; row < matrix.length; row++) {
        for (let col = 0; col < matrix[row].length; col++) {
            if (matrix[row][col] !== 0) {
                return false;
            }
        }
    }
    return true;
}

function getBodyPartsMapping() {
    return {
        1: "head",
        2: "rArm",
        3: "chest",
        4: "lArm",
        5: "stomach",
        6: "rleg",
        8: "lLeg",
    };
}

function sortCards(card1: Card, card2: Card): [Card, Card] {
    const cardOrder = ["ActionCard", "DefenceCard", "PositionCard"];

    // Find the index of card1 and card2 in the cardOrder array
    const card1Index = cardOrder.indexOf(card1.constructor.name);
    const card2Index = cardOrder.indexOf(card2.constructor.name);

    // If card1 and card2 are of the same type, return them in their original order
    if (card1Index === card2Index) {
        return [card1, card2];
    }

    // If card1 comes before card2 in the cardOrder array, return [card1, card2]
    // Otherwise, return [card2, card1]
    return card1Index <= card2Index ? [card1, card2] : [card2, card1];
}


export {
    randomIntBetween,
    randomIntBetweenStep,
    randomFloatBetween,
    intersectMatrix,
    isMatrixEmpty,
    getBodyPartsMapping,
    sortCards
}