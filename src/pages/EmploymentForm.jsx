import './employmentForm.css';
import TextField from '@mui/material/TextField';

function EmploymentForm() {
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
