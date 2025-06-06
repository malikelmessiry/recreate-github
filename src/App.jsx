import './App.css';
import NavigationBar from './components/NavigationBar';
import SearchBar from './components/SearchBar';

function App() {

  return (
    <div className="app-background">
      <main>
        <NavigationBar></NavigationBar>
        <SearchBar></SearchBar>
      </main>
    </div>
  );
};

export default App;
