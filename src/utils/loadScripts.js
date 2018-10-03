function loadScript(url, name) {
  return new Promise(resolve => {
    if (!!document.querySelector("#" + name)) {
      resolve();
    } else {
      const script = document.createElement("script");
      script.src = url;
      script.id = name;
      script.type = "text/javascript";
      document.body.appendChild(script);

      script.addEventListener("load", _ => {
        resolve();
      });
    }
  });
}

function loadScripts(scripts) {
  return Promise.all(
    scripts.map(script => loadScript(script.url, script.name))
  );
}
