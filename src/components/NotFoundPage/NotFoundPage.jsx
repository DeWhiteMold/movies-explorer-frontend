import { Link } from 'react-router-dom';
import './NotFoundPage.scss';

function NotFoundPage() {
  return (
    <div className="not-found-page">
      <h2 className="not-found-page__caption">404</h2>
      <h3 className="not-found-page__subscription">Страница не найдена</h3>
      <Link to='/' className="not-found-page__return-btn">Назад</Link>
    </div>
  )
}

export default NotFoundPage;