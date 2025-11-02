import React, { useEffect, useRef } from 'react';
import { useLocalization } from '../hooks/useLocalization';
import { Page } from '../types';

// --- SVG Icons ---
const JusticeScaleIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
    <svg fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" {...props}>
        <path d="M9.5 2a.5.5 0 01.5.5v1a.5.5 0 01-1 0v-1a.5.5 0 01.5-.5z" />
        <path d="M1 4.5a.5.5 0 01.5-.5h17a.5.5 0 010 1h-17a.5.5 0 01-.5-.5z" />
        <path fillRule="evenodd" d="M10 5.5a.5.5 0 01.5.5v11a.5.5 0 01-1 0v-11a.5.5 0 01.5-.5z" clipRule="evenodd" />
        <path d="M3.5 6a.5.5 0 01.5.5v1a.5.5 0 01-1 0v-1a.5.5 0 01.5-.5z" />
        <path d="M16.5 6a.5.5 0 01.5.5v1a.5.5 0 01-1 0v-1a.5.5 0 01.5-.5z" />
        <path d="M4 8.5a.5.5 0 01.5-.5h5a.5.5 0 010 1h-5a.5.5 0 01-.5-.5z" />
        <path d="M11 8.5a.5.5 0 01.5-.5h5a.5.5 0 010 1h-5a.5.5 0 01-.5-.5z" />
        <path fillRule="evenodd" d="M2.5 10.854l1.525-.915A.5.5 0 014.5 10v4.5a.5.5 0 01-.5-.5h-3a.5.5 0 01-.5-.5V10a.5.5 0 01.447-.492l1.553-.414zM3 11v3h2v-3H3z" clipRule="evenodd" />
        <path fillRule="evenodd" d="M15.5 10.854l1.525-.915A.5.5 0 0117.5 10v4.5a.5.5 0 01-.5-.5h-3a.5.5 0 01-.5-.5V10a.5.5 0 01.447-.492l1.553-.414zM16 11v3h2v-3h-2z" clipRule="evenodd" />
    </svg>
);
const WhatsAppIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (<svg fill="currentColor" viewBox="0 0 24 24" {...props}><path d="M12.04 2c-5.46 0-9.91 4.45-9.91 9.91 0 1.75.46 3.45 1.32 4.95L2 22l5.25-1.38c1.45.79 3.08 1.21 4.79 1.21 5.46 0 9.91-4.45 9.91-9.91S17.5 2 12.04 2zM12.04 20.15c-1.48 0-2.93-.4-4.2-1.15l-.3-.18-3.12.82.83-3.04-.2-.31c-.82-1.31-1.26-2.83-1.26-4.38 0-4.54 3.7-8.24 8.24-8.24 4.54 0 8.24 3.7 8.24 8.24s-3.7 8.24-8.24 8.24zm4.23-5.49c-.22-.11-.47-.18-1.3-.65s-1.38-.11-1.38-.11-1.11.36-1.7.99c-.13.13-.26.29-.4.43-.54.54-1.08 1.08-1.08 1.08s-.24-.22-.48-.43c-1.13-.99-2.16-2.14-2.16-2.14s-.43-.48-.05-1.03c.13-.18.28-.35.43-.51s.43-.4.65-.67.43-.4.36-.67c-.07-.27-1.03-2.48-1.03-2.48s-.51-.43-.91-.43-1.03.36-1.2.54-.86.86-.86 2.21 1.03 3.65 1.16 3.91.86 2.48 5.11 4.54c3.29 1.59 4.38 1.38 4.38 1.38s.72-.22.99-.91c.08-.21.08-.43.08-.65s-.07-.36-.14-.48z" /></svg>);

