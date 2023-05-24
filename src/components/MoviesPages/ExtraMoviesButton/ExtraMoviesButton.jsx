import './ExtraMoviesButton.scss';

function ExtraMoviesButton({show, onAdd}) {
  return (
    <section className="extra-movies-button">
      {
        show && <button className="extra-movies-button__btn" onClick={onAdd}>Ещё</button>
      }
    </section>
  )
}

export default ExtraMoviesButton;