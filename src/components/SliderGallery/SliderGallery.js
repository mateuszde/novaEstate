import ImageGallery from 'react-image-gallery';
import 'react-image-gallery/styles/css/image-gallery.css';
import styled from 'styled-components';

const Wrapper = styled.div`
  width: 100%;
`;

const SliderGallery = ({ showPlayButton, showNav, showBullets, showThumbnails, images }) => {
  return (
    <Wrapper>
      <ImageGallery
        showPlayButton={showPlayButton}
        showNav={showNav}
        showBullets={showBullets}
        showThumbnails={showThumbnails}
        items={images}
      />
    </Wrapper>
  );
};

export default SliderGallery;
