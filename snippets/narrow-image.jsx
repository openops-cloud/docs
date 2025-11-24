export const NarrowImage = ({ src, alt }) => {
  return (
    <>
      <style>{`
        .narrow-image {
          max-width: 75%;
        }
        @media (max-width: 768px) {
          .narrow-image {
            max-width: 100%;
          }
        }
      `}</style>

      <img className="narrow-image"
        src={src}
        alt={alt}
      />
    </>
  );
};
