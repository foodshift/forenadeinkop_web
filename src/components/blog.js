import '../css/local.css'

import { graphql, useStaticQuery } from 'gatsby'

import React from 'react'

import formatDistance from 'date-fns/formatDistance'
import parseISO from 'date-fns/parseISO'
import sanitizeHtml from 'sanitize-html'
import sv from 'date-fns/locale/sv'

const formatAvatar = (avatarTemplate) => <img
  src={`https://foodshift.se${avatarTemplate.replace('{size}', '100')}`} className='br-100 dib fl mr2'
  alt='avatar'
  style={{ width: 42 }}
/>

const formatDate = (datestring) => formatDistance(parseISO(datestring), Date.now(), { locale: sv })

const formatCooked = (dirty) => sanitizeHtml(dirty, {
  transformTags: {
    a: sanitizeHtml.simpleTransform('a', { class: 'link underline yellow hover-orange' })
  },
  allowedTags: ['b', 'i', 'em', 'strong', 'a', 'img'],
  nonTextTags: ['style', 'script', 'textarea', 'noscript', 'aside'],
  allowedClasses: {
    img: ['emoji'],
    a: ['link', 'underline', 'yellow', 'hover-orange']
  }
})

const formatPost = (post) => {
  return (
    <div className='fl w-100 w-40-l mh0 mt0 pr0 pr3-l measure lh-copy f5 f4-l mb4 mb3-l mr4-l'>
      <div className='f6'>
        <a href={`https://foodshift.se/u/${post.username}`}>
          {formatAvatar(post.avatar_template)}
        </a>
        {post.name}{' '}<a href={`https://foodshift.se/u/${post.username}`} className='link underline yellow hover-orange'>@{post.username}</a>
        <br />
        Skrev inlägget {formatDate(post.created_at)} sedan
      </div>

      <div className='mt2' dangerouslySetInnerHTML={{ __html: formatCooked(post.cooked) }} />
      <p className='dn-l'>–</p>

    </div>

  )
}

export const BlogLatest = () => {
  const data = useStaticQuery(graphql`
  query {
    blog {
      post_stream {
        posts {
          username
          name
          created_at
          cooked
          avatar_template
        }
      }
    }
  }
`)

  const post = data.blog.post_stream.posts.slice(-1)[0]
  const post2 = data.blog.post_stream.posts.slice(-2)[0]

  return (
    <>
      {formatPost(post)}
      {formatPost(post2)}
    </>
  )
}
