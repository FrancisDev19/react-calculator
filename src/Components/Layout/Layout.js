import { Container, Box, useColorModeValue } from "@chakra-ui/react";
import Navbar from "../Navbar";

const Layout = ( {children} ) => {
    return (
        <Box as="main">
            <Container maxW="container.md" minH="100vh" pt={14} pos="relative">
                <Box 
                    pos="absolute"
                    top={30}
                    left={28}
                    bg={useColorModeValue("brand.lightGreen", "brand.darkGreen")}
                    w="350px" 
                    h="350px"
                    borderRadius="full"
                    boxShadow="md"
                    zIndex="hide"
                />
                <Navbar/>
                {children}
                <Box 
                    pos="absolute"
                    bottom={3}
                    right={20}
                    bg={useColorModeValue("brand.lightGreen", "brand.darkGreen")}
                    w="300px" 
                    h="300px"
                    borderRadius="full"
                    boxShadow="md"
                    zIndex="hide"
                />
            </Container>
        </Box>
    )
}

export default Layout
