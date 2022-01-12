import React from 'react';
import styled from 'styled-components';

const PageTitle = styled.h1`
    margin-top: 1rem;
    color: darksalmon;
    font-family: 'Be Vietnam Pro', sans-serif;
`;

const Container = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
`;

const TextContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    margin: 80px 50px 50px 50px;
`;

const MainImg = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-around;
`;

const ContentHeader = styled.h1`
    font-size: 32px;
    max-width: 550px;
    text-align: left;
    z-index: 2;
    color: rgb(4, 17, 29);
`;

const Content = styled.div`
    font-size: 24px;
    text-align: left;
    margin-top: 20px;
    max-width: 400px;
    z-index: 2;
    color: rgb(53, 56, 64);
`;

function Home() {
    return (
        <>
            <PageTitle>HomePage</PageTitle>
           <Container>

            <TextContainer>
                <ContentHeader>
                    with ; warm
                </ContentHeader>
                <Content>
                OpenSea is the world's first and largest NFT marketplace
                </Content>
            </TextContainer>

            <MainImg>

            </MainImg>

           </Container>
        </>
    );
}

export default Home;