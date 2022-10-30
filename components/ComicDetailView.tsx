import { Container, Loading, Row, Text, Image, Card, Grid, Col } from "@nextui-org/react";
import useSWR from "swr";
import ComicItemData from "../interfaces/ComicItem";
import fetcher from "../utils/fetcher";
import Message from "./Message";

interface ComicDetailViewProps {
    id: string | string[]
}

const ComicDetailView = ({ id }: ComicDetailViewProps) => {
    const { data, error } = useSWR<ComicItemData, Error>(`http://localhost:8000/api/comics/${id}`, fetcher);

    if (error) {
        return (
            <Message text="Failed to load your favorite comic !" />
        );
    }

    if (!data) {
        return (
            <Container xs justify="center">
                <Loading type="points" />
            </Container>
        );
    }

    return (
        <Container md>
            <Text h1>{data.serie.serie_name}</Text>
            <Text h2 color="gray">{data.volume}. {data.title}</Text>

            <Row align="center" gap={2}>
                <Grid xs>
                    <Image src={data.cover_url} alt={data.title} height={600} width="100%" />
                </Grid>
                <Grid xs={8}>
                    <Card variant="bordered">
                        <Card.Body>
                            <Text b h4>Title</Text>
                            <Text h5 color="gray">{data.title}</Text>

                            <Text b h4>Description</Text>
                            <Text h5 color="gray">{data.description}</Text>

                            <Text b h4>Serie</Text>
                            <Text h5 color="gray">{data.serie.serie_name}</Text>

                            <Text b h4>Collection</Text>
                            <Text h5 color="gray">{data.serie.collection.name}</Text>

                            <Text b h4>Editor</Text>
                            <Text h5 color="gray">{data.serie.collection.editor.name}</Text>

                            <Text b h4>ISBN / EAN</Text>
                            <Text h5 color="gray">{data.isbn}</Text>

                            <Text b h4>Pages</Text>
                            <Text h5 color="gray">{data.pages}</Text>

                            <Text b h4>Release date</Text>
                            <Text h5 color="gray">{data.release_date}</Text>
                        </Card.Body>
                    </Card>
                </Grid>
            </Row>

        </Container >
    );
}

export default ComicDetailView;