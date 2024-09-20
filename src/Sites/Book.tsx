import { useParams } from 'react-router-dom';
import '../CSS/BookDetails.css';
import { useEffect, useState } from 'react';
import { openURLInNewWindow } from '../Function/Functions';
import EastIcon from '@mui/icons-material/East';
import { booksDetails } from '../Data/BookData';

const Book: React.FC = () => {
    const { id } = useParams<{ id: string }>();
    const [bookImage, setBookImage] = useState<string>('');
    const [bookTitle, setBookTitle] = useState(""); 
    const [bookAuthors, setBookAuthors] = useState<string[]>([]);
    const [bookDescription, setBookDescription] = useState("");
    const [bookLink, setBookLink] = useState("");

    const bookDetail = booksDetails.find((book) => book._id === id);

    useEffect(() => {
      if (bookDetail) {
        setBookImage(bookDetail.imageUrl);
        setBookTitle(bookDetail.title);
        setBookAuthors(bookDetail.authors);
        setBookDescription(bookDetail.description);
        if (bookDetail.bookLink) {
          setBookLink(bookDetail.bookLink);
        }
      }
    }, [bookDetail]);

    return (
      <div className=" backgroundDetails">
        <div id='backgroundDiv' className=' aniClass flex justify-center items-center'>
          <div id='BookDetailsBox' className=' flex text-white'>
           <div id='imgWidthBox' className=' w-1/3 h-full'>
            <div id='bookPictureBox' style={{borderRadius: "10px"}}>
              <img id='bookPicture' src={bookImage} alt="" />
            </div>
           </div>
           <div id='divBox1' className=' w-2/3 h-full ml-6 flex flex-col gap-8' >
            <div className=' w-full h-auto flex flex-col gap-5 p-2'>
             <h1 id='bookName' className=' text-5xl break-words'>{bookTitle}</h1>
             <h2 id='bookAuthors' className=' text-xl font-light flex flex-col overflow-auto'>
              Author/s:
              <div className='flex h-auto w-auto flex-wrap'>
              {bookAuthors.map((a) => (
                <p className=' font-normal pl-1'>{a},</p>
              ))}
              </div>
             </h2>
             {bookLink ? (
              <a href={`/${encodeURIComponent(bookLink)}`} download>
               <button className='text-xl font-medium'>Download <EastIcon /></button>
              </a>
             ) : null}
            </div>
            <div id='boxParagraph' className=' w-full h-auto overflow-auto'>
             <p id='textParagraph' className=' break-words'>{bookDescription}</p>
            </div>
           </div>
          </div>
        </div>
      </div>
    );
  }
  
  export default Book;