import React, { useState } from 'react';
import emailjs from '@emailjs/browser';
import PhoneInput from 'react-phone-input-2';
import 'react-phone-input-2/lib/style.css';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import styles from './StudentForm.module.css';

const StudentForm = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    mobileNumber: '',
    nationality: 'New Zealand',
    region: '',
    studyLevel: '',
    studyDate: '',
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const validate = () => {
    const newErrors = {};
    if (!formData.firstName.trim()) newErrors.firstName = 'First name is required';
    if (!formData.lastName.trim()) newErrors.lastName = 'Last name is required';
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Invalid email address';
    }
    if (!formData.mobileNumber.trim()) newErrors.mobileNumber = 'Mobile number is required';
    if (!formData.nationality.trim()) newErrors.nationality = 'Nationality is required';
    if (!formData.region.trim()) newErrors.region = 'Region is required';
    if (!formData.studyLevel.trim()) newErrors.studyLevel = 'Study level is required';

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handlePhoneChange = (value) => {
    setFormData((prev) => ({ ...prev, mobileNumber: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validate()) {
      toast.error('Please fix the errors in the form.');
      return;
    }

    setIsSubmitting(true);

    try {
      await emailjs.send(
        'service_fpjbfjt',
        'template_6ththik',
        {
          firstName: formData.firstName,
          lastName: formData.lastName,
          email: formData.email,
          mobileNumber: formData.mobileNumber,
          nationality: formData.nationality,
          region: formData.region,
          studyLevel: formData.studyLevel,
          studyDate: formData.studyDate || 'N/A',
        },
        '3eZo6IQe6M4zae1v7'
      );

      toast.success('Form submitted successfully!');
      setFormData({
        firstName: '',
        lastName: '',
        email: '',
        mobileNumber: '',
        nationality: 'New Zealand',
        region: '',
        studyLevel: '',
        studyDate: '',
      });
      setErrors({});
    } catch (error) {
      console.error('Failed to send email:', error);
      toast.error('Failed to submit the form, please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className={styles.formContainer}>
      <ToastContainer theme="dark" position="top-right" autoClose={3000} hideProgressBar />

      <div className={styles.formWrapper}>
        <div className={styles.titleWrapper}>
          <h2 className={styles.formTitle}>Your Details:</h2>
        </div>

        <form className={styles.formContent} onSubmit={handleSubmit} noValidate>
          {/* First Name and Last Name */}
          <div className={styles.formRow}>
            <div className={styles.inputWrapper}>
              <div className={styles.inputContainer}>
                <label htmlFor="firstName" className={styles.inputLabel}>
                  First name<span className={styles.requiredAsterisk}>*</span>
                </label>
                <input
                  type="text"
                  id="firstName"
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleChange}
                  placeholder="Enter your First name"
                  className={styles.inputField}
                />
                {errors.firstName && <div className={styles.errorText}>{errors.firstName}</div>}
              </div>
            </div>

            <div className={styles.inputWrapper}>
              <div className={styles.inputContainer}>
                <label htmlFor="lastName" className={styles.inputLabel}>
                  Last name<span className={styles.requiredAsterisk}>*</span>
                </label>
                <input
                  type="text"
                  id="lastName"
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleChange}
                  placeholder="Enter your Last name"
                  className={styles.inputField}
                />
                {errors.lastName && <div className={styles.errorText}>{errors.lastName}</div>}
              </div>
            </div>
          </div>

          {/* Email */}
          <div className={styles.formRow}>
            <div className={styles.inputWrapperFull}>
              <div className={styles.inputContainer}>
                <label htmlFor="email" className={styles.inputLabel}>
                  Email address<span className={styles.requiredAsterisk}>*</span>
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Example:abc@gmail.com"
                  className={styles.inputField}
                />
                {errors.email && <div className={styles.errorText}>{errors.email}</div>}
              </div>
            </div>
          </div>

          {/* Mobile Number and Study Level */}
          <div className={styles.formRow}>
            <div className={styles.inputWrapper}>
              <div className={styles.inputContainer}>
                <label htmlFor="mobileNumber" className={styles.inputLabel}>
                  Mobile number<span className={styles.requiredAsterisk}>*</span>
                </label>

                <PhoneInput
                  country={'nz'}
                  value={formData.mobileNumber}
                  onChange={handlePhoneChange}
                  inputProps={{
                    name: 'mobileNumber',
                    required: true,
                    className: styles.phoneInputField,
                    placeholder: 'Enter your Mobile number',
                    id: 'mobileNumber',
                  }}
                  enableSearch={true}
                  inputStyle={{
                    width: '100%',
                    height: '50px',
                    fontSize: '1.6rem',
                    paddingLeft: '60px',
                    backgroundColor: '#f8f9fa',
                    borderRadius: '0.5rem',
                    border: '1px solid #e5e5e5',
                    color: '#6b7280',
                    boxSizing: 'border-box',
                  }}
                  containerStyle={{ width: '100%' }}
                  buttonStyle={{ borderRight: '1px solid #e5e5e5' }}
                />

                {errors.mobileNumber && <div className={styles.errorText}>{errors.mobileNumber}</div>}
              </div>
            </div>

            <div className={styles.inputWrapper}>
              <div className={styles.inputContainer}>
                <label htmlFor="studyLevel" className={styles.inputLabel}>
                  Intended level of study<span className={styles.requiredAsterisk}>*</span>
                </label>
                <select
                  id="studyLevel"
                  name="studyLevel"
                  value={formData.studyLevel}
                  onChange={handleChange}
                  className={styles.selectField}
                >
                  <option value="">Select level</option>
                  <option value="certificate">Certificate</option>
                  <option value="diploma">Diploma</option>
                  <option value="bachelors">Bachelor's Degree</option>
                  <option value="masters">Master's Degree</option>
                  <option value="phd">PhD</option>
                </select>
                {errors.studyLevel && <div className={styles.errorText}>{errors.studyLevel}</div>}
              </div>
            </div>
          </div>

          {/* Nationality, Region, and Study Date */}
          <div className={styles.formRow}>
            <div className={styles.inputWrapper}>
              <div className={styles.inputContainer}>
                <label htmlFor="nationality" className={styles.inputLabel}>
                  Nationality<span className={styles.requiredAsterisk}>*</span>
                </label>
                <select
                  id="nationality"
                  name="nationality"
                  value={formData.nationality}
                  onChange={handleChange}
                  className={styles.selectField}
                >
                  <option value="Germany">Germany</option>
                  <option value="New Zealand">New Zealand</option>
                  <option value="Australia">Australia</option>
                  <option value="USA">USA</option>
                  <option value="UK">UK</option>
                  <option value="Canada">Canada</option>
                </select>
                {errors.nationality && <div className={styles.errorText}>{errors.nationality}</div>}
              </div>
            </div>

            <div className={styles.inputWrapper}>
              <div className={styles.inputContainer}>
                <label htmlFor="region" className={styles.inputLabel}>
                  Region<span className={styles.requiredAsterisk}>*</span>
                </label>
                <select
                  id="region"
                  name="region"
                  value={formData.region}
                  onChange={handleChange}
                  className={styles.selectField}
                >
                  <option value="">Select region</option>
                  <option value="auckland">Auckland</option>
                  <option value="wellington">Wellington</option>
                  <option value="christchurch">Christchurch</option>
                  <option value="hamilton">Hamilton</option>
                </select>
                {errors.region && <div className={styles.errorText}>{errors.region}</div>}
              </div>
            </div>

            <div className={styles.inputWrapper}>
              <div className={styles.inputContainer}>
                <label htmlFor="studyDate" className={styles.inputLabel}>
                  Intended study date <span className={styles.optionalLabel}>(optional)</span>
                </label>
                <input
                  type="date"
                  id="studyDate"
                  name="studyDate"
                  value={formData.studyDate}
                  onChange={handleChange}
                  className={styles.dateField}
                />
              </div>
            </div>
          </div>

          {/* Submit Button */}
          <div className={styles.submitButtonWrapper}>
            <button
              type="submit"
              className={styles.submitButton}
              disabled={isSubmitting}
            >
              {isSubmitting ? 'Submitting...' : 'Submit'}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default StudentForm;
