import React from 'react';
import './NoteItem.styles.css';

const NoteItem = ({ title,content,onItemClicked, color}) => {
console.log(color)
  return (
    <div
      className="NoteItem__container"
      role="button"
      onClick={onItemClicked}
      style={{ backgroundColor: color} }
    >
      <h2>{title}</h2>
      <p>{content}</p>
    </div>
  );
};

export default NoteItem;
