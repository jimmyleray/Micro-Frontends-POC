customElements.define(
  "angularjs-wrap",
  class AngularJS extends HTMLElement {
    constructor() {
      super();
    }

    connectedCallback() {
      loadScripts([
        {
          url:
            "https://ajax.googleapis.com/ajax/libs/angularjs/1.7.4/angular.min.js",
          name: "angularjs"
        }
      ]).then(_ => {
        this.innerHTML = `
        <div ng-app="app">
          <div ng-controller="HelloWorldController as vm">
            <label>Name:</label>
            <input type="text" ng-model="vm.name" placeholder="Enter a name here">
            <h1>Hello {{vm.name}} !</h1>
          </div>
        </div>
        `;

        angular
          .module("app", [])
          .controller("HelloWorldController", function() {
            this.name = "Jimmy";
          });
      });

      this.innerHTML = "Loading ...";
    }

    disconnectedCallback() {}
  }
);
