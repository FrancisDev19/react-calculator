import { Box, Input, useColorModeValue } from '@chakra-ui/react';

const Display = ({prevValue, nextValue}) => {

  return (
    <Box>
      <Input
        size="lg"
        my={5}
        variant="unstyled"
        color={useColorModeValue('gray.800', 'gray.200')}
        fontSize="4xl"
        isReadOnly
        value={nextValue ? nextValue : prevValue }
        textAlign="right"
      ></Input>
    </Box>
  );
};

export default Display;
