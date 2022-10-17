import logo from './logo.svg';
import './App.css';
import FormSimple from './components/FormSimple/FormSimple';

const dataSet = {
  name: "Krackers",
  surname: "Ernest",
  age: 25
};

function App() {
  return (
    <div className="App">
      <h1>My ReactJS application with forms</h1>
      <FormSimple name="Mr Kackers" dataS={dataSet} />
    </div>
  );
}

export default App;
