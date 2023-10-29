import React from 'react'
import { Component } from 'react';
import ModalWindow from '../Modal/Modal';
import { Image } from './ImageGalleryItem.styles';

class ImageGalleryItem extends Component {
  state = {
    modalIsOpen: false,
  };

  toggleModal = () => {
    this.setState(prevState => ({ modalIsOpen: !prevState.modalIsOpen }));
  };

  closeModal = () => {
    this.setState({ modalIsOpen: false });
  };

  render() {
    const { src, tags, img } = this.props;

    return (
      <>
        <Image
          onClick={this.toggleModal}
          src={src}
          alt={tags}
        />
        <ModalWindow
          src={img}
          tags={tags}
          modalIsOpen={this.state.modalIsOpen}
          closeModal={this.closeModal}
        />
      </>
    );
  }
}


export default ImageGalleryItem
