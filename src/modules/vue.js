customElements.define(
  "vue-wrap",
  class VueJS extends HTMLElement {
    constructor() {
      super();
    }

    connectedCallback() {
      loadScripts([
        {
          url: "https://cdn.jsdelivr.net/npm/vue/dist/vue.js",
          name: "vue-development"
        }
      ]).then(_ => {
        this.innerHTML = `
        <div id="vue-app">
          <ol>
            <li v-for="todo in todos">
              {{ todo.text }}
            </li>
          </ol>
        </div>
        `;

        this.app = new Vue({
          el: "#vue-app",
          data: {
            todos: [
              { text: "Learn JavaScript" },
              { text: "Learn Vue" },
              { text: "Build something awesome" }
            ]
          }
        });
      });

      this.innerHTML = "Loading ...";
    }

    disconnectedCallback() {
      this.app.$destroy();
    }
  }
);
