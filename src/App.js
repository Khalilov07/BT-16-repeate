import './App.css';
import Footer from './components/Footer/Footer';
import Greeting from './components/Greeting/Greeting';
import Header from './components/Header/Header';
import Main from './components/Main/Main';

const App = (props) => {

  const date = new Date()

  console.log(date);

  const a = 10

  const b = 20

  const sum = a + b

  const greeting = "Hello"

  return (
    <div className="App">
      <Header />
      <Main a={a} b={b} sum={sum} />
      <Footer />
      <Greeting h={greeting} a={a} b={b} />
    </div>
  );
}

export default App