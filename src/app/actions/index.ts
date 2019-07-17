import { createAction, props } from '@ngrx/store';


export const setDataModel = createAction(
  '[App] Set Data Model',
  props<{
    documentName: string,
    documentNumber: number,
    documentOwner: string,
    enableDocumentName: boolean,
    enableDocumentNumber: boolean
  }>()
)
