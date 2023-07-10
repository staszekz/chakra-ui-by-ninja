import {Container, Heading, Text, Box} from '@chakra-ui/react';

export default function Dashboard() {


  const boxStyles = {
    p: "10px",
    bg: "purple.400",
    color: "white",
    m: "10px",
    textAligh: "center",
    filter: "blur(1px)",
    ':hover': {
      color: 'black',
      bg: 'blue.200',
    filter: "none",

    }
  };

  return (
    <Container as="section" maxW="4xl" py="20px">
      <Heading my={'30px'} p="10px">Chakra UI Component</Heading>
      <Text ml="30px">Lorem ipsum</Text>
      <Text ml="30px" color="blue.500" fontWeight={"bold"}>Lorem ipsum</Text>
      <Box my={'30px'} p={'20px'} bg="orange">
        <Text color="white">This is a box</Text>
      </Box>

      <Box sx={boxStyles}>
        Hello Ninjas
      </Box>
    </Container>
  );
}
