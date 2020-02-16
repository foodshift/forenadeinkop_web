import BottnaButik from '../images/bottna-butik.jpg'
import BottnaVaror from '../images/bottna-varor.jpg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Layout from '../components/layout'
import { MailchimpForm } from '../components/MailchimpForm'
import React from 'react'
import Seo from '../components/seo'

import { faCheckCircle } from '@fortawesome/free-solid-svg-icons'

const Section = (props) => {
  const backgroundColor = props.backgroundColor || 'bg-near-white'
  const textColor = props.textColor || 'green'
  return (
    <section className={`${backgroundColor} ${textColor} pv3 pv4-ns`}>
      <div className='ph3 ph5-ns'>
        <div className='cf w-100 center mw8'>
          {props.children}
        </div>
      </div>
    </section>
  )
}

const CalendarItem = (props) => {
  return (
    <div className='cf mb2'>
      <div className='pa3 bg-green near-white mr2 dib v-mid w3'>
        <div className='f5 f4-l fw6 lh-solid tc'>{props.date}</div>
        <div className='f6 f5-l lh-solid tc' style={{ marginTop: -2 }}>{props.month}</div>
      </div>
      <div className='dib v-mid'>
        {props.children}
      </div>
    </div>
  )
}

const IndexPage = () => (
  <Layout>
    <Seo title='Home' />

    <Section textColor='green'>
      <div className='center mw9 pt5 pt6-ns'>
        <h3 className='f5 fw6 ttu tracke'>Förenade Inköp</h3>
      </div>

      <div className='fl w-100 mh0 mb2 mb3-ns'>
        <p className='f3 f2-m mt0 db fl w-100 f-subheadline-l lh-copy lh-title-l measure mb4 fw6'>
          Kooperativ livsmedelshandel för lokal utveckling.
        </p>
        <p className='fl w-100 w-40-l mh0 mt0 pr0 pr3-l measure lh-copy f5 f4-l mb3'>
          Det saknas i dagsläget väl utvecklade lokala försäljningskanaler där små matproducenter kan få avsättning för sina produkter. Befintliga kanaler är ofta dåligt utvecklade eller inte tillgängliga. Nya typer av lokala logistiksystem är en grundförutsättning för hållbar utveckling på landsbygden.
        </p>
        <p className='fl w-100 w-40-l mh0 mt0 pr0 pl3-l measure lh-copy f5 f4-l mb3'>
          I kooperativa inköpsföreningar organiserar medlemmarna gemensamma matinköp från grossister och lokala matproducenter. Drivkraften handlar ofta om en vilja att handla mer lokalt, mer ekologiskt eller få tillgång till produkter som annars saknas hos de större matkedjorna.
        </p>
      </div>
      <div className='fl w-100 mh0 mb2 mb3-ns'>
        <p className='f4 f3-m f2-l fw7 lh-title mt0 mb0'>
          Förenade Inköp är ett projekt med mål att fler inköpsföreningar och lokala kooperativa matbutiker startas. Vi vill också bidra till att befintliga föreningar inleder djupare samarbeten.
        </p>
      </div>
    </Section>

    <Section backgroundColor='bg-green' textColor='near-white'>
      <div className='fl w-100 mh0 mb1 mb2-ns'>
        <p className='f4 f3-m f2-l fw7 lh-title mt0 mb0 pt2'>
          <span className='yellow'>Inbjudan!</span> Den 4 april ordnar vi projektets första träff. Möt andra inköpsföreningar under en heldag i Bohuslän hos Bottnafjordens Inköpsförening. <a href='#' className='link underline yellow hover-orange'>Läs mer</a>
        </p>
      </div>
    </Section>

    <Section>
      <div className='fl w-100 mh0 mt4'>
        <div className='fl w-100 w-50-l mh0 mt0 pr0 pr3-l measure lh-copy f5 f4-l'>
          <img src={BottnaButik} />
        </div>
        <div className='fl w-100 w-50-l mh0 mt0 pr0 pl3-l measure lh-copy f5 f4-l '>
          <img src={BottnaVaror} />
        </div>
      </div>
    </Section>

    <Section>
      <div className='fl w-100 mh0 '>
        <div className='fl w-100 w-50-l mh0 mt0 pr0 pr3-l measure lh-copy f5 f4-l'>
          <h2 className='f3-l f4 lh-copy mt0 mb1'>Är du medlem i en inköpsförening eller kooperativ matbutik?</h2>
          Vi behöver din hjälp och ditt kunnande när vi skriver inköpsföreningarnas handbok!
          <p><FontAwesomeIcon icon={faCheckCircle} /> Bygg nätverk med andra inköpsföreningar</p>
          <p><FontAwesomeIcon icon={faCheckCircle} /> Diskutera arbetssätt och rutiner</p>
          <p><FontAwesomeIcon icon={faCheckCircle} /> Dela med dig av dina erfarenheter</p>
        </div>
        <div className='fl w-100 w-50-l mh0 mt0 pr0 pl3-l measure lh-copy f5 f4-l'>
          <h2 className='f3-l f4 lh-copy mt0 mb1'>Är du inte medlem i en förening än?</h2>
          Skulle du vilja starta? Anmäl dig till Förenade Inköp och få hjälp att komma igång.
          <p><FontAwesomeIcon icon={faCheckCircle} /> Få stöd av Coompanion och erfarna föreningsmedlemmar</p>
          <p><FontAwesomeIcon icon={faCheckCircle} /> Delta på träffar och workshops</p>
          <p><FontAwesomeIcon icon={faCheckCircle} /> Kom i kontakt med andra som ligger i startgroparna</p>

        </div>
      </div>
    </Section>

    <Section backgroundColor='bg-green' textColor='near-white'>
      <div className='fl w-100 mh0 mb1 mb2-ns'>
        <p className='lh-copy f4 f3-l fw7 mt0 mb0 pt2'>
          <span className='yellow'>Anmäl dig till Förenade Inköp!</span>{' '}
            Det kostar inget att delta i projektet, anmälan är inte bindande på något sätt. Anmälan innebär att du blir inbjuden till våra aktiviteter och får tillgång till chatkanalen där du kan kommunicera med övriga deltagare.

          <MailchimpForm />
        </p>
      </div>
    </Section>

    <Section>
      <div className='fl w-100 mh0 mb2 mb3-ns pt2'>
        <div className='fl w-100 w-50-l mh0 mt0 pr0 pr3-l measure lh-copy f5 f4-l'>
          <h2 className='f3-l f4 lh-copy mt0 mb1'>Projektets mål</h2>

          <p className='mt2'>Dokumentera befintliga föreningar, skriv och filma! Sammanställ insikter i en handbok som kan hjälpa nya att komma igång.</p>

          <p className='mt2'>Anordna ett antal träffar, både fysiska och digitala, i syfte att stärka samarbete och nätverkande.</p>

          <p className='mt2'>Starta ett nätverk av föreningar som kan leva vidare efter projektets slut. Sätt upp digitala verktyg för att få detta att hända.</p>

          <p className='mt2'>Projektet är initierat av <a href='https://foodshift.se' className='link underline green hover-yellow'>Food Shift</a> och <a href='https://sormland.coompanion.se/' className='link underline green hover-yellow'>Coompanion Sörmland</a>.</p>

          <p className='mt2'>Projekttid: 1 februari till 31 oktober 2020.</p>
        </div>
        <div className='fl w-100 w-50-l mh0 mt0 pr0 pl3-l measure lh-copy f5 f4-l'>
          <h2 className='f3-l f4 lh-copy mt0 mb3'>Datum</h2>
          <CalendarItem date='4' month='apr'>
            <a href='#' className='link underline green hover-yellow'>Nätverksträff 1</a>
            <br />Plats: Bottnafjordens Inköpsförening
          </CalendarItem>
          <CalendarItem date='7' month='maj'>
            Onlineträff 1
          </CalendarItem>
          <CalendarItem date='4' month='jun'>
            Onlineträff 2
          </CalendarItem>
          <CalendarItem date='13' month='aug'>
            Onlineträff 3
          </CalendarItem>
          <CalendarItem date='10' month='sep'>
            Onlineträff 4
          </CalendarItem>
          <CalendarItem date='25' month='sep'>
            Nätverksträff 2
          </CalendarItem>
        </div>
      </div>
    </Section>

  </Layout>
)

export default IndexPage
