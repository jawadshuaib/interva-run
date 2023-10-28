import React from 'react';
import { site } from '../../../utils/settings';

export default function Footer() {
  return (
    <div className="text-center mt-2 cursor-pointer text-slate-500 hover:text-gray-400">
      <a href={site.creatorUrl} target="_blank" rel="noreferrer">
        Created by {site.creatorName}
      </a>
    </div>
  );
}
