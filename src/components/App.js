import Header from './Header';
import Cards from './Cards';
import '../stylesheets/App.css';

function App() {
  return (
    <div className='app'>
      <Header current='24' best='31'/>
      <Cards />
    </div>
  );
}

export default App;
