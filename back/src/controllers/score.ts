import Score from '../models/score'
import {Response, Request} from "express"
import debug from "debug"
import {IScore} from "../types/score";

const log: debug.IDebugger = debug('app:result-controller');

/**
 * Получение очков игроков.
 */
const getScore = async (req: Request, res: Response): Promise<void> => {

    try{
        const {gameId} = req.params

        const gameScore: IScore | null  = await Score.findOne({gameId})

        res.status(200).send({
            gameScore
        })

    } catch (error) {
        log(`Текст не загружен: ${error}.`)
        res.status(500).send();
    }
}

export {getScore}
