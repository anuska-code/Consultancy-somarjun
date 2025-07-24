import React, { useRef } from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import PhoneInput from 'react-phone-input-2';
import 'react-phone-input-2/lib/style.css';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import emailjs from '@emailjs/browser';
import { motion } from 'framer-motion';
import styles from './Contactus.module.css';

const initialValues = {
  firstName: '',
  lastName: '',
  email: '',
  mobileNumber: '',
  inquiryType: '',
  contactMethod: 'Email',
  inquiryDate: '',
};

const validate = (values) => {
  const errors = {};
  if (!values.firstName) errors.firstName = 'First name is required';
  if (!values.lastName) errors.lastName = 'Last name is required';
  if (!values.email) {
    errors.email = 'Email is required';
  } else if (!/\S+@\S+\.\S+/.test(values.email)) {
    errors.email = 'Invalid email address';
  }
  if (!values.mobileNumber) errors.mobileNumber = 'Mobile number is required';
  if (!values.inquiryType) errors.inquiryType = 'Inquiry type is required';
  if (!values.contactMethod) errors.contactMethod = 'Contact method is required';
  return errors;
};

const Contactus = () => {
  const recaptchaRef = useRef(null);

  const handleSubmit = async (values, { resetForm, setSubmitting }) => {
    if (!recaptchaRef.current?.checked) {
      toast.error("Please verify you're not a robot");
      setSubmitting(false);
      return;
    }

    try {
      await emailjs.send(
        'service_fpjbfjt',
        'template_6ththik',
        {
          firstName: values.firstName,
          lastName: values.lastName,
          email: values.email,
          mobileNumber: values.mobileNumber,
          inquiryType: values.inquiryType,
          contactMethod: values.contactMethod,
          inquiryDate: values.inquiryDate || 'N/A',
        },
        '3eZo6IQe6M4zae1v7'
      );
      toast.success('Form submitted successfully!');
      resetForm();
      recaptchaRef.current.checked = false;
    } catch (error) {
      toast.error('Failed to submit the form.');
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className={styles.contactWrapper}>
      <ToastContainer theme="dark" position="top-right" autoClose={3000} hideProgressBar />

      <div className={styles.contactInner}>
        {/* Left: Form Section */}
        <motion.div
          initial={{ x: -50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.5 }}
          className={styles.formSection}
        >
          <Formik initialValues={initialValues} validate={validate} onSubmit={handleSubmit}>
            {({ setFieldValue, values, isSubmitting }) => (
              <Form className={styles.contactForm} noValidate>
                {/* First Name */}
                <div className={styles.inputGroup}>
                  <label htmlFor="firstName" className={styles.label}>First Name</label>
                  <Field id="firstName" name="firstName" placeholder="Enter your First Name" />
                  <ErrorMessage name="firstName" component="div" className={styles.errorMsg} />
                </div>

                {/* Last Name */}
                <div className={styles.inputGroup}>
                  <label htmlFor="lastName" className={styles.label}>Last Name</label>
                  <Field id="lastName" name="lastName" placeholder="Enter your Last Name" />
                  <ErrorMessage name="lastName" component="div" className={styles.errorMsg} />
                </div>

                {/* Email */}
                <div className={styles.inputGroup}>
                  <label htmlFor="email" className={styles.label}>Email</label>
                  <Field id="email" type="email" name="email" placeholder="Enter your Email" />
                  <ErrorMessage name="email" component="div" className={styles.errorMsg} />
                </div>

                {/* Mobile Number */}
                <div className={styles.inputGroup}>
                  <label className={styles.label}>Mobile Number</label>
                  <PhoneInput
                    country={'np'}
                    value={values.mobileNumber}
                    onChange={(value) => setFieldValue('mobileNumber', value)}
                    inputProps={{
                      name: 'mobileNumber',
                      required: true,
                    }}
                    containerClass={styles.phoneContainer}
                  />
                  <ErrorMessage name="mobileNumber" component="div" className={styles.errorMsg} />
                </div>

                {/* Inquiry Type */}
                <div className={styles.inputGroup}>
                  <label className={styles.label}>Inquiry Type</label>
                  <Field as="select" name="inquiryType">
                    <option value="">Select Inquiry Type</option>
                    <option value="educational_consultancy">Educational Consultancy</option>
                    <option value="career_guidance">Career Guidance</option>
                    <option value="training_programs">Training Programs</option>
                    <option value="business_consulting">Business Consulting</option>
                  </Field>
                  <ErrorMessage name="inquiryType" component="div" className={styles.errorMsg} />
                </div>

                {/* Contact Method */}
                <div className={styles.inputGroup}>
                  <label className={styles.label}>Preferred Contact Method</label>
                  <Field as="select" name="contactMethod">
                    <option value="Email">Email</option>
                    <option value="Phone">Phone</option>
                    <option value="In-Person">In-Person</option>
                  </Field>
                  <ErrorMessage name="contactMethod" component="div" className={styles.errorMsg} />
                </div>

                {/* Inquiry Date */}
                <div className={styles.inputGroup}>
                  <label className={styles.label}>Inquiry Date</label>
                  <Field
                    type="date"
                    name="inquiryDate"
                    max={new Date().toISOString().split("T")[0]}
                  />
                </div>

                {/* Recaptcha */}
                <div className={styles.recaptchaBox}>
                  <input type="checkbox" ref={recaptchaRef} />
                  <span>I'm not a robot</span>
                  <img
                    src="https://www.gstatic.com/recaptcha/api2/logo_48.png"
                    alt="captcha"
                    className={styles.recaptchaImg}
                  />
                </div>

                {/* Submit Button */}
                <button type="submit" disabled={isSubmitting} className={styles.submitButton}>
                  {isSubmitting ? 'Submitting...' : 'Submit'}
                </button>
              </Form>
            )}
          </Formik>
        </motion.div>

        {/* Right: Map Section */}
        <motion.div
          initial={{ x: 50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.6 }}
          className={styles.mapSection}
        >
          <iframe
            title="Google Map"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d486.8128005059891!2d83.45694751658354!3d27.686953496336216!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x399687a4a85ecaad%3A0x73af8e318f202fe7!2sNabin%20Audhyogik%20kadar%20bahadur%20Rita%20secondary%20school!5e0!3m2!1sen!2snp!4v1751959959375!5m2!1sen!2snp"
            width="100%"
            height="100%"
            allowFullScreen=""
            loading="lazy"
            style={{ border: 0 }}
          ></iframe>
        </motion.div>
      </div>
    </div>
  );
};

export default Contactus;