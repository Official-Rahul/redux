import { DECREMENT, INCREMENT } from "./actionTypes"

export function increment() {
    return {
        type: INCREMENT
    }
}

export function decrement() {
    return {
        type: DECREMENT
    }
}