import React from "react";
import { Container } from "../../GlobalStyles";
import { pictureWallData } from "../../data/PictureWallData";
import { PhotoGallery,
        PictureColumn,
        PictureWrapper,
        Pictures
} from "./PictureWallStyles";

const PictureWall = () => {
    return (
    <PhotoGallery>
        {pictureWallData.map((el) => (
            <PictureWrapper>
                <Pictures src={el.img} />
            </PictureWrapper>
        ))}
    </PhotoGallery>
    )
}

export default PictureWall