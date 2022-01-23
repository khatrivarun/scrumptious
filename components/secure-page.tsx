import { CircularProgress } from '@chakra-ui/react';
import { useSession } from 'next-auth/react';
import { useRouter } from 'next/router';
import { ReactNode } from 'react';

type Props = {
  children: ReactNode;
};

export const SecurePage: React.FC<Props> = ({ children }) => {
  const { data: session, status } = useSession();
  const router = useRouter();

  if (status === 'loading') {
    return <CircularProgress isIndeterminate size='50%' />;
  }

  if (status === 'unauthenticated') {
    router.push('/auth');
  }

  return <>{children}</>;
};
