import * as extraActions from "../extra-actions";
import * as ajax from "./ajax";
import * as feedback from "./feedback";
import * as products from "./products";

export const reducers = {
  ajax: ajax.ajaxStore.reducer,
  feedback: feedback.feedbackStore.reducer,
  products: products.productsStore.reducer,
};

export const actions = {
  ...extraActions,
  ...ajax.ajaxStore.actions,
  ...feedback.feedbackStore.actions,
  ...products.productsStore.actions,
};

export const selectors = {
  ...ajax.selectors,
  ...feedback.selectors,
  ...products.selectors,
};

export const sagas = [
  ...Object.values(ajax.sagas),
  ...Object.values(feedback.sagas),
];
