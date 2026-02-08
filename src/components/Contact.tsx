import { useState, useRef, type JSX } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import emailjs from '@emailjs/browser';

function SocialProfiles ({isDark}: {isDark: boolean}) {
  const socialItems = [
    {
      name: 'GitHub',
      url: 'https://github.com/sifaandev',
      icon: (
        <svg fill="#8e51ff" viewBox="0 0 24 24" aria-hidden="true" width="21">
          <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
        </svg>
      )
    },
    {
      name: 'LinkedIn',
      url: 'https://linkedin.com',
      icon: (
        <svg fill="#8e51ff" viewBox="0 0 24 24" aria-hidden="true" width="16">
          <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
        </svg>
      )
    },
    {
      name: 'YouTube',
      url: 'https://youtube.com/@sifaandev',
      icon: (
        <svg fill="#8e51ff" viewBox="0 0 24 24" aria-hidden="true" width="21">
          <path fillRule="evenodd" d="M19.812 5.418c.861.23 1.538.907 1.768 1.768C21.998 8.746 22 12 22 12s0 3.255-.418 4.814a2.504 2.504 0 0 1-1.768 1.768c-1.56.419-7.814.419-7.814.419s-5.255 0-7.814-.419a2.505 2.505 0 0 1-1.768-1.768C2 15.255 2 12 2 12s0-3.255.417-4.814a2.507 2.507 0 0 1 1.768-1.768C5.744 5 11.998 5 11.998 5s6.255 0 7.814.418ZM15.194 12 10 15V9l5.194 3Z" clipRule="evenodd" />
        </svg>
      )
    },
    {
      name: 'Instagram',
      url: 'https://instagram.com',
      icon: (
        <svg fill="#8e51ff" viewBox="0 0 24 24" aria-hidden="true" width="19">
          <path fillRule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-5.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" clipRule="evenodd" />
        </svg>
      )
    }
  ];

  return (
    <ul className="flex items-center flex-wrap gap-4 sm:gap-5 mt-5">
      {socialItems.map((item,index) => 
        <li key={index}>
          <a href={item.url}
            target="_blank"
            className={`flex justify-center items-center w-10 h-10 rounded-full transition-all duration-300 ease-in-out hover:-translate-y-1 ${isDark ? "bg-[#1a0f2d] hover:bg-violet-900/30" : "bg-violet-500/10 hover:bg-violet-500/20"}`}>
              {item.icon}
          </a>
        </li>
      )}
    </ul>
  );
}

