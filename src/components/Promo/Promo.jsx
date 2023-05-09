import './Promo.scss';
import promoLogo from '../../images/promo-img.svg'

function Promo() {
  return (
    <div className="promo">
      <h1 className="promo__title">
        Учебный проект студента факультета Веб-разработки.
      </h1>
      <img src={promoLogo} alt="" className="promo__img" />
    </div>
  );
}

export default Promo;