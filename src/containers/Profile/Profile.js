import React from 'react'
import Img from '../../components/Image/Image';
import Card from '../../components/Card/Card';
import styled from 'styled-components';
import Button from '../../components/Button/Button';

const RowWrapper = styled.div`
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    
    @media only screen and (max-width: 768px) {
      flex-direction: column;
    }
`;

const TextWrapper = styled.div`
    width: 100%;
    height: fit-content;
    border-radius: 8px;
    padding: 0.5em;
    margin: 0.5em;
    font-size: 1em;
    background-color: rgba(255,255,255,0.5);
    transition: 0.3s all;
    outline: none;
`;

const Profile = () => {
    return(
        <div>
            <Card>
                <RowWrapper>
                    <Img rounded src="https://scontent.fpnq7-1.fna.fbcdn.net/v/t1.0-9/123399127_850499442423793_1811213071073553177_o.jpg?_nc_cat=101&ccb=2&_nc_sid=09cbfe&_nc_ohc=OljyRpTMfR8AX_4dH8k&_nc_ht=scontent.fpnq7-1.fna&oh=0cd5cc375a436b322ced72b8a4f3f39b&oe=5FC6A293"/>
                    <div>
                        <TextWrapper>Name : Hitesh Sharma</TextWrapper>
                        <TextWrapper>Username : @hiteshsharma</TextWrapper>
                        <TextWrapper>Email : a@b.com</TextWrapper>
                        <TextWrapper>Phone : +91 9876543210</TextWrapper>
                    </div>
                </RowWrapper>
                <RowWrapper>
                    <Button>Edit</Button>
                    <Button>Sign Out</Button>
                </RowWrapper>
                
            </Card>
        </div>
    )
};


export default Profile;


