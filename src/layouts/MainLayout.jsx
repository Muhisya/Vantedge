import { NavLink, Outlet } from 'react-router-dom';

const MainLayout = () => {
  const navLinkStyle = ({ isActive }) => 
    `text-sm font-bold w-fit text-center tracking-tight transition-all ${isActive ? 'text-[#8E977D] border-b border-[#8E977D]' : 'text-slate-400 hover:text-slate-900'}`;

  return (
    <div className="min-h-screen flex flex-col bg-[#F8FAFC]">
      <nav className="h-20 bg-white/80 backdrop-blur-md border-b border-slate-100 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-6 h-full flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-9 h-9 bg-[#8E977D] rounded-xl flex items-center justify-center shadow-lg shadow-[#ECE7D1]">
              <span className="text-white font-black italic text-xl">V</span>
            </div>
            <span className="text-xl font-black tracking-tighter">VANTEDGE</span>
          </div>
          <div className="flex gap-10 items-center">
            <NavLink to="/" className={navLinkStyle}>Home</NavLink>
            <NavLink to="/courses" className={navLinkStyle}>Programs</NavLink>
            <NavLink to="/about" className={navLinkStyle}>Story</NavLink>
            <NavLink to="/courses"><button type='button' className='text-sm bg-slate-900 hover:bg-[#8E977D] text-white px-5 py-2 rounded-full font-bold tracking-tight transition-all'>Get started</button></NavLink>
          </div>
        </div>
      </nav>

      <main className="flex-grow">
        <Outlet />
      </main>

      <footer className="py-10 bg-white border-t border-slate-100">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <p className="text-slate-400 text-sm font-medium">© 2026 Vantedge Learning Systems</p>
        </div>
      </footer>
    </div>
  );
};

export default MainLayout;