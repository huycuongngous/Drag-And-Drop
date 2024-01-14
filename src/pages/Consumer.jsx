import React from 'react'
import { useSelector } from 'react-redux'
import styles from './consumer.module.css'
import { ELEMENT_PARAGRAPH } from '../constant'

const Consumer = () => {
  const { components } = useSelector(state => state.components) 

  return (
    <div className={styles['consumer-container']}>
      {
        components.map(component => {
          if (component.component === ELEMENT_PARAGRAPH)
            return (<p key={component.id}>{component.props.text}</p>)
          else 
            return (
              <button className={styles['btn']} type='button' key={component.id} onClick={() => alert(component.props.message)}>{component.props.text}</button>
            )
        })
      }
    </div>
  )
}

export default Consumer