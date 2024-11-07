const Debug = ({ componentName }) => {
  console.log(`${componentName} rendering`);
  return (
    <div
      style={{
        padding: "4px",
        margin: "4px",
        background: "#f0f0f0",
        border: "1px solid #ccc",
      }}
    >
      {componentName}
    </div>
  );
};

export default Debug;
