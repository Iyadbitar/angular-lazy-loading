import { Component, OnInit, OnDestroy} from '@angular/core';
import { ConfigService } from './services/config.service';
import { Observable, Subscription } from 'rxjs';
import { map } from 'rxjs/operators';
import { Store } from '@ngrx/store';
import { setDataModel } from './actions';
import { State } from './reducers';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, OnDestroy {
  title = 'ng-lazy-loading';
  configuration$: Observable<any>;
  dataSubscription: Subscription;
  values$: Observable<any>;

  constructor(private config: ConfigService, private store: Store<State>) {}

  ngOnInit() {
    this.dataSubscription = this.config.getData().subscribe((data) => {
      this.store.dispatch(setDataModel(data))
    })
    this.configuration$ = this.config.getConfig();
    this.values$ = this.store.pipe(
      map((state: State) => {
        const {type, ...data} = <any>state.data;
        return data;
      })
    )
  }

  ngOnDestroy() {
    this.dataSubscription.unsubscribe();
  }
}
