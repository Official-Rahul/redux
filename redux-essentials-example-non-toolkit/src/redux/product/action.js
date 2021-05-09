import { ADD } from "./actionTypes";

export function add(product) {
    return {
        type: ADD,
        payload: product
    }
}