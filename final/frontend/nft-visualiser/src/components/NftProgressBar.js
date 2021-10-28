import styled from 'styled-components';

const NftProgressBar = (props) => {
    return (
        <ProgressBarOuter>
            <ProgressBarInner style={{width: `${props.percent}%`}}/>
        </ProgressBarOuter>
    )
}

const ProgressBarOuter = styled.div`
    background-color: lightgray;
    border-radius: 13px;
    /* (height of inner div) / 2 + padding */
    padding: 3px;
`
const ProgressBarInner = styled.div`
    background-color: #0077ff;
    width: 40%;
    height: 10px;
    border-radius: 7px;
`

export { NftProgressBar }