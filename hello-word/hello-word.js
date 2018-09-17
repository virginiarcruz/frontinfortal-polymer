import {html, PolymerElement} from '@polymer/polymer/polymer-element.js';

class HelloWorld extends PolymerElement {
  static get template() {
    return html`
      <h1>Hello World</h1>
    `;
  }
};

customElements.define('hello-world', HelloWorld);