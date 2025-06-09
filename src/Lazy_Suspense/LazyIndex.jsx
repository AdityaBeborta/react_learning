import { React, useState } from "react";
import { lazy, Suspense } from "react";

const LazyComponent = lazy(() => import("../Lazy_Suspense/LazyComp"));
export const LazyIndex = () => {
  const [isHidden, setIsHidden] = useState(false);

  const handleToggleButton = () => {
    setIsHidden(!isHidden);
  };

  return (
    <>
      {isHidden ? (
        <Suspense fallback={<div>Loading...</div>}>
          <LazyComponent />
        </Suspense>
      ) : (
        ""
      )}
      <button onClick={handleToggleButton}>Toogle</button>
    </>
  );
};
