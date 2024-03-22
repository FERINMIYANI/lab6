
import './App.css';

function App() {
  function renderImages() {
    const text = ['The Last Bloodcarver', 'The Revenant Games', 'The No-girlfriend Rule', 'The Hedgewitch of Foxhall', 'Under This Red Rock', 'It Happened on Saturday', 'This Will Be Funny Someday', 'Whats Coming to Me', 'With You All the Way', 'Jelly', 'Bright', 'Miss You Love You Hate You Bye'];
    const links = ['https://halifax.bibliocommons.com/v2/record/S135C2089661', 'https://halifax.bibliocommons.com/v2/record/S135C2092831', 'https://halifax.bibliocommons.com/v2/record/S135C2089665', 'https://halifax.bibliocommons.com/v2/record/S135C2089654', 'https://halifax.bibliocommons.com/v2/record/S135C2090646', 'https://halifax.bibliocommons.com/v2/record/S135C2090381', 'https://halifax.bibliocommons.com/v2/record/S135C2093697', 'https://halifax.bibliocommons.com/v2/record/S135C2091549', 'https://halifax.bibliocommons.com/v2/record/S135C2093701', 'https://halifax.bibliocommons.com/v2/record/S135C2094337', 'https://halifax.bibliocommons.com/v2/record/S135C2093658', 'https://halifax.bibliocommons.com/v2/record/S135C2094338']
    const images = [];
    for (let i = 1; i < 13; i++) {
      images.push(<div className="img"><a href={`${links[i-1]}`} target="blank"><img key={i} src={`/${i}.jpg`} /><h3>{text[i - 1]}</h3></a></div>);
    }
    return images;
  }
  return (
    <div className="App">
      <div className="header">
        <h1>Welcome to Halifax Public Library</h1>
      </div>
      <div className='nav'>
        <a href="https://www.halifaxpubliclibraries.ca/"><img src='/logo.png' /></a>
        <a href="https://www.halifaxpubliclibraries.ca/"><h3>Browse More Books</h3></a>
      </div>
      <div className='main'>
        <div className='books'>
          {
            renderImages()
          }
        </div>
      </div>
      <div className='footer'>
        <h3>Thanks</h3>
      </div>
    </div>
  );
}

export default App;
