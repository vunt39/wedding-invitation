import { CheckCircleTwoTone } from "@ant-design/icons";
import { styled } from "@stitches/react";
import { Button, Divider, Modal, message } from "antd";
import { useState } from "react";
import CopyToClipboard from "react-copy-to-clipboard";

const Wrapper = styled("div", {
  background: "#efebe9",
  backgroundImage: "url(./assets/GroovePaper.png)",
  paddingBottom: 18,
  width: "100%",
  textAlign: "center",
});

const Title = styled('p', {
    fontSize: '2vh',
    fontWeight: 'bold',
    opacity: 0.85,
    marginTop: 0,
    marginBottom: 0,
    marginLeft: 24,
    marginRight: 24,
});

const Content = styled('p', {
    fontSize: '1.5vh',
    lineHeight: 1.75,
    opacity: 0.75,
    marginBottom: 24,
    marginLeft: 24,
    marginRight: 24,
});

const SubContent = styled('p', {
    fontSize: '1.3vh',
    lineHeight: 1.75,
    opacity: 0.75,
    marginBottom: 24,
});

const Description = styled('p', {
    fontSize: '1.3vh',
    lineHeight: 1.75,
    opacity: 0.65,
    marginTop: 8,
});

const ContactButton = styled('div', {
    display: 'inline-block',
    textAlign: 'center',
    marginLeft: 24,
    marginRight: 24,
    marginBottom: 24,
});

type CongratulatoryMoneyProps = {
    data?: Data;
};

