import './ExtraMoviesButton.scss';

function ExtraMoviesButton({show}) {
  return (
    <section className="extra-movies-button">
      {
        show && <button className="extra-movies-button__btn">Ещё</button>
      }
    </section>
  )
}

export default ExtraMoviesButton;