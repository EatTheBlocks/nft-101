import styled from 'styled-components';

const NFTProgressBar = (props) => {
    return (
        <ProgressBarOuter>
            <ProgressBarInner style={{width: `${props.percent}%`}}/>
        </ProgressBarOuter>
    )
}

const ProgressBarOuter = styled.div`
    background-color: lightgray;
    border-radius: 13px;
    padding: 3px;
`

const ProgressBarInner = styled.div`
    background-color: #0077ff;
    width: 40%;
    height: 10px;
    border-radius: 7px;
`

export { NFTProgressBar }