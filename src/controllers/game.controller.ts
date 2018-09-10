import {controller, httpGet, interfaces, requestParam} from "inversify-express-utils";
import {GameModel} from "../models/game.model";
import {GameService} from "../services/game.service";
import {inject} from "inversify";

@controller('/game')
export class GameController implements interfaces.Controller {

    constructor(@inject('GameService') private gameService: GameService) { }

    @httpGet('/:size')
    private getOne(@requestParam('size') size: string): GameModel {
        return this.gameService.getSetOfCards(size);

    }

}