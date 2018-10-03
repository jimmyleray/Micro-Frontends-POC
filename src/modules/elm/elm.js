customElements.define(
  "elm-wrap",
  class CustomElm extends HTMLElement {
    constructor() {
      super();
    }

    connectedCallback() {
      loadScripts([
        {
          url: "./modules/elm/main.js",
          name: "elm-main"
        }
      ]).then(_ => {
        this.innerHTML = "<div id='elm-root'></div>";
        this.app = Elm.Main.init({ node: document.querySelector("#elm-root") });
      });

      this.innerHTML = "Loading ...";
    }

    disconnectedCallback() {}
  }
);
