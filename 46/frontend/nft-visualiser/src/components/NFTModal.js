import styled from "styled-components"
import { NftPhoto } from "./NFTCard"
import { NFTProgressBar } from "./NFTProgressBar"

const NFTModal = (props) => {
  let nft = props.nft
  return (
    <Modal>
      <ModalContent>
        <ModalGrid>
          <NftPhoto style={{ backgroundImage: `url(${nft.image})`, height: 400, width: 400 }} />
          <div>
            <ModalTitle>{nft.name}</ModalTitle>
            <Paragraph> {`You own ${nft.copies} copies`} </Paragraph>
            <SectionText> Description </SectionText>
            <Paragraph style={{ width: 400 }}> {nft.description} </Paragraph>
            <SectionText> Attributes </SectionText>
            {nft.attributes &&
              nft.attributes.map((attribute, i) =>
                <div key={i} >
                  <div style={{ margin: "10px 0px 5px 0px" }}>
                    <AttributeText> {attribute.trait_type} </AttributeText>
                    <AttributeText style={{ float: "right" }}> {attribute.value} </AttributeText>
                  </div>
                  <NFTProgressBar percent={attribute.value * 10} />
                </div>
              )
            }
          </div>
        </ModalGrid>
        <CloseButton onClick={() => props.toggleModal()} >
          &times;
        </CloseButton>
      </ModalContent>
    </Modal>
  )
}

const AttributeText = styled.h4`
    color: gray;
    margin: 0;
    display: inline;
  `

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
    @media(max-width: 900px) {
      grid-template-columns: 1fr;
    }
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
    @media(max-width: 900px) {
      width: 400px;
    }
  `
export { NFTModal }