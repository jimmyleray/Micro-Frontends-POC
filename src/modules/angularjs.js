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
        <div id="angularjs-root" ng-cloak>
          <hello-world></hello-world>
        </div>
        `;

        angular.module("app", []).component("helloWorld", {
          template: `
            <label>Name:</label>
            <input type="text" ng-model="name" placeholder="Enter a name here">
            <h1>Hello {{name}} !</h1>
            `,
          controller: function($scope) {
            $scope.name = "Jimmy";
          }
        });

        angular.bootstrap(document.getElementById("angularjs-root"), ["app"]);
      });

      this.innerHTML = "Loading ...";
    }

    disconnectedCallback() {}
  }
);
