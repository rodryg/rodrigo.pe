import logo from './logo.svg';
import './App.css';
import HydraEditor from './components/HydraEditor/HydraEditor';
import NavBar from './components/NavBar/NavBar';
import ProjectList from './components/ProjectList/ProjectList';
import MediumPosts from './components/MediumPosts/MediumPosts';

const pixel = 'data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" width="1" height="1"><rect width="1" height="1" fill="white"/></svg>';

const projects = [
  { title: 'Project 1', image: pixel },
  { title: 'Project 2', image: pixel },
];

const collaborations = [
  { title: 'Collaboration 1', image: pixel },
  { title: 'Collaboration 2', image: pixel },
];

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <NavBar />
        <HydraEditor />
        <p>
          Viviendo en Barcelona<br />
          programación, cine, protesta y arte<br />
        </p>
        <ProjectList projects={projects} showTitles={true} />
        <p>
          y tengo en tremendo gusto de colaborar en<br />
          proyectos que me emocionan mucho!<br />
        </p>
        <ProjectList projects={collaborations} showTitles={false} />
        <MediumPosts />
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
