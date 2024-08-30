'use client';

import React from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';

import { z } from 'zod';
import contactData from '@/data/sectionsData/contact/contact.json';
import { sendEmail } from '@/actions/sendEmail';
import { useAction } from 'next-safe-action/hooks';
import { toast } from 'react-toastify';

const formSchema = z.object({
  name: z.string().min(1, { message: 'Name is required' }),
  email: z.string().email({ message: 'Invalid email address' }),
  number: z.string().min(1, { message: 'Phone number is required' }),
  subject: z.string().min(1, { message: 'Subject is required' }),
  message: z.string().min(1, { message: 'Message is required' }),
});

type FormData = z.infer<typeof formSchema>;

const ContactForm: React.FC = () => {
  const showToast = (message: string, type: 'success' | 'error') => {
    toast(message, {
      position: 'bottom-right',
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      type,
    });
  };

  const successToast = () => showToast('Email sent successfully!', 'success');
  const errorToast = () => showToast('Failed to send email', 'error');

  const { execute, status } = useAction(sendEmail, {
    onSuccess(data) {
      if (data?.data?.success) {
        console.log('Email sent successfully!');
        successToast();
      }
      if (data?.data?.error) {
        console.error('Error sending email:', data?.data?.error);
        errorToast();
      }
    },
    onError(error) {
      console.error('Submit error:', error);
      errorToast();
    },
  });
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(formSchema),
  });

  const onSubmit = async (data: FormData) => {
    execute(data);
    reset();
  };

  return (
    <>
      <div className="contact-form">
        <div className="contact-title">
          <h2>{contactData?.contactInfo?.title}</h2>
          <p>{contactData?.contactInfo?.description}</p>
        </div>

        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="container">
            <div className="contact-form-box">
              <div className="row">
                <div className="col-lg-6">
                  <div className="form-group">
                    <input
                      type="text"
                      placeholder="Name"
                      className="form-control"
                      {...register('name')}
                    />
                    {errors.name && (
                      <span
                        className="error"
                        style={{
                          color: 'red',
                          textAlign: 'left',
                          display: 'block',
                        }}
                      >
                        {errors.name.message}
                      </span>
                    )}
                  </div>
                </div>

                <div className="col-lg-6">
                  <div className="form-group">
                    <input
                      type="email"
                      placeholder="Email"
                      className="form-control"
                      {...register('email')}
                    />
                    {errors.email && (
                      <span
                        className="error"
                        style={{
                          color: 'red',
                          textAlign: 'left',
                          display: 'block',
                        }}
                      >
                        {errors.email.message}
                      </span>
                    )}
                  </div>
                </div>

                <div className="col-lg-6">
                  <div className="form-group">
                    <input
                      type="tel"
                      placeholder="Phone number"
                      className="form-control"
                      {...register('number')}
                    />
                    {errors.number && (
                      <span
                        className="error"
                        style={{
                          color: 'red',
                          textAlign: 'left',
                          display: 'block',
                        }}
                      >
                        {errors.number.message}
                      </span>
                    )}
                  </div>
                </div>

                <div className="col-lg-6">
                  <div className="form-group">
                    <input
                      type="text"
                      placeholder="Subject"
                      className="form-control"
                      {...register('subject')}
                    />
                    {errors.subject && (
                      <span
                        className="error"
                        style={{
                          color: 'red',
                          textAlign: 'left',
                          display: 'block',
                        }}
                      >
                        {errors.subject.message}
                      </span>
                    )}
                  </div>
                </div>

                <div className="col-lg-12 col-md-12">
                  <div className="form-group">
                    <textarea
                      cols={30}
                      rows={6}
                      placeholder="Write your message..."
                      className="form-control"
                      {...register('message')}
                    />
                    {errors.message && (
                      <span
                        className="error"
                        style={{
                          color: 'red',
                          textAlign: 'left',
                          display: 'block',
                        }}
                      >
                        {errors.message.message}
                      </span>
                    )}
                  </div>
                </div>

                <div className="col-lg-12 col-sm-12">
                  <button
                    disabled={status === 'executing'}
                    type="submit"
                    className="btn btn-primary"
                  >
                    {status === 'executing' ? 'Sending...' : 'Send Message'}
                  </button>
                </div>
              </div>
            </div>
          </div>
        </form>
      </div>
    </>
  );
};

export default ContactForm;
