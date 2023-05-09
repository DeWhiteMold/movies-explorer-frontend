import './AboutMe.scss';
import SectionSubitle from '../SectionSubitle/SectionSubitle';
import photo from '../../images/photo.jpeg';

function AboutMe() {
  return (
    <section className="about-me">
      <SectionSubitle title="Студент" />
      <div className="about-me__info">
        <div className="about-me__text">
          <h2 className="about-me__name">Николай</h2>
          <span className="about-me__caption">Фронтенд-разработчик, 23 года</span>
          <p className="about-me__summary">
            Я родился и живу в Саратове, закончил факультет экономики СГУ. У меня есть жена 
            и дочь. Я люблю слушать музыку, а ещё увлекаюсь бегом. Недавно начал кодить. С 
            2015 года работал в компании «СКБ Контур». После того, как прошёл курс по 
            веб-разработке, начал заниматься фриланс-заказами и ушёл с постоянной работы.
          </p>
          <a href="https://github.com/DeWhiteMold" className="about-me__github-link">GitHub</a>
        </div>
        <img src={photo} alt="фото" className="about-me__photo" />
      </div>
    </section>
  );
}

export default AboutMe;