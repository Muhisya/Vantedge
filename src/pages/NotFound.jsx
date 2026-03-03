import { Link } from 'react-router-dom';

const NotFound = () => {
  return (
    <div className="min-h-[70vh] flex flex-col items-center justify-center px-6 text-center">
      <div className="relative">
        <h1 className="text-[12rem] font-black text-slate-100 leading-none select-none">
          404
        </h1>
        <p className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-2xl font-bold text-slate-900 w-full">
          Lost in the digital void?
        </p>
      </div>
      
      <p className="text-slate-500 mt-4 mb-10 max-w-sm">
        The program or page you are looking for has either moved or doesn't exist in the Vantedge ecosystem.
      </p>
      
      <Link 
        to="/" 
        className="px-8 py-3 bg-indigo-600 text-white rounded-xl font-bold hover:bg-indigo-700 transition-all active:scale-95 shadow-lg shadow-indigo-100"
      >
        Return to Overview
      </Link>
    </div>
  );
};

export default NotFound;