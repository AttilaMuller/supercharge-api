import { injectable } from "inversify";
import {ScoreRequestModel} from "../models/scoreRequest.model";

@injectable()
export class ScoreService {

    submitScore(scoreRequest: ScoreRequestModel) {
        return undefined;
    }

    getFilteredHighScores() {
        return [];
    }
}