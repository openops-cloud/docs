export const NarrowImage = ({src, alt}) => {
    return (
        <img
            src={src}
            alt={alt}
            style={{maxWidth: '75%'}}
        />
    )
}
