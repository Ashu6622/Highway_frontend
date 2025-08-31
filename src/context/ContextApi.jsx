import {createContext, useState, useEffect} from 'react';
import {getOTP, addUser, userLogin, isLoggedIn, addTask, allTask, logoutUser, deleteTask} from '../api/api';
import {useNavigate} from 'react-router-dom';
import { toast } from 'react-toastify'

export const MyContext = createContext();

const ContextApi = ({children})=>{

  const [isSignUp, setIsSignUp] = useState(true);
  const [isDashboard, setIsDashboard] = useState(true);
  const [userData, setUserData] = useState(null);

  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: '',
    birthday: '',
    email: '',
    otp: '',
    keepLoggedIn: false
  });

  const [otpSent, setOtpSent] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleGetOTP = async (e) => {
    e.preventDefault();

    try{
      setIsLoading(true);
      
      const {data} = await getOTP({email:formData.email});
      
      // Simulate API call
      setOtpSent(true);
      setIsLoading(false);
      if(data.message.includes('OTP sent successfully')){
        return toast.success('OTP sent to Mail', { autoClose: 1500 });
      }
    }
    catch(error){
        return toast.error('Try Again', { autoClose: 1500 });
    }
  };

  const handleSignIn = async (e) => {

    e.preventDefault();

    try{
        setIsLoading(true);
        const {data} = await userLogin({email:formData.email, otp:formData.otp}); 
        console.log(data);
        setIsLoading(false);

        resetForm();
        if(data.status === 200 && data.message.includes('Successfully Login')){
          toast.success(data.message, { autoClose: 1500 });
          navigate('/dashboard');
          return;
        }
        else{
          toast.error(data.message, { autoClose: 1500 });
          navigate('/login');
          return;
        }
    }
    catch(error){
        return toast.error('Try Again', { autoClose: 1500 });
    }

  };

  const handleSignUp = async (e) => {
    e.preventDefault();

    try{

      setIsLoading(true);
      const {data} = await addUser(formData); 
      setIsLoading(false);
    
      resetForm();
      if(data.status === 201 && data.message.includes('Successfully Login')){
        toast.success(data.message, { autoClose: 1500 });
        navigate('/dashboard');
        return;
        
      }
      else{
        toast.error(data.message, { autoClose: 1500 });
        navigate('/login');
        return;
      }
    }
    catch(error){
        return toast.error('Try Again', { autoClose: 1500 });
    }
  };

  const handleLoggedIn = async ()=>{

        const {data} = await isLoggedIn();
        console.log(data);

        if(data.status !== 200 || data.data.message?.includes('Token not found') || data.data.message?.includes('Token is not valid')){
            setIsDashboard(false);
            navigate('/login');
            return;
        }
        else{
            setIsDashboard(false);
            setUserData(data.data);
        }
  }

  const resetForm = () => {
    setFormData({
      fullName: '',
      dateOfBirth: '',
      email: '',
      otp: '',
      keepLoggedIn: false
    });
    setOtpSent(false);
  };

  const toggleMode = () => {
    setIsSignUp(!isSignUp);
    resetForm();
  };

  const resendOTP = async () => {
    setIsLoading(true);

    try{

      
      const {data} = await getOTP({email:formData.email});
      console.log(data);
      setIsLoading(false);
      
      if(data.message.includes('OTP sent successfully')){
        toast.success('OTP sent to Mail', { autoClose: 1500 });
      }
    }
    catch(error){
      toast.error('Try Again', { autoClose: 1500 });
    }
    
  };

//   create note logic


  const [notes, setNotes] = useState([]);
  const [showCreateForm, setShowCreateForm] = useState(false);
  const [newNote, setNewNote] = useState({ content: '' });

  const handleCreateNote = async () => {

    if (newNote.content.trim()) {
      const note = {
        userId: userData._id,
        task: newNote.content,
        _id:null
      };

      const {data} = await addTask(note);

      if(data.message.includes('Token not found') || data.message.includes('Token is not valid') || data.status !== 200){
        navigate('/login');
        toast.error('Session Expired Login Again', { autoClose: 1500 });
        return;
      }
      console.log(data);
      setNewNote({content: '' });
      setShowCreateForm(false);
      note._id = data.id
      setNotes([...notes, note]);
      toast.success('Task Added', { autoClose: 1500 });

    }
  };

  const handleshowAllTask = async ()=>{
        const {data} = await allTask();
        setNotes(data.data);
  }

  const handleDeleteNote = async (id) => {

    console.log(id);
    const {data} = await deleteTask(id);

    console.log(data);
    setNotes(notes.filter(note => note._id !== id));
    toast.success('Task Deleted', { autoClose: 1500 });
  };

  const handleSignOut = async () => {

        const {data} = await logoutUser();

        if(data?.message.includes('Logged out successfully') && data?.status === 200){
            navigate('/login');
            toast.success('Sign Out Successfully', { autoClose: 1500 });
            return;
        }
        else{
            toast.error('Error logging out. Please try again.', { autoClose: 1500 });
            return;
        }
    
  };


    return(

        <MyContext.Provider value={{isSignUp, formData, otpSent, isLoading, handleInputChange, handleGetOTP, handleSignIn, handleSignUp, resetForm, toggleMode, resendOTP, handleLoggedIn, isDashboard, userData , handleSignOut, handleDeleteNote, handleCreateNote, setNotes, notes, showCreateForm, setShowCreateForm, newNote, setNewNote, handleshowAllTask}}>
            {children}
        </MyContext.Provider>

    )

}

export default ContextApi