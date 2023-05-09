import {ActionCard, Card, DefenceCard, PositionCard} from "../Models/Card";
import {CardStd} from "../bootstrap/config";

export class CardFactory {

    make(data: CardStd, type: typeof ActionCard|DefenceCard|PositionCard) {
        //@ts-ignore
        return new type(
            data.name, data.description, data.actionGrid, data.positionGrid, data.rules
        );
    }
}