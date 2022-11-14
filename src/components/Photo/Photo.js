import { forwardRef } from 'react';
import { BackgroundWrapper, StyledImage } from './style';

const Photo = forwardRef(({ image }, ref) => {
  return (
    // <BackgroundWrapper
    //   ref={ref}
    //   style={{
    //     backgroundImage: `url(${
    //       process.env.PUBLIC_URL + `/img/${nameOfImageFromPublicWithExtension}`
    //     })`,
    //     backgroundRepeat: 'no-repeat',
    //     backgroundSize: 'cover',
    //     backgroundPosition: 'center',
    //   }}
    // ></BackgroundWrapper>

    <BackgroundWrapper ref={ref}>
      <StyledImage src={image} alt="" />
    </BackgroundWrapper>
  );
});

export default Photo;
