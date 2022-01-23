import { Button, Heading } from '@chakra-ui/react';
import { signOut } from 'next-auth/react';
import { SecurePage } from '../components/secure-page';

const Protected: React.FC = () => (
  <SecurePage>
    <Heading>You Are Authenticated</Heading>
    <Button onClick={() => signOut()}>Sign Out</Button>
  </SecurePage>
);

export default Protected;
