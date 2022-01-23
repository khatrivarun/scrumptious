import { Box, Button, Flex, Heading, Text } from '@chakra-ui/react';
import { GetServerSideProps } from 'next';
import { getProviders, signIn } from 'next-auth/react';
import React from 'react';

export const getServerSideProps: GetServerSideProps = async (context) => {
  const providers = await getProviders();

  return {
    props: {
      providers: providers,
    },
  };
};

type Props = {
  providers: any;
};

const SignIn: React.FC<Props> = ({ providers }) => (
  <Flex minH='100vh' align='center' direction='column'>
    <Box my='10%'>
      <Heading>Sign In To SCRUMptious! 🍕</Heading>
    </Box>
    <Text>Sign in to you account using the following methods</Text>
    {Object.values(providers).map((provider: any) => (
      <Button key={provider.id} onClick={() => signIn(provider.id)}>
        Sign in with {provider.name}
      </Button>
    ))}
  </Flex>
);

export default SignIn;
