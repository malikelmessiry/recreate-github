import './App.css';
import NavigationBar from './components/NavigationBar';
import SearchBar from './components/SearchBar';
import LoginControls from './components/LoginControls';

function App() {

  return (
    <div className="app-background">
      <header className="app-header">
        <NavigationBar></NavigationBar>
        <SearchBar></SearchBar>
        <LoginControls></LoginControls>
      </header>
    </div>
  );
};

export default App;
