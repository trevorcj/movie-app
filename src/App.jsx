function App() {
  return (
    <div className="card-container">
      <Card title="Star Wars" rating={5} isCool={true} />
      <Card title="Avatar" />
      <Card title="The Lion King" />
    </div>
  );
}

function Card({ title }) {
  return (
    <div
      className="card"
      style={{
        border: "1px solid #4b5362",
        padding: "20px",
        margin: "10px",
        backgroundColor: "#31363f",
        borderRadius: "10px",
        minHeight: "100px",
      }}
    >
      <h2>{title}</h2>
    </div>
  );
}

export default App;
