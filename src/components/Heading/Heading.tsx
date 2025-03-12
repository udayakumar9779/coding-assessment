import React from 'react';

interface HeadingProps {
  text: string;
}

const Heading: React.FC<HeadingProps> = ({ text }) => {
  return <h2 className="heading husky testing">{text}</h2>;
};

export default Heading;
