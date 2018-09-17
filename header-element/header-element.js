import {html, PolymerElement} from '@polymer/polymer/polymer-element.js';

class HeaderElement extends PolymerElement {
  static get template() {
    return html`
    <h1 class="title">
      <slot name="header">Default texto</slot>
    </h1>
    <p class="subtitle">
      <slot name="paragraph">default sub</slot>
    </p>

    <style>
    :host {
      display: block;
      text-align: center;
    }

    .title {
        font-size: 2.75rem;
        font-weight: 500;
        color: #fff;
        text-transform: none;
        letter-spacing: .02em;
        margin-bottom: 0;
    }
    .subtitle {
        margin-top: 5px;
        color: #fff;
        font-weight: 300;
        font-size: 1.15rem;
    }

  </style>
    `;
  }
};

customElements.define('header-element', HeaderElement);