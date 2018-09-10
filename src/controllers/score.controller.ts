import {controller, httpDelete, httpGet, httpPost, httpPut, interfaces, requestBody} from "inversify-express-utils";
import {ScoreModel} from "../models/score.model";
import {ScoreResponseModel} from "../models/scoreResponse.model";
import {ScoreRequestModel} from "../models/scoreRequest.model";

@controller('/score')
export class ScoreController implements interfaces.Controller {

    constructor() { }

    @httpPost('/')
    private post(@requestBody() scoreRequest: ScoreRequestModel): ScoreResponseModel {
        return this.scoreService.submitScore(scoreRequest);
    }

    @httpGet('/')
    private get(): ScoreModel[] {
        return this.scoreService.getFilteredHighScores();
    }

}