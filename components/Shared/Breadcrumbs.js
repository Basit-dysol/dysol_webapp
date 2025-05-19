import React from 'react';
import Image from 'next/image';

const Breadcrumbs = ({ label }) => {
  return (
    <h2 className="text-white/78 flex gap-1 pt-8 lg:pt-2 font-normal text-[18px] font-[Inter]">
      <a href="/">
        {' '}
        <span className="flex gap-1">
          {' '}
          <Image alt="home icon" src="/home.svg" width={13} height={13} />
          Home
        </span>{' '}
      </a>
      /<span>{label}</span>
    </h2>
  );
};

export default Breadcrumbs;
