import { Component, OnInit, Input, OnDestroy } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable, Subscription } from 'rxjs';
import { map } from 'rxjs/operators';
import { State } from 'src/app/reducers';
import { FormControl } from '@angular/forms';
import { setDataModel } from 'src/app/actions';

@Component({
  selector: 'app-text-input',
  templateUrl: './text-input.component.html',
  styleUrls: ['./text-input.component.scss']
})
export class TextInputComponent implements OnInit, OnDestroy {

  @Input() dataModelRef: string
  @Input() label: string;

  binding$: Observable<string>;
  textInput: FormControl = new FormControl();
  changeSub: Subscription;

  constructor(private store: Store<State>) { }

  ngOnInit() {
    this.binding$ = this.store.pipe(
      map(state => {
        return state.data[this.dataModelRef]
      })
    )
    this.changeSub = this.textInput.valueChanges.subscribe((val: string) => {
      this.store.dispatch(setDataModel(<any>{
        [this.dataModelRef]: val,
      }))
    })
  }

  ngOnDestroy() {
    this.changeSub.unsubscribe();
  }

}
