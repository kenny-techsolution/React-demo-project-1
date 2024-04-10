import TabButton from "./TabButton";
import { EXAMPLES } from "../data";
import { useState } from "react";
import Tabs from "./Tabs";

export default function Examples({}) {
  const [selectedTopic, setSelectedTopic] = useState();
  let tabContent = "default value";
  function handleSelect(selectedButton) {
    setSelectedTopic(selectedButton);
  }

  return (
    <section id="examples">
      <h2>Examples</h2>
      <Tabs
        buttonContainer="menu"
        buttons={
          <>
            <TabButton
              isSelected={selectedTopic === "components"}
              onClick={() => handleSelect("components")}
            >
              Components
            </TabButton>
            <TabButton
              isSelected={selectedTopic === "jsx"}
              onClick={() => handleSelect("jsx")}
            >
              JSX
            </TabButton>
            <TabButton
              isSelected={selectedTopic === "props"}
              onClick={() => handleSelect("props")}
            >
              props
            </TabButton>
            <TabButton
              isSelected={selectedTopic === "state"}
              onClick={() => handleSelect("state")}
            >
              state
            </TabButton>
          </>
        }
      >
        {!selectedTopic ? (
          <p>Please select a topic.</p>
        ) : (
          <div id="tab-content">
            <h3>{EXAMPLES[selectedTopic].title}</h3>
            <p>{EXAMPLES[selectedTopic].description}</p>
            <pre>
              <code>{EXAMPLES[selectedTopic].code}</code>
            </pre>
          </div>
        )}
      </Tabs>
    </section>
  );
}
