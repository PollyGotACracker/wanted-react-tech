import React from "react";

const MyComponent = ({ onClick }) => {
  console.log(`MyComponent is rendered`);

  return (
    <div>
      {Array.from({ length: 100 }).map((_, i) => {
        return (
          <button key={i} onClick={onClick}>
            MyComponent
          </button>
        );
      })}
    </div>
  );
};

export default React.memo(MyComponent);
