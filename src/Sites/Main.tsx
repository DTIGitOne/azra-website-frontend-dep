import { FC, useState } from 'react';
import '../CSS/Main.css';
import Profile from '../Images/Profile.JPG';
import BookComponent from '../Components/Book';
import { openURLInNewWindow } from '../Function/Functions';
import ConferenceCompoenent from '../Components/Conference';
import ScholarIcon from '../SVG/Scholar';
import LinkedInIcon from '../SVG/LinkedInIcon';
import { booksDetails } from '../Data/BookData';
import ImageSlider from '../Components/ImageSlicer';

const Main:FC = () => {
    const [isExpanded, setIsExpanded] = useState(false);

    const handleReadMore = () => {
        setIsExpanded(!isExpanded);
    };

    const recipientEmail = "azraadzajlicdedovic@gmail.com";
    const subject = "Subject Text";
    const body = "Body content goes here"; 

    return (
      <div className="backgroundMain">
        <div id='azraTopBox' className=' aniClass w-full h-screen flex justify-end'>
        <div id='sliderBoxMain' className=' z-10 absolute object-cover overflow-hidden w-full h-screen'><ImageSlider /></div>
        <div id='sliderBoxMainOvershadow' className=' h-screen w-screen absolute z-20' style={{background: "rgba(0, 0, 0, 0.60)"}}></div>
        <div id='intoTextDiv' className=' z-30 flex items-center'>
         <h1 id='titleText' className=' text-white text-right'>
          <p>Adžajlić-Dedović</p>
          <p className=' font-extralight'>Azra's</p>
          <p>Website</p>
         </h1>
       </div>
        </div>
       <div className=' mt-16 aniClass w-full min-h-screen flex flex-col justify-center items-center'>
        <div className='flex flex-col gap-10 items-center justify-center'>
        <div id='profileTopBox' className='flex justify-center'>
          <div id="profilePictureBox">
           <img src={Profile} id="profilePicture" alt="" />
          </div>
          <div className='text-white flex flex-col justify-center gap-4 ml-10 h-auto'>
            <h3 id='nameTextTop' className=' text-6xl'>Azra Adžajlić-Dedović, PhD.</h3>
            <h4 id='nameTextMiddle' className=' text-3xl font-extralight select-none'>Faculty of Criminal Justice Sciences, Sarajevo</h4>
            <div className='divLine2'></div>
            <div className=' flex gap-4'>
             <button style={{width: "35px",height: "35px"}} onClick={() => openURLInNewWindow("https://www.linkedin.com/in/azra-adzajlic-dedovic-20b64361/?originalSubdomain=ba")}>
               <LinkedInIcon />
             </button>
             <button onClick={() => openURLInNewWindow("https://scholar.google.hr/citations?user=_znHaW4AAAAJ&hl=en")}>
               <ScholarIcon />
             </button>
            </div>
          </div>
        </div>
        <div id='bioTextBox' className='h-auto text-white flex justify-center items-center font-light flex-col gap-10'>
           <p style={{textAlign: "justify"}}>
            <span className=' text-2xl font-normal'>B</span>orn on March 5, 1970 in Bijelo Polje, Montenegro. Graduated from the Faculty of Law of the University
            in Sarajevo in 1994. From 1993, voluntarily engaged in defense of Bosnia and Herzegovina in the
            Ministry of Interior, Republic of Bosnia and Herzegovina, where she worked until 1999. Passed civil
            service exam in the Ministry of Justice of Bosnia and Herzegovina in 1996. Received master’s degree in
            2004 at the Faculty of Political Sciences, University in Sarajevo, in the graduate program under the name
            «Bosnia and Herzegovina in a Contemporary World» acquiring the title of a Master of Political Sciences,
            defending the masters thesis titled «Violation of the European Convention for Protection of Human
            Rights and Fundamental Freedoms in Bosnia and Herzegovina from 1992 to 1995». Since 1999 employed
            at the Faculty of Criminal Justice Sciences in Sarajevo, first as an assistant – associate for the specific
            teaching-scientific field of Criminalistics – sex offenses, after which on March 4, 2005 was appointed to
            the position of senior assistant on the course of Victimology at the Department of Criminology. So far
            published four original scientific-professional papers (studies) titled «Prostitution in Bosnia and
            Herzegovina» (2003), «Longs Roads of Justice» (2004), &quot;Domestic Violence Developmental Study in
            Bosnia and Herzegovina&quot; (2005), &quot;Police and Domestic Violence in BiH&quot; (2007), as well as several
            scientific papers in domestic and international journals. Participant of the seminar organized by the
            Center for Security Studies of Bosnia and Herzegovina under the name «Bosnia and Herzegovina and the
            Partnership for Peace», held in Sarajevo in November 2001, «Round Table on Elements of the Security
            Policy: Internal Policy”, held on February 19, 2002 in Banja Luka and the First International Conference
            on Genocide in Srebrenica – Bosnia and Herzegovina, held in Sarajevo on July 11, 2005 organized by the
            Institute for International Crimes and Crimes against Humanity from Sarajevo, University in Sarajevo and
            University in North Carolina, USA. Participated as a lecturer and promoter of the findings of a special
            quantitative research titled «Family Planning and Reproductive Health of Women in Bosnia and
            Herzegovina“ organized and conducted by the Agency for Marketing, Media and Social Research, Prizma
            istraživanja, in early May 2005, for Schering AG Representative Office for BiH. Invited by the NGO
            „Vesta“ from Tuzla to be a lecturer in radio shows and roundtables (Tuzla, Sarajevo and Banja Luka) and
            educate the NGO activists (in November and December 2007) on the legal framework related to
            domestic violence in Bosnia and Herzegovina. From 1999 to 2008, participated in the work of seven
            scientific conferences, of which four international (Slovenia, Turkey, Greece, Serbia). PhD thesis
            defended at the Faculty of Law of the University in Bihać, under the name &quot;JUSTICE FOR VICTIMS UNDER
            THE CONSTITUTION AND INTERNATIONAL LAW – BOSNIA-HERZEGOVINA PARADIGM&quot; in 2010.

            Lives and works in Sarajevo. Married and mother of two sons.
           </p>
        </div>
        </div>
        <div>
        <div
         id='hiddenElementBox'
         className={` text-white w-full justify-center items-center readMoreClass gap-8 transition-all flex-col overflow-auto`}
         style={{ animationName: isExpanded ? "readMore" : "readMoreClose" }}
        >
        <div id='textBoxHidden' className=' w-3/5 flex flex-col gap-4'>
         <h4 className='text-2xl font-medium'>Scientific-research papers (studies) published up to date:</h4>
          <ul className=' flex flex-col gap-2 font-light'>
           <li>
             1. „Prostitucija u Bosni i Hercegovini“ (Prostitution in Bosnia and Herzegovina), project manager and
             author – original scientific-professional paper (study), Faculty of Criminal Justice Sciences, Sarajevo, June
             2003.
            </li>
            <li>
             2. „Dugi putevi pravde“ (Long Roads of Justice), author – case study S.S vs. Republika Srpska, Faculty of
             Criminal Justice Sciences, Sarajevo, May 2004.
            </li>
            <li>
             3. „Nasilje u porodici razvojna studija u BiH“ (Domestic Violence Developmental Study in BiH), project
             manager and author - original scientific-professional paper (study), Faculty of Criminal Justice Sciences,
             Sarajevo, September 2005.
            </li>
            <li>
             4. „Policija i nasilje u porodici“ (Police and Domestic Violence), project manager and author - original
             scientific-professional paper (study), Faculty of Criminal Justice Sciences, Sarajevo, December 2007.
            </li>
            <li>
             5. „Viktimologija“ “ (Victimology), co - author, APERION Univerzity in Banja Luka, 2007.
            </li>
           </ul>
          </div>
          <div id='textBoxHidden2' className=' w-3/5 flex flex-col gap-4'>
           <h4 className=' text-2xl font-medium'>Articles published up to date:</h4>
           <ul className=' flex flex-col gap-2 font-light'>
            <li>
             1. „ Za i protiv legalizacije prostitucije“ (For and against Legalization of Prostitution), author – Securitas
             – Journal for Theory and Practice of Security, Ministry of Interior of FBiH, Year I, number 2, Sarajevo,
             2002.  
            </li>
            <li>
             2. „Prostitucija u Bosni i Hercegovini – pravni aspekt“ (Prostitution in Bosnia and Herzegovina – Legal
             Aspect), author – Criminalistic topics – Journal for Criminalistics, Criminology and Security Studies, Year
             II, number 3-4, Faculty of Criminal Justice Sciences, Sarajevo, 2002.  
            </li>
            <li>
             3. “Nasilje u porodici“ (Domestic Violence), author – Criminalistic topics - Journal for Criminalistics,
             Criminology and Security Studies, Faculty of Criminal Justice Sciences, Year II, number 3-4, Sarajevo
             2002.  
            </li>
            <li>
             4. „Etnička silovanja u službi terora i realizacije političkih ciljeva u Bosni i Hercegovini od 1992. do
             1995. godine“ (Ethnic Rapes in Service of Terror and Implementation of Political Goals in Bosnia and
             Herzegovina from 1992 to 1995), author – Signs of Time, Scientific-Research Institute «IBN SINA», Vol.
             6, number 18/19, Sarajevo, 2003.
            </li>
            <li>
             5. „Organizirani kriminal: prostitucija u Bosni i Hercegovini“ (Organized Crime: Prostitution in Bosnia
             and Herzegovina), author – Criminalistic topics - Journal for Criminalistics, Criminology and Security
             Studies, Year II, number 1-2, Faculty of Criminal Justice Sciences, Sarajevo, 2003.
            </li>
            <li>
             6. „Legalni i nelegalni abortus“ (Legal and Illegal Abortion), author - Criminalistic topics - Journal for
             Criminalistics, Criminology and Security Studies, Faculty of Criminal Justice Sciences, Sarajevo, 2005.
            </li>
            <li>
             7. „Bože pravde za Srebrenicu“ (May God Give Justice to Srebrenica), author – Signs of Time, Scientific-
             Research Institute «IBN SINA», Vol. 8, number 28, Sarajevo, 2006.
            </li>
            <li>
             8. „Prostitucija u Bosni i Hercegovini – pravni i kriminološki aspekt“ (Prostitution in Bosnia and
             Herzegovina – Legal and Criminological aspects), author of the paper presented at  „ PETI SLOVENSKI
             DNEVI VARSTVOSLOVJA, BLED, SLOVENIJA “, June 3-5, 2004.
            </li>
            <li>
             9. „Pravda za žrtve Srebrenice“ (Justice for the Victims of Srebrenica), author of the paper presented at
             the International Conference under the name „GENOCIDE AGAINST BOSNIACS IN THE UN SAFE AREA OF
             SREBRENICA IN JULY 1995 – MESSAGE FOR FUTURE GENERATIONS“, organized by the Institute for
             Research of Crimes against Humanity and International Law in Sarajevo and the University in Sarajevo
             and University in North Carolina, USA, article translated and submitted for publication for the collection
             of papers of this Institute, July 11-15, 2005.
            </li>
            <li>
             10. „Xenophobia and Terrorism – Manipulation of Masses Through Religion and Ethnical Intolerance
             as a Paravane for National (Political) Terrorism“, author of the paper presented and published in the
             collection of papers from „5th EuPRA GENERAL CONFERENCE CHALLENGES OF PEACES AND DEMOCRACY
             IN EUROPE“, SAKARYA UNIVERSITY, SAKARYA, TRUKY, August  21-24, 2007.
            </li>
            <li>
             11. „The Concept of Community Policing in Bosnia and Herzegovina: reality and perspectives“, co-
             author of the paper presented at „7th ANNUAL CONFERENCE OF THE EUROPEN SOCIETY OF
             CRIMINOLOGY“, BOLOGNA, September 26/29, 2007.
            </li>
           </ul>
          </div>
          <div id='textBoxHidden3' className=' w-3/5 flex flex-col gap-4'>
           <h4 className=' text-2xl font-medium'>Work Experience:</h4>
           <ul className=' flex flex-col gap-2 font-light'>
            <li>
             1. MUPBiH  1993. -1999.
            </li>
            <li>
             2. Faculty of Criminal Justice Sciences: July, 1, 1999. Assistant; March 4, 2005. Senior assistant; 2010 Docent
            </li>
            <li>
             3. 2015, professor Victimology and Restorative Justice
            </li>
           </ul>
          </div>
         </div>
         <button className=' mt-16 w-full justify-center text-white font-medium text-xl' onClick={handleReadMore}>
           {isExpanded ? 'Read Less' : 'Read More'}
         </button>
        </div>
       </div>
       <div id='portfolioBox' className=' aniClass min-h-screen w-full flex flex-col items-center justify-center'>
           <h2 id='portfolioText' className=' mt-10 text-white text-8xl font-extralight'>Portfolio</h2>
           <div className='divLine'></div>
           <div className=' w-full flex justify-center items-center flex-col'>
            <div id='booksBox' className='overflow-y-auto mt-8 flex flex-col gap-7'>
            {booksDetails.map((book) => (
              <BookComponent key={book._id} id={book._id} file={book.imageUrl} title={book.title} date={book.date} />
            ))}
            </div>
            <div id='stampWorksDiv' className=' mt-20 flex justify-center items-center flex-col'>
              <h2 id='nextWorkText' className='text-white text-4xl font-medium'>Next works in press</h2>
              <div className=' w-full h-auto flex flex-col gap-6 mt-7'>
                <ConferenceCompoenent title={"FEMINIST AND INTERNATIONAL VICTIMOLOGY ABOUT THE MASS ETNIC RAPES IN THE WAR AGAINST THE REPUBLIC OF BOSNIA AND HERZEGOVINA (1992-1995): THE WAR CRIME OR GENOCID?"} bookURL={"NextBook1.PNG"} />
                <ConferenceCompoenent title={"CULTURE VICTIMOLOGY"} bookURL={"NextBook2.PNG"} />
              </div>
            </div>
           </div>
       </div>
       <div className=' aniClass w-full h-auto flex flex-col gap-20 items-center mt-20'>
         <div className='flex flex-col items-center w-full'>
         <h2 id='conferenceText' className='text-white text-8xl font-extralight'>Conferences</h2>
         <div className='divLine'></div>
          <div id='conferenceBox' className='overflow-y-auto mt-12 flex flex-col gap-8'>
           <ConferenceCompoenent title={"2020 INTERNATIONAL CONFERENCE ON THE RULE OF LAW, VICTIMOLOGY AND RESTORATIVE JUSTICE"} bookURL={"Conference Announcement.pdf"} />
           <ConferenceCompoenent title={"THE SECOND INTERNATIONAL SCIENTIFIC CONFERENCE OF VICTIMOLOGY IN BOSNIA AND HERZEGOVINA"} bookURL={"986615.AMBASADORI_MIRA_U_BOSNI_I_HERCEGOVINI_2.pdf"} />
           <ConferenceCompoenent title={"THE FIRST INTERNATIONAL SCIENTIFIC AND PROFESSIONAL CONFERENCE OF VICTIMOLOGY IN BOSNIA AND HERZEGOVINA"} bookURL={"8507176.pdf"} />
          </div>
         </div>
         <div id='nextConfDiv'>
           <h3 className=' text-center text-white text-4xl font-extralight mb-7'>next conference's</h3>
           <div id='confFillerDiv'>
            <div className='nextConfBox'>
              <div className=' w-full' style={{height: "15%"}}>
                <h3>”Invitation to participate in the IV international scientific conference entitled 'Ambassadors of Peace in Bosnia and Herzegovina 2024„</h3>
                <h5>21-23 March 2025</h5>
              </div>
              <div className=' w-full flex flex-col gap-7' style={{height: "85%"}}>
                <div className=' flex flex-col gap-6'>
                 <h4 className=' text-3xl text-white text-center '>Invitation</h4>
                 <ConferenceCompoenent title={"Ambassadors of Peace Association in Bosnia and Herzegovina 2024 (English)"} bookURL={"Ambassadors of Peace Association in Bosnia and Herzegovina 2024.pdf"} />
                 <ConferenceCompoenent title={"Ambasadori mira u Bosni I Hercegovini 2024 (Bosanski)"} bookURL={"Ambasadori mira u Bosni I Hercegovini 2024.pdf"} />
                </div>
                <div className=' flex flex-col gap-6'>
                 <h4 className=' text-3xl text-white text-center '>Application</h4>
                 <ConferenceCompoenent title={"Conference Application form (English)"} bookURL={"Application+form+conference+2017+(2) (1) (1) (1) (1).doc"} />
                </div>
              </div>
            </div>
           </div>
          </div>
          <div className=' flex flex-col justify-center items-center mb-36'>
           <h3 className=' text-center text-white text-4xl font-extralight'>Interesed in a conference?</h3>
           <button onClick={() => window.location.href = `mailto:${recipientEmail}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`} className="btna">Contact</button>
          </div>
       </div>
      </div>
    );
  }
  
  export default Main;