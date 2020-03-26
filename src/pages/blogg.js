import '../css/local.css'

import { Link, graphql } from 'gatsby'

import Layout from '../components/layout'
import React from 'react'
import { Section } from '../components/Section'
import Seo from '../components/seo'

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
    a: sanitizeHtml.simpleTransform('a', { class: 'link underline green hover-yellow' })
  },
  allowedTags: ['b', 'i', 'em', 'strong', 'a', 'img'],
  nonTextTags: ['style', 'script', 'textarea', 'noscript', 'aside'],
  allowedClasses: {
    img: ['emoji'],
    a: ['link', 'underline', 'green', 'hover-yellow']
  }
})

const Post = ({ data }) => {
  return (
    <Layout>
      <Seo title='Blog' />
      <Section textColor='green'>
        <div className='center mw9 pt5 mb4'>
          <Link to='/' className='link underline green hover-yellow '><h3 className='dib f5 fw6 ttu underline'>Förenade Inköp</h3></Link> / <h3 className='dib f5 fw6 ttu tracke'>Blogg</h3>
        </div>
      </Section>
      {
        data.blog.post_stream.posts.reverse().map((post, index) => (

          <section key={index} className='bg-near-white green pv1 pv2-l'>
            <div className='ph3 ph5-ns'>
              <div className='cf w-100 center mw9'>
                <div className='fl w-100 w-50-l mh0 mt0 pr0 pr3-l measure lh-copy f5 f4-l'>

                  <div className='f6'>
                    <a href={`https://foodshift.se/u/${post.username}`}>
                      {formatAvatar(post.avatar_template)}
                    </a>
                    {post.name}{' '}<a href={`https://foodshift.se/u/${post.username}`} className='link underline green hover-yellow'>@{post.username}</a>
                    <br />
                    Skrev inlägget {formatDate(post.created_at)} sedan
                  </div>

                  <p className='mt2 mb3' dangerouslySetInnerHTML={{ __html: formatCooked(post.cooked) }} />

                  <p>–</p>

                </div>
              </div>
            </div>
          </section>

        ))
      }
    </Layout>
  )
}

export const query = graphql`
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
`

export default Post
