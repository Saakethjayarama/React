import React, { useState } from "react";

export default function () {
  const [buttonText, setButtonText] = useState("Click me!");

  return (
    <div>
      <button
        onClick={() => {
          setButtonText("Yayy!❤❤❤");
        }}
      >
        {buttonText}
      </button>
    </div>
  );
}
