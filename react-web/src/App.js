import Header from './components/Header'
import Create from './components/Create';


function App() {
  return (
    <div className="container">
    <Header />
      <h1>app h1</h1>   
      <Create label="Velikost dat"/>
      <Create label="Rychlost stahovaní"/>
    </div>
  );
}

export default App;
