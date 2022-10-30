import { Spacer } from "@nextui-org/react";
import { NextPage } from "next";
import { useRouter } from "next/router";
import ComicDetailView from "../../components/ComicDetailView";
import MainNavbar from "../../components/MainNavbar";

const ComicView: NextPage = () => {
    const router = useRouter();
    const { id } = router.query;

    return (
        <div>
            <MainNavbar />
            <Spacer y={1} />
            <ComicDetailView id={id} />
        </div>
        );
}

export default ComicView;