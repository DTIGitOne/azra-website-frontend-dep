import { useNavigate } from 'react-router-dom';
import EnterIcon from '../SVG/EnterIcon';
import * as React from 'react';

interface BookProps {
  id: string;
  file: any;
  title: string;
  date: string;
}

const BookComponent: React.FC<BookProps> = ({id, file, title, date}) => {

    const navigate = useNavigate();

    return (
        <button onClick={() => navigate(`/books/${id}`)} className="bookBox" style={{borderRadius: "10px"}}>
        <div id='bookPictureDiv' className=' h-full'>
          <div id="bookPictureBox">
           <img src={file} id="bookPicture" alt="" />
          </div>
         </div>
         <div  id='bookTitleDiv' className=' h-full flex flex-col items-start text-white p-2 pl-4'>
            <div id='bookTitleTop' className=' text-start h-auto overflow-hidden' style={{fontSize: "16px"}}>{title}</div>
            <div className=' mt-1 h-1/6 font-light'>{date}</div>
         </div>
          <div id='bookRedirectIconBox' className=' absolute h-full flex justify-center items-center text-white gap-1 text-xl'>
            <EnterIcon /> Details
          </div>
        </button>
    );
}

export default BookComponent;