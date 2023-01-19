import React, { useState } from 'react'
import axios from 'axios';


const UploadForm = () => {
  const [file1, setFile1] = useState(null);
  const [file2, setFile2] = useState(null);
  const [file3, setFile3] = useState(null);

  const handleFile1 = (event) => {
    setFile1(event.target.files[0]);
  }

  const handleFile2 = (event) => {
    setFile2(event.target.files[0]);
  }

  const handleFile3 = (event) => {
    setFile3(event.target.files[0]);
  }
  const data = new FormData();
data.append('file1', file1);
data.append('file2', file2);
data.append('file3', file3);

axios.put('/your-api-endpoint/', data)
  .then(response => {
    console.log(response.data);
  })
  .catch(error => {
    console.log(error);
  });
  return (
    <div style={{height:"100vh",width:"100%",display:"flex",justifyContent:"center",alignItems:"center"}}>
      <form>
      <input type="file" onChange={handleFile1} />
      <input type="file" onChange={handleFile2} />
      <input type="file" onChange={handleFile3} />
      </form>
    </div>
  )
}

export default UploadForm
