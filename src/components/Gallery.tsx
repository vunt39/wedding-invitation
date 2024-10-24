import ImageGallery from "react-image-gallery";
import { Divider } from "antd";
import { styled } from "@stitches/react";
import "react-image-gallery/styles/css/image-gallery.css";

const Wrapper = styled('div', {
    background: '#efebe9',
    backgroundImage: 'url(./assets/GroovePaper.png)',
    width: '100%',
});

const Title = styled('p', {
    fontSize: '2.5vh',
    fontWeight: 'bold',
    opacity: 0.85,
    marginBottom: 0,
});

const images = [
    {
        original: './assets/anh_cuoi_1.jpg',
        thumbnail: './assets/anh_cuoi_1.jpg',
    },
    {
        original: './assets/anh_cuoi_2.jpg',
        thumbnail: './assets/anh_cuoi_2.jpg',
    },
    {
        original: './assets/anh_cuoi_3.jpg',
        thumbnail: './assets/anh_cuoi_3.jpg',
    },
    {
        original: './assets/anh_cuoi_4.jpg',
        thumbnail: './assets/anh_cuoi_4.jpg',
    },
    {
        original: './assets/anh_cuoi_5.jpg',
        thumbnail: './assets/anh_cuoi_5.jpg',
    },
    {
        original: './assets/anh_cuoi_6.jpg',
        thumbnail: './assets/anh_cuoi_6.jpg',
    },
    {
        original: './assets/anh_cuoi_7.jpg',
        thumbnail: './assets/anh_cuoi_7.jpg',
    },
    {
        original: './assets/anh_cuoi_8.jpg',
        thumbnail: './assets/anh_cuoi_8.jpg',
    },
    {
        original: './assets/anh_cuoi_9.jpg',
        thumbnail: './assets/anh_cuoi_9.jpg',
    },
    {
        original: './assets/anh_cuoi_10.jpg',
        thumbnail: './assets/anh_cuoi_10.jpg',
    },
    {
        original: './assets/anh_cuoi_11.jpg',
        thumbnail: './assets/anh_cuoi_11.jpg',
    },
];

export default function Gallery() {
    return (
        <Wrapper>
            <Divider plain style={{ marginTop: 0, marginBottom: 32 }}>
                <Title>Những khoảnh khắc đẹp</Title>
            </Divider>
            <ImageGallery
                showPlayButton={false}
                showFullscreenButton={false}
                items={images}
            />
        </Wrapper>
    );
}
