'use client';

import { useEffect, useRef } from 'react';
import { useFormik, FormikProvider } from 'formik';
import * as Yup from 'yup';
import { X } from 'lucide-react';

// Custom Input Components
const TextField = ({ name, title, error, ...props }) => (
  <div className="mb-4">
    <label className="block text-sm font-semibold mb-1">{title}</label>
    <input
      name={name}
      className={`w-full rounded p-2 border ${
        error ? 'border-red-500' : 'border-gray-300'
      }`}
      {...props}
    />
    {error && <p className="text-red-500 text-xs mt-1">{error}</p>}
  </div>
);

const TextArea = ({ name, title, error, ...props }) => (
  <div className="mb-4">
    <label className="block text-sm font-semibold mb-1">{title}</label>
    <textarea
      name={name}
      className={`w-full rounded p-2 border ${
        error ? 'border-red-500' : 'border-gray-300'
      }`}
      rows={4}
      {...props}
    />
    {error && <p className="text-red-500 text-xs mt-1">{error}</p>}
  </div>
);

export default function ContactOverlay({ isOpen, onClose }) {
  const modalRef = useRef(null);

  // Close on Escape Key
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  // Formik Setup
  const formik = useFormik({
    initialValues: {
      name: '',
      company: '',
      email: '',
      contactNumber: '',
      message: '',
    },
    validationSchema: Yup.object().shape({
      name: Yup.string().required('Name is required'),
      company: Yup.string(),
      email: Yup.string().email('Invalid email').required('Email is required'),
      contactNumber: Yup.string(),
      message: Yup.string().required('Message is required'),
    }),
    onSubmit: (values, { resetForm }) => {
      console.log(values);
      alert('Form submitted successfully!');
      resetForm();
      onClose();
    },
  });

  return (
    <>
      {/* Background Overlay */}
      <div
        className={`fixed inset-0 bg-black bg-opacity-50 z-50 transition-opacity ${
          isOpen ?
            'opacity-100 pointer-events-auto'
          : 'opacity-0 pointer-events-none'
        }`}
        onClick={onClose}
        aria-hidden="true"
      />

      {/* Sliding Panel */}
      <div
        ref={modalRef}
        role="dialog"
        aria-modal="true"
        className={`fixed top-0 right-0 h-full w-full max-w-lg bg-[#181818] text-white z-50 transform transition-transform duration-300 ease-in-out 
        ${isOpen ? 'translate-x-0' : 'translate-x-full'}`}>
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 bg-gray-700 p-2 rounded-full hover:bg-gray-600">
          <X size={24} />
        </button>

        {/* Form Content */}
        <div className="overflow-y-auto h-full px-8 py-12">
          <h2 className="text-2xl font-bold mb-2">
            Start your project with Dysol
          </h2>
          <p className="text-gray-300 mb-8">
            Let's discuss your idea! Fill out the form below, and we'll get back
            to you.
          </p>

          <FormikProvider value={formik}>
            <form onSubmit={formik.handleSubmit}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <TextField
                  name="name"
                  title="Your Name"
                  onChange={formik.handleChange}
                  value={formik.values.name}
                  error={formik.touched.name ? formik.errors.name : ''}
                />
                <TextField
                  name="company"
                  title="Your Company Name"
                  onChange={formik.handleChange}
                  value={formik.values.company}
                />
                <TextField
                  name="email"
                  title="Your Email Address"
                  onChange={formik.handleChange}
                  value={formik.values.email}
                  error={formik.touched.email ? formik.errors.email : ''}
                  type="email"
                />
                <TextField
                  name="contactNumber"
                  title="Your Contact Number"
                  onChange={formik.handleChange}
                  value={formik.values.contactNumber}
                />
              </div>

              <div className="mt-4">
                <TextArea
                  name="message"
                  title="Message Body"
                  onChange={formik.handleChange}
                  value={formik.values.message}
                  error={formik.touched.message ? formik.errors.message : ''}
                />
              </div>

              <button
                type="submit"
                className="mt-4 w-full px-6 py-3 bg-pink-500 text-white font-semibold rounded hover:bg-pink-600 transition"
                disabled={!formik.isValid}>
                Contact us <span className="ml-2">🚀</span>
              </button>
            </form>
          </FormikProvider>
        </div>
      </div>
    </>
  );
}
