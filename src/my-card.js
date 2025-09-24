import { LitElement, html, css } from 'lit';

export class MyCard extends LitElement {
  static get tag() {
    return 'my-card';
  }

  static get properties() {
    return {
      title: { type: String },
      image: { type: String },
      link: { type: String },
      description: { type: String },
      fancy: { type: Boolean, reflect: true }
    };
  }

  constructor() {
    super();
    this.title = "Default Title";
    this.image = "#";
    this.link = "#";
    this.description = "#";
    this.fancy = "false";
  }

  static get styles() {
    return css`
      :host {
        display: inline-block;
        max-width: 400px;
        border: 2px solid black;
        background-color: white;
      }

      :host([fancy]) {
      background-color: var(--my-card-fancy-bg, #6aff00); 
    }

      .card-image {
        width: 365px;
        height: 250px;
        padding: 16px;
      }

      .card-title {
        font-size: 24px;
        margin: 16px;
        color: black;
      }

      .card-text {
        padding: 16px;
      }

      .card-description {
        font-family: Georgia, serif;
        font-size: 12px;
        margin-bottom: 32px;
        font-weight: bold;
      }

      a.button-link {
        display: inline-block;
        background-color: #c9ebff;
        border: 2px solid black;
        color: black;
        padding: 4px 32px;
        text-decoration: none;
      }
    `;
  }

  render() {
    return html`
      <div class="card">
        <h1 class="card-title">${this.title}</h1>
        <img class="card-image" src="${this.image}" alt="${this.title}" />
        <div class="card-text">
        <p class="card-description">
        <slot name ="description">${this.description}</slot>
      </p>
        <a class="button-link" href="${this.link}" target="_blank">Details</a>
        </div>
      </div>
    `;
  }
}

customElements.define(MyCard.tag, MyCard);


