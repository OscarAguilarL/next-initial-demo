import React from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';

const style = {
  color: '#0070f3',
  textDecoration: 'underline',
};

export const ActiveLink = ({ children, href }) => {
  const { asPath } = useRouter();

  return (
    <Link href={href}>
      <a style={asPath === href ? style : null}>{children}</a>
    </Link>
  );
};
