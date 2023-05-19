import './Footer.scss';

function Footer() {
  return (
    <footer className="footer">
      <h3 className="footer__caption">Учебный проект Яндекс.Практикум х BeatFilm.</h3>
      <div className="footer__info">
        <span className="footer__copyright">© 2023</span>
        <div className="footer__links">
          <a href="https://practicum.yandex.ru/" className="footer__link">Яндекс.Практикум</a>
          <a href="https://github.com/DeWhiteMold" className="footer__link">Github</a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;