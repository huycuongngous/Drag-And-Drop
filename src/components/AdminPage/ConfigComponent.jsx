import React from 'react'
import { ELEMENT_PARAGRAPH } from '../../constant'
import styles from './config-component.module.css'

const ConfigComponent = (props) => {
  const {
    showConfigComponent,
    editingComponentId,
    components,
    setComponents,
    text,
    setText,
    messageAlert,
    setMessageAlert,
  } = props
  

  const handleInputTextChange = (e) => {
    const updatedComponents = components.map(component => {
      if (component?.id !== editingComponentId) return component
      else {
        const cloneComponent = { ...component }
        cloneComponent.props.text = e.target.value
        return cloneComponent
      }
    })
    setComponents(updatedComponents)
    setText(e.target.value)
  }


  const handleInputMessageAlertChange = (e) => {
    const updatedComponents = components.map(component => {
      if (component.id !== editingComponentId) return component
      else {
        const cloneComponent = { ...component }
        cloneComponent.props.message = e.target.value
        return cloneComponent
      }
    })
    setComponents(updatedComponents)
    setMessageAlert(e.target.value)
  }


  const renderConfigComponent = () => {
    const editingComponent = components.find(component => component.id === editingComponentId)
    return (
      <div style={{
        display: 'flex',
        flexDirection: 'column',
        gap: 10,
      }}>
        {
          editingComponent && editingComponent.component === ELEMENT_PARAGRAPH ? (
            <>
              <label htmlFor="">Paragraph Text</label>
              <input className={styles['config-component-input']} type="text" value={text} onChange={(e) => {
                handleInputTextChange(e)
              }} />
            </>
          ) : (
            <>
              <label htmlFor="">Button Text</label>
                <input className={styles['config-component-input']} type="text" value={text} onChange={(e) => {
                handleInputTextChange(e)
              }} />
              <label htmlFor="">Button Message</label>
                <input className={styles['config-component-input']} type="text" value={messageAlert} onChange={(e) => {
                  handleInputMessageAlertChange(e)
              }} />
            </>
          )
        }
      </div>
    )
  }

  return showConfigComponent && (
    <div className={styles['config-component']}>
      {
        renderConfigComponent()
      }
    </div>
  )
}

export default ConfigComponent