'use client'; // Error boundaries must be Client Components

import React, { useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';

import errorImg from '../../../public/images/404.png';

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error(error);
  }, [error]);

  return (
    <>
      <div className="error-area ptb-100">
        <div className="container">
          <div className="error-content">
            <Image src={errorImg} alt="Error" width={810} height={448} />
            <h3>Something went wrong!</h3>
            <p>
              We apologize for the inconvenience. An error has occurred while
              processing your request.
            </p>

            <div className="back-btn">
              <button onClick={() => reset()} className="btn btn-primary">
                Try again
              </button>
              <Link href="/" className="btn btn-secondary ml-3">
                Go Back Home
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
