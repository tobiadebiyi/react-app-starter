import { all, fork } from "redux-saga/effects";
import { testSaga } from "src/modules/app/sagas";

const sagas = {
    testSaga,
};

export default function* rootSaga() {
    yield all([
        Object.keys(sagas).map(k => fork(sagas[k]))
    ]);
}