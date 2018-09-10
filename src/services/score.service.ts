import { injectable } from "inversify";
import {ScoreRequestModel} from "../models/scoreRequest.model";
import {ScoreModel} from "../models/score.model";

@injectable()
export class ScoreService {

    scores: ScoreModel[] = [];

    submitScore(scoreRequest: ScoreRequestModel) {
        let  currentScore: ScoreModel = {
            steps: scoreRequest.steps,
            seconds: scoreRequest.seconds,
            name: scoreRequest.name,
        };
        this.scores.push(currentScore);
        let position = this.getFilteredHighScores().findIndex(score => score.steps == currentScore.steps && score.name == currentScore.name) + 1;
        return { position: position }
    }

    getFilteredHighScores() {
        return this.scores.sort((a, b) => a.steps - b.steps);
    }
}