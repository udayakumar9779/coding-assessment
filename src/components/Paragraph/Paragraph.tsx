import React from 'react';
import './Paragraph.css';

interface ParagraphProps {
  text: string;
}

const Paragraph: React.FC<ParagraphProps> = ({ text }) => {
  return <p className="paragraph">{text}</p>;
};

export default Paragraph;
