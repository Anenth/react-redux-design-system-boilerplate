// @flow

export const entitiesDataSelector = (state: { entities: any }) =>
  state.entities;

export const pagesSelector = (state: { pages: {} }) => state.pages;

export const commonUISelector = (state: { common: {} }) => state.common;

export default () => {};
