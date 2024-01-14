import React from 'react'
import styles from './sample-components.module.css'
import { ELEMENT_BUTTON, ELEMENT_PARAGRAPH } from '../../constant'

const SampleComponents = (props) => {
  const { handleOnDrag } = props
  return (
    <div className={styles['drag-zone']}>
      <div
        className={styles['sample-component']}
        draggable
        onDragStart={(e) => handleOnDrag(e, ELEMENT_PARAGRAPH)}
      >
        <div className={styles['sample-component-square']} />
        Paragraph
      </div>
      <div
        className={styles['sample-component']}
        draggable
        onDragStart={(e) => handleOnDrag(e, ELEMENT_BUTTON)}
      >
        <div className={styles['sample-component-square']} />
        Button
      </div>
    </div>
  )
}

export default SampleComponents