import {ScoreModel} from "./score.model";

export interface ScoreRequestModel extends ScoreModel {
    token: string;
}