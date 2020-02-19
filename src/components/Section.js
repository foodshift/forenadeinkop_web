import React from 'react'

export const Section = (props) => {
  const backgroundColor = props.backgroundColor || 'bg-near-white'
  const textColor = props.textColor || 'green'
  return (
    <section className={`${backgroundColor} ${textColor} pv3 pv4-ns`}>
      <div className='ph3 ph5-ns'>
        <div className='cf w-100 center mw9'>
          {props.children}
        </div>
      </div>
    </section>
  )
}
