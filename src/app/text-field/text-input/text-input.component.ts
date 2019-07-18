import { Component, OnInit, Input } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { State } from 'src/app/reducers';

@Component({
  selector: 'app-text-input',
  templateUrl: './text-input.component.html',
  styleUrls: ['./text-input.component.scss']
})
export class TextInputComponent implements OnInit {

  @Input() dataModelRef: string
  @Input() label: string;

  binding$: Observable<string>;

  constructor(private store: Store<State>) { }

  ngOnInit() {
    this.binding$ = this.store.pipe(
      map(state => {
        return state.data[this.dataModelRef]
      })
    )
  }

}
