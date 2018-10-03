customElements.define(
  "cycle-wrap",
  class CycleJS extends HTMLElement {
    constructor() {
      super();
    }

    connectedCallback() {
      loadScripts([
        {
          url: "./modules/cyclejs/build/bundle.js",
          name: "cyclejs"
        }
      ]).then(_ => {});

      this.innerHTML = "<div id='cycle-root'>Loading ...</div>";
    }

    disconnectedCallback() {}
  }
);
