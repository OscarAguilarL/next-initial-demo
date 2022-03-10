import React, { FC } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';

const style: React.CSSProperties = {
  color: '#0070f3',
  textDecoration: 'underline',
};

type Props = {
  href: string;
};

export const ActiveLink: FC<Props> = ({ children, href }) => {
  const { asPath } = useRouter();

  return (
    <Link href={href}>
      <a style={asPath === href ? style : undefined}>{children}</a>
    </Link>
  );
};
