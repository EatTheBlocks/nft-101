import styled from 'styled-components';
import { NFTCard } from './components/NFTCard';

function App() {

  let nfts =
    [
      { name: "Mario", symbol: "SMWC", copies: 10, image: "https://via.placeholder.com/150" },
      { name: "Luigi", symbol: "SMWC", copies: 10, image: "https://via.placeholder.com/150" },
      { name: "Yoshi", symbol: "SMWC", copies: 10, image: "https://via.placeholder.com/150" },
      { name: "Donkey Kong", symbol: "SMWC", copies: 10, image: "https://via.placeholder.com/150" },
    ]

  return (
    <div className="App">
      {
        nfts.map((nft, i) =>
          <NFTCard nft={nft} key={i}/>
        )
      }
    </div>
  );
}

export default App;
