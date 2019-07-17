import { Component, OnInit, OnDestroy} from '@angular/core';
import { ConfigService } from './services/config.service';
import { Observable, Subscription } from 'rxjs';
import { Store } from '@ngrx/store';
import { setDataModel } from './actions';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, OnDestroy {
  title = 'ng-lazy-loading';
  configuration$: Observable<any>;
  dataSubscription: Subscription;

  constructor(private config: ConfigService, private store: Store) {}

  ngOnInit() {
    this.dataSubscription = this.config.getData().subscribe((data) => {
      this.store.dispatch(setDataModel(data))
    })
    this.configuration$ = this.config.getConfig();
  }

  ngOnDestroy() {
    this.dataSubscription.unsubscribe();
  }
}
