import { Center, Box, useColorModeValue } from '@chakra-ui/react';
import { useState, useEffect } from 'react';
import Display from './Display';
import Pad from './Pad';

const Calculator = () => {
  const [prevValue, setPrevValue] = useState(0);
  const [nextValue, setNextValue] = useState('');
  const [op, setOp] = useState(null);

  useEffect(() => {}, [op, nextValue, prevValue]);

  const CalculatorOperations = {
    '/': (firstValue, secondValue) => firstValue / secondValue,
    '*': (firstValue, secondValue) => firstValue * secondValue,
    '+': (firstValue, secondValue) => firstValue + secondValue,
    '-': (firstValue, secondValue) => firstValue - secondValue,
    '=': (firstValue, secondValue) => secondValue,
  };

  const performOperation = () => {
    let temp = CalculatorOperations[op](
      parseFloat(prevValue),
      parseFloat(nextValue)
    );
    setOp(null);
    setNextValue(String(temp));
    setPrevValue(null);
  };

  const handleNum = number => {
    setNextValue(nextValue === '0' ? String(number) : nextValue + number);
  };

  const clearData = () => {
    setNextValue('0');
    setPrevValue(0);
  };

  const handleOperation = value => {
    if (Number.isInteger(value)) {
      handleNum(parseInt(value, 10));
    } else if (value in CalculatorOperations) {
      if (op === null) {
        setOp(value);
        setPrevValue(nextValue);
        setNextValue('');
      }
      if (op) {
        setOp(value);
      }
      if (prevValue && op && nextValue) {
        performOperation();
      }
    } else if (value === 'clean') {
      clearData();
    } 
  };

  return (
    <Center pt={14}>
      <Box
        maxW="sm"
        minH="xl"
        p={10}
        boxShadow="md"
        borderRadius="2xl"
        backdropFilter="blur(4px)"
        sx={{ WebkitBackdropFilter: 'blur(4px)' }}
        bg={useColorModeValue(
          'brand.blackTransparent',
          'brand.whiteTransparent'
        )}
      >
        <Display prevValue={prevValue} nextValue={nextValue} />
        <Pad handleOperation={handleOperation} />
      </Box>
    </Center>
  );
};

export default Calculator;
