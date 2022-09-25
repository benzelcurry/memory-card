import Header from './Header';
import Cards from './Cards';
import '../stylesheets/App.css';

function App(props) {
  return (
    <div className='app'>
      <Header current={17} best='31'/>
      <Cards />
    </div>
  );
}

export default App;
