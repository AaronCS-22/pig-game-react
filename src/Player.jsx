import "./App.css";
function Player({ name, score, current, isActive }) {

  //Si el usuario gana, se le agrega la clase player--winner; si no, se le agrega la clase player o con active si es su turno
  const classPlayer =
    score > 100
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
