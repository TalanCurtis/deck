import React from 'react';

const LogoSvg = (props) => {
  const {className, height, width, fill , stroke, strokeWidth, onClick } = props
  return (
    <svg id="logo" viewBox="0 0 256 256" className={className} height={height} width={width} fill={fill} stroke={stroke} strokeWidth={strokeWidth} onClick={onClick}>
        <g>
            <path d="M92.4 17h2.4c-.1 4.1-.6 7.2-1.5 9.3-1.1 2.8-2.9 5.1-5.1 6.7-2.3 1.7-4.8 2.5-7.5 2.5-2.9 0-6.4-1-10.4-3.1v18.4h16.9L84 61.3H70.3v33c0 6.5-.4 11.3-1.1 14.3s-2.1 5.9-4.1 8.6c-2 2.7-4.6 5-7.7 6.9-4.4 2.7-8 4.6-10.7 5.8l-22.5 9.8c-7.1-3.4-11.2-5.1-12.4-5.1-1 0-1.9.5-2.7 1.4-.8.9-1.3 2.4-1.7 4.5l-2.3-.7c0-3.2.3-5.7.9-7.6 1-3 2.3-5.2 4.1-6.8 1.8-1.5 3.6-2.3 5.7-2.3 2.8 0 6.5 1.3 11 3.8 3.2 1.8 5.1 2.9 5.8 3.1.7.3 1.4.4 2 .4 1.1 0 2.1-.6 3.1-1.8.9-1.2 1.5-3 1.8-5.4s.4-7.5.4-15.2V61.3l-3.3-.1c-5.5 0-9.6.8-12.3 2.5-2.7 1.6-5 4.4-6.9 8.3l-2.1-1.1c1.4-6.1 3.3-10.5 5.7-13.2 3.9-4.5 9.4-6.8 16.4-6.8.6 0 1.4 0 2.6.1V36.1l3.7.2c4 0 8-1.1 11.9-3.2 3.9-2.1 7.2-4.6 9.9-7.5 1.8-2 3.6-4.9 5.6-8.6 5.9 4.9 10.7 7.3 14.5 7.3 1.6 0 3-.6 4.2-1.7 1-1.1 1.9-3 2.6-5.6zM59.2 35.4c-2.4 1.7-5.2 2.9-8.2 3.8v56c0 1.9-.1 5.6-.4 11-.2 3.2-.5 5.5-.9 7.2-.6 2.4-1.5 4.7-2.7 6.8-1.2 2.2-3.2 4.9-6 8.4 4.7-2.2 8.4-5 11.2-8.2 2.8-3.3 4.7-6.8 5.6-10.6.9-3.8 1.4-9.4 1.4-17V35.4zM95.5 87.8v26.7c-2.8 1.5-4.8 2.6-6 3.6-.9.7-1.8 1.5-2.7 2.6-2.7-2.1-4.9-3.5-6.6-4.4-1.3-.6-2.8-1-4.5-1.1l-.3-.7c.7-.8 1.1-1.5 1.3-2.1.3-.8.4-2.2.4-4.1V88.7c3.4-1.5 6.3-3.5 8.7-6.1 2.5 2.2 5.8 3.9 9.7 5.2zM82.6 111l7.2 3.8V92.1c-2.3-1.4-3.9-2.3-4.8-2.7-.7-.3-1.5-.6-2.4-.8V111zM120 82.5l4.9 5.3-2.2 2.6v18.7c0 2.2.2 3.7.7 4.6.3.6.6 1 1 1 .3 0 .8-.4 1.5-1.1l.7 1.1-5.9 5.8c-1.5-1.3-2.4-2.5-2.9-3.6s-.7-2.7-.7-5c-2.9 2.4-5.8 5.3-8.7 8.6-1.8-1.8-2.9-3.4-3.5-4.8-.6-1.4-.8-3.2-.8-5.4V92.8c0-1.2-.1-2-.3-2.4-.3-.7-.7-1-1.2-1-.4 0-1 .4-1.7 1.2l-.7-1.1 6.5-6.9 5 5.3-2.1 2.4v19c0 1.4.1 2.4.4 3.1.3.7.9 1.5 2 2.5l5.1-4.8V90.5l-2-2.6 4.9-5.4zM145.1 82.5l4.2 6.5-4.2 4.8-3.5-5.7-2.7 3.2v20.8l3.2 2.9 2.8-2.9.6 1.1-7.1 7.3c-1.5-1.7-2.8-3-3.8-3.7-1-.8-2.1-1.4-3.4-1.8v-.8c.8-.7 1.3-1.5 1.6-2.2.2-.7.4-2.2.4-4.3V93.2c0-1.8-.2-3.1-.5-3.7-.3-.6-.7-.9-1-.9-.4 0-1 .5-1.7 1.4l-.7-1 5.8-6.5c1.6 1.5 2.6 2.9 3.2 4 .4.7.6 1.7.6 3l6.2-7zM94.5 223.8c-8.5 7.8-16.7 11.7-24.7 11.7-6 0-11.7-1.9-17.3-5.8-5.6-3.8-9.9-9.1-13-15.9-3.1-6.7-4.6-14.2-4.6-22.4 0-4.7.4-9.2 1.1-13.5s2.1-9.4 3.9-15.1c3.6-2.3 7.7-5.4 12.5-9.4 2.5-2.2 9-7.5 19.3-15.9 2.1-1.7 4.4-3.7 7.1-6.1 6.2.8 11.1 2 14.6 3.5 5.3 2.2 10 5.3 14 9.3 4 4 7.1 8.8 9.4 14.2 2.2 5.5 3.4 11.4 3.4 17.8 0 5.9-1.1 11.4-3.2 16.6-3.1 7.5-7.6 14.8-13.7 21.8l14.2 13.3 3.5-3.7 1.5 2.2L111 239l-16.5-15.2zm-38-69.8c-3.1 2.9-5.2 5.4-6.6 7.4-1.8 2.6-3.2 5.9-4.4 9.7s-1.8 8-1.8 12.5c0 9.8 2.9 19 8.8 27.5 1.7-2 2.7-4 3.2-5.9.5-2 .8-5.8.8-11.6V154zm18.2-8.7c-2.4-.2-4.8-.3-7.2-.4V186c0 4.4-.2 7.4-.6 9.1-.4 1.7-1.2 3.4-2.3 5.1-1.1 1.7-4.5 6-10.3 12.8 3.1 3.7 6.2 6.4 9.3 8 3.1 1.6 6.8 2.6 11.1 2.9v-78.6zm2.4 18.6c2.6 2.9 5 4.9 7.4 6.2s4.8 1.9 7.6 1.9c2.5 0 4.8-.6 7-1.9 2.1-1.3 4.4-3.3 6.8-6.2-2-3.4-3.9-6-5.7-7.6-3.2-3-6.7-5.4-10.4-7.1-3.7-1.7-7.9-2.9-12.5-3.6v18.3zm0 29c2.5-3.2 4.9-5.5 7.1-6.8 2.2-1.3 4.8-1.9 7.7-1.9 3.1 0 5.8.7 8.2 2.1 2.4 1.4 5.1 3.8 7.9 7.2 1-4.6 1.5-8.6 1.5-12 0-3.1-.2-5.8-.5-8.1-.3-1.7-.9-3.8-1.8-6.4-3.1 3.2-5.8 5.5-8.1 6.6-2.3 1.2-4.8 1.8-7.6 1.8-2.5 0-4.9-.5-7-1.6s-4.5-3-7.3-5.9v25zm0 31.1c4.2-.3 7.7-1.3 10.3-2.9 4.5-2.4 8.3-5.6 11.6-9.8 3.3-4.1 6-9.2 8.1-15.1-5-6-10-9-15.2-9-3 0-5.9 1-8.6 3.1-2 1.5-4.1 4-6.2 7.5V224zM141.6 135.2l4.9 5.3-2.2 2.6v18.7c0 2.2.2 3.7.7 4.6.3.6.6 1 1 1 .3 0 .8-.4 1.5-1.1l.7 1.1-5.9 5.8c-1.5-1.3-2.4-2.5-2.9-3.6s-.7-2.7-.7-5c-2.9 2.4-5.8 5.3-8.7 8.6-1.8-1.8-2.9-3.4-3.5-4.8-.6-1.4-.8-3.2-.8-5.4v-17.6c0-1.2-.1-2-.3-2.4-.3-.7-.7-1-1.2-1-.4 0-1 .4-1.7 1.2l-.7-1.1 6.5-6.9 5 5.3-2.1 2.4v19c0 1.4.1 2.4.4 3.1.3.7.9 1.5 2 2.5l5.1-4.8v-19.5l-2-2.6 4.9-5.4zM163.2 135.2L171 147l-12.4 11.2v6.5l6.4 3.3 4.3-3.8.6 1.1-8.9 8.1c-1.8-1.3-3.3-2.2-4.5-2.7-1.2-.5-2.9-1.1-5-1.7v-.9c.6-.5 1-1.1 1.3-1.8.2-.7.3-2.2.3-4.5v-20.4c1.7-.8 3.2-1.5 4.3-2.2.8-.7 2.8-2 5.8-4zm-4.2 4.1l-.4.2v16.2l7.3-6.6-6.9-9.8zM185.7 135.2l7.8 11.7-12.4 11.2v6.5l6.4 3.3 4.3-3.8.6 1.1-8.9 8.1c-1.8-1.3-3.3-2.2-4.5-2.7-1.2-.5-2.9-1.1-5-1.7v-.9c.6-.5 1-1.1 1.3-1.8s.3-2.2.3-4.5v-20.4c1.7-.8 3.2-1.5 4.3-2.2.7-.6 2.7-1.9 5.8-3.9zm-4.2 4.1l-.4.2v16.2l7.3-6.6-6.9-9.8zM213.4 135.2l3.8 5.4 2.7-3.4.8 1c-1.3 1.5-2.1 2.7-2.4 3.5-.4 1-.6 2.5-.6 4.3v17c0 1.6.2 2.7.6 3.5.2.5.5.8.8.8.3 0 .9-.5 1.8-1.4l.7 1.1-5.9 6.3c-1.5-1.5-2.5-2.8-3-4-.4-1.1-.7-3-.7-5.5v-19.5l-2.4-3.3-4.7 4.9v19.8l2.1 2.6-4.9 5.1-4.9-5.1 2.1-2.6v-18.2c0-2.6-.2-4.3-.6-5.2-.3-.6-.6-.9-.9-.9-.4 0-.9.5-1.7 1.4l-.7-1.1 5.9-6.3c1.6 1.6 2.6 2.8 3.1 3.7.4.9.6 2.2.6 3.8v1.3l8.4-9zM239.3 148.5l6.4 4.3v15c-1.5.2-3 .7-4.2 1.5-1.3.8-2.7 2.1-4.3 4-1.4-1-2.5-1.8-3.6-2.2-1-.4-2.1-.6-3.2-.6-1.7 0-3.3.7-4.6 2-.5.5-.9.7-1.1.7-.2 0-.4-.1-.6-.4-.2-.3-.3-.5-.3-.8 0-.3.2-.7.6-1.1.2-.3.6-.8 1.1-1.6l2.5-4 3.6-6.1-6-4.2v-13.3c1.9-.8 3.4-1.6 4.5-2.6 1.1-.9 2.1-2.2 3.1-3.9 2.4 1.3 4.3 2.2 5.7 2.7 1 .4 2 .5 3 .5s1.8-.3 2.4-.9c.6-.6.9-1.2.9-1.8 0-.4-.2-.9-.6-1.3-.7-.8-1.1-1.6-1.1-2.4 0-.7.2-1.3.5-1.8.3-.4.7-.7 1.1-.7.5 0 1 .3 1.4.9.4.6.6 1.4.6 2.4s-.2 2-.5 3-1 2.2-1.9 3.8l-5.4 8.9zm-3.4 5.7l-6.7 11.5c.8-.4 1.6-.6 2.3-.8.7-.2 1.3-.2 1.9-.2 2.1 0 4.3.9 6.6 2.7V157l-4.1-2.8zm-4.7-3.3l3.8 2.5 6-10.4c-1.2.5-2.3.7-3.2.7-2.3 0-4.5-1-6.6-2.9v10.1zM143 128H90l5-5h53zM247 185H122l5-5h125z"/>
        </g>
    </svg>
  )
};

export default LogoSvg;