// --- Refined Social Icons (Filled Style for Professional Look) ---
const FacebookIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
    <svg fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" {...props}>
        <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878V14.89h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"></path>
    </svg>
);
const InstagramIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
    <svg fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" {...props}>
        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.85s-.011 3.584-.069 4.85c-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07s-3.584-.012-4.85-.07c-3.252-.148-4.771-1.691-4.919-4.919-.058-1.265-.069-1.645-.069-4.85s.011-3.584.069-4.85c.149-3.225 1.664-4.771 4.919-4.919C8.416 2.175 8.796 2.163 12 2.163zm0 1.802c-3.11 0-3.469.012-4.68.068-2.61.119-3.628 1.139-3.746 3.746-.056 1.21-.067 1.57-.067 4.68s.011 3.469.067 4.68c.119 2.61 1.139 3.628 3.746 3.746 1.21.056 1.57.067 4.68.067s3.469-.011 4.68-.067c2.61-.119 3.628-1.139 3.746-3.746.056-1.21.067-1.57.067-4.68s-.011-3.469-.067-4.68c-.119-2.61-1.139-3.628-3.746-3.746C15.469 3.977 15.11 3.965 12 3.965z"></path>
        <path d="M12 6.848c-2.835 0-5.152 2.316-5.152 5.152s2.317 5.152 5.152 5.152 5.152-2.316 5.152-5.152S14.835 6.848 12 6.848zm0 8.498c-1.848 0-3.348-1.5-3.348-3.348s1.5-3.348 3.348-3.348 3.348 1.5 3.348 3.348-1.5 3.348-3.348 3.348zm4.908-8.21a1.213 1.213 0 100-2.426 1.213 1.213 0 000 2.426z"></path>
    </svg>
);
const YouTubeIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
    <svg fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" {...props}>
        <path d="M23.498 6.186a3.016 3.016 0 00-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 00.502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 002.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 002.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"></path>
    </svg>
);
const TikTokIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
    <svg fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" {...props}>
        <path d="M12.525.02c1.31-.02 2.61-.01 3.91.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z"></path>
    </svg>
);


interface FooterProps {
  onNavigate: (page: Page) => void;
}

const FooterLink: React.FC<{ page?: Page; onNavigate?: (page: Page) => void; children: React.ReactNode }> = ({ page, onNavigate, children }) => {
    return (
        <button onClick={() => onNavigate && page && onNavigate(page)} className="text-gray-300 hover:text-white transition-colors duration-300">
            <span className="hover-underline-animation">{children}</span>
        </button>
    );
};

const SocialLink: React.FC<{ href: string; children: React.ReactNode; label: string }> = ({ href, children, label }) => (
    <a href={href} target="_blank" rel="noopener noreferrer" aria-label={label} className="text-gray-300 hover:text-gold transition-transform duration-300 transform hover:scale-110">
        {children}
    </a>
);

