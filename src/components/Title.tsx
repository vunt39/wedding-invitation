import { styled } from "@stitches/react";
import React, { useRef, useState, useEffect } from 'react';
import { Divider } from 'antd';
import styles from '../styles/spinner.module.css';

const Layout = styled('div', {
    width: '100%',
    height: '100vh',
    overflow: 'hidden',
    margin: '0px auto',
    position: 'relative',
});

const TitleWrapper = styled('div', {
    position: 'absolute',
    width: '100%',
    top: '10%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    textAlign: 'center',
    textShadow: '-1px 0 #9e9e9e, 0 1px #9e9e9e, 1px 0 #9e9e9e, 0 -1px #9e9e9e',
    animation: 'fadein 3s',
    '-moz-animation': 'fadein 3s' /* Firefox */,
    '-webkit-animation': 'fadein 3s' /* Safari and Chrome */,
    '-o-animation': 'fadein 3s' /* Opera */,
});

const VideoBackground = styled('video', {
    backgroundColor: '#aeb8b3 !important',
    opacity: 0.9,
    objectFit: 'cover',
    objectPosition: 'center center',
    width: '100%',
    height: '100%',
    maxWidth: '100%',
    maxHeight: '100%',
    minHeight: 480,
    transition: 'opacity 1s ease-in-out',
});

const PosterImage = styled('img', {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    objectFit: 'cover',
    opacity: 1,
    transition: 'opacity 1s ease-in-out', // Thêm transition cho opacity
});

const WeddingInvitation = styled('p', {
    fontSize: '2.5vh',
    opacity: 0.45,
    marginTop: 25,
    marginBottom: 10,
});

const Spinner = () => (
    <div className={styles.spinner} /> // Sử dụng class từ file CSS
);

const GroomBride = styled('p', {
    fontSize: '3.5vh',
    fontWeight: 'bold',
    opacity: 0.9,
    marginTop: 10,
    marginBottom: 16,
});

const Schedule = styled('p', {
    fontSize: '2vh',
    opacity: 0.65,
    marginTop: 10,
    marginBottom: 24,
});

type TitleProps = {
    data?: Data;
};

export default function Title({ data }: TitleProps) {
    const [isPlaying, setIsPlaying] = useState(false);
    const [isLoading, setIsLoading] = useState(true);
    const videoRef = useRef(null);

    const images = ['./assets/anh_cuoi_4.jpg'];

    useEffect(() => {
        // Function để tải hình ảnh
        const preloadImages = (imageUrls: any) => {
            const imagePromises = imageUrls.map((url: any) => {
                return new Promise((resolve, reject) => {
                    const img = new Image();
                    img.src = url;
                    img.onload = resolve; // Resolve promise khi hình ảnh đã tải xong
                    img.onerror = reject; // Reject promise nếu có lỗi xảy ra
                });
            });
            return Promise.all(imagePromises); // Đợi tất cả hình ảnh tải xong
        };

        // Gọi function preloadImages
        preloadImages(images)
            .then(() => {
                setIsLoading(false); // Đặt isLoading thành false khi tất cả hình ảnh đã tải
            })
            .catch((error) => {
                console.error('Error loading images:', error);
            });
    }, [images]);

    const handleVideoPlay = () => {
        setIsPlaying(true);
    };

    return (
        <Layout>
            {isLoading && <Spinner />}
            {!isLoading && (
                <VideoBackground
                    ref={videoRef}
                    autoPlay
                    loop
                    muted
                    playsInline={true}
                    poster="./assets/anh_cuoi_4.jpg"
                    onPlay={handleVideoPlay}
                    style={{ opacity: isPlaying ? 1 : 0 }}
                >
                    <source src="./assets/video2.mp4" type="video/mp4" />
                </VideoBackground>
            )}
            <TitleWrapper>
                <WeddingInvitation>Thư mời đám cưới</WeddingInvitation>
                <GroomBride>
                    {data?.groom?.name} &#38; {data?.bride?.name}
                </GroomBride>
                <Schedule>
                    {data?.date}
                    <br />
                    {/* {data?.location}
                  <br />
                  {data?.location2} */}
                </Schedule>
            </TitleWrapper>
        </Layout>
    );
}
