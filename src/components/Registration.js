// import * as React from 'react';
// import Box from '@mui/material/Box';
// import './Registration.css';
// import TextField from '@mui/material/TextField';
// import { Link, useNavigate } from 'react-router-dom';
// import { useState } from 'react';
// import axios from 'axios';
// import Button from '@mui/material/Button';
// import Dialog from '@mui/material/Dialog';
// import DialogActions from '@mui/material/DialogActions';
// import DialogContent from '@mui/material/DialogContent';
// import DialogContentText from '@mui/material/DialogContentText';
// import DialogTitle from '@mui/material/DialogTitle';
// import CheckCircleIcon from '@mui/icons-material/CheckCircle';
// import Typography from '@mui/material/Typography';
// import { styled } from '@mui/material/styles';

// const StyledDialog = styled(Dialog)(({ theme }) => ({
//   '& .MuiPaper-root': {
//     padding: theme.spacing(3),
//     borderRadius: theme.spacing(1.5),
//     textAlign: 'center',
//   },
// }));

// const StyledDialogTitle = styled(DialogTitle)(({ theme }) => ({
//   display: 'flex',
//   alignItems: 'center',
//   justifyContent: 'center',
//   '& .MuiSvgIcon-root': {
//     fontSize: '3rem',
//     color: theme.palette.success.main,
//     marginRight: theme.spacing(1),
//   },
// }));

// const StyledDialogContent = styled(DialogContent)(({ theme }) => ({
//   marginTop: theme.spacing(2),
//   marginBottom: theme.spacing(2),
// }));

// export default function Register() {
//   const [name, setName] = useState('');
//   const [email, setEmail] = useState('');
//   const [pass, setPass] = useState('');
//   const [confirmPass, setConfirmPass] = useState('');
//   const [open, setOpen] = useState(false); // State to control the dialog visibility

//   const navigate = useNavigate(); // Initialize useNavigate

//   const handleSubmit = async (e) => {
//     e.preventDefault(); // Prevent default form submission

//     // Validate fields
//     if (!name || !email || !pass || !confirmPass) {
//       alert('Please fill out all fields.');
//       return;
//     }

//     if (pass !== confirmPass) {
//       alert('Passwords do not match.');
//       return;
//     }

//     try {
//       await axios.post('http://localhost:3000/users', {
//         name,
//         email,
//         pass
//       });
//       console.log('User registered successfully');
//       setOpen(true); // Open the dialog on successful registration
//     } catch (error) {
//       console.error('Error registering user:', error);
//       // Handle other errors if needed
//     }
//   };

//   const handleClose = () => {
//     setOpen(false);
//     navigate('/home'); // Redirect to /home after closing the dialog
//   };

//   return (
//     <div className='REG'>
//       <Box
//         className='aa'
//         component="form"
//         sx={{
//           '& .MuiTextField-root': { m: 1, width: '35ch' },
//         }}
//         noValidate
//         autoComplete="off"
//       >
//         <div className='icon'>
//           <h1>Registration Page</h1>
//         </div>
//         <div id="a">
//           {/* <TextField
//             required
//             id="outlined-required"
//             label="Username"
//             value={name}
//             onChange={(e) => setName(e.target.value)}
//           />
//           <br />
//           <TextField
//             required
//             id="outlined-required"
//             label="Email Id"
//             value={email}
//             onChange={(e) => setEmail(e.target.value)}
//           />
//           <br />
//           <TextField
//             required
//             id="outlined-password-input"
//             label="Password"
//             value={pass}
//             onChange={(e) => setPass(e.target.value)}
//             type="password"
//             autoComplete="current-password"
//           />
//           <br />
//           <TextField
//             required
//             id="outlined-password-input"
//             label="Confirm Password"
//             value={confirmPass}
//             onChange={(e) => setConfirmPass(e.target.value)}
//             type="password"
//             autoComplete="current-password"
//           /> */}
//           <TextField
//   required
//   id="username"
//   label="Username"
//   value={name}
//   onChange={(e) => setName(e.target.value)}
// />
// <br />
// <TextField
//   required
//   id="email"
//   label="Email Id"
//   value={email}
//   onChange={(e) => setEmail(e.target.value)}
// />
// <br />
// <TextField
//   required
//   id="password"
//   label="Password"
//   value={pass}
//   onChange={(e) => setPass(e.target.value)}
//   type="password"
//   autoComplete="current-password"
// />
// <br />
// <TextField
//   required
//   id="confirm-password"
//   label="Confirm Password"
//   value={confirmPass}
//   onChange={(e) => setConfirmPass(e.target.value)}
//   type="password"
//   autoComplete="current-password"
// />

