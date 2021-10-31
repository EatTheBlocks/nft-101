import styled from 'styled-components';

function App() {

  let nft = { name: "Mario", symbol: "SMWC", copies: 10, image: "https://via.placeholder.com/150" }

  return (
    <div className="App">
      <NFTCard nft={nft} />
    </div>
  );
}

const NFTCard = (props) => {
  let nft = props.nft
  return (
    <NftCard>
      <NftPhoto style={{ backgroundImage: `url(${nft && nft.image})` }} />
    </NftCard>
  )
}

const NftPhoto = styled.div`
    display: block;
    width: 200px;
    height: 200px;
    background-position: center center;
    background-size: cover;
    border-radius: 10px;
    margin: auto;
`

const NftCard = styled.div`
  width: 200px;
  height: 250px;
  margin: auto;
  border-radius: 10px;
  padding: 0px;
  box-shadow:  8px 8px 16px #d9d9d9,
             -8px -8px 16px #ffffff;
  cursor: pointer;
`
export default App;
