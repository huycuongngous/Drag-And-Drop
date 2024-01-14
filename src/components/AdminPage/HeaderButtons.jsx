import React, { useCallback } from 'react'
import { Link } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { setComponents } from '../../redux/actions/componentsActions'
import styles from './header-buttons.module.css'
import { notification } from 'antd'

const HeaderButtons = (props) => { 
  const { components, setEditingComponentId, setShowConfigComponent, setDraggingComponent } = props;
  const dispatch = useDispatch()
  
  const handleClickSave = useCallback(() => {
    dispatch(setComponents(components))
    setEditingComponentId('')
    setShowConfigComponent(false)
    setDraggingComponent(null)
    notification.success({
      message: "Saved",
      placement: 'bottomRight'
    })
  }, [components])

  return (
    <div className={styles['header-container']}>
      <button type='button' className={styles['header-btn']} onClick={handleClickSave}>Save</button>
      <Link to='/consumer' target='_blank' className={styles['header-btn']}>View</Link>
    </div>
  )
}

export default HeaderButtons