import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  load() {
    const script = document.createElement('script');
    script.src = 'assets/el.js';
    document.body.appendChild(script);
    const el = document.createElement('app-live-chat');
    el.setAttribute('domain', '1234');
    el.setAttribute('type', 'host');
    el.setAttribute(
      'style',
      `position: fixed; z-index: 123; bottom: 1em; right: 1em; display: block; border: 2px solid grey; width: 340px; height: 480px;`
    );
    document.querySelector('#container').appendChild(el);
  }
}
