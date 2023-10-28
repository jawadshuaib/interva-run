import React from 'react';

export default function Explanation() {
  return (
    <div className="flex justify-center items-center">
      <div className="max-w-lg">
        <p className="text-xl text-slate-300 px-4 pt-4 text-left">
          High intensity interval training markedly improves both aerobic and
          anaerobic fitness. The following workout is based on the{' '}
          <a
            className="text-blue-300 underline hover:text-blue-400"
            href="https://jps.biomedcentral.com/articles/10.1007/s12576-019-00676-7"
            target="_blank"
            rel="noreferrer"
          >
            Tabata protocol
          </a>
          .
        </p>
      </div>
    </div>
  );
}
