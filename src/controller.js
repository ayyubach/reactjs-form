import React ,{useState,useEffect}from 'react'

export default function Controller(submitForm) {
    
    const [errors, setErrors] = useState({});
    const [isSubmitting,setIsSubmitting] = useState(false);
    

    const [values, setValues] = useState({
        username: '',
        email: '',
        password: '',
        password2: ''
      });
    
      const handleChange = e => {
        const { name, value } = e.target;
        setValues({
          ...values,
          [name]: value
        });
      };

      const handleSubmit = e => {
      e.preventDefault();
    
      setErrors(validateInfo(values));
      setIsSubmitting(true);
      };


      function validateInfo(values) {
        let errors = {};
      
        if (!values.username.trim()) {
          errors.username = 'Username required';
        }
        if (!values.email) {
          errors.email = 'Email required';
        } else if (!/\S+@\S+\.\S+/.test(values.email)) {
          errors.email = 'Email address is invalid';
        }
        if (!values.password) {
          errors.password = 'Password is required';
        } else if (values.password.length < 6) {
          errors.password = 'Password needs to be 6 characters or more';
        }
      
        if (!values.password2) {
          errors.password2 = 'Password is required';
        } else if (values.password2 !== values.password) {
          errors.password2 = 'Passwords do not match';
        }
        return errors;
      }

      useEffect(
        () => {
          if (Object.keys(errors).length === 0 && isSubmitting) {
            submitForm();
          }
        },
        [errors]
      );
      return { handleChange, handleSubmit, values, errors  };
}
