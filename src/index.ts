import { json } from 'body-parser';
import { Container } from "inversify";
import "reflect-metadata";
import { InversifyExpressServer } from "inversify-express-utils";
import './controllers/game.controller';
import './controllers/score.controller';
import {GameService} from "./services/game.service";
import {ScoreService} from "./services/score.service";

const port = process.env.PORT || 8080;

const container = new Container();

container.bind<GameService>('GameService').to(GameService).inSingletonScope();
container.bind<ScoreService>('ScoreService').to(ScoreService).inSingletonScope();

const server = new InversifyExpressServer(container);
server.setConfig((app) => {
   app.use(json());
});

const app = server.build();

app.listen(port, () => console.log(`Server is running on http://localhost:${port}...`));