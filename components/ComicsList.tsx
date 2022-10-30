import { Container, Grid, Loading } from "@nextui-org/react";
import useSWR from "swr";
import fetcher from '../utils/fetcher';
import Message from "./Message";
import ComicCard from "./ComicCard";


const ComicsList = () => {

    const { data, error } = useSWR('http://localhost:8000/api/comics', fetcher);

    if (error ) {
        return (
            <Message text="Failed to load your favorite comics library !"/>
        );
    }
    
    if (!data) {
        return (
            <Container xs justify="center">
                <Loading type="points" />
            </Container>
        );
    }

    console.log(data);

    return (
        <Grid.Container gap={2} justify="flex-start">
            {data.map( (comic : any) => (
                <Grid xs={5} md={2} key={comic.id}>
                    <ComicCard data={comic} />
                </Grid>
            )
            )}
        </Grid.Container>
    );
}

export default ComicsList;