//           <br />
//           <br />
//           <Button
//             onClick={handleSubmit}
//             variant='contained'
//             color='inherit'
//             className='abc'
//           >
//             Register
//           </Button>
//           <br /><br />
//           <h4>Already have an Account
//             <Link to="/login">Sign In</Link>
//           </h4>
//         </div>
//       </Box>

//       <StyledDialog
//         open={open}
//         onClose={handleClose}
//       >
//         <StyledDialogTitle>
//           <CheckCircleIcon />
//           Registration Successful
//         </StyledDialogTitle>
//         <StyledDialogContent>
//           <DialogContentText>
//             Welcome to Green Paradise!<br></br> "The journey of a thousand miles begins with a single step." - Lao Tzu
//           </DialogContentText>
//         </StyledDialogContent>
//         <DialogActions>
//           <Button onClick={handleClose} color="primary" variant="contained">
//             Continue
//           </Button>
//         </DialogActions>
//       </StyledDialog>
//     </div>
//   );
// }

// import * as React from 'react';
// import Box from '@mui/material/Box';
// import './Registration.css';
// import TextField from '@mui/material/TextField';
// import { Link, useNavigate } from 'react-router-dom';
// import { useState } from 'react';
// import axios from 'axios';
// import Button from '@mui/material/Button';
// import Dialog from '@mui/material/Dialog';
// import DialogActions from '@mui/material/DialogActions';
// import DialogContent from '@mui/material/DialogContent';
// import DialogContentText from '@mui/material/DialogContentText';
// import DialogTitle from '@mui/material/DialogTitle';
// import CheckCircleIcon from '@mui/icons-material/CheckCircle';
// import Typography from '@mui/material/Typography';
// import { styled } from '@mui/material/styles';

// const isPasswordValid = (password) => {
//   const pattern = /^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*[@#$%^&+=])(?=\S+$).{8,20}$/;
//   return pattern.test(password);
// };

// const StyledDialog = styled(Dialog)(({ theme }) => ({
//   '& .MuiPaper-root': {
//     padding: theme.spacing(3),
//     borderRadius: theme.spacing(1.5),
//     textAlign: 'center',
//   },
// }));

// const StyledDialogTitle = styled(DialogTitle)(({ theme }) => ({
//   display: 'flex',
//   alignItems: 'center',
//   justifyContent: 'center',
//   '& .MuiSvgIcon-root': {
//     fontSize: '3rem',
//     color: theme.palette.success.main,
//     marginRight: theme.spacing(1),
//   },
// }));

// const StyledDialogContent = styled(DialogContent)(({ theme }) => ({
//   marginTop: theme.spacing(2),
//   marginBottom: theme.spacing(2),
// }));

// export default function Register() {
//   const [name, setName] = useState('');
//   const [email, setEmail] = useState('');
//   const [pass, setPass] = useState('');
//   const [confirmPass, setConfirmPass] = useState('');
//   const [open, setOpen] = useState(false);

