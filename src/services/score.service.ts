import {inject, injectable} from "inversify";
import {ScoreRequestModel} from "../models/scoreRequest.model";
import {ScoreModel} from "../models/score.model";
import {GameService} from "./game.service";

@injectable()
export class ScoreService {

    constructor(@inject('GameService') private gameService: GameService){}

    scores: ScoreModel[] = [];

    public submitScore(scoreRequest: ScoreRequestModel) {
        if(!this.gameService.checkToken(scoreRequest.token)){
            throw new Error('Invalid token!');
        } else if (scoreRequest.steps < 1 || scoreRequest.seconds < 1 ) {
            throw new Error('Steps and seconds can not be lower than 0!');
        }

        let  currentScore: ScoreModel = {
            steps: scoreRequest.steps,
            seconds: scoreRequest.seconds,
            name: scoreRequest.name,
        };
        this.scores.push(currentScore);
        let position = this.getFilteredHighScores().findIndex(score => score.steps == currentScore.steps && score.name == currentScore.name) + 1;
        return { position: position }
    }

    public getFilteredHighScores() {
        return this.scores.sort((a, b) => a.steps - b.steps);
    }
}