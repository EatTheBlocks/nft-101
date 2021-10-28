import { useState, useEffect } from "react";
import styled from 'styled-components';
import { ethers } from 'ethers';
import { NFTCard } from './components/NftCard';
import { NftModal } from "./components/NftModal";
import { connect } from "./helpers";
import ReactLoading from 'react-loading';

const axios = require('axios');

function App() {

  const [showModal, setShowModal] = useState(false);
  const [nfts, setNfts] = useState([])
  const [selectedNft, setSelectedNft] = useState()

  // let nfts = [
  //   { collection: "lolcats.com", name: "Cat", image: "https://via.placeholder.com/150" },
  //   { collection: "lolcats.com", name: "Cat", image: "https://via.placeholder.com/150" },
  //   { collection: "lolcats.com", name: "Cat", image: "https://via.placeholder.com/150" },
  //   { collection: "lolcats.com", name: "Cat", image: "https://via.placeholder.com/150" },
  //   { collection: "lolcats.com", name: "Cat", image: "https://via.placeholder.com/150" },
  //   { collection: "lolcats.com", name: "Cat", image: "https://via.placeholder.com/150" },
  //   { collection: "lolcats.com", name: "Cat", image: "https://via.placeholder.com/150" },
  //   { collection: "lolcats.com", name: "Cat", image: "https://via.placeholder.com/150" },
  //   { collection: "lolcats.com", name: "Cat", image: "https://via.placeholder.com/150" },
  //   { collection: "lolcats.com", name: "Cat", image: "https://via.placeholder.com/150" },
  // ]

  useEffect(() => {

    (async () => {
      const address = await connect()
      if (address) {
        getNfts(address)
      }
      
    })()

  }, []);


  async function getNfts(address) {

    const rpc = "https://polygon-mumbai.g.alchemy.com/v2/SHqN-KElsa12-Ppg-UthGOXcIyvrYLWk";
    const ethersProvider = new ethers.providers.JsonRpcProvider(rpc);

    let abi = [
      "function symbol() public view returns(string memory)",
      "function tokenCount() public view returns(uint256)",
      "function uri(uint256 _tokenId) public view returns(string memory)",
      "function balanceOf(address account, uint256 id) public view returns (uint256)"
    ]

    let nftCollection = new ethers.Contract(
      "0x9dd21A4DfA9fbe8b542929B17b4AEbE45652429C",
      abi,
      ethersProvider
    );

    let numberOfNfts = await nftCollection.tokenCount()
    let collectionSymbol = await nftCollection.symbol()

    let tempArray = []
    let baseUrl = ""
    for (let i = 1; i <= numberOfNfts; i++) {
      if (i == 1) {
        let tokenURI = await nftCollection.uri(i)
        baseUrl = tokenURI.replace(/\d+.json/, "")
        let metadata = await getMetadataFromIpfs(tokenURI)
        metadata.symbol = collectionSymbol
        console.log(address)
        metadata.copies = await nftCollection.balanceOf(address, i)
        tempArray.push(metadata)
      } else {
        let metadata = await getMetadataFromIpfs(baseUrl + `${i}.json`)
        metadata.symbol = collectionSymbol
        metadata.copies = await nftCollection.balanceOf(address, i)
        tempArray.push(metadata)
      }
    }
    setNfts(tempArray)
    console.log(tempArray)
  }

  async function getMetadataFromIpfs(tokenURI) {
    let metadata = await axios.get(tokenURI)
    return metadata.data
  }

  function toggleModal(i) {
    if (i >= 0) {
      setSelectedNft(nfts[i])
    }
    setShowModal(!showModal)
  }

  return (
    <div className="App">
      <Container>
        <Title>Super Mario World Collection</Title>
        <Subtitle> The rarest and best of Super Mario World </Subtitle>
        <Grid>
          {
            nfts.map((nft, i) =>
              <NFTCard nft={nft} key={i} i={i} toggleModal={() => toggleModal(i)} />
            )
          }
        </Grid>
      </Container>
      {
        showModal &&
        <NftModal
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
  @media (max-width: 1200px) {
    grid-template-columns: 1fr 1fr 1fr;
  }
  @media (max-width: 900px) {
    grid-template-columns: 1fr 1fr;
  }
  @media (max-width: 600px) {
    grid-template-columns: 1fr;
  }
  `

export default App;
