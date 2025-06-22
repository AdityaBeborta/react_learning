import { useState } from "react";
import "./App.css";
import { LazyIndex } from "./Lazy_Suspense/LazyIndex";
import {ErrorBoundary} from "./ErrorBoundaries/ErrorBoundary"
import { ThrowError } from "./ErrorBoundaries/ThrowError";



function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <ErrorBoundary fallback={<p>Something went wrong</p>}>
        {/* <LazyIndex/> */}
        <ThrowError/>
      </ErrorBoundary>
    </>
  );
}

export default App;
