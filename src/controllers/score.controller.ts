import {controller, httpGet, httpPost, interfaces, requestBody, response} from "inversify-express-utils";
import {Response} from "express";
import {ScoreModel} from "../models/score.model";
import {ScoreRequestModel} from "../models/scoreRequest.model";
import {ScoreService} from "../services/score.service";
import {inject} from "inversify";

@controller('/score')
export class ScoreController implements interfaces.Controller {

    constructor(@inject('ScoreService') private scoreService: ScoreService) { }

    @httpPost('/')
    private post(@requestBody() scoreRequest: ScoreRequestModel, @response() resp: Response): any {
        try {
            resp.status(200);
            return this.scoreService.submitScore(scoreRequest);
        } catch (error) {
           resp.status(400).send(error.message);
        }
    }

    @httpGet('/')
    private get(@response() resp: Response): ScoreModel[] {
        resp.status(200);
        return this.scoreService.getFilteredHighScores();
    }

}