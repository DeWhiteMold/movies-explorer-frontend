import './AboutMe.scss';
import SectionSubitle from '../SectionSubitle/SectionSubitle';
import photo from '../../../images/photo.jpeg';

function AboutMe() {
  return (
    <section className="about-me">
      <SectionSubitle title="Студент" />
      <div className="about-me__info">
        <div className="about-me__text">
          <h2 className="about-me__name">Николай</h2>
          <span className="about-me__caption">Фронтенд-разработчик, 23 года</span>
          <p className="about-me__summary">
          Я Frontend разработчик. Закончил курсы Яндекс.Практикума, сейчас изучаю TypeScript и React Native. 
          Параллельно нарабатываю опыт на катах в code wars. Решил сменить профессию, так как хотел 
          больше умственной работы и возможность работать из любой точки мира. Программирование заинтересовало 
          меня еще в школе, а во время обучения на курсе увлекло. Мне нравится возможность создавать что-то новое 
          и видеть результат своей работы.До программирования 4 года работал в барной индустрии, вырос до шеф-бармена. 
          Благодаря этому опыту я не боюсь брать на себя ответственность, легко нахожу общий язык с коллегами, умею 
          решать конфликтные ситуации и очень стрессоустойчив.Увлекаюсь скейтбордингом, кинематографом и барной культурой.
          </p>
          <a href="https://github.com/DeWhiteMold" className="about-me__github-link">GitHub</a>
        </div>
        <img src={photo} alt="фото" className="about-me__photo" />
      </div>
    </section>
  );
}

export default AboutMe;