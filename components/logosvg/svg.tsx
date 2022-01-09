import React, { FC } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import Image from 'next/image'


interface logoProps {
    imagePath: string;
}

const LogoImage: FC<any> = ({...props}) => {
    return <>
        <Image
            src= {props.imagePath}
            width="30"
            height="30"
            className="d-inline-block align-top"
            alt=""
        />
    </>
}

export default LogoImage
