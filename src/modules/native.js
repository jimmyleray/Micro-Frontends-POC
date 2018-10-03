customElements.define(
  "native-wrap",
  class Native extends HTMLElement {
    constructor() {
      super();
    }

    connectedCallback() {
      this.chrono = 0;
      this.render(this.chrono);
      setInterval(() => {
        this.chrono++;
        this.render(this.chrono);
      }, 1000);
    }

    render(chrono) {
      this.innerHTML = `
      Hello World !<br>
      On this page since ${chrono} second${chrono > 1 ? "s" : ""}
      `;
    }
  }
);