const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  const { language, t } = useLocalization();
  const footerRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.remove('opacity-0');
            entry.target.classList.add('fade-in');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );

    if (footerRef.current) {
      footerRef.current.classList.add('opacity-0');
      observer.observe(footerRef.current);
    }

    return () => {
      if (footerRef.current) {
        observer.unobserve(footerRef.current);
      }
    };
  }, []);

  return (
    <footer ref={footerRef} className="transition-opacity duration-1000">
      <div className="bg-navy-blue text-white">
        <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* --- Top Layer: Logo & Tagline --- */}
            <div className="py-8 flex flex-col md:flex-row justify-between items-center gap-6 border-b border-gold/20">
                <button onClick={() => onNavigate('home')} className="flex items-center gap-3 text-gold transition-opacity hover:opacity-80">
                    <JusticeScaleIcon className="h-9 w-9" />
                    <span className="font-serif text-2xl font-semibold whitespace-nowrap">
                        Raja & Raja Law Firm
                    </span>
                </button>
                <div className={`text-center md:text-right text-gray-300 md:w-1/2`}>
                    <p className="font-serif text-sm">“{t('footer_tagline')}”</p>
                    {language === 'en' && <p className="font-urdu text-base mt-1 text-right">”سروس اور لیبر لاء کے ماہرین — پاکستان میں قابلِ اعتماد قانونی مشاورت۔“</p>}
                </div>
            </div>

            {/* --- Middle Layer: Quick Links --- */}
            <div className="py-10 grid grid-cols-2 lg:grid-cols-4 gap-y-8 gap-x-4">
                {/* Column 1: Firm */}
                <div>
                    <h2 className="mb-4 text-sm font-bold text-white uppercase tracking-wider">{t('footer_col_firm')}</h2>
                    <ul className="space-y-3 text-gray-300">
                        <li><FooterLink page="about" onNavigate={onNavigate}>{t('nav_about')}</FooterLink></li>
                        <li><FooterLink page="team" onNavigate={onNavigate}>{t('nav_team')}</FooterLink></li>
                        <li><FooterLink page="contact" onNavigate={onNavigate}>{t('footer_link_careers')}</FooterLink></li>
                        <li><FooterLink page="contact" onNavigate={onNavigate}>{t('nav_contact')}</FooterLink></li>
                    </ul>
                </div>
                {/* Column 2: Practice Areas */}
                <div>
                    <h2 className="mb-4 text-sm font-bold text-white uppercase tracking-wider">{t('footer_col_practice')}</h2>
                    <ul className="space-y-3 text-gray-300">
                        <li><FooterLink page="services" onNavigate={onNavigate}>{t('nav_services')}</FooterLink></li>
                        <li><FooterLink page="services" onNavigate={onNavigate}>{t('footer_link_corporate_civil')}</FooterLink></li>
                        <li><FooterLink page="services" onNavigate={onNavigate}>{t('footer_link_family_property')}</FooterLink></li>
                        <li><FooterLink page="services" onNavigate={onNavigate}>{t('footer_link_criminal')}</FooterLink></li>
                    </ul>
                </div>
                {/* Column 3: Resources */}
                <div>
                    <h2 className="mb-4 text-sm font-bold text-white uppercase tracking-wider">{t('footer_col_resources')}</h2>
                    <ul className="space-y-3 text-gray-300">
                        <li><FooterLink page="blog" onNavigate={onNavigate}>{t('nav_blog')}</FooterLink></li>
                        <li><FooterLink page="blog" onNavigate={onNavigate}>{t('footer_link_news')}</FooterLink></li>
                        <li><FooterLink page="faq" onNavigate={onNavigate}>{t('nav_faq')}</FooterLink></li>
                        <li><FooterLink page="paidConsultation" onNavigate={onNavigate}>{t('nav_booking')}</FooterLink></li>
                    </ul>
                </div>
                {/* Column 4: Connect */}
                <div>
                    <h2 className="mb-4 text-sm font-bold text-white uppercase tracking-wider">{t('footer_col_connect')}</h2>
                    <div className="flex space-x-5 mb-5">
                        <SocialLink href="https://facebook.com" label="Facebook"><FacebookIcon className="h-6 w-6" /></SocialLink>
                        <SocialLink href="https://instagram.com" label="Instagram"><InstagramIcon className="h-6 w-6" /></SocialLink>
                        <SocialLink href="https://youtube.com" label="YouTube"><YouTubeIcon className="h-6 w-6" /></SocialLink>
                        <SocialLink href="https://tiktok.com" label="TikTok"><TikTokIcon className="h-6 w-6" /></SocialLink>
                    </div>
                    <ul className="space-y-2 text-gray-300 text-sm">
                        <li className="flex items-center gap-2"><WhatsAppIcon className="h-5 w-5 flex-shrink-0"/><a href="https://wa.me/923001234567" target="_blank" rel="noopener noreferrer" className="hover:text-white hover-underline-animation">WhatsApp Link</a></li>
                        <li className="flex items-start gap-2"><a href={`mailto:${t('footer_email_value')}`} className="hover:text-white hover-underline-animation">{t('footer_email_value')}</a></li>
                        <li className="flex items-start gap-2">{t('footer_address_value')}</li>
                    </ul>
                </div>
            </div>
        </div>
      </div>
      
      {/* --- Bottom Layer: Legal & Copyright --- */}
      <div className="bg-charcoal text-gray-300 text-sm">
        <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex flex-col sm:flex-row justify-between items-center gap-3 border-t border-gold/20">
            <p>&copy; {new Date().getFullYear()} Raja & Raja Law Firm. {t('footer_rights')}</p>
            <div className="flex gap-x-4">
                <FooterLink page="privacy" onNavigate={onNavigate}>{t('nav_privacy')}</FooterLink>
                <span className="text-gray-600">|</span>
                <FooterLink page="privacy" onNavigate={onNavigate}>{t('footer_terms')}</FooterLink>
            </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;