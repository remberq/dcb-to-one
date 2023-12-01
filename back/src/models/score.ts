import { model, Schema } from 'mongoose'
import { IScore } from '@/types/score'

/**
 * Схема модели таблицы очков.
 */
const ScoreSchema: Schema = new Schema(
    {
        gameId: {
            type: String,
            required: true,
            unique: true,
        },
        user1: {
            type: {
                name: {
                    type: String,
                    required: true,
                },
                score: {
                    type: Number,
                    required: true,
                },
            },
        },
        user2: {
            type: {
                name: {
                    type: String,
                    required: true,
                },
                score: {
                    type: Number,
                    required: true,
                },
            },
        },
        user3: {
            type: {
                name: {
                    type: String,
                    required: true,
                },
                score: {
                    type: Number,
                    required: true,
                },
            },
        },
    },
    { timestamps: true }
)

export default model<IScore>('Score', ScoreSchema, 'score-collection')
