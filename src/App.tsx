
import Todos from './components/Todo';

function App() {
  return (
    <div className="App">
      <Todos items={[ 'blabla' ]}>
        <ul>
          <li>blublu</li>
          <li>blibli</li>
        </ul>
      </Todos>
    </div>
  );
}

export default App;
