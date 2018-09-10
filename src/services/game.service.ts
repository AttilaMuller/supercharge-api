import { injectable } from "inversify";
import {GameModel} from "../models/game.model";

@injectable()
export class GameService {

    private gameArray: GameModel[] = [];
    private imageArray: string[] = [];

    constructor() {
        for(let x = 1; x < 21; x++) {
            this.imageArray.push('/picture' + x + '.png');
        }
    }

    public getSetOfCards(size: number) {
        this.shuffle(this.imageArray);
        if(size < 1 || size > 20) {
            throw new Error('Size must be between 1 and 20');
        }
        let slicedArray = this.imageArray.slice(0, size);
        this.gameArray.push({pictures: slicedArray, token: this.generateToken()});
        return this.gameArray[this.gameArray.length - 1];
    }

    private shuffle(array: any[]) {
        let i = 0, j = 0, temp = null;

        for (i = array.length - 1; i > 0; i -= 1) {
            j = Math.floor(Math.random() * (i + 1));
            temp = array[i];
            array[i] = array[j];
            array[j] = temp;
        }
    }

    private generateToken() {
        return Math.random().toString(36).substr(2);
    }

    checkToken(token: string) {
        return !!this.gameArray.find(game => game.token === token);
    }
}