import React from 'react';

import { Box, Flex, Text } from '@chakra-ui/layout';

import { Image } from "@chakra-ui/react"

import bgImage from '../../assets/Background.png'

import AirPlaneIcon from '../../assets/Airplane.svg';

const Banner: React.FC = () => {
  return (
    <Box
      backgroundImage={`url('${bgImage}')`}
      backgroundPosition='center'
      backgroundRepeat='no-repeat'
      backgroundSize='cover'
      w='100%'
      height='250px'
      border='1px'
    >
      <Flex
        width='100%'
        my='10'
        maxWidth={1480}
        mx='auto'
        alignItems='flex-start'
        direction='column'
        justify='center'
      >
        <Box w='400px'>
          <Text color='white' fontSize='3xl'>
            5 Continentes,
          </Text>
          <Text color='white' fontSize='3xl'>
            Infinitas possibilidades.
          </Text>
          <Text color='white' fontSize='1xl' mt='2'>
            Chegou a hora de tirar do papel a viagem que você sempre sonhou.
          </Text>
        </Box>

        <Box>
          <Image src={AirPlaneIcon} h='270px' position="absolute" right='100px' top="100px" />
        </Box>


      </Flex>
    </Box>
  );
};

export { Banner };
