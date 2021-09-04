import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import NoteItem from './NoteItem';
import inputActions from '../redux/actions/inputActions';
import './NotesSection.style.css';

const NotesSection = () => {
  const dispatch = useDispatch();
  const notes = useSelector(state => state.notes.notes)

  const onItemClicked = (item, index) => {
    dispatch(inputActions.setInputId(index));
    dispatch(inputActions.setInputTitle(item.title));
    dispatch(inputActions.setInputContent(item.content));
    dispatch(inputActions.setInputColor(item.bgColor));
  }

  if(notes.length === 0) {
    return (
      <div className="NotesSection__container__empty">
        <p>There is no note yet. Please add one.</p>
      </div>  
    )
  }

  return (
    <div className="NotesSection__container">
      {notes.map((item, index) => {
        if (item) {
          console.log(item.color)
          return (
            <NoteItem
              key={item.content}
              title={item.title}
              content={item.content}
              color={item.bgColor}
              onItemClicked={() => { onItemClicked(item,index) }}
            />      
          )
        }
        return null;
      })}
    </div>
  );
};

export default NotesSection;
