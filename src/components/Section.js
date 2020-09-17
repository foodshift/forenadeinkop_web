import React from 'react'

export const Section = (props) => {
  const backgroundColor = props.backgroundColor || 'bg-fi-pink'
  const textColor = props.textColor || 'fi-gray'
  return (
    <section className={`${backgroundColor} ${textColor} pv5`}>
      <div className='ph3 ph5-ns'>
        <div className='cf w-100 center mw9 tk-atten-round-new'>
          {props.children}
        </div>
      </div>
    </section>
  )
}

export const BorderSection = (props) => {
  const backgroundColor = props.backgroundColor || 'bg-fi-pink'
  const textColor = props.textColor || 'fi-gray'
  return (
    <section className={`${backgroundColor} ${textColor} pv5 bt`}>
      <div className='ph3 ph5-ns'>
        <div className='cf w-100 center mw9 tk-atten-round-new'>
          {props.children}
        </div>
      </div>
    </section>
  )
}
