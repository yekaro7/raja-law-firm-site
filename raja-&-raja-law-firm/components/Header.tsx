import React, { useState } from 'react';
import { useLocalization } from '../hooks/useLocalization';
import { useTheme } from '../hooks/useTheme';
import { Page } from '../types';

interface HeaderProps {
  activePage: Page;
  onNavigate: (page: Page) => void;
}

const LockIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" {...props}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 10.5V6.75a4.5 4.5 0 00-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 002.25-2.25v-6.75a2.25 2.25 0 00-2.25-2.25H6.75a2.25 2.25 0 00-2.25 2.25v6.75a2.25 2.25 0 002.25 2.25z" />
    </svg>
);

const NavLink: React.FC<{
  page: Page;
  activePage: Page;
  onNavigate: (page: Page) => void;
  children: React.ReactNode;
  onClick?: () => void;
  isPortalLink?: boolean;
}> = ({ page, activePage, onNavigate, children, onClick, isPortalLink }) => {
  const isActive = activePage === page;
  let classes: string;
  
  if (isPortalLink) {
    classes = 'flex items-center bg-navy-blue text-white border border-gold/50 rounded-full px-4 py-2 hover:bg-gold hover:text-navy-blue transition-all duration-300 hover:shadow-lg hover:shadow-gold/20';
  } else {
    classes = `block py-2 px-3 rounded md:p-0 transition-colors duration-300 ${isActive
      ? 'text-gold'
      : 'text-white hover:bg-gray-700 md:hover:bg-transparent md:hover:text-gold'}`;
  }

  const buttonElement = (
      <button onClick={() => { onNavigate(page); if(onClick) onClick(); }} className={classes}>
        {children}
      </button>
  );

  if (isPortalLink) {
    return buttonElement;
  }

  return (
    <li>
      {buttonElement}
    </li>
  );
};

const LanguageToggle: React.FC = () => {
  const { language, setLanguage } = useLocalization();

  return (
    <div className={`relative flex items-center bg-gray-700/50 rounded-full p-1 w-[110px] h-9 ${language === 'ur' ? 'flex-row-reverse' : ''}`}>
      <span
        className={`absolute bg-gold rounded-full h-7 w-[50px] transition-transform duration-300 ease-in-out`}
        style={{ transform: language === 'en' ? 'translateX(4px)' : 'translateX(56px)' }}
      />
      <button
        onClick={() => setLanguage('en')}
        className={`relative z-10 w-1/2 text-sm font-semibold transition-colors duration-300 ${language === 'en' ? 'text-navy-blue' : 'text-white'}`}
        aria-label="Switch to English"
      >
        EN
      </button>
      <button
        onClick={() => setLanguage('ur')}
        className={`relative z-10 w-1/2 text-sm font-urdu transition-colors duration-300 ${language === 'ur' ? 'text-navy-blue' : 'text-white'}`}
        aria-label="Switch to Urdu"
      >
        اردو
      </button>
    </div>
  );
};

const ThemeToggle: React.FC = () => {
  const { theme, setTheme } = useTheme();

  return (
    <button
      onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}
      className="text-white w-9 h-9 flex items-center justify-center rounded-full hover:bg-gray-700/50 transition-colors duration-300"
      aria-label="Toggle theme"
    >
      {theme === 'light' ? (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
          <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z" />
        </svg>
      ) : (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
          <path fillRule="evenodd" d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm-.707 10.607a1 1 0 011.414 0l.707-.707a1 1 0 11-1.414-1.414l-.707.707zM4 11a1 1 0 100-2H3a1 1 0 100 2h1z" clipRule="evenodd" />
        </svg>
      )}
    </button>
  );
};

