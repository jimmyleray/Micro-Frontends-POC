customElements.define(
  "angular-wrap",
  class Angular extends HTMLElement {
    constructor() {
      super();
    }

    connectedCallback() {
      loadScripts([
        {
          url: "./modules/angular/dist/angular/runtime.js",
          name: "angular-runtime",
          reload: true
        },
        {
          url: "./modules/angular/dist/angular/polyfills.js",
          name: "angular-polyfills"
        },
        {
          url: "./modules/angular/dist/angular/styles.js",
          name: "angular-styles"
        },
        {
          url: "./modules/angular/dist/angular/vendor.js",
          name: "angular-vendor",
          reload: true
        },
        {
          url: "./modules/angular/dist/angular/main.js",
          name: "angular-main",
          reload: true
        }
      ]).then(_ => {});

      this.innerHTML = "<div id='app-angular-root'>Loading ...</div>";
    }

    disconnectedCallback() {}
  }
);
