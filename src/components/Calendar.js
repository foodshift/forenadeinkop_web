import { graphql, useStaticQuery } from 'gatsby'

import React from 'react'

import { has } from 'lodash'
import format from 'date-fns/format'
import parseISO from 'date-fns/parseISO'
import sv from 'date-fns/locale/sv'

export const CalendarItem = (props) => {
  if (!has(props.data, 'event.start')) {
    return null
  }

  const eventDate = parseISO(props.data.event.start)
  const month = format(eventDate, 'MMM', { locale: sv })

  return (
    <div className='cf mb2'>
      <div className='pa3 bg-green near-white mr2 dib v-mid w3'>
        <div className='f5 f4-l fw6 lh-solid tc'>{eventDate.getDate()}</div>
        <div className='f6 f5-l lh-solid tc' style={{ marginTop: -2 }}>{month}</div>
      </div>
      <div className='dib v-mid'>
        <a href={`https://foodshift.se/t/${props.data.slug}/${props.data.id}`} className='link underline green hover-yellow'>{props.data.title}</a>

      </div>
    </div>
  )
}

export const Calendar = () => {
  const data = useStaticQuery(graphql`
  query {
    calendar {
      topic_list {
        topics {
          event {
            start
          }
          title
          slug
          id
        }
      }
    }
  }
`)

  return (
    <>
      {
        data.calendar.topic_list.topics.map(d =>
          <CalendarItem
            key={d.id}
            data={d}
          />)
      }
    </>
  )
}
