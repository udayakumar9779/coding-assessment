import React from 'react';

interface HeadingProps {
  text: string;
}

const Heading: React.FC<HeadingProps> = ({ text }) => {
  return <h2 className="heading pageheading">{text}</h2>;
};

export default Heading;
