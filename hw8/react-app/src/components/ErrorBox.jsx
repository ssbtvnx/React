export default function ErrorBox({ message }) {
  return (
    <div style={{ color: "red", textAlign: "center", margin: "20px" }}>
      {message}
    </div>
  );
}
