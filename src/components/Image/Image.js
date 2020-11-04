import styled from 'styled-components';

const ImageWrapper = styled.div`
    width: ${props => props.width ? props.width : '150px'};
    height: ${props => props.height ? props.height : '150px'};
    border-radius: ${props => props.rounded ? '50%' : '5px'};
    margin: 1rem;
    overflow: hidden;
    :hover img{
        filter: brightness(100%);
        transform: scale(1.3);
    }
`;

const Image = styled.img`
    width: 100%;
    height: 100%;
    border: 1px solid black;
    border-radius: ${props => props.rounded ? '50%' : '5px'};
    transition: transform 2s, filter 1.5s ease-in-out;
    transform-origin: center center;
    filter: brightness(70%);
`;

const Img = (props) => {
    return(
        <ImageWrapper {...props}>
            <Image rounded={props.rounded} {...props}/>
        </ImageWrapper>
    )
}

export default Img;






