import React, { useState } from "react";
import { Box, Flex, Text, Input, Button, VStack, HStack, Heading, useToast, Image, Progress } from "@chakra-ui/react";
import { FaTrain, FaSearch } from "react-icons/fa";

const Index = () => {
  const [trainNumber, setTrainNumber] = useState("");
  const [trainDistance, setTrainDistance] = useState(null);
  const toast = useToast();

  // Placeholder function to simulate searching for a train
  const searchForTrain = () => {
    if (!trainNumber) {
      toast({
        title: "Error",
        description: "Please enter a train number.",
        status: "error",
        duration: 3000,
        isClosable: true,
      });
      return;
    }

    // Simulate a train distance fetch
    // In a real scenario, you would fetch this data from a backend service
    setTrainDistance(Math.floor(Math.random() * 500)); // Random distance between 0-500 km
  };

  return (
    <VStack spacing={8} p={8}>
      <Flex justifyContent="center" alignItems="center" direction="column">
        <Heading marginBottom={4}>Train Distance Tracker</Heading>
        <Image src="https://images.unsplash.com/photo-1635026308382-f033d4577a2b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHx0cmFpbiUyMG9uJTIwdHJhY2tzfGVufDB8fHx8MTcwOTUzNTU1N3ww&ixlib=rb-4.0.3&q=80&w=1080" borderRadius="md" />
      </Flex>
      <Box>
        <Text fontSize="lg" fontWeight="bold">
          Enter your train number:
        </Text>
        <HStack marginTop={4}>
          <Input placeholder="Train Number" value={trainNumber} onChange={(e) => setTrainNumber(e.target.value)} />
          <Button leftIcon={<FaSearch />} colorScheme="blue" onClick={searchForTrain}>
            Search
          </Button>
        </HStack>
      </Box>
      {trainDistance !== null && (
        <Box w="100%">
          <Flex alignItems="center" justifyContent="space-between">
            <Text fontSize="lg">Train {trainNumber} is currently:</Text>
            <Text fontSize="lg">{trainDistance} km away</Text>
          </Flex>
          <Progress colorScheme="green" size="lg" value={(trainDistance / 500) * 100} marginTop={4} />
        </Box>
      )}
    </VStack>
  );
};

export default Index;
