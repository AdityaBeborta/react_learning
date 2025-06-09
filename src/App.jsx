import { useState } from "react";
import "./App.css";
import { LazyIndex } from "./Lazy_Suspense/LazyIndex";




function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <LazyIndex/>
    </>
  );
}

export default App;
