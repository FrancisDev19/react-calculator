import {
    Box
} from '@chakra-ui/react'
import {ColorModeSwitcher} from '../ColorModeSwitcher'

const Navbar = () => {
    return (
        <Box 
            as="nav"
            w="100%"
            display="flex"
            alignContent="center"
            justifyContent="flex-end"
        >
            <ColorModeSwitcher/>
        </Box>
    )
}

export default Navbar
