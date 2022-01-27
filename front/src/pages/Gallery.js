import React, { useEffect } from 'react';
import CardTemplate from '../components/CardTemplate';
import styled from 'styled-components';
import { useGallery } from '../utils/store';
import { getGalleryList } from '../utils/data';
import back4 from '../back4.jpeg';

const GalleryContainer = styled.div`
  height: 100%;
  background-image: url(${back4});
  background-size: 100% 100%;
`;

const PageTitle = styled.h1`
  padding-top: 25px;
  color: white;
  display: flex;
  justify-content: center;
`;

const ListContainer = styled.div`
  width: 100%;
  height: 100%;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-gap: 10px;
`;

const ListItem = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 1rem;
  padding: 1rem;
`;

function Gallery() {
  const gallery = useGallery((state) => state.gallery);
  const { fetchData } = useGallery();
  useEffect(() => {
    fetchData();
  }, []);

  return (
    <GalleryContainer>
      <PageTitle>Gallery</PageTitle>
      <ListContainer>
        {gallery &&
          gallery?.map((el) => {
            return (
              <ListItem key={el?._id}>
                <CardTemplate
                  id={el?._id}
                  tokenId={el?.tokenId}
                  imgURI={el?.imgURI}
                  tokenURI={el?.tokenURI}
                  user={el?.userAddress}
                  name={el?.name}
                  description={el?.description}
                  price={el?.price}
                  created_at={el?.created_at}
                />
              </ListItem>
            );
          })}
      </ListContainer>
    </GalleryContainer>
  );
}

export default Gallery;
