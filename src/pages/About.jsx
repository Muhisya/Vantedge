import { Link } from 'react-router-dom';

const About = () => {
  return (
    <div className="max-w-4xl mx-auto px-6 py-24">
      <div className="text-center space-y-8">
        <h1 className="text-6xl mb-14 font-black tracking-tighter text-slate-900">
          We build the <span className="text-[#8E977D] italic">architects</span> of tomorrow.
        </h1>
        
        <div className="grid md:grid-cols-2 gap-12 text-left mt-16">
          <div className="space-y-4">
            <h2 className="text-xl font-bold bg-[#8E977D] w-fit text-white rounded-full py-2 px-6 uppercase tracking-widest">Our Vision</h2>
            <p className="text-slate-600 leading-relaxed ml-3">
              Vantedge was founded on the belief that traditional education is too slow for the digital age. We aim to bridge the gap between theory and industry-standard execution.
            </p>
          </div>
          
          <div className="space-y-4">
            <h2 className="text-xl font-bold bg-[#8E977D] text-white w-fit rounded-full py-2 px-6 uppercase tracking-widest">Our Mission</h2>
            <p className="text-slate-600 ml-3 leading-relaxed">
              To provide every student with a competitive edge through high-intensity, project-based learning and direct mentorship from industry veterans.
            </p>
          </div>
        </div>

        <div className="pt-12">
          <Link 
            to="/courses" 
            className="inline-block bg-slate-900 text-white px-8 py-4 rounded-2xl font-bold hover:bg-[#8E977D] transition-all shadow-xl shadow-slate-200"
          >
            Explore our Programs
          </Link>
        </div>
      </div>
    </div>
  );
};

export default About;