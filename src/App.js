import './style/App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Sidebar from './components/Sidebar';
import MainContent from './components/MainContent';

const App = () => {
  return (
    <div>
      <main>
        <section className="row">
          <Sidebar />
          <MainContent />
        </section>
      </main>
    </div>
  );
};

export default App;