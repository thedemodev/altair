import { createSelector, Store } from '@ngrx/store';
import { PerWindowState } from '..';
import { getInitialState } from './pre-request';

export const getPreRequest = (state: PerWindowState) => state ? state.preRequest : { ...getInitialState() };