export default function CongratulatoryMoney({
    data,
}: CongratulatoryMoneyProps) {
    const [groomVisible, setGroomVisible] = useState<boolean>(false);
    const [brideVisible, setBrideVisible] = useState<boolean>(false);

    return (
        <Wrapper>
            {/* <Divider
              plain
              style={{ marginTop: 0, marginBottom: 32, paddingInline: 0 }}
          > */}
            <Title>Hãy tới dự đám cưới chung vui cùng chúng tôi nhé</Title>
            {/* </Divider> */}
            <Content>
                Tài khoản cô dâu chú rể (chỉ dùng cho trường hợp bạn không thể
                tới. 2 vợ chồng mình sẽ rất cảm ơn sự có mặt của bạn tại đám
                cưới)
            </Content>
            <ContactButton onClick={() => setGroomVisible(true)}>
                {/* <CheckCircleTwoTone
                  style={{ fontSize: 64, marginBottom: 16 }}
                  twoToneColor="#829fe0"
              /> */}
                <img
                    style={{ borderRadius: '20px' }}
                    src="./assets/tk_vu.jpeg"
                    height="300px"
                    alt=""
                />
                <br />
                <SubContent>STK chú rể</SubContent>
            </ContactButton>
            <ContactButton onClick={() => setBrideVisible(true)}>
                {/* <CheckCircleTwoTone
                  style={{ fontSize: 64, marginBottom: 16 }}
                  twoToneColor="#fe7daf"
              /> */}
                <img
                    style={{ borderRadius: '20px' }}
                    src="./assets/tk_linh.jpg"
                    height="300px"
                    alt=""
                />
                <br />
                <SubContent>STK cô dâu</SubContent>
            </ContactButton>
            <Modal
                title={<b>Số tài khoản chú rể</b>}
                open={groomVisible}
                onOk={() => setGroomVisible(false)}
                onCancel={() => setGroomVisible(false)}
                cancelButtonProps={{ style: { display: 'none' } }}
                okButtonProps={{ style: { display: 'none' } }}
                footer={null}
            >
                {/* {data?.groom?.parents?.father && (
                  <div>
                      <b>Bố) {data?.groom?.parents?.father?.name}</b>
                      <Divider type="vertical" />
                      <CopyToClipboard
                          text={data?.groom?.parents?.father?.account_number}
                      >
                          <Button
                              type="text"
                              style={{ padding: 0, margin: 0 }}
                              onClick={() =>
                                  message.success('STK đã được sao chép.')
                              }
                          >
                              {data?.groom?.parents?.father?.account_number}
                          </Button>
                      </CopyToClipboard>
                  </div>
              )}
              {data?.groom?.parents?.mother && (
                  <div style={{ marginTop: 24, marginBottom: 24 }}>
                      <b>Mẹ) {data?.groom?.parents?.mother.name}</b>
                      <Divider type="vertical" />
                      <CopyToClipboard
                          text={data?.groom?.parents?.mother.account_number}
                      >
                          <Button
                              type="text"
                              style={{ padding: 0, margin: 0 }}
                              onClick={() =>
                                  message.success('STK đã được sao chép.')
                              }
                          >
                              {data?.groom?.parents?.mother.account_number}
                          </Button>
                      </CopyToClipboard>
                  </div>
              )} */}
                {data?.groom && (
                    <div>
                        <b>Chú rể {data?.groom?.name}</b>
                        <Divider type="vertical" />
                        <CopyToClipboard text={data?.groom?.account_number}>
                            <Button
                                type="text"
                                style={{ padding: 0, margin: 0 }}
                                onClick={() =>
                                    message.success('STK đã được sao chép.')
                                }
                            >
                                {data?.groom?.account_number}
                            </Button>
                        </CopyToClipboard>
                    </div>
                )}
                <div>
                    <Description>
                        Khi bạn bấm vào tài khoản, nó sẽ được sao chép dưới dạng
                        văn bản
                    </Description>
                </div>
            </Modal>
            <Modal
                title={<b>Số tài khoản cô dâu</b>}
                open={brideVisible}
                onOk={() => setBrideVisible(false)}
                onCancel={() => setBrideVisible(false)}
                cancelButtonProps={{ style: { display: 'none' } }}
                okButtonProps={{ style: { display: 'none' } }}
                footer={null}
            >
                {/* {data?.bride?.parents?.father && (
                  <div>
                      <b>Bố: {data?.bride?.parents?.father?.name}</b>
                      <Divider type="vertical" />
                      <CopyToClipboard
                          text={data?.bride?.parents?.father?.account_number}
                      >
                          <Button
                              type="text"
                              style={{ padding: 0, margin: 0 }}
                              onClick={() =>
                                  message.success('STK đã được sao chép.')
                              }
                          >
                              {data?.bride?.parents?.father?.account_number}
                          </Button>
                      </CopyToClipboard>
                  </div>
              )}
              {data?.bride?.parents?.mother && (
                  <div style={{ marginTop: 24, marginBottom: 24 }}>
                      <b>Mẹ: {data?.bride?.parents?.mother?.name}</b>
                      <Divider type="vertical" />
                      <CopyToClipboard
                          text={data?.bride?.parents?.mother?.account_number}
                      >
                          <Button
                              type="text"
                              style={{ padding: 0, margin: 0 }}
                              onClick={() =>
                                  message.success('STK đã được sao chép.')
                              }
                          >
                              {data?.bride?.parents?.mother?.account_number}
                          </Button>
                      </CopyToClipboard>
                  </div>
              )} */}
                {data?.bride && (
                    <div>
                        <b>Cô dâu {data?.bride?.name}</b>
                        <Divider type="vertical" />
                        <CopyToClipboard text={data?.bride?.account_number}>
                            <Button
                                type="text"
                                style={{ padding: 0, margin: 0 }}
                                onClick={() =>
                                    message.success('STK đã được sao chép')
                                }
                            >
                                {data?.bride?.account_number}
                            </Button>
                        </CopyToClipboard>
                    </div>
                )}
                <div>
                    <Description>
                        Khi bạn bấm vào tài khoản, nó sẽ được sao chép dưới dạng
                        văn bản.
                    </Description>
                </div>
            </Modal>
        </Wrapper>
    );
}
