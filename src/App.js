import { useState } from "react";
import { Input } from "./Input";
import { RemoveForm } from "./RemoveForm";

function App() {
  const [colors, setColors] = useState(["red", "green", "blue"]);

  const removeColorAtIndex = (indexToRemove) => {
    // state den calimamak icin kopyalanmis color dizisi:
    const updatedColors = [...colors];
    // Belirtilen indeksteki elemanı kaldırımak icin
    //splice(index, deleteCount) (silinecek index,silinecek miktar)
    // silemek icn belirli bir index olmadigi icin indexToRemove kullandik
    updatedColors.splice(indexToRemove, 1);
    // State'i güncelleyide unutmazsak bu islem tamam
    setColors(updatedColors);
  };

  const addColor = (newColor) => {
    setColors([...colors, newColor]);
  };

  const renderedColors = colors.map((color) => {
    return <li key={crypto.randomUUID()}>{color}</li>;
  });

  return (
    <div>
      <Input onSubmit={addColor} />
      <ul>{renderedColors}</ul>
      <hr />
      <RemoveForm onSubmit={removeColorAtIndex} max={colors.length} />
    </div>
  );
}

export default App;
