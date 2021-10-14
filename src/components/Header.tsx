import { Box } from '@chakra-ui/layout';
import { Image } from '@chakra-ui/image';
import React from 'react';

import Logo from '../assets/Logo.svg';

const Header: React.FC = () => {
  return (
    <Box w='100%' p='4' display='flex' alignContent='center' justifyContent='center'>
      <Image src={Logo} h='20 ' />
    </Box>
  );
};

export {Header}
