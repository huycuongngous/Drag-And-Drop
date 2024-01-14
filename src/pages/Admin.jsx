import React, { useCallback } from 'react'
import { useState } from 'react'
import styles from './admin.module.css';
import HeaderButtons from '../components/AdminPage/HeaderButtons';
import ConfigComponent from '../components/AdminPage/ConfigComponent';
import SampleComponents from '../components/AdminPage/SampleComponents';
import { ELEMENT_BUTTON, ELEMENT_PARAGRAPH } from '../constant';
import { generateUniqueId } from '../utils';

const Admin = () => {
  const [text, setText] = useState('')
  const [components, setComponents] = useState([]);
  const [messageAlert, setMessageAlert] = useState('')
  const [coordinates, setCoordinates] = useState({ x: 0, y: 0 });
  const [draggingComponent, setDraggingComponent] = useState('')
  const [editingComponentId, setEditingComponentId] = useState('')
  const [showConfigComponent, setShowConfigComponent] = useState(false)
  const [showDraggingComponent, setShowDraggingComponent] = useState(false)

  const handleMouseMove = useCallback((e) => {
    const { clientX: x, clientY: y } = e;
    setCoordinates({ x, y });
  }, [])

  const handleOnDrag = useCallback((e, componentType) => {
    setDraggingComponent(componentType)
    e.dataTransfer.setData("componentType", componentType)
  }, [])

  const handleOnDrop = useCallback((e) => {
    setDraggingComponent('')
    const componentType = e.dataTransfer.getData("componentType")
    let component;
    switch (componentType) {
      case ELEMENT_PARAGRAPH:
        component = {
          id: generateUniqueId(),
          component: componentType,
          props: {
            text: ""
          }
        }
        break;
      case ELEMENT_BUTTON:
        component = {
          id: generateUniqueId(),
          component: componentType,
          props: {
            text: "",
            message: ""
          }
        }
        break;
      default:
        break;
    }
    setComponents([...components, component])
  }, [components])

  const handleDragOver = useCallback((e) => {
    if (!showDraggingComponent) {
      setShowDraggingComponent(true)
    }
    e.preventDefault()
  }, [showDraggingComponent])

  const renderComponents = useCallback(() => components.map(component => (
    <div id={component.id} key={component.id}>
      {
        component.component === ELEMENT_PARAGRAPH ? (<p id={component.id} onClick={() => handleComponentClick(component.id)} >
          {component.props.text ? component.props.text : "Paragraph"}
        </p>) : (<button style={{
          cursor: 'pointer'
        }} onClick={() => handleComponentClick(component.id)}>
          {component.props.text ? component.props.text : "Button"}
        </button>)
      }
    </div>
  )), [components])

  const handleComponentClick = useCallback((idComponent) => {
    setEditingComponentId(idComponent)
    setShowConfigComponent(true)
    setText('')
    setMessageAlert('')
  }, [])

  const renderInfoEditingComponent = useCallback(() => {
    const foundComponent = components.find(component => component.id === editingComponentId)
    return foundComponent && (
      <span>
        {'{'}
        <span>"id": "{foundComponent.id}", </span>
        <span>"component": "{foundComponent.component}", </span>
        <span>"props":{'{'}"text": "{foundComponent.props.text}" {foundComponent.component === ELEMENT_BUTTON && <span>, "message": "{foundComponent.props.message}"</span>} {'}'}</span>
        {'}'}
      </span>
    )
  }, [components, editingComponentId])

  return (
    <div>
      <HeaderButtons
        components={components}
        setEditingComponentId={setEditingComponentId}
        setShowConfigComponent={setShowConfigComponent}
        setDraggingComponent={setDraggingComponent}
      />

      <div style={{
        width: '100%',
        display: 'flex',
      }}>

        {/* Drag zone */}
        <SampleComponents
          handleOnDrag={handleOnDrag}
        />

        {/* Drop zone */}
        <div
          onMouseLeave={() => setShowDraggingComponent(false)}
          className={styles['drop-zone-container']}
        >
          <div
            onMouseMove={handleMouseMove}
            className={styles['drop-zone']}
            onDrop={handleOnDrop}
            onDragOver={(handleDragOver)}
          >
            <div className={styles['drop-zone-left']}>
              <p>Mouse: ({coordinates.x},{coordinates.y})</p>
              <p>Dragging: {showDraggingComponent ? draggingComponent : ''}</p>
              <p>Instance: {components.length}</p>
              <p>Config:
                {
                  setShowConfigComponent && renderInfoEditingComponent()
                }
              </p>
            </div>

            <div className={styles['drop-zone-right']}>
              {renderComponents()}
            </div>
          </div>

          <ConfigComponent
            showConfigComponent={showConfigComponent}
            editingComponentId={editingComponentId}
            components={components}
            setComponents={setComponents}
            text={text}
            setText={setText}
            messageAlert={messageAlert}
            setMessageAlert={setMessageAlert}
          />
        </div>
      </div>
    </div>
  )
}

export default Admin
