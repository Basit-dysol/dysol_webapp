import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const Breadcrumbs = ({ label }) => {
  return (
    <h2 className="mt-12 text-white/50 items-start text-left flex gap-1 ">
      <a href="/">
        {' '}
        <span className="flex gap-1">
          {' '}
          <Image alt="home icon" src="/home.svg" width={20} height={20} />
          Home
        </span>{' '}
      </a>
      /<span>{label}</span>
    </h2>
  );
};

export default Breadcrumbs;
