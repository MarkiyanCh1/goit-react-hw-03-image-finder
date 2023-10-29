import React from 'react'
import ImageGalleryItem from 'components/ImageGalleryItem/ImageGalleryItem';
import { List, ListItem } from './ImageGallery.styles';

const ImageGallery = ({ images }) => {
  return (
    <List>
      {images.map(({ id, webformatURL, largeImageURL, tags }) => (
        <ListItem key={id}>
          <ImageGalleryItem src={webformatURL} tags={tags} img={largeImageURL} />
        </ListItem>
      ))}
    </List>
  );
};

export default ImageGallery
