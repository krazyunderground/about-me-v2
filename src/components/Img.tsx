import {Head, Title, Meta, Link, Body, Scripts} from 'solid-start';

const Img = ({src, alt}) => {
    return (
        <img style="width: 80%;" src={src} alt={alt}></img>
    )
}

export default Img