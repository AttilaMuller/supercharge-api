import {controller, httpDelete, httpGet, httpPost, httpPut, interfaces, requestParam} from "inversify-express-utils";
import {GameModel} from "../models/game.model";

@controller('/game')
export class GameController implements interfaces.Controller {

    constructor() { }

    @httpGet('/:size')
    private getOne(@requestParam('size') size: string): GameModel {
        return this.gameService.getSetOfCards(size);

    }

}