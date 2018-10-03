customElements.define(
  "react-wrap",
  class ReactJS extends HTMLElement {
    constructor() {
      super();
    }

    connectedCallback() {
      loadScripts([
        {
          url: "https://unpkg.com/react@16/umd/react.development.js",
          name: "react-development"
        },
        {
          url: "https://unpkg.com/react-dom@16/umd/react-dom.development.js",
          name: "react-dom-development"
        }
      ]).then(_ => {
        const e = React.createElement;

        class LikeButton extends React.Component {
          constructor(props) {
            super(props);
            this.state = { liked: false };
          }

          render() {
            return e(
              "button",
              {
                onClick: () => this.setState({ liked: !this.state.liked }),
                className: `button ${
                  this.state.liked ? "is-danger" : "is-success"
                }`
              },
              this.state.liked ? "Dislike" : "Like"
            );
          }
        }

        this.innerHTML = "<div id='react-root'></div>";
        const rootContainer = document.querySelector("#react-root");
        ReactDOM.render(e(LikeButton), rootContainer);
      });

      this.innerHTML = "Loading ...";
    }

    disconnectedCallback() {}
  }
);
