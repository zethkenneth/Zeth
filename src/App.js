import './App.css';


function App() {
  return (
    <div className='layout'>
      <div className='wrapper'>
        <div className='content'>
           <div className='photo'>
              <p>PHOTO</p>
           </div>
           <div className='desc'>
              <div className='desc-title'>
                  <h1>Title</h1>
              </div>
              <div className='navbar'>
                  <ul className='list-btn'>
                    <li><button className='btn'>Hello</button></li>
                    <li><button className='btn'>its</button></li>
                    <li><button className='btn'>your </button></li>
                    <li><button className='btn'>looking</button></li>
                    <li><button className='btn'>for</button></li>
                  </ul>
              </div>
              <div className='decription'>
                  <p>DESCRIPTION</p>
              </div>
           </div>
        </div>
      </div>    
      <footer>
        <p>
          &copy; Copyright 2022 HTML.am
        </p>
      </footer>
    </div>

  );
}

export default App;
