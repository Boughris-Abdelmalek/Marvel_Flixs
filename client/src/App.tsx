import "./App.css";
import { useState, useRef } from "react";

// add and Delete Items From the List

function App() {
  const [list, setList] = useState<Array<string>>([]);
  const [inputUser, setInputUser] = useState<string>("");
  const inputRef = useRef<HTMLInputElement>(null);

  const handleAddItemToList = (item: string): void => {
    setList([...list, item]);
    setInputUser("");
    if (inputRef.current) {
      inputRef.current.value = "";
    }
  };

  const hanldeInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputUser(e.target.value);
  };

  const handleDeleteItemFromList = (id: number): void => {
    setList(list.filter((_, idx) => idx !== id));
  };

  return (
    <>
      <div>
        <ul>
          {list &&
            list.map((item, index) => {
              return (
                <li key={index} onClick={() => handleDeleteItemFromList(index)}>
                  {item}
                </li>
              );
            })}
        </ul>
      </div>
      <input type="text" placeholder="Enter an item" onChange={hanldeInputChange} ref={inputRef} />
      <button onClick={() => handleAddItemToList(inputUser)}>Add on more or less thing</button>
    </>
  );
}

export default App;
