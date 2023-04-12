export const PS1_IMAGEHEIGHTWIDTH = ({ img, imgheight, imgwidth }) => {
  return (
    <div>
      <img height={imgheight} width={imgwidth} alt="loading error" src={img} />
    </div>
  );
};
