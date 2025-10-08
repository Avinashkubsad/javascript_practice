import React, { Suspense } from "react";

const DataComponent = React.lazy(() => import("./home"));
const App = () => {
  return (
    <div>
      <h1>hello </h1>
      <Suspense fallback={<div>Loading...</div>}>
        <DataComponent />
      </Suspense>
    </div>
  );
};

export default App;
