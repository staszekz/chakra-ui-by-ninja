import {UnlockIcon} from '@chakra-ui/icons';
import {Flex, Box, Heading, Button, Text, Spacer, HStack, useToast, Avatar, AvatarBadge} from '@chakra-ui/react';

export default function Navbar() {


const toast = useToast()
const showToast = () => {
  toast({
    title: "Logged out",
    description: "Succesfully logged out",
    duration: 3000,
    isClosable: true,
    status: "success",
    position: 'top',
    icon: <UnlockIcon/>
  })
}

  return (
    /* <Flex bg="gray.200" justify="space-around" wrap="wrap" gap="2">
    <Box w="150px" h="50px" bg="red">1</Box>
    <Box w="150px" h="50px" bg="blue">2</Box>
    <Box w="150px" h="50px" bg="green" flexGrow={"1"}>3</Box>
    <Box w="150px" h="50px" bg="yellow" flexGrow={"2"}>4</Box>
    
    </Flex> */

    <Flex as="nav" alignItems="center" mb="40px" p="10px">
      <Heading as="h1"> Dojo Tasks</Heading>
      <Spacer />
      <HStack spacing="20px">
        <Avatar name="mario" src="/img/mario.png">
          <AvatarBadge w="1.2em" bg="teal.400"><Text color={"white"} fontSize="xs">2</Text></AvatarBadge>
        </Avatar>
        <Text>mario@netninja.dev</Text>
        <Button colorScheme='purple' onClick={showToast}>Logout</Button>
      </HStack>
    </Flex>
  );
}
