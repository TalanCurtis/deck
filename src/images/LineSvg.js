import React from 'react';

const LineSvg = (props) => {
  const {className, height, width, fill , stroke, strokeWidth, onClick } = props
  return (
    <svg id="line" viewBox="0 0 600 12" className={className} height={height} width={width} fill={fill} stroke={stroke} strokeWidth={strokeWidth} onClick={onClick}>
      <path
        id="main-line"        
        d="M594.5,7.5H5.5C4.7,7.5,4,6.8,4,6v0c0-0.8,0.7-1.5,1.5-1.5h589c0.8,0,1.5,0.7,1.5,1.5v0C596,6.8,595.3,7.5,594.5,7.5z"/>
    </svg>
  )
};

export default LineSvg;