import './AboutProject.scss';
import SectionSubitle from '../SectionSubitle/SectionSubitle';

function AboutProject() {
  return (
    <section className="about-project">
      <SectionSubitle title="О проекте" />
      <div className="about-project__description">
        <div className="about-project__description-block">
          <h3 className="about-project__description-title">
            Дипломный проект включал 5 этапов
          </h3>
          <p className="about-project__description-caption">
            Составление плана, работу над бэкендом, вёрстку, добавление функциональности и финальные доработки.
          </p>
        </div>
        <div className="about-project__description-block">
          <h3 className="about-project__description-title">
            На выполнение диплома ушло 5 недель
          </h3>
          <p className="about-project__description-caption">
          У каждого этапа был мягкий и жёсткий дедлайн, которые нужно было соблюдать, чтобы успешно защититься.
          </p>
        </div>
      </div>
      <div className="about-project__timeline">
        <div className="about-project__timeline-block about-project__timeline-block_backend">
          <span className="about-project__timeline-weeks">1 неделя</span>
          <span className="about-project__timeline-name">Back-end</span>
        </div>
        <div className="about-project__timeline-block about-project__timeline-block_frontend">
          <span className="about-project__timeline-weeks">4 недели</span>
          <span className="about-project__timeline-name">Front-end</span>
        </div>
      </div>
    </section>
  );
}

export default AboutProject;