import './employmentForm.css';
import TextField from '@mui/material/TextField';
import { useParams, useParams } from 'react-router-dom';

function EmploymentForm() {
  const router = useParams();
  const {id} = router;
  console.log(id)
  return (
    <div className='employment'>
      <div className='employementForm_container'>
      <TextField id="outlined-basic" label="نام" variant="outlined" sx={{borderRadius : 15}} />
      <TextField id="outlined-basic" label="نام خانوادگی" variant="outlined" sx={{borderRadius : 15}} />
      <TextField id="outlined-basic" label="شماره تلفن" variant="outlined" sx={{borderRadius : 15}} />
      {/* Input Upload */}
      Upload Input Amir and Button

      
      </div>
    </div>
  )
}

export default EmploymentForm
