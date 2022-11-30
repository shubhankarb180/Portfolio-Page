import { Flex, Box, Spacer, Link, Stack, Button } from '@chakra-ui/react'
import { ReactNode } from 'react'

const NavItem = ({children}: {children: ReactNode}) => (
    <Box px={2} py={1} >
        { children }
    </Box>
)

const Navbar: React.FC = () => {
    return (
        <Box px={4} bg='gray.100'>
            <Flex grow={1} h={12} align={'center'} >
                <Box>
                <NavItem>Logo</NavItem>
                </Box>
                <Spacer />
                <Box>
                    <Stack direction={'row'} spacing={5}>
                        <NavItem>Home</NavItem>
                        <NavItem>About</NavItem>
                        <NavItem>Contact</NavItem>
                    </Stack>
                </Box>
            </Flex>
        </Box>
    )
}

export default Navbar