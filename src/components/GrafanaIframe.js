import React from "react";
// import "../App.css";

function GrafanaIframe() {
  
  return (
    <>
      <section className="grafana_container">
        <iframe
        id="myiframe"
          className="iframe_grafana"
          src="https://dev.digikloud.io/grafana/login"
          title="Digikloud Grafana"
          height="100"
          width="100"
        />
      </section>
    </>
  );
}

export default GrafanaIframe;
