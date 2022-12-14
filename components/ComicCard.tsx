import { Card, Spacer, Text } from "@nextui-org/react";
import Link from "next/link";
import ComicItemData from "../interfaces/ComicItem";

type ComicCardProps = {
  data: ComicItemData
}

const ComicCard = ({ data }: ComicCardProps) => {

  return (
    <Link href={`id/${data.id}`}>
      <Card isPressable isHoverable>
        <Card.Body css={{ p: 0 }}>
          <Card.Image
            src={"" + data.cover_url}
            objectFit="cover"
            height="100%"
            alt={data.title}
          />
        </Card.Body>
        <Card.Footer>
          <Text b>{data.serie.serie_name}</Text>
          <Spacer x={0.2} />
          <Text b color="gray"> #{data.volume}</Text>
        </Card.Footer>
      </Card>
    </Link>
  );
}

export default ComicCard;