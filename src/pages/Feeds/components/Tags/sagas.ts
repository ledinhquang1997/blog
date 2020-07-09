import { put, takeEvery, call } from "redux-saga/effects";
import {
  getTags,
  getTagsSuccess,
  getTagsFail,
} from "./actions";
import { stateContext } from "./state";
import { Action } from "redux-actions";
import { createInjectableSaga } from "../../../../redux/redux";
import tagService from "./services/tagService";

function* getPopularTagsSagas(action: Action<{}>) {
  try {
    const res = yield call(tagService.getPopularTags);
    console.log(res)
    yield put(
      getTagsSuccess(res.tags)
    );
  } catch (error) {
    yield put(getTagsFail(error));
  }
}

export function* watchGetPopularTag() {
  yield takeEvery(getTags().type, getPopularTagsSagas);
}

export const tagsSaga = createInjectableSaga(
  stateContext,
  watchGetPopularTag
);
