import { BorderSection, Section } from "../components/Section";

import { BlogLatest } from "../components/blog";
import Bottna from "../images/logos/bottna.png";
import { Calendar } from "../components/Calendar";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Kristofer from "../images/kristofer.jpg";
import Layout from "../components/layout";
import { Link } from "gatsby";
import { MailchimpForm } from "../components/MailchimpForm";
import Marcus from "../images/marcus.jpg";
import Mikrofonden from "../images/logos/mikrofonden.png";
import React from "react";
import Seo from "../components/seo";
import Viktor from "../images/viktor.jpg";
import Jordbruksfonden from "../images/logos/jordbruksfonden-farg.png";

import { faCheckCircle } from "@fortawesome/free-solid-svg-icons";

import Logo from "../images/fi-logo.inline.svg";

const IndexPage = () => (
  <Layout>
    <Seo title="Lokal mat till alla!" />

    <section className="top-left-white pt5 pt6-l pb4 pb5-l ph3 ph5-ns">
      <div className="cf w-100 center mw9">
        <Logo class="w-30" />

        <div className="fr tk-rift-soft f3 f2-l lh-copy mt4">
          <a
            href="https://foodshift.se/c/forenade-inkop/32"
            className="menu fi-gray mr4 link underline"
            target="_blank"
          >
            FORUM
          </a>
          <a
            href="https://www.youtube.com/playlist?list=PLO7AcO89Czf6ErbDmOYtGfVI1ELgFwvTP"
            className="menu fi-gray mr4 link underline"
            target="_blank"
          >
            VIDEO
          </a>
          <Link to="/blogg" className="menu fi-gray mr4 link underline">
            BLOGG
          </Link>
          <Link to="/karta" className="menu fi-gray link underline">
            KARTA
          </Link>
          <a
            href="https://handbok.forenadeinkop.se"
            className="menu fi-gray mr4 link underline"
            target="_blank"
          >
            HANDBOK
          </a>
        </div>

        <div className="fl w-100 mh0 mb3 mb4-l pt5-l pt4">
          <p className="tk-rift-soft fi-gray f2 mt0 db fl w-100 f-subheadline-l lh-copy lh-title-l measure mb4 mb5-l fw6">
            Kooperativ livsmedelshandel för lokal utveckling
          </p>
          <p className="tk-atten-round-new fi-gray fl w-100 w-40-l mh0 mt0 pr0 pr3-l measure lh-copy f5 f4-l mb4 mb3-l">
            Matproducenter och konsumenter når inte varandra. Det saknas i
            dagsläget väl utvecklade lokala försäljningskanaler där små
            producenter kan sälja sina produkter. Befintliga kanaler är ofta
            dåligt utvecklade eller inte tillgängliga. Gårdsbutiker, REKO-ringar
            handelsappar och lokala marknader förmår inte på allvar konkurrera
            med bekvämligheten de stora matkedjorna erbjuder. En nygammal typ av
            lokal handel behövs för en hållbar utveckling på landsbygden!
          </p>
          <p className="tk-atten-round-new fi-gray  fl w-100 w-40-l mh0 mt0 pr0 pl4-l measure lh-copy f5 f4-l mb3">
            I kooperativa inköpsföreningar organiserar medlemmarna gemensamma
            matinköp från grossister och lokala matproducenter. Drivkraften
            handlar ofta om en vilja att handla mer lokalt, mer ekologiskt eller
            få tillgång till produkter som annars saknas hos de större
            matkedjorna. Kooperativt organiserande stärker lokalsamhället och
            gör det möjligt att driva matbutiker på små orter som ratas av de
            stora kedjorna.
          </p>
        </div>
        <div className="tk-atten-round-new fi-gray fl mw8 mh0 mb3 mb4-l">
          <p className="f4 f3-m f2-l fw7 lh-title mt0 mb0">
            <img src={Jordbruksfonden} className="fr w-30 mw5" />
            Förenade Inköp är ett projekt med mål att fler inköpsföreningar och
            lokala kooperativa matbutiker startas. Vi vill också bidra till att
            befintliga föreningar inleder djupare samarbeten. Om du deltar i att
            driva en inköpsförening eller är intresserad av att starta en, anmäl
            dig som deltagare i projektet! Projektet finansieras av Europeiska
            jordbruksfonden för landsbygdsutveckling.
          </p>
        </div>
      </div>
    </section>

    <Section backgroundColor="bg-fi-green" textColor="near-white">
      <Link to="/blogg" className="tk-rift-soft link underline white">
        <h2 className="f2-l f3 lh-copy mt0 mb3">Blogg</h2>
      </Link>
      <div className="fl w-100 mh0 pt3">
        <BlogLatest />
      </div>
    </Section>

    <Section>
      <div className="bg-fi-pink fl w-100 mh0 mt4">
        <div className="fl w-100 w-40-l mh0 mt0 pr0 pr3-l measure lh-copy f5 f4-l mb4 mb3-l mr4-l">
          <h2 className="tk-rift-soft f2-l f3 lh-copy mt0 mb1">
            Är du inte medlem i en förening än?
          </h2>
          Skulle du vilja starta? Anmäl dig till Förenade Inköp och få hjälp att
          komma igång.
          <p>
            <FontAwesomeIcon icon={faCheckCircle} color="#c57810" /> Få stöd av
            Coompanion och erfarna föreningsmedlemmar
          </p>
          <p>
            <FontAwesomeIcon icon={faCheckCircle} color="#c57810" /> Delta på
            träffar och workshops
          </p>
          <p>
            <FontAwesomeIcon icon={faCheckCircle} color="#c57810" /> Kom i
            kontakt med andra som ligger i startgroparna
          </p>
        </div>
        <div className="fl w-100 w-40-l mh0 mt0 pr0 pr3-l measure lh-copy f5 f4-l mb4 mb3-l">
          <h2 className="tk-rift-soft f2-l f3 lh-copy mt0 mb1">
            Är du medlem i en inköpsförening eller kooperativ matbutik?
          </h2>
          Vi behöver din hjälp och ditt kunnande när vi skriver "En handbok för
          inköpsföreningar"!
          <p>
            <FontAwesomeIcon icon={faCheckCircle} color="#c57810" /> Bygg
            nätverk med andra inköpsföreningar
          </p>
          <p>
            <FontAwesomeIcon icon={faCheckCircle} color="#c57810" /> Diskutera
            arbetssätt och rutiner
          </p>
          <p>
            <FontAwesomeIcon icon={faCheckCircle} color="#c57810" /> Dela med
            dig av dina erfarenheter
          </p>
        </div>
      </div>
    </Section>

    <Section backgroundColor="bg-fi-green" textColor="white">
      <div className="fl w-100 mh0 mb1 mb2-ns">
        <h2 className="tk-rift-soft f2-l f3 lh-copy mt0 mb1">
          Delta i projektet!
        </h2>
        <p className="lh-copy f4 f3-l fw7 mt0 mb0 pt2 measure">
          Hur mycket du väljer att delta är helt upp dig! Anmäl dig för att bli
          inbjuden till våra kommunikationskanaler, få uppdateringar från
          projektet och bli inbjudan till fler träffar.
          <MailchimpForm />
        </p>
      </div>
    </Section>

    <Section backgroundColor="bg-white">
      <div className="fl w-100 mh0 mb2 mb3-ns pt2">
        <div className="fl w-100 w-50-l mh0 mt0 pr0 pr3-l measure lh-copy f5 f4-l">
          <h2 className="tk-rift-soft f2-l f3 lh-copy mt0 mb1">
            Projektets mål
          </h2>

          <p className="mt2">
            Dokumentera befintliga föreningar, skriv och filma! Sammanställ
            insikter i en{" "}
            <a href="https://handbok.forenadeinkop.se" className="link fi-link">
              handbok
            </a>{" "}
            som kan hjälpa nya att komma igång.
          </p>

          <p className="mt2">
            Anordna ett antal träffar, seminarier och "mutual support sessions",
            både fysiska och digitala, i syfte att stärka samarbete och
            nätverkande.
          </p>

          <p className="mt2">
            Starta ett nätverk av föreningar som kan leva vidare efter
            projektets slut. Sätt upp digitala verktyg för att få detta att
            hända.
          </p>

          <p className="mt2">
            Projektet är initierat av{" "}
            <a href="https://foodshift.se" className="link fi-link">
              Food Shift
            </a>{" "}
            och{" "}
            <a href="https://sormland.coompanion.se/" className="link fi-link">
              Coompanion Sörmland
            </a>
            .
          </p>

          <p className="mt2">Projekttid: 1 februari till 31 oktober 2020.</p>
        </div>
        <div className="fl w-100 w-50-l mh0 mt0 pr0 pl3-l measure lh-copy f5 f4-l">
          <h2 className="tk-rift-soft f2-l f3 lh-copy mt0 mb1">Datum</h2>
          <Calendar />
        </div>
      </div>
    </Section>
    <Section>
      <div className="fl w-100 mh0 mb2 mb3-ns pt2">
        <div className="fl w-100 w-50-l mh0 mt0 pr0 pr3-l measure lh-copy f5 f4-l">
          <h2 className="tk-rift-soft f2-l f3 lh-copy mt0 mb1">
            Om Food Shift
          </h2>

          <p className="mt2">
            Food Shift är ett nätverk, en intresseorganisation och ett öppet
            kollektiv som hjälper projekt, organisationer och personer att
            navigera skiftet inom livsmedelssystemet. Vi menar att ett
            regenerativt förhållningssätt behövs på alla nivåer i samhället. Att
            sluta förstöra ekosystemen som upprätthåller mänskligt liv på
            planeten räcker inte. Vi måste återskapa, reparera och regenerera
            det som gått förlorat!
          </p>
        </div>
        <div className="fl w-100 w-50-l mh0 mt0 pr0 pl3-l measure lh-copy f5 f4-l">
          <h2 className="tk-rift-soft f2-l f3 lh-copy mt0 mb1">
            Om Coompanion
          </h2>

          <p className="mt2">
            Coompanion peppar och stödjer när människor förverkligar idéer
            tillsammans i schysta och demokratiskt ägda företag – kooperativ.
            Resultatet blir medlemsvärde, sociala innovationer, miljönytta, ökad
            social tillit och företag som håller i hundra år. Perfekt för er som
            vill starta ekonomisk förening!
          </p>
        </div>
      </div>
    </Section>

    <section className="bg-fi-yellow bg-white-splash-center fi-gray pv5">
      <div className="ph3 ph5-ns">
        <div className="cf w-100 center mw9 tk-atten-round-new">
          <h2 className="tk-rift-soft f2-l f3 lh-copy mt0 mb1">TEAMET</h2>
          <div className="w-100 tc">
            <div className="tc dib ph4 pv2">
              <img src={Marcus} className="br-100 dib ba b--black-05 w4" />
              <h2 className="f4-l f5 lh-copy mt2 mb1">Marcus Nordgren</h2>
              <p className="mb1 mt0">076–283 09 23</p>
              <p className="mb1 mt0">
                <a href="mailto:marcus@foodshift.se" className="link fi-link">
                  marcus@foodshift.se
                </a>
              </p>
            </div>

            <div className="tc dib ph4 pv2">
              <img src={Viktor} className="br-100 dib ba b--black-05 w4" />
              <h2 className="f4-l f5 lh-copy mt2 mb1">Viktor Zaunders</h2>
              <p className="mb1 mt0">073–390 70 11</p>
              <p className="mb1 mt0">
                <a href="mailto:zaunders@gmail.com" className="link fi-link">
                  zaunders@gmail.com
                </a>
              </p>
            </div>

            <div className="tc dib ph4 pv2">
              <img src={Kristofer} className="br-100 dib ba b--black-05 w4" />
              <h2 className="f4-l f5 lh-copy mt2 mb1">Kristofer Lund</h2>
              <p className="mb1 mt0">070–471 04 85</p>
              <p className="mb1 mt0">
                <a
                  href="mailto:kristofer@foodshift.se"
                  className="link fi-link"
                >
                  kristofer@foodshift.se
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <Section>
      <h2 className="tk-rift-soft f2-l f3 lh-copy mt0 mb1">Partners</h2>
      <div className="w-100 tc">
        <a href="https://mikrofonden.se/" className="link">
          <img src={Mikrofonden} className="dib w4 ph4 pv2 o-50 glow" />
        </a>

        <a href="https://mikrofonden.se/" className="link">
          <img src={Bottna} className="dib w4 ph4 pv2 o-50 glow" />
        </a>
      </div>
    </Section>
  </Layout>
);

export default IndexPage;
