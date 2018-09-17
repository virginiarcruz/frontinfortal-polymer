import { html, PolymerElement } from "@polymer/polymer/polymer-element.js";

class ButtonForm extends PolymerElement {
  static get template() {
    return html`
      <style>
      :host {
        display: inline-block;
      }
      :host(:hover) {
        cursor: pointer;
      }
      :host([disabled]) {
        cursor: default;
        background: var(--hp-background-disabled, rgba(112, 112, 112, 0.055));
        color: var(--hp-color-disabled, #000);
        box-shadow: 3px 3px 5px grey;
      }

      button {
        font-weight: 500;
        font-size: .875rem;
        line-height: 1.125rem;
        text-transform: uppercase;
        color: #333;
        background-color: #EFB705;
        -webkit-transition: all .2s ease-in-out;
        transition: all .2s ease-in-out;
        display: inline-block;
        height: 3.25rem;
        padding: 0 2.625rem;
        margin: .375rem;
        border: none;
        border-radius: 2px;
        cursor: pointer;
        text-align: center;
        line-height: 3.5rem;
        vertical-align: middle;
        white-space: nowrap;
        -webkit-user-select: none;
        -moz-user-select: none;
        -ms-user-select: none;
        user-select: none;
        font-size: 1.1rem;
        font-family: inherit;
        letter-spacing: .03em;
        position: relative;
        overflow: hidden
        -webkit-box-shadow: 0 0 2px rgba(0,0,0,.12),0 2px 2px rgba(0,0,0,.2);
        box-shadow: 0 0 2px rgba(0,0,0,.12),0 2px 2px rgba(0,0,0,.2)
      }
      button.success {
        background-color: var(--color-success);
      }

      button.success:active, button.success:hover {
        background-color: #F4CC05;
      }

      button.cancel {
        background-color: var(--color-cancel);
      }

      button.cancel:active, button.cancel:hover {
        background-color: #bfbdbd;
      }
    </style>  

    <button class$="[[nameclass]]">
        <slot name="textButton">Salvar</slot>
      </button>  
    `;
  }

  static get properties() {
    return {
      nameclass: String
    };
  }
}

customElements.define("button-form", ButtonForm);
