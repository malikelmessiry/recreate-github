import './App.css';
import NavigationBar from './components/NavigationBar';
import SearchBar from './components/SearchBar';

function App() {

  return (
    <div className="app-background">
      <main>
        <NavigationBar></NavigationBar>
        {/* <SearchBar></SearchBar> this is in NavigationBar.jsx*/}
      </main>
    </div>
  );
};

export default App;
