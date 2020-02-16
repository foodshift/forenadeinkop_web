import Layout from '../components/layout'
import { MailchimpForm } from '../components/MailchimpForm'
import React from 'react'
import Seo from '../components/seo'

const Section = (props) => {
  return (
    <section className='bg-silver black-60 pv5 pv5-ns bb b--black-10'>
      <div className='ph3 ph5-ns'>
        {props.children}
      </div>
    </section>
  )
}

const IndexPage = () => (
  <Layout>
    <Seo title='Home' />

    <Section>
      <div className='center mw9'>
        <h3 className='f5 fw6 ttu tracke'>Förenade Inköp</h3>
      </div>

      <div className='cf w-100 center mw9'>
        <blockquote className='fl w-100 mh0 mb4 mb5-ns border-box pb5 bb b--black-50'>
          <p className='f3 f2-m mt0 db fl w-100 f-subheadline-l lh-copy lh-title-l measure mb4 fw6'>
            Kooperativ livsmedelshandel för lokal utveckling.
          </p>
          <p className='fl w-100 w-50-l mh0 mt0 pr0 pr3-l measure lh-copy f5 f4-l'>
            Det saknas i dagsläget väl utvecklade lokala försäljningskanaler där små matproducenter kan få avsättning för sina produkter. Befintliga kanaler är ofta dåligt utvecklade eller inte tillgängliga. Nya typer av lokala logistiksystem är en grundförutsättning för hållbar utveckling på landsbygden.
          </p>
          <div className='fl w-100 w-50-l mh0 mt0 pl0 pl3-l measure lh-copy f5 f4-l'>
            I kooperativa inköpsföreningar organiserar medlemmarna gemensamma matinköp från grossister och lokala matproducenter. Drivkraften handlar ofta om en vilja att handla mer lokalt, mer ekologiskt eller få tillgång till produkter som annars saknas hos de större matkedjorna.
          </div>

        </blockquote>
        <blockquote className='fl w-100 ph0 border-box mh0 mb4 mb5-ns pb5 bb b--black-50'>
          <p className='f4 f3-m f2-l measure fw7 lh-title mt0'>
            Förenade Inköp är ett projekt med mål att fler inköpsföreningar och lokala kooperativa matbutiker startas. Vi vill också bidra till att befintliga föreningar inleder djupare samarbeten.
          </p>
        </blockquote>
        <blockquote className='fl w-100 mh0 mb4 mb5-ns border-box pb5 bb b--black-50'>
          <p className='fl w-100 w-50-l mh0 mt0 pr0 pr3-l measure lh-copy f5 f4-l'>
            <h2 className='f3-l f4 lh-copy mt0 mb1'>Är du medlem i en inköpsförening eller kooperativ matbutik?</h2>
            Dela med dig av dina erfarenheter och hjälp andra att komma igång!
            <p className='pt2'>
              <h2 className='f3-l f4 lh-copy mt0 mb1'>Är du inte medlem i en förening än?</h2>
              Skulle du vilja starta en förening? Anmäl dig till Förenade Inköp och få hjälp att komma igång.
            </p>
          </p>
          <div className='fl w-100 w-50-l mh0 mt0 pl0 pl3-l measure lh-copy f5 f4-l'>
            <h2 className='f3-l f4 lh-copy mt0 mb1'>Anmäl dig till Förenade Inköp!</h2>
            Det kostar inget att delta i projektet, anmälan är inte bindande på något sätt. Anmälan innebär att du blir inbjuden till våra aktiviteter och får tillgång till chatkanalen där du kan kommunicera med övriga deltagare.

            <MailchimpForm />
          </div>

        </blockquote>
        <blockquote className='fl w-100 mh0 mb4 mb5-ns border-box'>
          <p className='fl w-100 w-50-l mh0 mt0 pr0 pr3-l measure lh-copy f5 f4-l'>
            <h2 className='f3-l f4 lh-copy mt0 mb1'>Projektets mål</h2>

            <p className='mt2'>Dokumentera befintliga föreningar, skriv och filma! Koka ned insikterna till en handbok som kan hjälpa nya att komma igång.</p>

            <p className='mt2'>Anordna ett antal träffar, både fysiska och digitala  i syfte att stärka samarbete och nätverkande.</p>

            <p className='mt2'>Starta ett nätverk av föreningar som kan leva vidare efter projektets slut. Sätt upp digitala verktyg för att få detta att hända.</p>

            <p className='mt2'>Projektet är initierat av <a href='https://foodshift.se' className='link'>Food Shift</a> och <a href='https://sormland.coompanion.se/' className='link'>Coompanion Sörmland</a>. Projekttid: 1 februari till 31 oktober 2020.</p>

          </p>
          <p className='fl w-100 w-50-l mh0 mt0 pr0 pr3-l measure lh-copy f5 f4-l'>
            <h2 className='f3-l f4 lh-copy mt0 mb1'>Datum</h2>

            4 april - Träff 1
            <br />Plats: Bottnafjordens Inköpsförening
            <p className='mt2'>maj - onlineträff 1</p>
            <p className='mt2'>juni - onlineträff 2</p>

            <p className='mt2'>augusti - onlineträff 3</p>

            <p className='mt2'>september - onlineträff 4</p>

            <p className='mt2'>25 september - Träff 2
            </p>

          </p>
        </blockquote>
      </div>

    </Section>
  </Layout>
)

export default IndexPage
