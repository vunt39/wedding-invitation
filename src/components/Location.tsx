import { styled } from "@stitches/react";
import { Divider, Flex } from 'antd';

const Wrapper = styled('div', {
    background: '#efebe9',
    backgroundImage: 'url(./assets/GroovePaper.png)',
    width: '100%',
    paddingBottom: 42,
    textAlign: 'center',
});

const Title = styled('p', {
    fontSize: '2vh',
    fontWeight: 'bold',
    opacity: 0.85,
    marginBottom: 0,
});

const Image = styled('img', {
    width: '75%',
    maxWidth: 1024,
});

export default function Location() {
    return (
        <Wrapper>
            <Divider plain style={{ marginTop: 0, marginBottom: 32 }}>
                <Title>Chỉ đường</Title>
            </Divider>
            <div style={{ display: 'inline-flex' }}>
                <div style={{ marginRight: '50px' }}>
                    <Title>Chú rể</Title>
                    <div style={{ borderRadius: '30px' }}>
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1107.3779814973877!2d105.7012110286894!3d21.002227456769834!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x313453e8eb545009%3A0x8dbe22295f4bc722!2zTmjDoCBWxINuIEjDs2EgVGjDtG4gxJDDoG8gTmd1ecOqbg!5e0!3m2!1svi!2s!4v1728531103135!5m2!1svi!2s"
                            width="600"
                            height="450"
                            allowFullScreen
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                        ></iframe>
                    </div>
                </div>
                <div>
                    <Title>Cô dâu</Title>
                    <div style={{ borderRadius: '30px' }}>
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1107.3779814973877!2d105.7012110286894!3d21.002227456769834!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x313453e8eb545009%3A0x8dbe22295f4bc722!2zTmjDoCBWxINuIEjDs2EgVGjDtG4gxJDDoG8gTmd1ecOqbg!5e0!3m2!1svi!2s!4v1728531103135!5m2!1svi!2s"
                            width="600"
                            height="450"
                            allowFullScreen
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                        ></iframe>
                    </div>
                </div>
            </div>
            {/* <Image src="./assets/LocationMap.png" /> */}
        </Wrapper>
    );
}
