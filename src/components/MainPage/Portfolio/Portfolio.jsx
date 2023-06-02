import './Portfolio.scss';

function Portfolio() {
  return (
    <section className="portfolio">
      <h3 className="portfolio__subtitle">Портфолио</h3>
      <div className="portfolio__links">
        <a href="https://github.com/DeWhiteMold/how-to-learn" className="portfolio__link" rel="noreferrer" target="_blank">
          <span className="portfolio__link-text">Статичный сайт</span>
          <span className="portfolio__link-arrow">↗</span>
        </a>
        <a href="https://dewhitemold.github.io/russian-travel/" className="portfolio__link" rel="noreferrer" target="_blank">
          <span className="portfolio__link-text">Адаптивный сайт</span>
          <span className="portfolio__link-arrow">↗</span>
        </a>
        <a href="https://dewhiteproject.nomoredomains.monster/sing-in" className="portfolio__link" rel="noreferrer" target="_blank">
          <span className="portfolio__link-text">Одностраничное приложение</span>
          <span className="portfolio__link-arrow">↗</span>
        </a>
      </div>
    </section>
  );
}

export default Portfolio;