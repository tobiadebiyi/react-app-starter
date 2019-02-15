import { delay } from "redux-saga";
import { call } from "redux-saga/effects";

export function* generator() {
    yield 0;
    yield 1;
    yield 2;
    return 3;
}

export function* testSaga() {
    const gen = generator();

    while (true) {
        yield call(delay, 1000);
        const { done, value } = gen.next();
        debugger;
        // tslint:disable-next-line:no-console
        console.info(`Logging from app test saga: ${value}`);
        if (done) break;
    }

    // tslint:disable-next-line:no-console
    console.info("Ended");
}