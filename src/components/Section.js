import React from 'react'

export const Section = (props) => {
  const backgroundColor = props.backgroundColor || 'bg-near-white'
  const textColor = props.textColor || 'green'
  return (
    <section className={`${backgroundColor} ${textColor} pv4 pv5-l`}>
      <div className='ph3 ph5-ns'>
        <div className='cf w-100 center mw9'>
          {props.children}
        </div>
      </div>
    </section>
  )
}

export const BorderSection = (props) => {
  const backgroundColor = props.backgroundColor || 'bg-near-white'
  const textColor = props.textColor || 'green'
  return (
    <section className={`${backgroundColor} ${textColor} pv4 pv5-l bt`}>
      <div className='ph3 ph5-ns'>
        <div className='cf w-100 center mw9'>
          {props.children}
        </div>
      </div>
    </section>
  )
}
