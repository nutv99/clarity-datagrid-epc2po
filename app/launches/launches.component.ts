import { Component } from '@angular/core';
import { State } from 'clarity-angular';
import { LaunchesService, Launch, LaunchResponse, LaunchQuery } from './launches.service';
import { LaunchData } from './launches.data';

@Component({
  selector: 'app-launches',
  providers: [LaunchesService],
  templateUrl: './launches.component.html',
  styles: [`
::ng-deep clr-dg-row .btn {
  margin: 0;
}
  `]
})
export class LaunchesComponent  {
  selected: Launch[] = [];
  response: LaunchResponse;
  loading = true;
  launching = false;
  name = '';
  launched = [];

  constructor(private service: LaunchesService) {}

  ngOnInit() {
    this.response = LaunchData; // Client side
  }

  getLaunches(state: State) {
    console.log(event);
    const options: LaunchQuery = {};
    if (state.page && state.page.from) {
      options.offset = state.page.from;
    }
    this.loading = true;
    this.service.query(options).subscribe(response => {
      this.response = response;
      this.loading = false;
    });
  }

  canLaunch(launch: Launch) {
    const date = new Date(launch.windowstart);
    return ((date.getTime() - Date.now()) < (1000 * 60 * 60 * 24 * 14)) && this.launched.indexOf(launch.id) < 0;
  }

  onLaunch(item: Launch) {
    if (item.rocket && item.rocket.name) {
      this.name = item.rocket.name;
    } else if (item.lsp && item.lsp.name) {
      this.name = item.lsp.name;
    } else {
      this.name = 'Rocket';
    }
    this.launching = true;
    this.launched.push(item.id);
    setTimeout(() => {
      this.launching = false;
    }, 6000);
  }
}
