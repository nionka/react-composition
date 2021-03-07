import './App.css';
import Card from './components/card/Card';

const cardTwo = {
  title: 'Вторая карточка',
  text: 'Очень красивый текст для второй карточки',
}

const cardOne = {
  title: 'Первая карточка',
  text: 'Текст для первой карточки с прекрасной картинкой',
  src: 'https://st.depositphotos.com/1760224/3660/i/950/depositphotos_36606389-stock-photo-sport-success-on-sunset-background.jpg'
}

function App() {
  return (
    <div className="cards">
      <Card {...cardOne}> {<img src={cardOne.src} className="card-img-top" alt="..." />} </Card>
      <Card {...cardTwo}/>
    </div>
  );
}

export default App;
