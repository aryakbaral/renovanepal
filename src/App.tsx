import { motion } from 'framer-motion';
import { 
  Home, 
  Lightbulb, 
  Zap, 
  Palette, 
  Maximize, 
  Phone, 
  Mail, 
  MapPin, 
  ArrowRight,
  Star,
  CheckCircle2,
  Hammer
} from 'lucide-react';

const Navbar = () => (
  <nav className="fixed top-0 w-full z-50 bg-white/80 backdrop-blur-md border-b border-gray-100">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="flex justify-between h-20 items-center">
        <div className="flex items-center space-x-2">
          <div className="bg-red-700 p-2 rounded-lg">
            <Home className="text-white h-6 w-6" />
          </div>
          <span className="text-2xl font-bold tracking-tight text-gray-900">
            GHAR<span className="text-red-700">SANSAR</span>
          </span>
        </div>
        <div className="hidden md:flex space-x-8 items-center font-medium">
          <a href="#services" className="hover:text-red-700 transition-colors">Services</a>
          <a href="#portfolio" className="hover:text-red-700 transition-colors">Portfolio</a>
          <a href="#about" className="hover:text-red-700 transition-colors">About</a>
          <a href="#contact" className="bg-red-700 text-white px-6 py-2 rounded-full hover:bg-red-800 transition-all">Get Estimate</a>
        </div>
      </div>
    </div>
  </nav>
);

const Hero = () => (
  <section className="relative pt-32 pb-20 overflow-hidden">
    <div className="absolute top-0 right-0 w-1/2 h-full bg-gray-50 -z-10 hidden lg:block" />
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="grid lg:grid-cols-2 gap-12 items-center">
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-5xl lg:text-7xl font-extrabold text-gray-900 leading-tight mb-6">
            Modernizing <br />
            <span className="text-red-700">The Classics</span>
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-lg leading-relaxed">
            Preserving the soul of your ancestral Kathmandu home while upgrading it for the modern age. We specialize in structural flow, natural light, and premium Newari-fusion aesthetics.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <button className="bg-red-700 text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-red-800 transition-all flex items-center justify-center">
              View Our Work <ArrowRight className="ml-2 h-5 w-5" />
            </button>
            <button className="border-2 border-gray-900 text-gray-900 px-8 py-4 rounded-lg font-bold text-lg hover:bg-gray-900 hover:text-white transition-all">
              Our Process
            </button>
          </div>
        </motion.div>
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="relative"
        >
          <div className="aspect-[4/5] rounded-2xl overflow-hidden shadow-2xl">
            <img 
              src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=80" 
              alt="Modernized Home Interior" 
              className="w-full h-full object-cover"
            />
          </div>
          <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-xl shadow-xl hidden md:block border border-gray-100">
            <div className="flex items-center space-x-4">
              <div className="bg-green-100 p-3 rounded-full">
                <CheckCircle2 className="text-green-600 h-6 w-6" />
              </div>
              <div>
                <p className="text-sm text-gray-500 font-medium uppercase tracking-wider">Property Value</p>
                <p className="text-xl font-bold text-gray-900">+45% Average Increase</p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  </section>
);

