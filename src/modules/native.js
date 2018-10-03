customElements.define(
  "native-wrap",
  class Native extends HTMLElement {
    constructor() {
      super();
    }

    connectedCallback() {
      this.innerHTML = "Hello World !";
    }
  }
);
