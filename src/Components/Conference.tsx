import DownloadIcon from '@mui/icons-material/Download';

interface Conference {
    bookURL: string;
    title: string;
  }

const ConferenceCompoenent: React.FC<Conference> = ({title, bookURL}) => {
    return (
        <a href={bookURL} download={bookURL} className="bookBox" style={{borderRadius: "10px"}}>
        <div id='fillSpaceConf' className=' h-full' style={{width: "10%"}}>
         </div>
         <div id='titleBox' className=' h-full w-full flex flex-col items-start text-white p-2 pl-4' style={{width: "70%"}}>
            <div className=' w-full h-full text-xl overflow-hidden'>{title}</div>
         </div>
          <div id='downloadIconBox' className=' absolute h-full flex justify-center items-center text-white gap-1 text-xl' style={{width: "20%", right: "1%"}}>
            <DownloadIcon fontSize='large' />
          </div>
        </a> 
    );
}

export default ConferenceCompoenent;