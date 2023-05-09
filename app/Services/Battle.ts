import {Logger} from "./Logger";
import {RoundMaster} from "./RoundMaster";
import {Player} from "../Models/Player";

export class Battle {
    leftCorner: Player
    rightCorne: Player
    round: RoundMaster
    private _log: Logger

    //  Responsibilities: load warriors, prepare for round, play round, do it again, show results, battle statuses
}