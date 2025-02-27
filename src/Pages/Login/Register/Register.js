import toast from 'react-hot-toast';
import React, { useContext, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../countext/AuthProvider/AuthProvider';

const Register = () => {
   const [error, setError] = useState('');
   //error


   //  {/* chech box for allow terms and conditions💥💥💥 */}
   const [accepted, setAccepted] = useState(false);


   const { createUser, updateUserProfile, verifyEmail } = useContext(AuthContext);
   //👨‍👨‍👧‍👦👨‍👨‍👧‍👦verifyEmail


   const handleSubmit = event => {
      event.preventDefault();
      const form = event.target;
      const name = form.name.value;
      const photoURL = form.photoURL.value;
      const email = form.email.value;
      const password = form.password.value;
      // console.log(name, photoURL, email, password);

      createUser(email, password)
         .then(result => {
            const user = result.user;
            console.log(user);
            setError('');  //error💥
            form.reset();
            handleUpdateUserProfile(name, photoURL); //🌟🌟
            handleEmailVerification(); //👨‍👨‍👧‍👦👨‍👨‍👧‍👦
            toast.success('Please verify your email address.')

         })
         .catch(e => {
            console.error(e)
            setError(e.message);
         });

   }


   //register ar user name and photo store-🌟🌟
   const handleUpdateUserProfile = (name, photoURL) => {
      const profile = {
         displayName: name,
         photoURL: photoURL
      }

      updateUserProfile(profile)
         .then(() => { })
         .catch(error => console.error(error));
   }
   //🌟🌟





   //👨‍👨‍👧‍👦👨‍👨‍👧‍👦verifyEmail
   const handleEmailVerification = () => {
      verifyEmail()
         .then(() => { })
         .catch(error => console.error(error));
   }




   const handleAccepted = event => {
      setAccepted(event.target.checked)
   }


   

   return (
      <Form onSubmit={handleSubmit}>
         <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Your Name</Form.Label>
            <Form.Control name="name" type="text" placeholder="Your Name" />
         </Form.Group>
         <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Photo URL</Form.Label>
            <Form.Control name="photoURL" type="text" placeholder="Phot URL" />
         </Form.Group>



         <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control name="email" type="email" placeholder="Enter email" required />
         </Form.Group>



         <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control name="password" type="password" placeholder="Password" required />
         </Form.Group>




         {/* chech box for allow terms and conditions💥💥💥 */}
         <Form.Group className="mb-3" controlId="formBasicCheckbox">
            <Form.Check
               type="checkbox"
               onClick={handleAccepted}
               label={<>Accept <Link to="/terms">Terms and conditions</Link></>} />
         </Form.Group>




         <Button variant="primary" type="submit" disabled={!accepted}>
            Register
         </Button>
         <Form.Text className="text-danger">
            {error}
         </Form.Text>
      </Form>
   );
};

export default Register;

// https://react-hot-toast.com/