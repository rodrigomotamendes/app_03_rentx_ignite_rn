import React from 'react';

import { BackButton } from '../../components/BackButton';
import { ImageSlider } from '../../components/ImageSlider';

import {
  Container,
  Header,
  CarImage,
} from './styles';

export function CarDetails(){
  return (
    <Container>
      <Header>
        <BackButton onPress={() => {}} />
      </Header>

      <CarImage>
        <ImageSlider 
          imagesUrl={['https://www.downloadclipart.net/large/audi-rs5-red-png.png']}
        />
      </CarImage>

    </Container>
  );
}