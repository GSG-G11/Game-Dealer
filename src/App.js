import React  from 'react';
import './App.css';
// import Cards from './Components/Card/Cards';
// import Search from './Components/Search/Search'
import Card from './Components/Card/Card';

function App() {
  // const [search,setSearch] =useState;
  // const [games , setGames] = useState([]);
 

  //  useEffect (() =>{
  //    console.log('use');
  //   const abortController = new AbortController();
  //    console.log('use');
  //   fetch('https://www.cheapshark.com/api/1.0/deals' , {
  //     signal : abortController.signal,
  //   })
  //   .then(res => res.json())
  //   .then(data => console.log(data))
  //   return() => abortController.abort()
  //   },[games])

  return (
    <>
    {/* <div className='cards'>
    <div className='card'>
        <div className='card-img'>
          <img src='https://cdn.cloudflare.steamstatic.com/steam/apps/268500/capsule_sm_120.jpg?t=1646157374' alt='' />
        </div>

        <div className='card-body'>
          <h2 className='game-title'> batman</h2>
          <p className='normal-price'> <span> Normal Price:</span>  $ 50</p>
       
          <p className='sale-price'> <span> Sale Price: </span> $ 10</p>
 
         
          <p className='game-rating'> , <span> Rating: </span> 84 % </p>
        </div>
      </div>

      <div className='card'>
        <div className='card-img'>
          <img src='' alt='' />
        </div>

        <div className='card-body'>
          <h2 className='game-title'> batman</h2>
          <span className='sale-price'>10</span>
          <span className='normal-price'>50</span>
          <span className='game-rating'> 84 % </span>
        </div>
      </div>
    </div> */}

  <Card />
    </>
  );
}

export default App;
