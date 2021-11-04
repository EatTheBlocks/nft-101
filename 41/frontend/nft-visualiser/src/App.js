import styled from 'styled-components';
import { NFTCard, NftPhoto } from './components/NFTCard';
import { useState } from "react"
import { NFTModal } from './components/NFTModal';

function App() {

  const [showModal, setShowModal] = useState(false)
  const [selectedNft, setSelectedNft] = useState()

  let nfts =
    [
      { name: "Mario", symbol: "SMWC", copies: 10, image: "https://via.placeholder.com/150" },
      { name: "Luigi", symbol: "SMWC", copies: 10, image: "https://via.placeholder.com/150" },
      { name: "Yoshi", symbol: "SMWC", copies: 10, image: "https://via.placeholder.com/150" },
      { name: "Donkey Kong", symbol: "SMWC", copies: 10, image: "https://via.placeholder.com/150" },
      { name: "Mario", symbol: "SMWC", copies: 10, image: "https://via.placeholder.com/150" },
      { name: "Luigi", symbol: "SMWC", copies: 10, image: "https://via.placeholder.com/150" },
      { name: "Yoshi", symbol: "SMWC", copies: 10, image: "https://via.placeholder.com/150" },
      { name: "Donkey Kong", symbol: "SMWC", copies: 10, image: "https://via.placeholder.com/150" },
    ]

  function toggleModal(i) {
    if (i >= 0) {
      setSelectedNft(nfts[i])
    }
    setShowModal(!showModal)
  }

  return (
    <div className="App">
      <Container>
        <Title> Super Mario World Collection </Title>
        <Subtitle> The rarest and best of Super Mario World </Subtitle>
        <Grid>
          {
            nfts.map((nft, i) =>
              <NFTCard nft={nft} key={i} toggleModal={() => toggleModal(i)} />
            )
          }
        </Grid>
      </Container>
      {
        showModal &&
        <NFTModal
          nft={selectedNft}
          toggleModal={() => toggleModal()}
        />
      }

    </div>
  );
}

const Title = styled.h1`
  margin: 0;
  text-align: center;
`
const Subtitle = styled.h4`
  color: gray;
  margin-top: 0;
  text-align: center;
`
const Container = styled.div`
  width: 70%;
  max-width: 1200px;
  margin: auto;
  margin-top: 100px;
`
const Grid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  row-gap: 40px;
`

export default App;
