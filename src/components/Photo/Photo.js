import { forwardRef } from 'react';
import { BackgroundWrapper } from './style';

const Photo = forwardRef(({ nameOfImageFromPublicWithExtension }, ref) => {
  return (
    <BackgroundWrapper
      ref={ref}
      style={{
        backgroundImage: `url(${
          process.env.PUBLIC_URL + `/img/${nameOfImageFromPublicWithExtension}`
        })`,
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    ></BackgroundWrapper>
  );
});

export default Photo;
