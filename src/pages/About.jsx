import { Link } from 'react-router-dom';

const About = () => {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 -z-10 h-full w-full bg-white bg-[linear-gradient(to_right,#f0f0f0_1px,transparent_1px),linear-gradient(to_bottom,#f0f0f0_1px,transparent_1px)] bg-[size:6rem_4rem] opacity-50">
        <div className="absolute inset-0 bg-gradient-to-t from-white via-white/80"></div>
      </div>

      <div className="max-w-6xl mx-auto px-6 py-24">
        <div className="text-center">
          <h1 className="text-6xl md:text-7xl mb-14 font-black tracking-tighter text-slate-900 leading-tight">
            We build the <span className="text-[#8E977D] italic">architects</span> <br/> of tomorrow.
          </h1>
          
          <div className="grid md:grid-cols-3 gap-8 text-left mt-16">
            <div className="p-8 bg-white border border-slate-100 rounded-3xl shadow-sm hover:shadow-md transition-shadow">
              <h2 className="text-xs font-bold bg-[#8E977D] w-fit text-white rounded-full py-1.5 px-4 uppercase tracking-[0.2em] mb-6">Vision</h2>
              <p className="text-slate-600 leading-relaxed font-medium">
                Vantedge bridges the gap between slow-moving traditional education and the high-speed demands of the modern digital industry.
              </p>
            </div>

            <div className="p-8 bg-white border border-slate-100 rounded-3xl shadow-sm hover:shadow-md transition-shadow">
              <h2 className="text-xs font-bold bg-[#8E977D] text-white w-fit rounded-full py-1.5 px-4 uppercase tracking-[0.2em] mb-6">Mission</h2>
              <p className="text-slate-600 leading-relaxed font-medium">
                To empower developers with high-intensity, project-based learning and direct mentorship from industry veterans.
              </p>
            </div>

            <div className="p-8 bg-white border border-slate-100 rounded-3xl shadow-sm hover:shadow-md transition-shadow">
              <h2 className="text-xs font-bold bg-[#8E977D] text-white w-fit rounded-full py-1.5 px-4 uppercase tracking-[0.2em] mb-6">Impact</h2>
              <p className="text-slate-600 leading-relaxed font-medium">
                Our graduates don't just write code; they design systems that scale, lead teams, and build the future of the web.
              </p>
            </div>
          </div>

          <div className="mt-20 p-12 bg-slate-100 rounded-[3rem] text-slate-800 overflow-hidden relative ring-1 ring-inset ring-slate-200">
             <div className="relative z-10">
               <h2 className="text-3xl font-extrabold mb-4 tracking-tight">Ready to find your edge?</h2>
               <p className="text-slate-500 mb-8 max-w-lg mx-auto">Join a community of 5,000+ creators building the next generation of the web.</p>
                <Link 
                  to="/courses" 
                  className="inline-block bg-slate-900 text-white px-8 py-4 rounded-2xl font-bold hover:bg-[#8E977D] transition-all shadow-xl shadow-slate-200">
                  Explore our Programs
                </Link>
             </div>
             <div className="absolute -bottom-20 -right-20 w-64 h-64 rounded-full"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;