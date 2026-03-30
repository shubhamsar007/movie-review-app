import MovieForm from "./components/MovieForm"; // 

function App() {
  return (
    <div style={styles.container}>
      <h1 style={styles.heading}>🎬 Movie Review App</h1>
      <MovieForm />
    </div>
  );
}

const styles = {
  container: {
    textAlign: "center" as const,
    background: "linear-gradient(to right, #1e3c72, #2a5298)",
    minHeight: "100vh",
    padding: "20px",
  },
  heading: {
    color: "#fff",
    fontSize: "32px",
    marginBottom: "20px",
  },
};

export default App;