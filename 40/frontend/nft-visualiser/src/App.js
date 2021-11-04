import styled from 'styled-components';
import { NFTCard, NftPhoto } from './components/NFTCard';
import { useState } from "react"

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
              <NFTCard nft={nft} key={i} toggleModal={ () => toggleModal(i) }/>
            )
          }
        </Grid>
      </Container>
      {
        showModal &&
        <NFTModal 
          nft={selectedNft}
          toggleModal={ () => toggleModal() }
        />
      }
      
    </div>
  );
}

const NFTModal = (props) => {
  let nft = props.nft
  return (
    <Modal>
      <ModalContent>
        <ModalGrid>
          <NftPhoto style={{ backgroundImage: `url(${ nft.image })`, height: 400, width: 400}}/>
          <div>
            <ModalTitle>{nft.name}</ModalTitle>
            <Paragraph> { `You own ${nft.copies} copies` } </Paragraph> 
            <SectionText> Description </SectionText>
            <Paragraph style={{ width: 400 }}> { nft.description } </Paragraph>
            <SectionText> Attributes </SectionText>
          </div>
        </ModalGrid>
        <CloseButton onClick={ () => props.toggleModal()} >
          &times;
        </CloseButton>
      </ModalContent>
    </Modal>
  )
}

const CloseButton = styled.span`
  position: absolute;
  right: 0;
  top: 0;
  padding: 20px 25px 0 0;
  font-size: 20px;
  font-weight: bold;
  cursor: pointer;
`

const ModalTitle = styled.h1`
  margin: 0;
`
const Paragraph = styled.p`
  margin: 0 0 15px 0;
`
const SectionText = styled.h3`
  margin: 5px 0 5px 0;
`
const ModalGrid = styled.div`
  display: inline-grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 40px;
`
const Modal = styled.div`
  position: fixed;
  display: flex;
  align-items: center;
  z-index: 100px; // Stays on top of everything else
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  overflow: auto; // Enable scroll if needed
  background-color: rgba(0,0,0, 0.5);
`

const ModalContent = styled.div`
  position: relative;
  width: 900px;
  margin: auto;
  background-color: white;
  border-radius: 20px;
  padding: 20px;
`

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
