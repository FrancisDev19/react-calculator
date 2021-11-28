import { Grid, GridItem, Button } from '@chakra-ui/react';

const buttons = [
  { simbol: 'AC', value: 'clean' }, 
  { simbol: 'DEL', value: 'delete' },
  { simbol: '/', value: '/' },
  { simbol: '*', value: '*' },
  { simbol: '7', value: 7 },
  { simbol: '8', value: 8 },
  { simbol: '9', value: 9 },
  { simbol: '-', value: '-' },
  { simbol: '4', value: 4 },
  { simbol: '5', value: 5 },
  { simbol: '6', value: 6 },
  { simbol: '+', value: '+' },
  { simbol: '1', value: 1 },
  { simbol: '2', value: 2 },
  { simbol: '3', value: 3 },
  { simbol: '=', value: '=', rowSpan: true },
  { simbol: '0', value: 0, colSpan: true },
  { simbol: '.', value: 'dot' },
];

const Pad = ({ handleOperation }) => {

  return (
    <Grid
      templateColumns="repeat(4, 1fr)"
      templateRows="repeat(5, 1fr)"
      gap={4}
    >
      {buttons.map(button => (
        <GridItem
          key={button.simbol}
          colSpan={button.colSpan ? 2 : 1}
          rowSpan={button.rowSpan ? 2 : null}
        >
          <Button
            w="100%"
            h={button.rowSpan ? 'full' : 14}
            bg="brand.darkGreen"
            fontWeight="black"
            onClick={() => handleOperation(button.value)}
          >
            {button.simbol}
          </Button>
        </GridItem>
      ))}
    </Grid>
  );
};

export default Pad;
