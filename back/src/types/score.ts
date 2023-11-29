/**
 * Данные по игроку.
 * @prop gameScore Счет игры по игрокам.
 */
export interface IUser {
    name: string;
    score: number;
}

/**
 * Список данных по игрокам.
 * @prop gameId ID игры.
 * @prop user1 Данные игрока 1.
 * @prop user2 Данные игрока 2.
 * @prop user3 Данные игрока 3.
 */
export interface IScore {
    gameId: string;
    user1: IUser;
    user2: IUser;
    user3: IUser;
}
