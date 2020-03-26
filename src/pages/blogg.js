import React from 'react'
import { graphql } from 'gatsby'
import Layout from '../components/layout'
import { BorderSection, Section } from '../components/Section'
import Seo from '../components/seo'
import sanitizeHtml from 'sanitize-html'
import formatDistance from 'date-fns/formatDistance'
import parseISO from 'date-fns/parseISO'
import sv from 'date-fns/locale/sv'
import '../css/local.css'

const formatExcerpt = (excerpt) => excerpt.replace(/\n/g, '<br/>')
const formatDate = (datestring) => formatDistance(parseISO(datestring), Date.now(), { locale: sv })
const formatAvatar = (avatar_template) => <img
  src={`https://foodshift.se${avatar_template.replace('{size}', '100')}`} className='br-100 dib fl mr2'
  alt='avatar' style={{ width: 45 }}
/>

const sanitize = (dirty) => sanitizeHtml(dirty, {
  allowedTags: ['b', 'i', 'em', 'strong', 'a', 'img'],
  nonTextTags: ['style', 'script', 'textarea', 'noscript', 'aside'],
  allowedClasses: {
    img: ['emoji']
  }
})

const Post = ({ data }) => {
  return (
    <Layout>
      <Seo title='Blog' />
      <Section textColor='green'>
        <div className='center mw9 pt5 pt6-l mb4 mb5-l'>
          <h3 className='f5 fw6 ttu tracke'>Förenade Inköp</h3>
        </div>

        <div className='fl w-100 mh0 mb3 mb4-l'>
          <p className='f2 mt0 db fl w-100 f-subheadline-l lh-copy lh-title-l measure mb2 fw6'>
            Blogg.
          </p>
        </div>
      </Section>
      {
        data.blog.post_stream.posts.reverse().map((post, index) => (

          <Section key={index}>
            <div className='fl w-100 mh0 mb2 mb3-ns pt2'>
              <div className='fl w-100 w-50-l mh0 mt0 pr0 pr3-l measure lh-copy f5 f4-l'>

                <p className='mt2 mb3' dangerouslySetInnerHTML={{ __html: sanitize(post.cooked) }} />
                <p>–</p>
                <div className='f5'>
                  <a href={`https://foodshift.se/u/${post.username}`}>
                    {formatAvatar(post.avatar_template)}
                  </a>
                  {post.name}{' '}<a href={`https://foodshift.se/u/${post.username}`}>@{post.username}</a>
                  <br />
                  Skrev inlägget {formatDate(post.created_at)} sedan
                </div>

              </div>
            </div>
          </Section>
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
