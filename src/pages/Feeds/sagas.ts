import { put, takeEvery, call } from "redux-saga/effects";
import {
  getArticleList,
  getArticleListSuccess,
  getArticleListFail,
} from "./actions";
import articlesService from "./services/api/articlesService";
import { updateEntities } from "../../redux/entities/actions";
import { normalizeData } from "../../redux/redux";
import { EntitiesName } from "../../redux/entities/constants";

function* getArticlesSagas() {
  try {
    const res = yield call(articlesService.getArticles);
    const { result, entities } = normalizeData(
      res,
      EntitiesName.articles,
      "slug"
    );
    yield put(updateEntities(entities));

    yield put(
      getArticleListSuccess({
        data: result.articles,
        total: result.articlesCount,
      })
    );
  } catch (error) {
    yield put(getArticleListFail(error));
  }
}

export function* watchGetArticlesPosts() {
  yield takeEvery(getArticleList().type, getArticlesSagas);
}
