import React from "react";
import "./MainForm.css";
import Shortner from "./shortner.svg";
import CopyIcon from "./CopySvg.svg";
import { useState } from "react";

export default function MainForm() {
  const [text, setText] = useState("");
  const [copy, setCopy] = useState(false);

  return (
    <>
      <main className="mainContainer">
        <form className="inputForm">
          <input
            className="textField"
            type="text"
            value={text}
            onChange={(e) => {
              setText(e.target.value);
              setCopy(false);
            }}
          />
          {copy ? (
            <CopyIcon className="Svgbutton" />
          ) : (
            <Shortner
              onClick={async () => {
                const encoded = escape(text);
                console.log(encoded)
                const shortUrl = await fetch("http://localhost:9070/shortern", {
                  method: "POST",
                   headers: {
                    'Content-Type': 'application/json'
                   },
                  body:JSON.stringify( {
                    url: encoded,
                  }),
                });
                const data = await shortUrl.json();
                // console.log(data);
                setText(data.url)
                setCopy(true)
              }}
              className="Svgbutton"
            />
          )}
        </form>
      </main>
    </>
  );
}

