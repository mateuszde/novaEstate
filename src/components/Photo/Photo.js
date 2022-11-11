import { BackgroundWrapper } from './style';

const Photo = ({ nameOfImageFromPublicWithExtension }) => {
  return (
    <BackgroundWrapper
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
};

export default Photo;
