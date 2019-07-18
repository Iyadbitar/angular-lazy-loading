import { Component, OnInit, Input, OnDestroy } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable, Subscription } from 'rxjs';
import { map } from 'rxjs/operators'
import { State } from 'src/app/reducers';
import { FormControl } from '@angular/forms';
import { setDataModel } from 'src/app/actions';

@Component({
  selector: 'app-checkbox-input',
  templateUrl: './checkbox-input.component.html',
  styleUrls: ['./checkbox-input.component.scss']
})
export class CheckboxInputComponent implements OnInit, OnDestroy {

  @Input() dataModelRef: string;
  @Input() label: string;
  binding$: Observable<boolean>;
  checkboxInput: FormControl = new FormControl();
  changeSub: Subscription;

  constructor(private store: Store<State>) { }

  ngOnInit() {
    this.binding$ = this.store.pipe(
      map(state => !!state.data[this.dataModelRef])
    )

    this.changeSub = this.checkboxInput.valueChanges.subscribe((val: boolean) => {
      this.store.dispatch(setDataModel(<any>{
        [this.dataModelRef]: val,
      }))
    })
  }

  ngOnDestroy() {
    this.changeSub.unsubscribe();
  }

}
