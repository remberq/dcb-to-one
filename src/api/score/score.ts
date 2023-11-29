import {AxiosResponse} from "axios";
import axiosInstance from "../index";
import {IGetScoreResponse} from "./types";

export const getScore = (gameId: string): Promise<AxiosResponse<IGetScoreResponse>> => {
    return axiosInstance.get(`/score/get-score/${gameId}`)
}
