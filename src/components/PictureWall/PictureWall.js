import React from "react";
import { Container } from "../../GlobalStyles";
import { PhotoGallery,
        PictureColumn,
        PictureWrapper
} from "./PictureWallStyles";

const PictureWall = () => {
    return (
    <PhotoGallery>
        <PictureColumn>
            <PictureWrapper>
                <h2>Pics</h2>
            </PictureWrapper>
        </PictureColumn>
    </PhotoGallery>
    )
}

export default PictureWall