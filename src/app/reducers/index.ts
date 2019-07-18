import {
  ActionReducer,
  ActionReducerMap,
  createFeatureSelector,
  createSelector,
  MetaReducer,
  createReducer,
  on,
  Action
} from '@ngrx/store';
import { environment } from '../../environments/environment';
import { Actions } from '../actions/types';

export interface DataState {
  documentName: string;
  documentNumber: number;
  documentOwner: string;
  enableDocumentName: boolean;
  enableDocumentNumber: boolean;
}

export interface State {
  data: DataState;
}

const initialState = {
  documentName: '',
  documentNumber: 0,
  documentOwner: '',
  enableDocumentName: false,
  enableDocumentNumber: false,
}

export const dataModelReducer = createReducer(
  initialState,
  on(Actions.setDataModel, (state, action) => {
    return {...state, ...action}
  })
)

export function reducer(state: DataState | undefined, action: Action) {
  return dataModelReducer(state, action)
}

// export const reducers: ActionReducerMap<State> = {
//   dataReducer
// };


// export const metaReducers: MetaReducer<State>[] = !environment.production ? [] : [];
