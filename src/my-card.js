import { LitElement, html, css } from 'lit';

export class MyCard extends LitElement {
  static get tag() {
    return 'my-card';
  }

  static get properties() {
    return {
      title: { type: String },
      image: { type: String },
      description: { type: String },
      fancy: { type: Boolean, reflect: true }
    };
  }

  constructor() {
    super();
    this.title = "Default Title";
    this.image = "#";
    this.description = "#";
    this.fancy = "false";
  }

  static get styles() {
    return css`
      :host {
        display: inline-block;
        max-width: 400px;
        border: 5px solid black;
        background-color: white;
      }

      :host([fancy]) {
      background-color: var(--my-card-fancy-bg, #6aff00); 
    }

    .card {
      height: 500px;
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
        margin: 24px;
      }

      .card-description {
        font-family: Georgia, serif;
        font-size: 18px;
      }

      .desc {
        overflow: auto;
        height: 100px;
      }
    `;
  }

  // put this anywhere on the MyCard class; just above render() is probably good
  openChanged(e) {
    console.log(e.newState);
    if (e.newState === "open") {
      this.fancy = true;
    }
    else {
      this.fancy = false;
    }
  }

  render() {
    return html`
      <div class="card">
        <h1 class="card-title">${this.title}</h1>
        <img class="card-image" src="${this.image}" alt="${this.title}" />
        <div class="card-text">
        <p class="card-description">
        <details ?open="${this.fancy}" @toggle="${this.openChanged}">
          <summary>description</summary>
          <div>
          <slot>${this.description}</slot>
  </div>
</details>
        
      </div>
    `;
  }
  openChanged(event) {
  this.fancy = event.target.open;
  }
}

customElements.define(MyCard.tag, MyCard);


