import { useState } from "react";
import { searchMovie } from "../services/api";

export default function MovieForm() {
  const [title, setTitle] = useState("");
  const [movie, setMovie] = useState<any>(null);

  const [rating, setRating] = useState(0);
  const [comment, setComment] = useState("");

  const handleSearch = async () => {
    const res = await searchMovie(title);
    setMovie(res.data);
  };

  const handleSave = () => {
    console.log({
      movie: movie.Title,
      rating,
      comment,
    });

    setRating(0);
    setComment("");
  };

  return (
    <div>
      {/* 🔍 Search UI */}
      <div style={styles.searchContainer}>
        <input
          placeholder="Search movie..."
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          style={styles.input}
        />
        <button onClick={handleSearch} style={styles.button}>
          Search
        </button>
      </div>

      {/* 🎬 Movie Card */}
      {movie && movie.Response !== "False" && (
        <div style={styles.card}>
          <div style={styles.row}>
            {/* 🖼 LEFT IMAGE */}
            <img src={movie.Poster} style={styles.image} />

            {/* 📄 RIGHT CONTENT */}
            <div style={styles.info}>
              <h2 style={styles.title}>{movie.Title}</h2>

              <p style={styles.description}>{movie.Plot}</p>

              <p>⭐ IMDb: {movie.imdbRating}</p>

              {/* ⭐ Rating */}
              <div>
                {[1, 2, 3, 4, 5].map((star) => (
                  <span
                    key={star}
                    style={{
                      cursor: "pointer",
                      color: star <= rating ? "gold" : "gray",
                      fontSize: "20px",
                    }}
                    onClick={() => setRating(star)}
                  >
                    ★
                  </span>
                ))}
              </div>

              {/* 💬 Comment */}
              <textarea
                placeholder="Write your review..."
                value={comment}
                onChange={(e) => setComment(e.target.value)}
                style={styles.textarea}
              />

              <button onClick={handleSave} style={styles.saveButton}>
                Save Review
              </button>
            </div>
          </div>
        </div>
      )}

      {movie && movie.Response === "False" && (
        <p style={{ color: "white" }}>Movie not found ❌</p>
      )}
    </div>
  );
}

const styles = {
  searchContainer: {
    display: "flex",
    justifyContent: "center",
    gap: "10px",
    marginBottom: "20px",
  },
  input: {
    padding: "10px",
    width: "250px",
    borderRadius: "20px",
    border: "none",
    outline: "none",
  },
  button: {
    padding: "10px 15px",
    borderRadius: "20px",
    border: "none",
    backgroundColor: "#ff9800",
    color: "#fff",
    cursor: "pointer",
  },
  card: {
    width: "600px",
    margin: "20px auto",
    padding: "15px",
    borderRadius: "10px",
    boxShadow: "0 4px 10px rgba(0,0,0,0.1)",
    backgroundColor: "#fff",
  },
  row: {
    display: "flex",
    gap: "15px",
  },
  image: {
    width: "150px", // 👈 smaller image
    borderRadius: "10px",
  },
  info: {
    textAlign: "left" as const,
  },
  title: {
    fontSize: "20px",
    fontWeight: "bold",
    margin: "10px 0",
  },
  description: {
    fontSize: "14px",
    color: "#555",
  },
  textarea: {
    width: "100%",
    marginTop: "10px",
    padding: "8px",
    borderRadius: "8px",
  },
  saveButton: {
    marginTop: "10px",
    padding: "8px 12px",
    backgroundColor: "#4caf50",
    color: "#fff",
    border: "none",
    borderRadius: "8px",
    cursor: "pointer",
  },
};