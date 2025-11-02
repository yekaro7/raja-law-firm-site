import React from 'react';
import { useLocalization } from '../hooks/useLocalization';
import { BlogPost, Page } from '../types';

interface BlogPostPageProps {
  post: BlogPost;
  onNavigate: (page: Page) => void;
}

const BlogPostPage: React.FC<BlogPostPageProps> = ({ post, onNavigate }) => {
  const { tb, t, language } = useLocalization();

  return (
    <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 fade-in">
      <article className="max-w-4xl mx-auto">
        <header className="mb-8 text-center">
          <p className="text-lg font-semibold text-gold">{tb(post.category)}</p>
          <h1 className={`${language === 'ur' ? 'font-urdu' : 'font-serif'} text-4xl md:text-5xl font-bold text-navy-blue dark:text-white mt-2`}>
            {tb(post.title)}
          </h1>
          <div className="text-md text-gray-500 dark:text-gray-400 mt-4">
            <span>{post.author}</span> &bull; <span>{post.date}</span>
          </div>
        </header>

        <img loading="lazy" decoding="async" className="w-full h-auto max-h-[500px] object-cover rounded-lg shadow-lg dark:shadow-gold/10 mb-8" src={post.image} alt={tb(post.title)} />

        <div className="prose lg:prose-xl max-w-none text-gray-800 dark:text-gray-200 leading-relaxed dark:prose-invert">
            {/* The blog post content would be rendered here. For this example, we use the excerpt as full content. */}
            <p>{tb(post.content)}</p>
            {/* In a real app, you would probably render Markdown or HTML content here */}
        </div>

        {/* --- Consultation CTA --- */}
        <div className="mt-16 pt-8 border-t-2 border-gold/20 text-center bg-gray-50 dark:bg-charcoal p-8 rounded-lg">
            <h2 className={`${language === 'ur' ? 'font-urdu' : 'font-serif'} text-2xl md:text-3xl font-bold text-navy-blue dark:text-white`}>
                {t('blog_cta_heading')}
            </h2>
            <button
                onClick={() => onNavigate('paidConsultation')}
                className="mt-6 bg-gold text-navy-blue font-bold py-3 px-8 rounded-lg text-lg hover:bg-gold/90 transition-all duration-300 transform hover:scale-105"
            >
                {t('nav_booking')}
            </button>
        </div>
      </article>
    </div>
  );
};

export default BlogPostPage;