import {html, PolymerElement} from '@polymer/polymer/polymer-element.js';

class FormElement extends PolymerElement {
  static get template() {
    return html`
    <style>
    :host {
        display: inline-block;
        position: relative;
        margin-bottom: 10px;
        width: var(--valle-input-width ,100%);
      }
    
      :host([disabled]) .input {
        background-color: #e8e8e8;
        border-bottom: 1px solid #e8e8e8;
        color: rgba(0, 0, 0, .38);
      }
      
    form {
        display: block;
        margin-bottom: 5px;
    }
      .label {
        color: #6304BD;
        margin-right: 20px;
        font-size: 1.2rem;
        font-weight: 300;
        padding-bottom: 10px;
        display: block;
      }

      .input {
          padding: 10px 20px;
          border-top: 0;
          border-left: 0;
          border-right: 0;
          border-bottom: 1px solid #ccc;
          display: block;
          min-width: 60%;
          font-family: Roboto;
          font-size: .85rem;
          font-weight: 300;
      }

      .input[type=date] {
        min-width: 20%;
        padding: 10px;
      }

      .form-front {
        margin: 0px 50px;
        border-bottom: 1px solid #d4d4d4;
        padding: 20px 50px;
        background: #f9f9f9;  
      }
    </style>

    <form class="form-front">
      <label class="label" for="input">[[labeltext]]</label>
      <input class="input" type=[[type]] disabled=[[disabled]]>
    </form>
    `;
  }

  static get properties() {
    return {
      type: {
          type: String,
          value: 'text'
      },
      labeltext: String,
      disabled: {
          type: Boolean,
          value: false
      }
    }
  }
};

customElements.define('form-element', FormElement);