export default function Contact({isDark}: {isDark:boolean}) {
  type FormState = {
    name: string;
    email: string;
    location: string;
    message: string;
  }

  const [form, setForm] = useState<FormState>({name: "", email: "", location: "", message: ""});
  const [loading, setLoading] = useState<boolean>(false);
  const emailRef = useRef<HTMLFormElement | null>(null);

  type ContactDetail = {
    icon: JSX.Element;
    title: string;
    value: string;
  };

  const contactDetails: ContactDetail[] = [
    {
      icon: (
        <svg className="w-6 h-6 text-violet-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
        </svg>
      ),
      title: "Name",
      value: "Sifaan Zayn"
    },
    {
      icon: (
        <svg className="w-6 h-6 text-violet-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      ),
      title: "Email",
      value: "siphanx47@gmail.com"
    },
    {
      icon: (
        <svg className="w-6 h-6 text-violet-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>
      ),
      title: "Based In",
      value: "Gopalganj, India"
    }
  ];

  const isDisabled = loading || !form.name.trim() || !form.email.trim() || !form.message.trim();

  const handleChange = (name: keyof FormState, value: string) => {
    setForm(prev => ({ ...prev, [name]: value }));
  };

  const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const name = form.name.trim();
    const email = form.email.trim();
    const message = form.message.trim();
    
    const SERVICE_ID = import.meta.env.VITE_SERVICE_ID || '';
    const TEMPLATE_ID = import.meta.env.VITE_TEMPLATE_ID || '';
    const PUBLIC_KEY = import.meta.env.VITE_PUBLIC_KEY || '';
    
    if (!name || !email || !message) {
      toast.error("Please fill in all required fields");
      return;
    }

    setLoading(true)

    if (!SERVICE_ID || !TEMPLATE_ID || !PUBLIC_KEY) {
        toast.error("Email service is not configured yet");
        setLoading(false);
        return;
    }
      
    emailjs.sendForm(
      SERVICE_ID,
      TEMPLATE_ID,
      emailRef.current!,
      PUBLIC_KEY
    )
    .then(() => {
      toast.success("Thanks for contacting me. I’ll respond soon")
      setForm({name: "", email: "", location: "", message: ""});
      setLoading(false)
    })
    .catch(() => {
      toast.error("Oops! Something went wrong. You can contact me via social media")
      setLoading(false)
    });
  };

  return (
    <div className="flex flex-col gap-10 md:flex-row">

      <div className="space-y-5 md:w-1/2">
        <p className={`mt-3 mb-8 md:text-lg`}>I'm always open to discussing new opportunities and interesting projects. Feel free to reach out</p>
        <div className="flex flex-col gap-5">
          {contactDetails.map((item, index) => 
            <div key={index} className="flex items-center gap-4 group">
              <div className={`p-3 rounded-full transition-colors duration-300 ${isDark ? "bg-[#1a0f2d] group-hover:bg-violet-900/30" : "bg-violet-500/10 group-hover:bg-violet-500/20"}`}>{item.icon}</div>
              <div>
                <p className={`text-lg font-medium leading-tight ${isDark ? "text-white" : "text-black"}`}>{item.title}</p>
                <p className="mt-1 opacity-75">{item.value}</p>
              </div>
            </div>
          )}
        </div>

        <div className="pt-1">
          <SocialProfiles isDark={isDark} />
        </div>
      </div>

      <form ref={emailRef} onSubmit={sendEmail} className="flex-1">
        <div className="space-y-6">

          <div className="flex flex-wrap sm:grid sm:grid-cols-[repeat(auto-fit,minmax(200px,1fr))] gap-6">
            <div className="flex-1 flex flex-col gap-2">
              <label htmlFor="name" className={`font-medium tracking-wider ${isDark ? "text-white" : "text-black"}`}>NAME</label>
              <input required type="text" name="name" value={form.name} onChange={(e) => handleChange(e.target.name as keyof FormState, e.target.value)} placeholder="Your name" className={`px-3 outline-none border-b py-2 transition-all duration-300 focus:border-violet-500 placeholder:opacity-75 ${isDark ? "border-white/10 text-white placeholder:text-[#b7cfe6]" : "border-black/10 text-black placeholder:text-[#2d2639]"}`} />
            </div>  

            <div className="flex-1 flex flex-col gap-2">
              <label htmlFor="email" className={`font-medium tracking-wider ${isDark ? "text-white" : "text-black"}`}>EMAIL</label>
              <input required type="email" name="email" value={form.email} onChange={(e) => handleChange(e.target.name as keyof FormState, e.target.value)} placeholder="your@email.com" className={`px-3 outline-none border-b py-2 transition-all duration-300 focus:border-violet-500 placeholder:opacity-75 ${isDark ? "border-white/10 text-white placeholder:text-[#b7cfe6]" : "border-black/10 text-black placeholder:text-[#2d2639]"}`} />
            </div> 
          </div>

          <div className="flex flex-col gap-2">
            <label htmlFor="location" className={`font-medium tracking-wider ${isDark ? "text-white" : "text-black"}`}>LOCATION</label>
            <input type="text" name="location" value={form.location} onChange={(e) => handleChange(e.target.name as keyof FormState, e.target.value)} placeholder="City, Country" className={`px-3 outline-none border-b py-2 transition-all duration-300 focus:border-violet-500 placeholder:opacity-75 ${isDark ? "border-white/10 text-white placeholder:text-[#b7cfe6]" : "border-black/10 text-black placeholder:text-[#2d2639]"}`} />
          </div> 

          <div className="flex flex-col gap-2">
            <label htmlFor="message" className={`font-medium tracking-wider ${isDark ? "text-white" : "text-black"}`}>MESSAGE</label>
            <textarea
              rows={4}
              name="message"
              value={form.message}
              onChange={(e) => handleChange(e.target.name as keyof FormState, e.target.value)}
              required
              className={`w-full px-4 py-3 rounded-xl border transition-all duration-300 resize-none outline-none placeholder:opacity-75 ${
                isDark
                  ? 'border-white/5 placeholder:text-[#b7cfe6] focus:border-violet-500 focus:shadow-[0_0_20px_rgba(139,92,246,0.15)] text-white'
                  : 'border-black/5 placeholder:text-[#2d2639] focus:border-violet-500 focus:shadow-[0_0_20px_rgba(139,92,246,0.1)] text-black'
              }`}
              placeholder="Share your ideas, project details, or questions with me..."
            />
          </div>

          <button
            type="submit"
            disabled={isDisabled}
            className={`flex justify-center items-center gap-1 w-full font-semibold rounded-xl px-6 py-3.5 transition-all text-white active:scale-95 group
              ${
                isDisabled
                  ? isDark
                    ? "cursor-not-allowed bg-gradient-to-r from-violet-600/60 to-pink-600/60 opacity-90 backdrop-blur-sm"
                    : "cursor-not-allowed bg-gradient-to-r from-violet-500/70 to-pink-500/70 opacity-90"
                  : "cursor-pointer bg-gradient-to-r from-purple-600 to-pink-500 hover:shadow-lg"
              }`}>
            {loading ? <p>Sending...</p> : <>
              <p>Send Message</p>
              <svg className="inline-block w-5 h-5 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg></>
            }
          </button>

        </div>
      </form>

      <ToastContainer
        position="top-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick={false}
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme={`${isDark ? "dark" : "light"}`}
      />

    </div>
  );
}
