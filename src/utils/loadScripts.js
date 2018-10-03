function loadScript({ url, name, reload = false }) {
  return new Promise(resolve => {
    if (!!document.querySelector("#" + name)) {
      if (reload) {
        document.querySelector("#" + name).remove();
        addScript(url, name).addEventListener("load", _ => {
          resolve();
        });
      } else {
        resolve();
      }
    } else {
      addScript(url, name).addEventListener("load", _ => {
        resolve();
      });
    }
  });
}

function addScript(url, name) {
  const script = document.createElement("script");
  script.src = url;
  script.id = name;
  script.type = "text/javascript";
  document.body.appendChild(script);
  return script;
}

function loadScripts(scripts) {
  return Promise.all(scripts.map(loadScript));
}
