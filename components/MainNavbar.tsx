import React from "react";
import type { NextComponentType } from "next"
import { Navbar, Text, Input, Link } from "@nextui-org/react";

const MainNavbar: NextComponentType = () => {
    return (
        <Navbar variant="sticky">
            <Navbar.Brand>
                <Text h3 b color="inherit" hideIn="xs">
                    <Link color="text" href="/">
                        Comics Finder
                    </Link>
                </Text>
            </Navbar.Brand>
            <Navbar.Content hideIn="xs">
                <Navbar.Item>
                    <Input
                        clearable
                        css={{
                            w: "100%"
                        }}
                        placeholder="Search comics..."
                    />
                </Navbar.Item>
            </Navbar.Content>
            <Navbar.Content>

            </Navbar.Content>
        </Navbar >
    )
}

export default MainNavbar;