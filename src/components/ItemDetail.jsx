import React from 'react'
import ItemCount from './ItemCount'
import { Card, CardBody, CardFooter, Stack, Image, Divider,Button, ButtonGroup, Heading, Text } from '@chakra-ui/react'
import { Flex, Spacer } from '@chakra-ui/react'

const ItemDetail = ({product}) => {
  return (
    <div>

    <Card maxW='sm' bg='#F7E3AF'>
<CardBody>
<Image
  src={producto.image}
  
  borderRadius='lg'
/>
<Stack mt='6' spacing='3'>
  <Heading size='md'>{product.tittle}</Heading>
  <Text>
    {product.description}
  </Text>
  <Text color='blue.600' fontSize='2xl'>
    ${product.price}
  </Text>
</Stack>
</CardBody>
<Divider />
<CardFooter>
<ButtonGroup spacing='2'>
  <Button variant='solid' colorScheme='blue'>
    Comprar
  </Button>
  <ItemCount/>
</ButtonGroup>
</CardFooter>

</Card>
</div>
)

}

export default ItemDetail