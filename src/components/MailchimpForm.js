import '../css/loading.min.css'
import React, { useState } from 'react'
import jsonp from 'jsonp'

const formMessages = {
  success: '✅ Tack, nu är du anmäld.',
  duplicate: '😛 Epostadressen är redan anmäld.',
  error: '🔴 Tyvärr, något gick snett.'
}

export const MailchimpForm = () => {
  const [email, setEmail] = useState('')
  const [status, setStatus] = useState('')

  const handleEmailChange = (event) => {
    setEmail(event.target.value)
  }

  const handleSubmit = (event) => {
    setStatus('sending')
    event.preventDefault()
    let url = 'https://foodshift.us20.list-manage.com/subscribe/post-json?u=791a0cb43f82e0588f58191d1&amp;id=a03a8bd45a'
    url += `&EMAIL=${email}`

    jsonp(url, { param: 'c' }, (err, data) => {
      if (data.msg.includes('already subscribed')) {
        setStatus('duplicate')
      } else if (err) {
        setStatus('error')
      } else if (data.result !== 'success') {
        setStatus('error')
      } else {
        setStatus('success')
      };
    })
  }

  return (
    <form
      method='post'
      id='mc-embedded-subscribe-form'
      name='mc-embedded-subscribe-form'
      className='validate pt3'
      target='_blank'
      onSubmit={handleSubmit}
    >

      <div id='mc_embed_signup_scroll'>
        <input
          type='email'
          value={email}
          placeholder='Epostadress…'
          required
          onChange={handleEmailChange}
          className='input-reset ba b--dark-green green br2 ph3 pv2 mb2 dib'
        />

        {status === 'sending'
          ? <button className='link dim br2 ph3 pv2 ml2 mb2 dib white bg-dark-green b--none ld-ext-right running'>
            Skickar
            <div className='ld ld-ring ld-spin' style={{ width: '1em', height: '1em' }} />
          </button>
          : <button className='link dim br2 ph3 pv2 ml2 mb2 dib white bg-dark-green b--none'>
            Skicka
            </button>}
        {status === 'duplicate' && <div>{formMessages.duplicate}</div>}
        {status === 'error' && <div>{formMessages.error}</div>}
        {status === 'success' && <div>{formMessages.success}</div>}
      </div>
    </form>
  )
}
