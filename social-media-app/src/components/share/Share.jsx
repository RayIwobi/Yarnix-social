import './share.css';
//import PermMediaIcon from '@mui/icons-material/PermMedia';
import LabelIcon from '@mui/icons-material/Label';
//import LocationOnIcon from '@mui/icons-material/LocationOn';
//import InsertEmoticonIcon from '@mui/icons-material/InsertEmoticon';
import axios from 'axios'
import { useState } from 'react';


//message notification
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function Share() {
    <LabelIcon style={{ color: 'purple' }} />

    const[file, setFile] = useState('')
    const [description, setDescription] = useState('')
    // const [items, setItems] = useState()

    const handleUpload = () => {
      // const val = e.target.value;
      // if(val === '' || Number(val >=0)){
      //   setPrice(val);
      //   setError('')
      // }else{
      //   setError('stop adding minus or blank entry')
      // }
        // const formdata = new FormData()
        // formdata.append('file', file);
        // formdata.append('description', items.description);
        


         axios.post('https://nediecom.onrender.com/sendinfo', {file, description})
       //axios.post('http://localhost:10000/sendinfo', formdata)
        .then(res => {
          toast.su('product uploaded successfully')
          console.log(res);
        })
        .catch(err => {
          toast.error('something went wrong')
          console.log(err);
        })
    }

  return (
    <div className="feedShare">
         <ToastContainer position="top-right" autoClose={3000} />
        <div className="shareWrapper">
            <div className='shareTop'>
                <img className="shareProfileImg" src="/assets/person/1.jpeg" alt=''/>
                <input
                type='text'
                name='description'
                value={description}
                onChange={(e)=>setDescription(e.target.value)}
                placeholder="what's on your mind?" 
                className='shareInput'/> 
            </div>
            <hr className='shareHr'/>
            <div className='shareButton'>
                <div className='shareOptions'>
                    <div className='shareOption'>
                        {/* <PermMediaIcon className='shareIcon'/> */}
                        
                        <input
                            type='file'
                            id='file'
                            value={file}
                            onChange={(e)=>setFile(e.target.value)}
                            style={{display:'none'}}
                        />
                        <label htmlFor='file'>
                            <img src='/assets/video_picture.png' className='instagramIcon' alt=''/>
                            <span className='shareOptionText'>Photo video</span>
                        </label>
                    </div>
                    <div className='shareOption'>
                        <LabelIcon className='shareIcon'/>
                        <span className='shareOptionText'>Tag</span>
                    </div>
                    <div className='shareOption'>
                        {/* <LocationOnIcon className='shareIcon'/> */}
                        <img src='assets/location.png' className='instagramIcons' alt=''/>
                        <span className='shareOptionText'>Location</span>
                    </div>
                    <div className='shareOption'>
                        {/* <InsertEmoticonIcon className='shareIcon'/> */}
                        <img src='assets/smile.png' className='instagramIcon' alt=''/>
                        <span className='shareOptionText'>Emotions</span>
                    </div>
                </div>
                <button onClick={handleUpload} className="shareButtonside">share</button>
            </div>
        </div>
    </div>
  )
}

export default Share

