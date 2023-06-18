import React, {useRef} from "react";
import emailjs from '@emailjs/browser';
import "../global.css";

function Contact() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_o9mb7it', 'template_2mrlwzr', form.current, 'YOUR_PUBLIC_KEY')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
  };
  return (
    <>
      {/* <div className="section bg-black" id="home"> */}
      <section class="bg-black dark:bg-gray-900" id="contact">
        <br/><br/>
        <div class="py-8 mt-12 lg:py-16 px-4 mx-auto max-w-screen-sm">
          <h2 class="mb-4 text-4xl tracking-tight font-extrabold text-center text-white dark:text-white">
            Contact Me
          </h2>
          <div data-aos="fade-up" data-aos-duration="1000">
          <form ref={form} class="space-y-8">
            <div>
              <label
                for="email"
                class="block mb-2 text-md font-medium text-teal-400 dark:text-gray-300"
              >
                Your email
              </label>
              <input
                type="email"
                id="email"
                class="shadow-sm bg-black border border-gray-800 text-gray-100 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-3 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"
                placeholder="youremail@xyz.com"
                required
              />
            </div>
            <div>
            <label
                for="subject"
                class="block mb-2 text-md font-medium text-teal-400 dark:text-gray-300"
              >
                Subject
              </label>
              <input
                type="text"
                id="subject"
                class="block p-3 bg-black w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-800 shadow-sm focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"
                placeholder="Let us know how I can help you"
                required
              />
            </div>
            <div class="sm:col-span-2">
            <label
                for="message"
                class="block mb-2 text-md font-medium text-teal-400 dark:text-gray-300"
              >
                Your message
              </label>
              <textarea
                id="message"
                rows="6"
                class="block p-4 bg-black w-full text-sm text-gray-900 bg-gray-50 rounded-lg shadow-sm border border-gray-800 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                placeholder="Leave a comment..."
              ></textarea>
            </div>
            <button type="submit"
                      href="#"
                      class="inline-flex items-center px-3 py-2 text-sm font-medium text-center bg-black border border-teal-400 text-white hover:text-black hover:bg-teal-400 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                    >Send Message
                      </button>
          </form>
          </div>
          <br/><br/><br/><br/>
        </div>
      </section>
    </>
  );
}

export default Contact;
