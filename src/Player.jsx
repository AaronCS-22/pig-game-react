import "./App.css";
function Player({ name, score, current, isActive }) {
  const classPlayer =
    score > 10
      ? "player player--winner"
      : isActive
        ? "player player--active"
        : "player";

  return (
    <section className={classPlayer}>
      <h2 className="name">{name}</h2>
      <p className="score">{score}</p>
      <div className="current">
        <p className="current-label">Current</p>
        <p className="current-score">{current || 0}</p>
      </div>
    </section>
  );
}
export default Player;
