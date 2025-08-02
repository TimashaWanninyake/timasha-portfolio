import { useState } from 'react';
import { FiMail, FiPhone, FiMapPin, FiSend } from 'react-icons/fi';

const Footer = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('');

    try {
      // Create mailto link
      const subject = encodeURIComponent(formData.subject || 'Contact from Portfolio');
      const body = encodeURIComponent(
        `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
      );
      const mailtoLink = `mailto:timashawanninayaka@gmail.com?subject=${subject}&body=${body}`;
      
      // Open mail client
      window.location.href = mailtoLink;
      
      setSubmitStatus('success');
      setFormData({ name: '', email: '', subject: '', message: '' });
    } catch (error) {
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="bg-[#242424] ml-0 lg:ml-[70px] xl:ml-[100px] 2xl:ml-[140px] 4xl:ml-[180px]" id="Contact">
      <div className="text-left ml-4 md:ml-6 lg:ml-20 2xl:ml-28 4xl:ml-36 -mt-8 lg:-mt-20 2xl:-mt-28 4xl:-mt-40 text-[#e7e7e7e4] font-inter text-xs md:text-sm lg:text-sm 2xl:text-base 4xl:text-lg pt-20 lg:pt-30 2xl:pt-40 4xl:pt-56 pb-20 2xl:pb-28 4xl:pb-36 px-4 md:px-6 2xl:px-8 4xl:px-12">
        <h2 className="text-lg md:text-2xl lg:text-3xl 2xl:text-4xl 4xl:text-5xl font-medium mb-8 2xl:mb-12 4xl:mb-16">Let's Connect</h2>
        
        <div className="grid lg:grid-cols-2 gap-12 2xl:gap-16 4xl:gap-24 mb-12 2xl:mb-16 4xl:mb-24">
          {/* Contact Form - Now on Left */}
          <div className="bg-[#2a2a2a] rounded-lg p-6 2xl:p-8 4xl:p-12 order-2 lg:order-1">
            <h3 className="text-base md:text-xl lg:text-lg 2xl:text-xl 4xl:text-2xl font-medium mb-6 2xl:mb-8 4xl:mb-10">Send me a message</h3>
            
            {submitStatus === 'success' && (
              <div className="bg-green-600 text-white p-3 2xl:p-4 4xl:p-5 rounded-lg mb-4 2xl:mb-6 4xl:mb-8 text-xs md:text-sm lg:text-sm 2xl:text-base 4xl:text-lg">
                Your message is ready to send! Your email client should open shortly.
              </div>
            )}
            
            {submitStatus === 'error' && (
              <div className="bg-red-600 text-white p-3 2xl:p-4 4xl:p-5 rounded-lg mb-4 2xl:mb-6 4xl:mb-8 text-xs md:text-sm lg:text-sm 2xl:text-base 4xl:text-lg">
                Something went wrong. Please try again or email me directly.
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-4 2xl:space-y-6 4xl:space-y-8">
              <div className="grid md:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2 gap-4 2xl:gap-6 4xl:gap-8">
                <div>
                  <label htmlFor="name" className="block text-xs md:text-sm lg:text-sm 2xl:text-base 4xl:text-lg font-medium mb-2 2xl:mb-3 4xl:mb-4">
                    Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 2xl:px-6 2xl:py-4 4xl:px-8 4xl:py-6 bg-[#1a1a1a] border border-gray-600 rounded-lg focus:outline-none focus:border-[#ce4646] text-white text-xs md:text-sm lg:text-sm 2xl:text-base 4xl:text-lg"
                    placeholder="Your Name"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-xs md:text-sm lg:text-sm 2xl:text-base 4xl:text-lg font-medium mb-2 2xl:mb-3 4xl:mb-4">
                    Email *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 2xl:px-6 2xl:py-4 4xl:px-8 4xl:py-6 bg-[#1a1a1a] border border-gray-600 rounded-lg focus:outline-none focus:border-[#ce4646] text-white text-xs md:text-sm lg:text-sm 2xl:text-base 4xl:text-lg"
                    placeholder="your.email@example.com"
                  />
                </div>
              </div>
              
              <div>
                <label htmlFor="subject" className="block text-xs md:text-sm lg:text-sm 2xl:text-base 4xl:text-lg font-medium mb-2 2xl:mb-3 4xl:mb-4">
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  className="w-full px-4 py-3 2xl:px-6 2xl:py-4 4xl:px-8 4xl:py-6 bg-[#1a1a1a] border border-gray-600 rounded-lg focus:outline-none focus:border-[#ce4646] text-white text-xs md:text-sm lg:text-sm 2xl:text-base 4xl:text-lg"
                  placeholder="Project Discussion"
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block text-xs md:text-sm lg:text-sm 2xl:text-base 4xl:text-lg font-medium mb-2 2xl:mb-3 4xl:mb-4">
                  Message *
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full px-4 py-3 2xl:px-6 2xl:py-4 4xl:px-8 4xl:py-6 bg-[#1a1a1a] border border-gray-600 rounded-lg focus:outline-none focus:border-[#ce4646] text-white resize-none text-xs md:text-sm lg:text-sm 2xl:text-base 4xl:text-lg"
                  placeholder="Tell me about your project or idea..."
                />
              </div>
              
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-gradient-to-r from-[#d60505] to-[#FF6347] text-white py-3 px-6 2xl:py-4 2xl:px-8 4xl:py-6 4xl:px-12 rounded-lg hover:shadow-lg transition-shadow flex items-center justify-center space-x-2 2xl:space-x-3 4xl:space-x-4 disabled:opacity-50 text-xs md:text-sm lg:text-sm 2xl:text-base 4xl:text-lg"
              >
                <FiSend className="text-sm md:text-base lg:text-base 2xl:text-lg 4xl:text-xl" />
                <span>{isSubmitting ? 'Sending...' : 'Send Message'}</span>
              </button>
            </form>
          </div>

          {/* Contact Information - Now on Right */}
          <div className="space-y-6 2xl:space-y-8 4xl:space-y-12 order-1 lg:order-2">
            <p className="text-xs md:text-base lg:text-base 2xl:text-lg 4xl:text-xl mb-6 2xl:mb-8 4xl:mb-12">
              I'm always open to discussing new opportunities, collaborations, or just having a chat about technology. Feel free to reach out!
            </p>
            
            <div className="space-y-4 2xl:space-y-6 4xl:space-y-8">
              <div className="flex items-center space-x-3 2xl:space-x-4 4xl:space-x-6">
                <FiMail className="text-[#ce4646] text-base md:text-xl lg:text-lg 2xl:text-xl 4xl:text-2xl" />
                <span className="text-xs md:text-base lg:text-base 2xl:text-lg 4xl:text-xl">timashawanninayaka@gmail.com</span>
              </div>
              <div className="flex items-center space-x-3 2xl:space-x-4 4xl:space-x-6">
                <FiPhone className="text-[#ce4646] text-base md:text-xl lg:text-lg 2xl:text-xl 4xl:text-2xl" />
                <a 
                  href="tel:+94742791417" 
                  className="text-xs md:text-base lg:text-base 2xl:text-lg 4xl:text-xl hover:text-[#ce4646] transition-colors"
                >
                  +94 74 279 1417
                </a>
              </div>
              <div className="flex items-center space-x-3 2xl:space-x-4 4xl:space-x-6">
                <FiMapPin className="text-[#ce4646] text-base md:text-xl lg:text-lg 2xl:text-xl 4xl:text-2xl" />
                <span className="text-xs md:text-base lg:text-base 2xl:text-lg 4xl:text-xl">Kaluthara, Sri Lanka</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-600 pt-8 mt-12 2xl:pt-12 2xl:mt-16 4xl:pt-16 4xl:mt-24">
          <p className="text-xs md:text-sm lg:text-sm 2xl:text-base 4xl:text-lg">
            Crafted with
            <span className="font-medium"> React.js</span> &
            <span className="font-medium"> Tailwind CSS</span>, and deployed on
            <span className="font-medium"> Vercel</span>
          </p>
          <p className="mt-1 2xl:mt-2 4xl:mt-3 text-xs md:text-sm lg:text-sm 2xl:text-base 4xl:text-lg">By Timasha Wanninayaka</p>
          <p className="mt-6 2xl:mt-8 4xl:mt-12 text-xs md:text-sm lg:text-xs 2xl:text-sm 4xl:text-base opacity-80">© 2025 Timasha Wanninayaka. All rights reserved.</p>
        </div>
      </div>
    </section>
  );
};

export default Footer;