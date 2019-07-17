import { Injectable } from '@angular/core';
import {Observable, of} from 'rxjs';

const configuration = [
	{
		label: 'field1',
		type: 'textfield',
		enable: 'enableDocumentName',
		dataModelRef: 'documentName'
	},
	{
		label: 'field2',
		type: 'textfield',
		enable: 'enableDocumentNumber',
		dataModelRef: 'documentNumber'
	},
	{
		label: 'field3',
		type: 'textfield',
		enable: true,
		dataModelRef: 'documentOwner'
	},
	{
		label: 'field4',
		type: 'checkbox',
		dataModelRef: 'enableDocumentName'
	},
	{
		label: 'field5',
		type: 'checkbox',
		dataModelRef: 'enableDocumentNumber'
	}
]

const dataModel = {
  documentName:'Receipt123',
  documentNumber:'10110023',
  documentOwner:'John Snow',
  enableDocumentName:true,
  enableDocumentNumber:false
}



@Injectable({
  providedIn: 'root'
})
export class ConfigService {

  constructor() { }

  getConfig(): Observable<any> {
    return of(configuration)
  }

  getData(): Observable<any> {
    return of(dataModel)
  }
}
