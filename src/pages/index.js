import BottnaButik from '../images/bottna-butik.jpg'
import BottnaVaror from '../images/bottna-varor.jpg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Layout from '../components/layout'
import { MailchimpForm } from '../components/MailchimpForm'
import React from 'react'
import { BorderSection, Section } from '../components/Section'
import Seo from '../components/seo'
import Marcus from '../images/marcus.jpg'
import Kristofer from '../images/kristofer.jpg'
import Viktor from '../images/viktor.jpg'
import Bottna from '../images/logos/bottna.png'
import Mikrofonden from '../images/logos/mikrofonden.png'

import { faCheckCircle } from '@fortawesome/free-solid-svg-icons'

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
      <div className='center mw9 pt5 pt6-l mb4 mb5-l'>
        <h3 className='f5 fw6 ttu tracke'>Förenade Inköp</h3>
      </div>

      <div className='fl w-100 mh0 mb3 mb4-l'>
        <p className='f2 mt0 db fl w-100 f-subheadline-l lh-copy lh-title-l measure mb4 mb5-l fw6'>
          Kooperativ livsmedelshandel för lokal utveckling.
        </p>
        <p className='fl w-100 w-40-l mh0 mt0 pr0 pr3-l measure lh-copy f5 f4-l mb4 mb3-l'>
          Matproducenter och konsumenter når inte varandra. Det saknas i dagsläget väl utvecklade lokala försäljningskanaler där små producenter kan sälja sina produkter. Befintliga kanaler är ofta dåligt utvecklade eller inte tillgängliga. Gårdsbutiker, REKO-ringar handelsappar och lokala marknader förmår inte på allvar konkurrera med bekvämligheten de stora matkedjorna erbjuder. En nygammal typ av lokal handel behövs för en hållbar utveckling på landsbygden!
        </p>
        <p className='fl w-100 w-40-l mh0 mt0 pr0 pl4-l measure lh-copy f5 f4-l mb3'>
          I kooperativa inköpsföreningar organiserar medlemmarna gemensamma matinköp från grossister och lokala matproducenter. Drivkraften handlar ofta om en vilja att handla mer lokalt, mer ekologiskt eller få tillgång till produkter som annars saknas hos de större matkedjorna. Kooperativt organiserande stärker lokalsamhället och gör det möjligt att driva matbutiker på små orter som ratas av de stora kedjorna.
        </p>
      </div>
      <div className='fl w-100 mh0 mb3 mb4-l'>
        <p className='f4 f3-m f2-l fw7 lh-title mt0 mb0'>
          Förenade Inköp är ett projekt med mål att fler inköpsföreningar och lokala kooperativa matbutiker startas. Vi vill också bidra till att befintliga föreningar inleder djupare samarbeten. Om du deltar i att driva en inköpsförening eller är intresserad av att starta en, anmäl dig som deltagare i projektet!
        </p>
      </div>
    </Section>

    <Section backgroundColor='bg-green' textColor='near-white'>
      <div className='fl w-100 mh0 pv3'>
        <p className='f4 f3-m f2-l fw7 lh-title mt0 mb0'>
          <del><span className='yellow'>Inbjudan!</span> Den 4 april bjuder vi in till uppstartsmöte hos Bottnafjordens Inköpsförening i Bohuslän.</del>
        </p>
        <p className='pt2 f4 f3-m f2-l fw7 lh-title mt0 mb0'>
          Startmötet i Bottna är inställt. Vi flyttar in i cyberrymden och genomför startmöte per video istället. 7 april, kl 15-16. Välkommen! Mötesinbjudan och videolänk finns <a href='https://foodshift.se/c/events/13/l/agenda' className='link underline yellow hover-orange'>i kalendern →</a>
        </p>
      </div>
    </Section>

    <Section>
      <div className='fl w-100 mh0 mt4'>
        <div className='fl w-100 w-50-l mh0 mt0 mb4 mb0-l pr0 pl3-l measure lh-copy f5 f4-l'>
          <h2 className='f3-l f4 lh-copy mt0 mb1'>Är du inte medlem i en förening än?</h2>
          Skulle du vilja starta? Anmäl dig till Förenade Inköp och få hjälp att komma igång.
          <p><FontAwesomeIcon icon={faCheckCircle} /> Få stöd av Coompanion och erfarna föreningsmedlemmar</p>
          <p><FontAwesomeIcon icon={faCheckCircle} /> Delta på träffar och workshops</p>
          <p><FontAwesomeIcon icon={faCheckCircle} /> Kom i kontakt med andra som ligger i startgroparna</p>

        </div>
        <div className='fl w-100 w-50-l mh0 pl5-l measure lh-copy f5 f4-l'>
          <img src={BottnaButik} className='mb4 mb0-l' />
        </div>
      </div>
    </Section>

    <Section>
      <div className='fl w-100 mh0 '>
        <div className='fl w-100 w-50-l mh0 mt0 mb4 mb0-l pr0 pr3-l measure lh-copy f5 f4-l'>
          <h2 className='f3-l f4 lh-copy mt0 mb1'>Är du medlem i en inköpsförening eller kooperativ matbutik?</h2>
          Vi behöver din hjälp och ditt kunnande när vi skriver "En handbok för inköpsföreningar"!
          <p><FontAwesomeIcon icon={faCheckCircle} /> Bygg nätverk med andra inköpsföreningar</p>
          <p><FontAwesomeIcon icon={faCheckCircle} /> Diskutera arbetssätt och rutiner</p>
          <p><FontAwesomeIcon icon={faCheckCircle} /> Dela med dig av dina erfarenheter</p>
        </div>
        <div className='fl w-100 w-50-l mh0 mt0 pl5-l measure lh-copy f5 f4-l '>
          <img src={BottnaVaror} />
        </div>
      </div>
    </Section>

    <Section backgroundColor='bg-green' textColor='near-white'>
      <div className='fl w-100 mh0 mb1 mb2-ns'>
        <p className='lh-copy f4 f3-l fw7 mt0 mb0 pt2 measure'>
          <span className='yellow'>Delta i projektet!</span>{' '}
          Hur mycket du väljer att delta är helt upp dig! Anmäl dig för att bli inbjuden till våra kommunikationskanaler, få uppdateringar från projektet och bli inbjudan till fler träffar.
          <MailchimpForm />
        </p>
      </div>
    </Section>

    <Section>
      <div className='fl w-100 mh0 mb2 mb3-ns pt2'>
        <div className='fl w-100 w-50-l mh0 mt0 pr0 pr3-l measure lh-copy f5 f4-l'>
          <h2 className='f3-l f4 lh-copy mt0 mb1'>Projektets mål</h2>

          <p className='mt2'>Dokumentera befintliga föreningar, skriv och filma! Sammanställ insikter i en <a href='https://handbok.forenadeinkop.se' className='link underline green hover-yellow'>handbok</a> som kan hjälpa nya att komma igång.</p>

          <p className='mt2'>Anordna ett antal träffar, seminarier och "mutual support sessions", både fysiska och digitala, i syfte att stärka samarbete och nätverkande.</p>

          <p className='mt2'>Starta ett nätverk av föreningar som kan leva vidare efter projektets slut. Sätt upp digitala verktyg för att få detta att hända.</p>

          <p className='mt2'>Projektet är initierat av <a href='https://foodshift.se' className='link underline green hover-yellow'>Food Shift</a> och <a href='https://sormland.coompanion.se/' className='link underline green hover-yellow'>Coompanion Sörmland</a>.</p>

          <p className='mt2'>Projekttid: 1 februari till 31 oktober 2020.</p>
        </div>
        <div className='fl w-100 w-50-l mh0 mt0 pr0 pl3-l measure lh-copy f5 f4-l'>
          <h2 className='f3-l f4 lh-copy mt0 mb3'>Datum</h2>
          <CalendarItem date='7' month='apr'>
            <a href='https://foodshift.se/t/forenade-inkop-startmote/283' className='link underline green hover-yellow'>Uppstartsmöte online</a>
            <br />Välkommen!
          </CalendarItem>
          <CalendarItem date='16' month='apr'>
            <a href='https://foodshift.se/t/webbinarie-bottnafjordens-inkopsforening/285' className='link underline green hover-yellow'>Webbinarie: Bottnafjordens Inköpsförening</a>
          </CalendarItem>
          <CalendarItem date='28' month='apr'>
            <a href='https://foodshift.se/t/webbinarie-coompanion/286' className='link underline green hover-yellow'>Webbinarie: Coompanion</a>
          </CalendarItem>
          <CalendarItem date='5' month='maj'>
            <a href='https://foodshift.se/t/webbinarie-mikrofonden/287' className='link underline green hover-yellow'>Webbinarie: Mikrofonden</a>
          </CalendarItem>
        </div>
      </div>
    </Section>
    <BorderSection>
      <div className='fl w-100 mh0 mb2 mb3-ns pt2'>
        <div className='fl w-100 w-50-l mh0 mt0 pr0 pr3-l measure lh-copy f5 f4-l'>
          <h2 className='f3-l f4 lh-copy mt0 mb1'>Om Food Shift</h2>

          <p className='mt2'>Food Shift är ett nätverk, en intresseorganisation och ett öppet kollektiv som hjälper projekt, organisationer och personer att navigera skiftet inom livsmedelssystemet. Vi menar att ett regenerativt förhållningssätt behövs på alla nivåer i samhället. Att sluta förstöra ekosystemen som upprätthåller mänskligt liv på planeten räcker inte. Vi måste återskapa, reparera och regenerera det som gått förlorat!</p>

        </div>
        <div className='fl w-100 w-50-l mh0 mt0 pr0 pl3-l measure lh-copy f5 f4-l'>
          <h2 className='f3-l f4 lh-copy mt0 mb1'>Om Coompanion</h2>

          <p className='mt2'>Coompanion peppar och stödjer när människor förverkligar idéer tillsammans i schysta och demokratiskt ägda företag – kooperativ. Resultatet blir medlemsvärde, sociala innovationer, miljönytta, ökad social tillit och företag som håller i hundra år. Perfekt för er som vill starta ekonomisk förening!</p>
        </div>
      </div>
    </BorderSection>
    <BorderSection>
      <h2 className='f3-l f4 lh-copy mt0 mb4 tc'>Team</h2>

      <div className='fl w-third-l center ph5 pv3'>
        <div className='tc'>
          <img src={Marcus} className='br-100 dib ba b--black-05 w-100 mw5' />
          <h2 className='f3-l f4 lh-copy mt2 mb1'>Marcus Nordgren</h2>
          <p className='mb1 mt0'>076–283 09 23</p>
          <p className='mb1 mt0'><a href='mailto:marcus@foodshift.se' className='link underline green hover-yellow'>marcus@foodshift.se</a></p>
        </div>
      </div>
      <div className='fl w-third-l center ph5 pv3'>
        <div className='tc'>
          <img src={Viktor} className='br-100 dib ba b--black-05 w-100 mw5' />
          <h2 className='f3-l f4 lh-copy mt2 mb1'>Viktor Zaunders</h2>
          <p className='mb1 mt0'>073–390 70 11</p>
          <p className='mb1 mt0'><a href='mailto:zaunders@gmail.com' className='link underline green hover-yellow'>zaunders@gmail.com</a></p>
        </div>
      </div>
      <div className='fl w-third-l center ph5 pv3'>
        <div className='tc'>
          <img src={Kristofer} className='br-100 dib ba b--black-05 w-100 mw5' />
          <h2 className='f3-l f4 lh-copy mt2 mb1'>Kristofer Lund</h2>
          <p className='mb1 mt0'>070–471 04 85</p>
          <p className='mb1 mt0'><a href='mailto:kristofer@foodshift.se' className='link underline green hover-yellow'>kristofer@foodshift.se</a></p>
        </div>
      </div>
    </BorderSection>
    <BorderSection>
      <h2 className='f3-l f4 lh-copy mt0 mb4 tc'>Partners</h2>
      <div className='w-100 tc'>
        <a href='https://mikrofonden.se/' className='link'>
          <img src={Mikrofonden} className='dib w4 o-50 glow' />
        </a>

        <a href='https://mikrofonden.se/' className='link'>
          <img src={Bottna} className='dib w4 pl5 o-50 glow' />
        </a>

      </div>

    </BorderSection>
  </Layout>
)

export default IndexPage
