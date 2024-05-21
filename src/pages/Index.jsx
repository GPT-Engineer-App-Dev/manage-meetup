import { Container, Text, VStack, Heading, Button, Box, Flex, IconButton } from "@chakra-ui/react";
import { FaCalendarAlt, FaPlus } from "react-icons/fa";

const Index = () => {
  return (
    <Container centerContent maxW="container.md" height="100vh" display="flex" flexDirection="column" justifyContent="center" alignItems="center">
      <VStack spacing={4}>
        <Heading as="h1" size="2xl" mb={4}>Event Manager Platform</Heading>
        <Text fontSize="lg" textAlign="center">Organize and manage your events effortlessly.</Text>
        <Flex mt={6}>
          <Button leftIcon={<FaCalendarAlt />} colorScheme="teal" variant="solid" size="lg" mr={4}>
            View Events
          </Button>
          <Button leftIcon={<FaPlus />} colorScheme="teal" variant="outline" size="lg">
            Create Event
          </Button>
        </Flex>
      </VStack>
    </Container>
  );
};

export default Index;