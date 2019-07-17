import { Component, OnInit} from '@angular/core';
import { ConfigService } from './services/config.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'ng-lazy-loading';
  configuration$: Observable<any>;

  constructor(private config: ConfigService) {}

  ngOnInit() {
    this.configuration$ = this.config.getConfig();
  }
}
