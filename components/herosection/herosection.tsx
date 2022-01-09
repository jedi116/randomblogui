import React ,{FC} from "react";
import { Container } from "react-bootstrap";

export interface heroSectioProps {
    title:string;
    phrase?:string
}

export const HeroSection :FC<heroSectioProps> = ({...props}) => {
    return (
        <>
            <div className = 'hero-section-container'>
                <Container >
                    <h1>
                        {props.title}
                    </h1>
                    <h5 style ={{paddingTop: '60px'}} >
                        {props.phrase ? props.phrase : null} 
                    </h5>
                </Container>
            </div>
        </>
    )
}