const Header: React.FC<HeaderProps> = ({ activePage, onNavigate }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { language, t } = useLocalization();

  const navItems: { page: Page; labelKey: keyof typeof import('../constants/content').content }[] = [
    { page: 'home', labelKey: 'nav_home' },
    { page: 'about', labelKey: 'nav_about' },
    { page: 'services', labelKey: 'nav_services' },
    { page: 'team', labelKey: 'nav_team' },
    { page: 'blog', labelKey: 'nav_blog' },
    { page: 'faq', labelKey: 'nav_faq' },
    { page: 'contact', labelKey: 'nav_contact' },
  ];

  const handleMobileNavClick = () => {
    setIsMenuOpen(false);
  };

  return (
    <nav className="bg-navy-blue border-b border-gold/20 sticky top-0 z-50">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <button onClick={() => onNavigate('home')} className="flex items-center space-x-3 rtl:space-x-reverse">
          <span className={`${language === 'ur' ? 'font-urdu' : 'font-serif'} self-center text-2xl font-semibold whitespace-nowrap text-white`}>
            {language === 'en' ? 'Raja & Raja' : 'راجہ اینڈ راجہ'}
          </span>
        </button>
        <div className="flex items-center md:order-2 space-x-2 md:space-x-3 rtl:space-x-reverse">
           <div className="hidden md:flex items-center space-x-4">
            <LanguageToggle />
            <ThemeToggle />
            <div className="h-6 w-px bg-gold/30"></div>
          </div>
          
          <button
            onClick={() => onNavigate('paidConsultation')}
            className="text-white bg-gold hover:bg-gold/90 focus:ring-4 focus:outline-none focus:ring-gold/50 font-medium rounded-lg text-sm px-4 py-2 text-center transition-colors duration-300 hidden sm:block"
          >
            {t('nav_booking')}
          </button>
          
          <div className="hidden md:block">
            <NavLink page="login" activePage={activePage} onNavigate={onNavigate} isPortalLink={true}>
                 <LockIcon className="h-4 w-4 mr-1.5 rtl:ml-1.5 rtl:mr-0" />
                 <span className="uppercase text-xs font-bold tracking-wider">{t('nav_portal')}</span>
            </NavLink>
          </div>

          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            type="button"
            className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-400 rounded-lg md:hidden hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-600"
            aria-controls="navbar-cta"
            aria-expanded={isMenuOpen}
          >
            <span className="sr-only">Open main menu</span>
            <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
              <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15" />
            </svg>
          </button>
        </div>
        <div className={`items-center justify-between w-full md:flex md:w-auto md:order-1 ${isMenuOpen ? 'block' : 'hidden'}`} id="navbar-cta">
          <ul className="flex flex-col font-medium p-4 md:p-0 mt-4 border border-gray-700 rounded-lg bg-navy-blue md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-navy-blue">
            {navItems.map(item => (
              <NavLink key={item.page} page={item.page} activePage={activePage} onNavigate={onNavigate} onClick={handleMobileNavClick}>
                {t(item.labelKey)}
              </NavLink>
            ))}
            {/* Mobile Toggles */}
            <li className="md:hidden mt-4 pt-4 border-t border-gray-600">
                <div className="flex items-center justify-between">
                    <span className="text-gray-400 text-sm font-medium">Controls</span>
                    <div className="flex items-center space-x-2">
                        <LanguageToggle />
                        <ThemeToggle />
                    </div>
                </div>
            </li>
             <li className="sm:hidden mt-4">
                <button
                    onClick={() => { onNavigate('paidConsultation'); handleMobileNavClick(); }}
                    className="w-full text-white bg-gold hover:bg-gold/90 focus:ring-4 focus:outline-none focus:ring-gold/50 font-medium rounded-lg text-sm px-4 py-2 text-center transition-colors duration-300"
                >
                    {t('nav_booking')}
                </button>
            </li>
            <li className="md:hidden mt-4">
                <button
                    onClick={() => { onNavigate('login'); handleMobileNavClick(); }}
                    className="w-full flex items-center justify-center bg-navy-blue text-white border border-gold/50 rounded-full px-4 py-2 hover:bg-gold hover:text-navy-blue transition-all duration-300"
                >
                    <LockIcon className="h-4 w-4 mr-1.5" />
                    <span className="uppercase text-xs font-bold tracking-wider">{t('nav_portal')}</span>
                </button>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Header;