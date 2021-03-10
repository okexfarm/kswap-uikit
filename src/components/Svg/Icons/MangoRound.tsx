import React from "react";
import Svg from "../Svg";
import { SvgProps } from "../types";

const Icon: React.FC<SvgProps> = (props) => {
  return (
    <Svg viewBox="0 0 128 128" {...props}>
      <defs>
      <linearGradient id="linear-gradient" x1="64" y1="128" x2="64" gradientUnits="userSpaceOnUse">
        <stop offset="0" stop-color="#724d3d"/>
        <stop offset="1" stop-color="#876553"/>
      </linearGradient>
      </defs>
      <g>
      <circle cx="64" cy="64" r="64" fill="url(#linear-gradient)"/>
      <path d="M101.09,64.25c-1.11,6-3.87,11.57-7,16.78-9.67,15.92-28,19.56-45.81,20-4.89.11-9.92.09-14.53-1.63C32.6,99,25.26,95.3,24.13,89.08c-1-5.44,3.63-8.37,9.06-16.9C42.41,57.68,37.7,52.54,46.64,41c3.28-4.25,8.14-10.55,16.7-13,10.25-2.92,21.59.85,28.85,8,6.34,6.26,10.28,17.89,9.18,26.48C101.29,63.07,101.2,63.66,101.09,64.25Z" transform="translate(0 0)" fill="#f2ce36"/>
      <path d="M81.31,42.61a41.5,41.5,0,0,0-18.37,7c-1.87,1.29-4.39,2.77-6.27,1.4a3.82,3.82,0,0,1-1.15-1.54c-1.66-3.72.83-7.92,3.88-10.53a25.69,25.69,0,0,1,21.37-5.53C89.91,35.15,91.12,41.4,81.31,42.61Z" transform="translate(0 0)" fill="#fff" opacity="0.15"/>
      <path d="M56.22,97.8a1,1,0,0,0,.59-.35,1.06,1.06,0,0,0-.08-1c-1-1.87-3.37-2-5.34-2.14a29,29,0,0,1-12.61-3.75c-3.44-1.94-6.84-4.68-10.65-4.6a2,2,0,0,0-1.2.32,1.88,1.88,0,0,0-.6,1A5.84,5.84,0,0,0,28,92.57a13.38,13.38,0,0,0,4.78,2.91C40.54,98.63,48.44,100.21,56.22,97.8Z" transform="translate(0 0)" fill="#e2b440" opacity="0.25"/>
      <path d="M94.2,39.79a2.18,2.18,0,0,0-.43,1.1,7.14,7.14,0,0,0,1.28,3.79,2.45,2.45,0,0,0,1.73,1.16.47.47,0,0,0,.33-.06.51.51,0,0,0,.15-.34c.19-1.49-1.1-2.77-1.61-4.2a6.33,6.33,0,0,0-.43-1.15C94.83,39.46,94.47,39.49,94.2,39.79Z" transform="translate(0 0)" fill="#e2b440" opacity="0.33"/>
      <path d="M95,41.25c.57-1,3-2.07,4-.94a1.89,1.89,0,0,1,.26.51A2.41,2.41,0,0,1,99.53,42c-.19.92-2,1-2.72,1.44a1,1,0,0,1-.47.19.89.89,0,0,1-.66-.32C94.83,42.44,94.74,41.78,95,41.25Z" transform="translate(0 0)" fill="#c67640"/>
      <g>
        <path d="M92.43,49c-2.4,7.53-2.06,15.82.17,23.51a66.72,66.72,0,0,0,11.11,21.27c-1.62-8.66-.07-17.48.24-26.23.22-6-.22-12.24-2.56-17.88-.6-1.45-2.73-6.81-4.6-7C94.63,42.49,92.89,47.51,92.43,49Z" transform="translate(0 0)" fill="#2a9e3a"/>
        <path d="M96.78,42.7c-1.9-1-4,5.22-4.35,6.28-2.4,7.53-2.06,15.82.17,23.51a63.11,63.11,0,0,0,11,21.12c-1.06-1.35-1.1-3.17-1.65-4.72-.64-1.81-1.27-3.62-1.84-5.45A74.5,74.5,0,0,1,97.39,56.8c.15-2.34.42-4.67.46-7a24.73,24.73,0,0,0-.18-3.65c-.08-.64-.22-3-.82-3.39Z" transform="translate(0 0)" fill="#3dad55"/>
      </g>
      </g>
    </Svg>
  );
};

export default Icon;
