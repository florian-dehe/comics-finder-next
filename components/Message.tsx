import { Container, Card, Row, Text } from "@nextui-org/react";

type MessageProps = {
    text?: string
}

const Message = ({text}: MessageProps) => {
    return (
        <Container xs>
            <Card css={{ $$cardColor: '$colors$error' }}>
                <Card.Body>
                    <Row justify="center" align="center">
                        <Text h6 size={15} color="white" css={{ m: 0 }}>
                            {text}
                        </Text>
                    </Row>
                </Card.Body>
            </Card>
        </Container>
    );
}

export default Message;