import './App.css';
import Banner from './Banner/Banner';
import Button from './Button/Button';
import Card from './Card/Card';
import Category from './Category/Category';

function App() {
  return (
    <div className="App">
      <header>
        <Banner/>
      

      </header>

      <div className='containerButton'>
        <Button text="Criar item"/>
        <Button text="Criar categoria"/>
      </div>

      <Category/>
      <Card/>

    </div>
  );
}

export default App;
