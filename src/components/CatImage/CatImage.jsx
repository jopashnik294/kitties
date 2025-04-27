import React from 'react'
import styles from './CatImage.module.scss'

export default function CatImage( props ) {
  const { src } = props;

  return (
    <div className={styles.wrapper}>
        <img src={src} alt="Cat" />
    </div>
  )
}
