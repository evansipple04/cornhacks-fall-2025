'use client';

import React from 'react';
import Image from 'next/image';
import './corn-float.css';

const Register = () => {
  return (
    <div className="p-8 text-center">
      <div className="flex justify-center mb-6">
        <Image src="/corn.svg" alt="CornHacks Corn" width={300} height={300} className="corn-float" />
      </div>
      <p className="text-4xl font-extrabold text-gray-800 mt-8 mb-4">
        Registration for CornHacks 2025 is not open yet.
      </p>
      <p className="text-4xl font-extrabold text-gray-800 mb-8">
        Please check back soon for updates and the official registration form!
      </p>
    </div>
  );
};

export default Register;