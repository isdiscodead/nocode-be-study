import React from "react";

import { CardHeader, Heading, Text, Divider } from "@chakra-ui/react";

function TodoHeader() {
    const today = new Date().toLocaleDateString("ko-KR", {
        year: "numeric",
        month: "long",
        day: "numeric",
    });

    return (
        <>
            <CardHeader px={8} py={6}>
                <Heading size="lg" color="gray.700" lineHeight="tall">
                    Notto
                </Heading>
                <Text color="gray.500">{ today }</Text>
            </CardHeader>
            <Divider color="gray.300" />
        </>
    );
}

export default TodoHeader;