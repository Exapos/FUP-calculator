// import Header from './components/Header'
import Create from './components/Create';


function App() {
  return (
    <div className="container">
      {/* <Header id="__p__fup_kalkula"/> */}
      <Create label="Velikost dat" id="velikost_dat_rectangle" idText="__p__velikost_dat" option="dropdown_box_up"/>
      <Create label="Rychlost stahovaní" id="rychlost_stahovani_rectange" idText="__p__rychlost_stahovani_" option="dropdown_box_down"/>
    </div>
  );
}

export default App;