const Services = () => {
  const services = [
    {
      title: "Structural Flow",
      description: "Opening up traditional compartmentalized layouts for better air circulation and movement.",
      icon: <Maximize className="h-8 w-8 text-red-700" />
    },
    {
      title: "Natural Lighting",
      description: "Strategic placement of windows and sky-lighting to brighten historically dark interiors.",
      icon: <Lightbulb className="h-8 w-8 text-red-700" />
    },
    {
      title: "Modern Utilities",
      description: "Complete overhaul of old electrical wiring and plumbing systems for safety and efficiency.",
      icon: <Zap className="h-8 w-8 text-red-700" />
    },
    {
      title: "Newari-Fusion Design",
      description: "Blending traditional wood carving and brickwork with minimalist, modern finishes.",
      icon: <Palette className="h-8 w-8 text-red-700" />
    }
  ];

  return (
    <section id="services" className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Expertise</h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg">
            We don't just paint walls; we rethink how your home functions in the 21st century while honoring its Kathmandu heritage.
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <motion.div 
              key={index}
              whileHover={{ y: -10 }}
              className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-xl transition-all border border-gray-100"
            >
              <div className="mb-6">{service.icon}</div>
              <h3 className="text-xl font-bold mb-3">{service.title}</h3>
              <p className="text-gray-600 leading-relaxed">{service.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Portfolio = () => {
  const projects = [
    {
      title: "The Patan Residence",
      category: "Full Restoration",
      image: "https://images.unsplash.com/photo-1613490493576-7fde63acd811?auto=format&fit=crop&q=80"
    },
    {
      title: "Balaju Modern Attic",
      category: "Interior Redesign",
      image: "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&q=80"
    },
    {
      title: "Lalitpur Courtyard",
      category: "Newari Fusion",
      image: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&q=80"
    }
  ];

  return (
    <section id="portfolio" className="py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
          <div>
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Recent Transformations</h2>
            <p className="text-gray-600 max-w-xl">A glimpse into how we've helped Kathmandu homeowners breathe new life into their properties.</p>
          </div>
          <button className="text-red-700 font-bold flex items-center hover:underline">
            View All Projects <ArrowRight className="ml-2 h-5 w-5" />
          </button>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div key={index} className="group cursor-pointer">
              <div className="relative aspect-[4/3] rounded-2xl overflow-hidden mb-4">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-all" />
              </div>
              <p className="text-red-700 text-sm font-bold uppercase tracking-widest mb-1">{project.category}</p>
              <h3 className="text-xl font-bold text-gray-900">{project.title}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Testimonials = () => (
  <section className="py-24 bg-red-900 text-white overflow-hidden relative">
    <div className="absolute top-0 right-0 opacity-10">
      <Hammer className="w-96 h-96 -mr-20 -mt-20" />
    </div>
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
      <div className="max-w-3xl">
        <div className="flex space-x-1 mb-8">
          {[...Array(5)].map((_, i) => (
            <Star key={i} className="h-6 w-6 fill-current text-yellow-400" />
          ))}
        </div>
        <h2 className="text-3xl md:text-5xl font-bold leading-tight mb-8">
          "Ghar Sansar transformed our 30-year-old family home in Baneshwor into a sun-drenched modern sanctuary without losing the character my father built."
        </h2>
        <div>
          <p className="font-bold text-xl">Sandeep K.C.</p>
          <p className="text-red-200">Homeowner, New Baneshwor</p>
        </div>
      </div>
    </div>
  </section>
);

const Contact = () => (
  <section id="contact" className="py-24 bg-white">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="bg-gray-900 rounded-3xl p-8 md:p-16 overflow-hidden relative">
        <div className="grid lg:grid-cols-2 gap-16">
          <div className="text-white">
            <h2 className="text-4xl font-bold mb-6">Let's Talk About Your Home</h2>
            <p className="text-gray-400 text-lg mb-12">
              Ready to modernize? Book a free consultation and site visit within the Kathmandu Valley.
            </p>
            <div className="space-y-6">
              <div className="flex items-center space-x-4">
                <div className="bg-white/10 p-3 rounded-full"><Phone className="h-6 w-6" /></div>
                <span>+977 1 4400000 / +977 9800000000</span>
              </div>
              <div className="flex items-center space-x-4">
                <div className="bg-white/10 p-3 rounded-full"><Mail className="h-6 w-6" /></div>
                <span>hello@gharsansar.com.np</span>
              </div>
              <div className="flex items-center space-x-4">
                <div className="bg-white/10 p-3 rounded-full"><MapPin className="h-6 w-6" /></div>
                <span>Jhamsikhel, Lalitpur, Nepal</span>
              </div>
            </div>
          </div>
          <form className="bg-white p-8 rounded-2xl space-y-4">
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Full Name</label>
                <input type="text" className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:ring-2 focus:ring-red-700 outline-none transition-all" />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Phone Number</label>
                <input type="tel" className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:ring-2 focus:ring-red-700 outline-none transition-all" />
              </div>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Home Location (e.g. Baluwatar)</label>
              <input type="text" className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:ring-2 focus:ring-red-700 outline-none transition-all" />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Message / Requirements</label>
              <textarea rows={4} className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:ring-2 focus:ring-red-700 outline-none transition-all"></textarea>
            </div>
            <button className="w-full bg-red-700 text-white font-bold py-4 rounded-lg hover:bg-red-800 transition-all">
              Request Free Consultation
            </button>
          </form>
        </div>
      </div>
    </div>
  </section>
);

const Footer = () => (
  <footer className="bg-gray-50 py-12 border-t border-gray-200">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
      <div className="flex items-center justify-center space-x-2 mb-6">
        <div className="bg-red-700 p-2 rounded-lg">
          <Home className="text-white h-5 w-5" />
        </div>
        <span className="text-xl font-bold tracking-tight text-gray-900">
          GHAR<span className="text-red-700">SANSAR</span>
        </span>
      </div>
      <p className="text-gray-500 text-sm">
        © {new Date().getFullYear()} Ghar Sansar Pvt. Ltd. All rights reserved. <br />
        Jhamsikhel, Lalitpur, Nepal.
      </p>
    </div>
  </footer>
);

function App() {
  return (
    <div className="min-h-screen bg-white font-sans text-gray-900 selection:bg-red-100 selection:text-red-900">
      <Navbar />
      <Hero />
      <Services />
      <Portfolio />
      <Testimonials />
      <Contact />
      <Footer />
    </div>
  );
}

export { App };
