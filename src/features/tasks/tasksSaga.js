import { call, delay, put, select, takeEvery, takeLatest } from "redux-saga/effects";
import { getExampleTasks } from "./getExampleTasks";
import { saveTasksInLocalStorage } from "./tasksLocalStorage";
import { fetchExampleTasks, selectTasks, setExampleTasksStatus, setTasks } from "./tasksSlice";

function* fetchExampleTasksHandler() {
    try {

        yield put(setExampleTasksStatus("loading"));
        const exampleTasks = yield call(getExampleTasks);
        yield delay(2000);
        yield put(setTasks(exampleTasks));
        yield put(setExampleTasksStatus(null));
    } catch (error) {
        yield call(alert, "Coś poszło nie tak!");
    }

};

function* saveTasksInLocalStorageHandler() {

    const tasks = yield select(selectTasks);
    yield call(saveTasksInLocalStorage, tasks);
};

export function* tasksSaga() {
    yield takeLatest(fetchExampleTasks.type, fetchExampleTasksHandler);
    yield takeEvery("*", saveTasksInLocalStorageHandler);
};