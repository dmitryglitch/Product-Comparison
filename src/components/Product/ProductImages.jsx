import React from 'react'
import "react-image-gallery/styles/css/image-gallery.css";
import ImageGallery from 'react-image-gallery';


const ProductImages = ({data}) => {
    const renderImages = () => {
        if (data !== undefined) {
            let dataImage = [];

            Object.keys(data).forEach(image => {
                let objImage = {
                    original: data[image],
                    thumbnail: data[image]
                };

                dataImage.push(objImage);
            });

            return (
                <div className='image-gallery-container'>
                    <ImageGallery
                        items={dataImage}
                        showPlayButton={false}
                        showBullets={false}
                        showNav={false}/>
                </div>
            );
        } else {
            return null
        }
    };

    return (
        <>
            {renderImages()}
        </>
    )

};

export default ProductImages;