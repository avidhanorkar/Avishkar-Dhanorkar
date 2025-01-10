import React, { useState } from 'react'
import { Mail, Phone, MapPin } from 'lucide-react'
import Button from './Button'
import { useForm } from '@formspree/react';

const GetInTouch = ({id}) => {
  const [isSubmitted, setIsSubmitted] = useState(false)

  const [state, handleSubmit] = useForm('myzzlkvd'); 

  const handleFormSubmit = (e) => {
    handleSubmit(e); 
    setIsSubmitted(true);
  };

  return (
    <section className="relative py-20 px-4 overflow-hidden " id={id}>
      <div className="container relative mx-auto max-w-6xl">
        <div className=" mb-12">
          <h2 className="text-[50px] lg:text-[70px] font-lora font-[700] leading-none">Get in Touch</h2>
          <p className="text-muted-foreground pt-[10px]">
            I'm always interested in hearing about new projects and opportunities. 
            Feel free to reach out if you'd like to connect!
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 items-start">
          {/* Contact Information */}
          <div className="lg:col-span-1 space-y-6">
            <div className="overflow-hidden border-none  backdrop-blur-sm">
              <div className="p-6">
                <div className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <Mail className="w-6 h-6 text-primary mt-1" />
                    <div>
                      <h3 className="font-semibold mb-1">Email</h3>
                      <p className="text-sm text-muted-foreground">avidhanorkar23@gmail.com</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <Phone className="w-6 h-6 text-primary mt-1" />
                    <div>
                      <h3 className="font-semibold mb-1">Phone</h3>
                      <p className="text-sm text-muted-foreground">+91 9579397020</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <MapPin className="w-6 h-6 text-primary mt-1" />
                    <div>
                      <h3 className="font-semibold mb-1">Location</h3>
                      <p className="text-sm text-muted-foreground">Pimpri, Pune</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Availability div */}
            <div className="overflow-hidden border-none bg-primary/10 dark:bg-primary/20 backdrop-blur-sm">
              <div className="p-6">
                <h3 className="font-semibold mb-2">Current Availability</h3>
                <p className="text-sm text-muted-foreground">
                  I'm currently available for freelance work and full-time positions.
                  My typical response time is within 24 hours.
                </p>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2 overflow-hidden border-none backdrop-blur-sm">
            <div className="p-6">
              <form onSubmit={handleFormSubmit} className="space-y-6">
                <div className="grid sm:grid-cols-2 gap-4">
                  <div className="space-y-2 flex flex-col">
                    <label htmlFor="name">Name</label>
                    <input
                      id="name"
                      name="name" 
                      placeholder="John Doe"
                      required
                      className="focus:outline-none border-muted bg-slate-50 resize-none"
                    />
                  </div>
                  <div className="space-y-2 flex flex-col">
                    <label htmlFor="email">Email</label>
                    <input
                      id="email"
                      name="email" 
                      type="email"
                      placeholder="john@example.com"
                      required
                      className="focus:outline-none border-muted bg-slate-50 resize-none"
                    />
                  </div>
                </div>
                
                <div className="space-y-2 flex flex-col">
                  <label htmlFor="message">Message</label>
                  <textarea
                    id="message"
                    name="message" 
                    placeholder="Tell me about your project..."
                    required
                    className="min-h-[125px] focus:outline-none border-muted bg-slate-50 resize-none"
                  />
                  <p className='text-right'>Powered by Formspree</p>
                </div>

                <Button content={isSubmitted ? "Submitted" : "Send Message"} type="submit" />
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default GetInTouch;