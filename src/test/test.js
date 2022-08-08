import React, { useState } from "react";
function MyComponent() {
  // the setter function is always the second destructured value
  const [language, setLanguage] = useState("react");
  return (
    <div>
      <button onClick={() => setLanguage("javascript")}>I love JS</button>
      <p>I love {language}</p>
    </div>
  );
}

export default MyComponent;
