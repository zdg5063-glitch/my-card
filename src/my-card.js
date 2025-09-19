/**
 * Now it's your turn. Here's what we need to try and do:
 * 1. Get you HTML from your card working in here 
 * 2. Get your CSS rescoped as needed to work here
 */

import { LitElement, html, css } from 'lit';

export class MyCard extends LitElement {
  static get tag() {
    return 'my-card';
  }

  constructor() {
    super();
    this.title = "Default Title";
    this.image = "";
    this.link = "#";
    this.description = "";
  }

  static get properties() {
    return {
      title: { type: String },
      image: { type: String },
      link: { type: String },
      description: { type: String }
    };
  }

  static get styles() {
    return css`
      :host {
        display: block;
        max-width: 400px;
        border: 2px solid black;
        background-color: white;
      }

      .card-image {
        width: 365px;
        padding: 16px;
      }

      .card-title {
        font-size: 32px;
        margin: 16px;
        color: black;
      }

      .card-text {
        padding: 16px;
      }

      .card-description {
        font-family: Georgia, serif;
        font-size: 14px;
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

      :host(.fancy) {
        background-color: #8cff39;
      }
    `;
  }

  render() {
    return html`
      <div class="card">
        <h1 class="card-title">${this.title}</h1>
        <img class="card-image" src="${this.image}" alt="${this.title}" />
        <div class="card-text">
          <p class="card-description">${this.description}</p>
          <a class="button-link" href="${this.link}" target="_blank">Details</a>
        </div>
      </div>
    `;
  }
}

customElements.define(MyCard.tag, MyCard);


