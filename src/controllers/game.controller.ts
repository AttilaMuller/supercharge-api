import {controller, httpGet, interfaces, requestParam, response} from "inversify-express-utils";
import {GameModel} from "../models/game.model";
import {GameService} from "../services/game.service";
import {inject} from "inversify";

@controller('/game')
export class GameController implements interfaces.Controller {

    constructor(@inject('GameService') private gameService: GameService) { }

    @httpGet('/:size')
    private getOne(@requestParam('size') size: number): GameModel {
        return this.gameService.getSetOfCards(size);
    }

}