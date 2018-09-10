import {controller, httpGet, httpPost, interfaces, requestBody} from "inversify-express-utils";
import {ScoreModel} from "../models/score.model";
import {ScoreResponseModel} from "../models/scoreResponse.model";
import {ScoreRequestModel} from "../models/scoreRequest.model";
import {ScoreService} from "../services/score.service";
import {inject} from "inversify";

@controller('/score')
export class ScoreController implements interfaces.Controller {

    constructor(@inject('ScoreService') private scoreService: ScoreService) { }

    @httpPost('/')
    private post(@requestBody() scoreRequest: ScoreRequestModel): ScoreResponseModel {
        return this.scoreService.submitScore(scoreRequest);
    }

    @httpGet('/')
    private get(): ScoreModel[] {
        return this.scoreService.getFilteredHighScores();
    }

}