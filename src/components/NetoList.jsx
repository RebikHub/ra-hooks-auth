import React from 'react'
import NetoNews from './NetoNews'

export default function NetoList(props) {
  return (
    <div className="news-list">
      {props.map((el) => <NetoNews/>)}
    </div>
  )
}
