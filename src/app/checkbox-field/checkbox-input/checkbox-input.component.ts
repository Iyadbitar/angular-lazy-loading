import { Component, OnInit, Input } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators'
import { State } from 'src/app/reducers';

@Component({
  selector: 'app-checkbox-input',
  templateUrl: './checkbox-input.component.html',
  styleUrls: ['./checkbox-input.component.scss']
})
export class CheckboxInputComponent implements OnInit {

  @Input() dataModelRef: string;
  @Input() label: string;
  binding$: Observable<boolean>;

  constructor(private store: Store<State>) { }

  ngOnInit() {
    this.binding$ = this.store.pipe(
      map(state => !!state.data[this.dataModelRef])
    )
  }

}
