import './App.css';
import Dinner from './dinner';

function App() {
  return (
    <div>
    <h1>Hello World from Taaha</h1>
    {/* <Dinner/> */}
    <Dinner firstDishName="Chicken Karahi" secondDishName="Chicken Biryani"></Dinner>
    <Dinner firstDishName="Aloo Qeema" secondDishName="Chicken Shashlik"></Dinner>
    <Dinner firstDishName="Dahi Bhalay" secondDishName="Falooda"></Dinner>
    </div>
  );
}

export default App;