import React from 'react';

export const FlagEN: React.FC<{ className?: string }> = ({ className = "w-5 h-4" }) => (
    <svg viewBox="0 0 60 30" className={`${className} object-cover shadow-sm`} xmlns="http://www.w3.org/2000/svg">
        <clipPath id="s">
            <path d="M0,0 v30 h60 v-30 z" />
        </clipPath>
        <path d="M0,0 v30 h60 v-30 z" fill="#012169" />
        <path d="M0,0 L60,30 M60,0 L0,30" stroke="#fff" strokeWidth="6" />
        <path d="M0,0 L60,30 M60,0 L0,30" clipPath="url(#s)" stroke="#C8102E" strokeWidth="4" />
        <path d="M30,0 v30 M0,15 h60" stroke="#fff" strokeWidth="10" />
        <path d="M30,0 v30 M0,15 h60" stroke="#C8102E" strokeWidth="6" />
    </svg>
);

export const FlagNL: React.FC<{ className?: string }> = ({ className = "w-5 h-4" }) => (
    <svg viewBox="0 0 9 6" className={`${className} object-cover shadow-sm`} xmlns="http://www.w3.org/2000/svg">
        <rect width="9" height="2" fill="#AE1C28" />
        <rect width="9" height="2" y="2" fill="#FFF" />
        <rect width="9" height="2" y="4" fill="#21468B" />
    </svg>
);

export const FlagDE: React.FC<{ className?: string }> = ({ className = "w-5 h-4" }) => (
    <svg viewBox="0 0 5 3" className={`${className} object-cover shadow-sm`} xmlns="http://www.w3.org/2000/svg">
        <rect width="5" height="1" fill="#000" />
        <rect width="5" height="1" y="1" fill="#D00" />
        <rect width="5" height="1" y="2" fill="#FFCE00" />
    </svg>
);
