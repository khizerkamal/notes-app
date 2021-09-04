import React, {useState} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import noteActions from '../redux/actions/noteActions';
import inputActions from '../redux/actions/inputActions';
import './inputSection.style.css';
import { CirclePicker } from 'react-color';
import {Button, Modal} from 'react-bootstrap'

const InputSection = () => {
  const id = useSelector(state => state.inputs.id);
  const title = useSelector(state => state.inputs.title);
  const content = useSelector(state => state.inputs.content);
  const color = useSelector(state => state.inputs.color);
  const dispatch = useDispatch();

  const [ bgColor,setBgColor ] = useState('#fff')
  const [ showColorPicker,setShowColorPicker ] = useState(false)
  

  const addNote = () => {
    if(title && content) {
      dispatch(noteActions.addNote({
        title,
        content,
        bgColor
      }))
      dispatch(inputActions.resetInputs())
    }
  }

  const updateNote = () => {
    if(title && content) {
      dispatch(noteActions.updateNote(id, {
        title, content, bgColor
      }))
      dispatch(inputActions.resetInputs())
    }    
  }

  const deleteNote = () => {
    dispatch(noteActions.deleteNote(id))
    dispatch(inputActions.resetInputs())
  }

  return (
    <div className="InputSection__container">
      <input
        type="text"
        placeholder="Note title"
        value={title}
        onChange={e => 
          dispatch(inputActions.setInputTitle(e.target.value))
        }
      />
      <textarea
        placeholder="Note content"
        value={content}
        onChange={e => 
          dispatch(inputActions.setInputContent(e.target.value))
        }
      ></textarea>
      <div
        className="InputSection__container__btnWrapper"
      >
        <button onClick={id === -1 ? addNote : updateNote}>{id === -1 ? "ADD NOTE" : "UPDATE NOTE"}</button>      
        {id !== -1 &&
        <button onClick={deleteNote} style={{ marginLeft: '1em', backgroundColor: 'red' }}>
          DELETE NOTE
        </button>
        }

        <button className={"color-btn"} onClick={color => setShowColorPicker(!showColorPicker)}>
          {id === -1 && !showColorPicker ? 'SELECT COLOR' : "UPDATE COLOR" }
        </button>

          <Modal show={showColorPicker} size="sm">
          <Modal.Header>
          <Modal.Title id="example-modal-sizes-title-sm" style={{ margin: '0 auto' }}>
            Select Color
          </Modal.Title>
            </Modal.Header>
            <Modal.Body style={{ margin: '0 auto' }}>
              <CirclePicker
                color={bgColor}
                onChange={updatedColor => {
                  dispatch(inputActions.setInputColor(updatedColor.hex))
                  setBgColor(updatedColor.hex)
                }}
              />
          </Modal.Body>
          <Modal.Footer>
            <Button onClick={color => setShowColorPicker(!showColorPicker)}>Close</Button>
          </Modal.Footer>
          </Modal>
      </div>
    </div>
  );
};

export default InputSection;
