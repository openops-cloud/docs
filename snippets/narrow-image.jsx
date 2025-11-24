import {useId} from 'react';

export const NarrowImage = ({ src, alt, widthPercent }) => {
  const className = `narrow-image-${useId().replace(/:/g, '-')}`;
  const widthRule = widthPercent ? `width: ${widthPercent}%;` : '';

  return (
    <>
      <style>{`
        .${className} {
          max-width: 75%;
          ${widthRule}
        }
        @media (max-width: 768px) {
          .${className} {
            max-width: 100%;
            width: auto;
          }
        }
      `}</style>

      <img className={className}
        src={src}
        alt={alt}
      />
    </>
  );
};
