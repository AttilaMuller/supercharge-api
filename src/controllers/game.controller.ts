import {controller, httpGet, interfaces, requestParam, response} from "inversify-express-utils";
import {GameModel} from "../models/game.model";
import {GameService} from "../services/game.service";
import {inject} from "inversify";
import {Response} from "express";

@controller('/game')
export class GameController implements interfaces.Controller {

    constructor(@inject('GameService') private gameService: GameService) { }

    @httpGet('/:size')
    private getOne(@requestParam('size') size: number,  @response() resp: Response): any {
       try {
           resp.status(200);
           return this.gameService.getSetOfCards(size);
       } catch (error) {
           resp.status(400).send(error.message);
       }
    }

}