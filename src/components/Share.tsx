import { LinkOutlined, MessageFilled } from "@ant-design/icons";
import { styled } from "@stitches/react";
import { Button, Divider, message } from "antd";
import CopyToClipboard from "react-copy-to-clipboard";

declare global {
  interface Window {
    Kakao: any;
  }
}

const Wrapper = styled("div", {
  background: "#efebe9",
  backgroundImage: "url(./assets/GroovePaper.png)",
  width: "100%",
  paddingBottom: 42,
  textAlign: "center",
});

const Title = styled("p", {
  fontSize: "2.5vh",
  fontWeight: "bold",
  opacity: 0.85,
  marginBottom: 0,
});

const LinkShareButton = styled(Button, {
  background: "#53acee",
  borderColor: "#53acee",
  color: "#ffffff",
  "&:hover": {
    backgroundColor: "#9fcbed !important",
    borderColor: "#9fcbed !important",
    color: "#ffffff !important",
  },
  "&:focus": {
    backgroundColor: "#9fcbed !important",
    borderColor: "#9fcbed !important",
    color: "#ffffff !important",
  },
});

type ShareProps = {
  data?: Data;
};

export default function Share({ data }: ShareProps) {
    return (
        <Wrapper>
            <Divider plain style={{ marginTop: 0, marginBottom: 32 }}>
                <Title>Chia sẻ lời mời đám cưới của bạn</Title>
            </Divider>
            <CopyToClipboard
                text={data?.kakaotalk?.wedding_invitation_url ?? ''}
            >
                <LinkShareButton
                    style={{ margin: 8 }}
                    icon={<LinkOutlined />}
                    size="large"
                    onClick={() =>
                        message.success('Đường link đã được sao chép')
                    }
                >
                    Chia sẻ
                </LinkShareButton>
            </CopyToClipboard>
        </Wrapper>
    );
}
