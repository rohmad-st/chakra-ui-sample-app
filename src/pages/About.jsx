import * as React from 'react';
import { Box, Button, Flex, Heading, Text } from '@chakra-ui/react';

export default function About() {
  return (
    <Flex my="4" width="100vw" flexDir="column" align="center" justify="center">
      <Box w="50%">
        <Heading as="h4" mb="2" textAlign="center">
          About
        </Heading>
        <Text as="p">
          The quick brown fox jumps over the lazy dog" is an English-language
          pangram—a sentence that contains all of the letters of the English
          alphabet. Owing to its existence, Chakra was created.
        </Text>
        <Text as="p">
          Aenean vulputate eleifend tellus. Aenean leo ligula, porttitor eu,
          consequat vitae, eleifend ac, enim. Aliquam lorem ante, dapibus in,
          viverra quis, feugiat a, tellus. Phasellus viverra nulla ut metus
          varius laoreet. Quisque rutrum.
        </Text>
        <Text as="p">
          Aenean imperdiet. Etiam ultricies nisi vel augue. Curabitur
          ullamcorper ultricies nisi. Nam eget dui. Etiam rhoncus. Maecenas
          tempus, tellus eget condimentum rhoncus, sem quam semper libero, sit
          amet adipiscing sem neque sed ipsum.
        </Text>
        <Button variant="primary">Button Red 500</Button>
      </Box>
    </Flex>
  );
}