//   const navigate = useNavigate();

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     if (!name || !email || !pass || !confirmPass) {
//       alert('Please fill out all fields.');
//       return;
//     }

//     if (pass !== confirmPass) {
//       alert('Passwords do not match.');
//       return;
//     }

//     if (!isPasswordValid(pass)) {
//       alert('Password must be between 8 and 20 characters long, and include at least one number, one uppercase letter, one lowercase letter, and one special character.');
//       return;
//     }

//     try {
//       const response = await axios.post('http://localhost:3000/users', {
//         name,
//         email,
//         pass
//       });
//       console.log('User registered successfully', response.data);
//       setOpen(true);
//     } catch (error) {
//       console.error('Error registering user:', error.response?.data || error.message);
//       alert('Error registering user. Please try again later.');
//     }
//   };

//   const handleClose = () => {
//     setOpen(false);
//     navigate('/home');
//   };

//   return (
//     <div className='REG'>
//       <Box
//         className='aa'
//         component="form"
//         sx={{
//           '& .MuiTextField-root': { m: 1, width: '35ch' },
//         }}
//         noValidate
//         autoComplete="off"
//       >
//         <div className='icon'>
//           <h1>Registration Page</h1>
//         </div>
//         <div id="a">
//           <TextField
//             required
//             id="outlined-required"
//             label="Username"
//             value={name}
//             onChange={(e) => setName(e.target.value)}
//           />
//           <br />
//           <TextField
//             required
//             id="outlined-required"
//             label="Email Id"
//             value={email}
//             onChange={(e) => setEmail(e.target.value)}
//           />
//           <br />
//           <TextField
//             required
//             id="outlined-password-input"
//             label="Password"
//             value={pass}
//             onChange={(e) => setPass(e.target.value)}
//             type="password"
//             autoComplete="current-password"
//           />
//           <br />
//           <TextField
//             required
//             id="outlined-password-input"
//             label="Confirm Password"
//             value={confirmPass}
//             onChange={(e) => setConfirmPass(e.target.value)}
//             type="password"
//             autoComplete="current-password"
//           />
//           <br />
//           <br />
//           <Button
//             onClick={handleSubmit}
//             variant='contained'
//             color='inherit'
//             className='abc'
//           >
//             Register
//           </Button>
//           <br /><br />
//           <h4>Already have an Account
//             <Link to="/login">Sign In</Link>
//           </h4>
//         </div>
//       </Box>

//       <StyledDialog
//         open={open}
//         onClose={handleClose}
//       >
//         <StyledDialogTitle>
//           <CheckCircleIcon />
//           Registration Successful
//         </StyledDialogTitle>
//         <StyledDialogContent>
//           <DialogContentText>
//             Welcome to Green Paradise!<br /> "The journey of a thousand miles begins with a single step." - Lao Tzu
//           </DialogContentText>
//         </StyledDialogContent>
//         <DialogActions>
//           <Button onClick={handleClose} color="primary" variant="contained">
//             Continue
//           </Button>
//         </DialogActions>
//       </StyledDialog>
//     </div>
//   );
// }

// import * as React from 'react';
// import Box from '@mui/material/Box';
// import './Registration.css';
// import TextField from '@mui/material/TextField';
// import { Link, useNavigate } from 'react-router-dom';
// import { useState } from 'react';
// import axios from 'axios';
// import Button from '@mui/material/Button';
// import Dialog from '@mui/material/Dialog';
// import DialogActions from '@mui/material/DialogActions';
// import DialogContent from '@mui/material/DialogContent';
// import DialogContentText from '@mui/material/DialogContentText';
// import DialogTitle from '@mui/material/DialogTitle';
// import CheckCircleIcon from '@mui/icons-material/CheckCircle';
// import Typography from '@mui/material/Typography';
// import { styled } from '@mui/material/styles';

// const isPasswordValid = (password) => {
//   const pattern = /^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*[@#$%^&+=])(?=\S+$).{8,20}$/;
//   return pattern.test(password);
// };

// const StyledDialog = styled(Dialog)(({ theme }) => ({
//   '& .MuiPaper-root': {
//     padding: theme.spacing(3),
//     borderRadius: theme.spacing(1.5),
//     textAlign: 'center',
//   },
// }));

// const StyledDialogTitle = styled(DialogTitle)(({ theme }) => ({
//   display: 'flex',
//   alignItems: 'center',
//   justifyContent: 'center',
//   '& .MuiSvgIcon-root': {
//     fontSize: '3rem',
//     color: theme.palette.success.main,
//     marginRight: theme.spacing(1),
//   },
// }));

// const StyledDialogContent = styled(DialogContent)(({ theme }) => ({
//   marginTop: theme.spacing(2),
//   marginBottom: theme.spacing(2),
// }));

// export default function Register() {
//   const [name, setName] = useState('');
//   const [email, setEmail] = useState('');
//   const [pass, setPass] = useState('');
//   const [confirmPass, setConfirmPass] = useState('');
//   const [open, setOpen] = useState(false);

//   const navigate = useNavigate();

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     if (!name || !email || !pass || !confirmPass) {
//       alert('Please fill out all fields.');
//       return;
//     }

//     if (pass !== confirmPass) {
//       alert('Passwords do not match.');
//       return;
//     }

//     if (!isPasswordValid(pass)) {
//       alert('Password must be between 8 and 20 characters long, and include at least one number, one uppercase letter, one lowercase letter, and one special character.');
//       return;
//     }

//     try {
//       const response = await axios.post('http://localhost:3000/users', {
//         name,
//         email,
//         pass
//       });
//       console.log('User registered successfully', response.data);
//       setOpen(true);
//     } catch (error) {
//       console.error('Error registering user:', error.response?.data || error.message);
//       alert('Error registering user. Please try again later.');
//     }
//   };

//   const handleClose = () => {
//     setOpen(false);
//     navigate('/home');
//   };

//   return (
//     <div className='REG'>
//       <Box
//         className='aa'
//         component="form"
//         sx={{
//           '& .MuiTextField-root': { m: 1, width: '35ch' },
//         }}
//         noValidate
//         autoComplete="off"
//       >
//         <div className='icon'>
//           <h1>Registration Page</h1>
//         </div>
//         <div id="a">
//           <TextField
//             required
//             id="outlined-required"
//             label="Username"
//             value={name}
//             onChange={(e) => setName(e.target.value)}
//           />
//           <br />
//           <TextField
//             required
//             id="outlined-required"
//             label="Email Id"
//             value={email}
//             onChange={(e) => setEmail(e.target.value)}
//           />
//           <br />
//           <TextField
//             required
//             id="outlined-password-input"
//             label="Password"
//             value={pass}
//             onChange={(e) => setPass(e.target.value)}
//             type="password"
//             autoComplete="current-password"
//           />
//           <br />
//           <TextField
//             required
//             id="outlined-password-input"
//             label="Confirm Password"
//             value={confirmPass}
//             onChange={(e) => setConfirmPass(e.target.value)}
//             type="password"
//             autoComplete="current-password"
//           />
//           <br />
//           <br />
//           <Button
//             onClick={handleSubmit}
//             variant='contained'
//             color='inherit'
//             className='abc'
//           >
//             Register
//           </Button>
//           <br /><br />
//           <h4>Already have an Account
//             <Link to="/login">Sign In</Link>
//           </h4>
//         </div>
//       </Box>

//       <StyledDialog
//         open={open}
//         onClose={handleClose}
//       >
//         <StyledDialogTitle>
//           <CheckCircleIcon />
//           Registration Successful
//         </StyledDialogTitle>
//         <StyledDialogContent>
//           <DialogContentText>
//             Welcome to Green Paradise!<br /> "The journey of a thousand miles begins with a single step." - Lao Tzu
//           </DialogContentText>
//         </StyledDialogContent>
//         <DialogActions>
//           <Button onClick={handleClose} color="primary" variant="contained">
//             Continue
//           </Button>
//         </DialogActions>
//       </StyledDialog>
//     </div>
//   );
// }
// import * as React from 'react';
// import Box from '@mui/material/Box';
// import './Registration.css';
// import TextField from '@mui/material/TextField';
// import { Link, useNavigate } from 'react-router-dom';
// import { useState } from 'react';
// import axios from 'axios';
// import Button from '@mui/material/Button';
// import Dialog from '@mui/material/Dialog';
// import DialogActions from '@mui/material/DialogActions';
// import DialogContent from '@mui/material/DialogContent';
// import DialogContentText from '@mui/material/DialogContentText';
// import DialogTitle from '@mui/material/DialogTitle';
// import CheckCircleIcon from '@mui/icons-material/CheckCircle';
// import Typography from '@mui/material/Typography';
// import { styled } from '@mui/material/styles';

// const isPasswordValid = (password) => {
//   const pattern = /^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*[@#$%^&+=])(?=\S+$).{8,20}$/;
//   return pattern.test(password);
// };

// const StyledDialog = styled(Dialog)(({ theme }) => ({
//   '& .MuiPaper-root': {
//     padding: theme.spacing(3),
//     borderRadius: theme.spacing(1.5),
//     textAlign: 'center',
//   },
// }));

// const StyledDialogTitle = styled(DialogTitle)(({ theme }) => ({
//   display: 'flex',
//   alignItems: 'center',
//   justifyContent: 'center',
//   '& .MuiSvgIcon-root': {
//     fontSize: '3rem',
//     color: theme.palette.success.main,
//     marginRight: theme.spacing(1),
//   },
// }));

// const StyledDialogContent = styled(DialogContent)(({ theme }) => ({
//   marginTop: theme.spacing(2),
//   marginBottom: theme.spacing(2),
// }));

// export default function Register() {
//   const [name, setName] = useState('');
//   const [email, setEmail] = useState('');
//   const [pass, setPass] = useState('');
//   const [confirmPass, setConfirmPass] = useState('');
//   const [open, setOpen] = useState(false);

//   const navigate = useNavigate();

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     if (!name || !email || !pass || !confirmPass) {
//       alert('Please fill out all fields.');
//       return;
//     }

//     if (pass !== confirmPass) {
//       alert('Passwords do not match.');
//       return;
//     }

//     if (!isPasswordValid(pass)) {
//       alert('Password must be between 8 and 20 characters long, and include at least one number, one uppercase letter, one lowercase letter, and one special character.');
//       return;
//     }

//     try {
//       await axios.post('http://localhost:3000/users', {
//         name,
//         email,
//         pass
//       });
//       console.log('User registered successfully');
//       setOpen(true);
//     } catch (error) {
//       console.error('Error registering user:', error);
//       alert('Error registering user. Please try again later.');
//     }
//   };

//   const handleClose = () => {
//     setOpen(false);
//     navigate('/home');
//   };

//   return (
//     <div className='REG'>
//       <Box
//         className='aa'
//         component="form"
//         sx={{
//           '& .MuiTextField-root': { m: 1, width: '35ch' },
//         }}
//         noValidate
//         autoComplete="off"
//       >
//         <div className='icon'>
//           <h1>Registration Page</h1>
//         </div>
//         <div id="a">
//           <TextField
//             required
//             id="outlined-required"
//             label="Username"
//             value={name}
//             onChange={(e) => setName(e.target.value)}
//           />
//           <br />
//           <TextField
//             required
//             id="outlined-required"
//             label="Email Id"
//             value={email}
//             onChange={(e) => setEmail(e.target.value)}
//           />
//           <br />
//           <TextField
//             required
//             id="outlined-password-input"
//             label="Password"
//             value={pass}
//             onChange={(e) => setPass(e.target.value)}
//             type="password"
//             autoComplete="current-password"
//           />
//           <br />
//           <TextField
//             required
//             id="outlined-password-input"
//             label="Confirm Password"
//             value={confirmPass}
//             onChange={(e) => setConfirmPass(e.target.value)}
//             type="password"
//             autoComplete="current-password"
//           />
//           <br />
//           <br />
//           <Button
//             onClick={handleSubmit}
//             variant='contained'
//             color='inherit'
//             className='abc'
//           >
//             Register
//           </Button>
//           <br /><br />
//           <h4>Already have an Account
//             <Link to="/login">Sign In</Link>
//           </h4>
//         </div>
//       </Box>

//       <StyledDialog
//         open={open}
//         onClose={handleClose}
//       >
//         <StyledDialogTitle>
//           <CheckCircleIcon />
//           Registration Successful
//         </StyledDialogTitle>
//         <StyledDialogContent>
//           <DialogContentText>
//             Welcome to Green Paradise!<br /> "The journey of a thousand miles begins with a single step." - Lao Tzu
//           </DialogContentText>
//         </StyledDialogContent>
//         <DialogActions>
//           <Button onClick={handleClose} color="primary" variant="contained">
//             Continue
//           </Button>
//         </DialogActions>
//       </StyledDialog>
//     </div>
//   );
// }
// import * as React from 'react';
// import Box from '@mui/material/Box';
// import './Registration.css';
// import TextField from '@mui/material/TextField';
// import { Link, useNavigate } from 'react-router-dom';
// import { useState } from 'react';
// import axios from 'axios';
// import Button from '@mui/material/Button';
// import Dialog from '@mui/material/Dialog';
// import DialogActions from '@mui/material/DialogActions';
// import DialogContent from '@mui/material/DialogContent';
// import DialogContentText from '@mui/material/DialogContentText';
// import DialogTitle from '@mui/material/DialogTitle';
// import CheckCircleIcon from '@mui/icons-material/CheckCircle';
// import Typography from '@mui/material/Typography';
// import { styled } from '@mui/material/styles';

// const isPasswordValid = (password) => {
//   const pattern = /^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*[@#$%^&+=])(?=\S+$).{8,20}$/;
//   return pattern.test(password);
// };

// const StyledDialog = styled(Dialog)(({ theme }) => ({
//   '& .MuiPaper-root': {
//     padding: theme.spacing(3),
//     borderRadius: theme.spacing(1.5),
//     textAlign: 'center',
//   },
// }));

// const StyledDialogTitle = styled(DialogTitle)(({ theme }) => ({
//   display: 'flex',
//   alignItems: 'center',
//   justifyContent: 'center',
//   '& .MuiSvgIcon-root': {
//     fontSize: '3rem',
//     color: theme.palette.success.main,
//     marginRight: theme.spacing(1),
//   },
// }));

// const StyledDialogContent = styled(DialogContent)(({ theme }) => ({
//   marginTop: theme.spacing(2),
//   marginBottom: theme.spacing(2),
// }));

// export default function Register() {
//   const [name, setName] = useState('');
//   const [email, setEmail] = useState('');
//   const [pass, setPass] = useState('');
//   const [confirmPass, setConfirmPass] = useState('');
//   const [open, setOpen] = useState(false);

//   const navigate = useNavigate();

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     if (!name || !email || !pass || !confirmPass) {
//       alert('Please fill out all fields.');
//       return;
//     }

//     if (pass !== confirmPass) {
//       alert('Passwords do not match.');
//       return;
//     }

//     if (!isPasswordValid(pass)) {
//       alert('Password must be between 8 and 20 characters long, and include at least one number, one uppercase letter, one lowercase letter, and one special character.');
//       return;
//     }

//     try {
//       const response = await axios.post('http://localhost:3000/users', {
//         name,
//         email,
//         pass
//       });
//       console.log('User registered successfully', response.data);
//       setOpen(true);
//     } catch (error) {
//       console.error('Error registering user:', error.response?.data || error.message);
//       alert('Error registering user. Please try again later.');
//     }
//   };

//   const handleClose = () => {
//     setOpen(false);
//     navigate('/home');
//   };

//   return (
//     <div className='REG'>
//       <Box
//         className='aa'
//         component="form"
//         sx={{
//           '& .MuiTextField-root': { m: 1, width: '35ch' },
//         }}
//         noValidate
//         autoComplete="off"
//       >
//         <div className='icon'>
//           <h1>Registration Page</h1>
//         </div>
//         <div id="a">
//           <TextField
//             required
//             id="outlined-required"
//             label="Username"
//             value={name}
//             onChange={(e) => setName(e.target.value)}
//           />
//           <br />
//           <TextField
//             required
//             id="outlined-required"
//             label="Email Id"
//             value={email}
//             onChange={(e) => setEmail(e.target.value)}
//           />
//           <br />
//           <TextField
//             required
//             id="outlined-password-input"
//             label="Password"
//             value={pass}
//             onChange={(e) => setPass(e.target.value)}
//             type="password"
//             autoComplete="current-password"
//           />
//           <br />
//           <TextField
//             required
//             id="outlined-password-input"
//             label="Confirm Password"
//             value={confirmPass}
//             onChange={(e) => setConfirmPass(e.target.value)}
//             type="password"
//             autoComplete="current-password"
//           />
//           <br />
//           <br />
//           <Button
//             onClick={handleSubmit}
//             variant='contained'
//             color='inherit'
//             className='abc'
//           >
//             Register
//           </Button>
//           <br /><br />
//           <h4>Already have an Account
//             <Link to="/login">Sign In</Link>
//           </h4>
//         </div>
//       </Box>

//       <StyledDialog
//         open={open}
//         onClose={handleClose}
//       >
//         <StyledDialogTitle>
//           <CheckCircleIcon />
//           Registration Successful
//         </StyledDialogTitle>
//         <StyledDialogContent>
//           <DialogContentText>
//             Welcome to Green Paradise!<br /> "The journey of a thousand miles begins with a single step." - Lao Tzu
//           </DialogContentText>
//         </StyledDialogContent>
//         <DialogActions>
//           <Button onClick={handleClose} color="primary" variant="contained">
//             Continue
//           </Button>
//         </DialogActions>
//       </StyledDialog>
//     </div>
//   );
// }
















// import * as React from 'react';
// import Box from '@mui/material/Box';
// import './Registration.css';
// import TextField from '@mui/material/TextField';
// import { Link, useNavigate } from 'react-router-dom';
// import { useState } from 'react';
// import axios from 'axios';
// import Button from '@mui/material/Button';
// import Dialog from '@mui/material/Dialog';
// import DialogActions from '@mui/material/DialogActions';
// import DialogContent from '@mui/material/DialogContent';
// import DialogContentText from '@mui/material/DialogContentText';
// import DialogTitle from '@mui/material/DialogTitle';
// import CheckCircleIcon from '@mui/icons-material/CheckCircle';
// import Typography from '@mui/material/Typography';
// import { styled } from '@mui/material/styles';

// // Password validation function
// const isPasswordValid = (password) => {
//   const pattern = /^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*[@#$%^&+=])(?=\S+$).{8,20}$/;
//   return pattern.test(password);
// };

// // Email validation function
// const isEmailValid = (email) => {
//   const pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
//   return pattern.test(email);
// };

// const StyledDialog = styled(Dialog)(({ theme }) => ({
//   '& .MuiPaper-root': {
//     padding: theme.spacing(3),
//     borderRadius: theme.spacing(1.5),
//     textAlign: 'center',
//   },
// }));

// const StyledDialogTitle = styled(DialogTitle)(({ theme }) => ({
//   display: 'flex',
//   alignItems: 'center',
//   justifyContent: 'center',
//   '& .MuiSvgIcon-root': {
//     fontSize: '3rem',
//     color: theme.palette.success.main,
//     marginRight: theme.spacing(1),
//   },
// }));

// const StyledDialogContent = styled(DialogContent)(({ theme }) => ({
//   marginTop: theme.spacing(2),
//   marginBottom: theme.spacing(2),
// }));

// export default function Register() {
//   const [name, setName] = useState('');
//   const [email, setEmail] = useState('');
//   const [pass, setPass] = useState('');
//   const [confirmPass, setConfirmPass] = useState('');
//   const [open, setOpen] = useState(false); // State to control the dialog visibility

//   const navigate = useNavigate(); // Initialize useNavigate

//   const handleSubmit = async (e) => {
//     e.preventDefault(); // Prevent default form submission

//     // Validate fields
//     if (!name || !email || !pass || !confirmPass) {
//       alert('Please fill out all fields.');
//       return;
//     }

//     if (!isEmailValid(email)) {
//       alert('Please enter a valid email address.');
//       return;
//     }

//     if (pass !== confirmPass) {
//       alert('Passwords do not match.');
//       return;
//     }

//     if (!isPasswordValid(pass)) {
//       alert('Password must be between 8 and 20 characters long, and include at least one number, one uppercase letter, one lowercase letter, and one special character.');
//       return;
//     }

//     try {
//       await axios.post('http://localhost:3009/users', {
//         name,
//         email,
//         pass
//       });
//       console.log('User registered successfully');
//       setOpen(true); // Open the dialog on successful registration
//     } catch (error) {
//       console.error('Error registering user:', error);
//       // Handle other errors if needed
//     }
//   };

//   const handleClose = () => {
//     setOpen(false);
//     navigate('/home'); // Redirect to /home after closing the dialog
//   };

//   return (
//     <div className='REG'>
//       <Box
//         className='aa'
//         component="form"
//         sx={{
//           '& .MuiTextField-root': { m: 1, width: '35ch' },
//         }}
//         noValidate
//         autoComplete="off"
//       >
//         <div className='icon'>
//           <h1>Registrater</h1>
//         </div>
//         <div id="a">
//           <TextField
//             required
//             id="outlined-required"
//             label="Username"
//             value={name}
//             onChange={(e) => setName(e.target.value)}
//           />
//           <br />
//           <TextField
//             required
//             id="outlined-required"
//             label="Email Id"
//             value={email}
//             onChange={(e) => setEmail(e.target.value)}
//           />
//           <br />
//           <TextField
//             required
//             id="outlined-password-input"
//             label="Password"
//             value={pass}
//             onChange={(e) => setPass(e.target.value)}
//             type="password"
//             autoComplete="current-password"
//           />
//           <br />
//           <TextField
//             required
//             id="outlined-password-input"
//             label="Confirm Password"
//             value={confirmPass}
//             onChange={(e) => setConfirmPass(e.target.value)}
//             type="password"
//             autoComplete="current-password"
//           />
//           <br />
//           <br />
//           <Button
//             onClick={handleSubmit}
//             variant='contained'
//             color='inherit'
//             className='abc'
//           >
//             Register
//           </Button>
//           <br /><br />
//           <h4>Already have an Account
//             <Link to="/login">Sign In</Link>
//           </h4>
//         </div>
//       </Box>

//       <StyledDialog
//         open={open}
//         onClose={handleClose}
//       >
//         <StyledDialogTitle>
//           <CheckCircleIcon />
//           Registration Successful
//         </StyledDialogTitle>
//         <StyledDialogContent>
//           <DialogContentText>
//             Welcome to Green Paradise!<br /> "The journey of a thousand miles begins with a single step." - Lao Tzu
//           </DialogContentText>
//         </StyledDialogContent>
//         <DialogActions>
//           <Button onClick={handleClose} color="primary" variant="contained">
//             Continue
//           </Button>
//         </DialogActions>
//       </StyledDialog>
//     </div>
//   );
// }




import * as React from 'react';
import Box from '@mui/material/Box';
import './Registration.css';
import TextField from '@mui/material/TextField';
import { Link, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import axios from 'axios';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import Typography from '@mui/material/Typography';
import { styled } from '@mui/material/styles';

const isPasswordValid = (password) => {
  const pattern = /^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*[@#$%^&+=])(?=\S+$).{8,20}$/;
  return pattern.test(password);
};

const StyledDialog = styled(Dialog)(({ theme }) => ({
  '& .MuiPaper-root': {
    padding: theme.spacing(3),
    borderRadius: theme.spacing(1.5),
    textAlign: 'center',
  },
}));

const StyledDialogTitle = styled(DialogTitle)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  '& .MuiSvgIcon-root': {
    fontSize: '3rem',
    color: theme.palette.success.main,
    marginRight: theme.spacing(1),
  },
}));

const StyledDialogContent = styled(DialogContent)(({ theme }) => ({
  marginTop: theme.spacing(2),
  marginBottom: theme.spacing(2),
}));

export default function Register() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [pass, setPass] = useState('');
  const [confirmPass, setConfirmPass] = useState('');
  const [open, setOpen] = useState(false);

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!name || !email || !pass || !confirmPass) {
      alert('Please fill out all fields.');
      return;
    }

    if (pass !== confirmPass) {
      alert('Passwords do not match.');
      return;
    }

    if (!isPasswordValid(pass)) {
      alert('Password must be between 8 and 20 characters long, and include at least one number, one uppercase letter, one lowercase letter, and one special character.');
      return;
    }

    try {
      const response = await axios.post('http://localhost:3010/users', {
        name,
        email,
        pass
      });
      console.log('User registered successfully', response.data);
      setOpen(true);
    } catch (error) {
      console.error('Error registering user:', error.response?.data || error.message);
      alert('Error registering user. Please try again later.');
    }
  };

  const handleClose = () => {
    setOpen(false);
    navigate('/home');
  };

  return (
    <div className='REG'>
      <Box
        className='aa'
        component="form"
        sx={{
          '& .MuiTextField-root': { m: 1, width: '35ch' },
        }}
        noValidate
        autoComplete="off"
      >
        <div className='icon'>
          <h1>Registration Page</h1>
        </div>
        <div id="a">
          <TextField
            required
            id="outlined-required"
            label="Username"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <br />
          <TextField
            required
            id="outlined-required"
            label="Email Id"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <br />
          <TextField
            required
            id="outlined-password-input"
            label="Password"
            value={pass}
            onChange={(e) => setPass(e.target.value)}
            type="password"
            autoComplete="current-password"
          />
          <br />
          <TextField
            required
            id="outlined-password-input"
            label="Confirm Password"
            value={confirmPass}
            onChange={(e) => setConfirmPass(e.target.value)}
            type="password"
            autoComplete="current-password"
          />
          <br />
          <br />
          <Button
            onClick={handleSubmit}
            variant='contained'
            color='inherit'
            className='abc'
          >
            Register
          </Button>
          <br /><br />
          <h4>Already have an Account
            <Link to="/login">Sign In</Link>
          </h4>
        </div>
      </Box>

      <StyledDialog
        open={open}
        onClose={handleClose}
      >
        <StyledDialogTitle>
          <CheckCircleIcon />
          Registration Successful
        </StyledDialogTitle>
        <StyledDialogContent>
          <DialogContentText>
            Welcome to Green Paradise!<br /> "The journey of a thousand miles begins with a single step." - Lao Tzu
          </DialogContentText>
        </StyledDialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary" variant="contained">
            Continue
          </Button>
        </DialogActions>
      </StyledDialog>
    </div>
  );
}
