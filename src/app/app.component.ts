import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SwUpdate } from '@angular/service-worker';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
})
export class AppComponent {
  title = 'deep-space-fishing';
  constructor(swUpdate: SwUpdate) {
    swUpdate.versionUpdates.subscribe(() => {
      document.location.reload();
    });
  }
}
