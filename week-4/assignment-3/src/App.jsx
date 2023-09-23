import './css-reset.css';
import './App.css';
import Article from './components/Article';
import articleData from './assets/articleData'
import articleData2 from './assets/articleData2';
import Header from './components/Header';
import Banner from './components/Banner';
import ReadMore from './components/ReadMore';


function App() {

  return (
    <>
      <Header />
      <Banner />

      <main className="container">
        <h2 className="main-title">女籃快報</h2>
        <div className="col-box">
          <Article data={articleData}/>
        </div>
        <ReadMore/>
      </main>
    </>
  );
}

export default App;
