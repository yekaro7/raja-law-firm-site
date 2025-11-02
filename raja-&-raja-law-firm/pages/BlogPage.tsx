import React, { useState, useMemo } from 'react';
import PageContainer from '../components/PageContainer';
import { blogPosts } from '../constants/blog';
import { useLocalization } from '../hooks/useLocalization';
import { Page } from '../types';

interface BlogPageProps {
    onNavigate: (page: Page, postId?: number) => void;
}

const BlogPage: React.FC<BlogPageProps> = ({ onNavigate }) => {
  const { tb, t, language } = useLocalization();
  const [activeCategory, setActiveCategory] = useState<string>('All');

  const categories = useMemo(() => {
    const uniqueCategories = new Set(blogPosts.map(p => tb(p.category)));
    return ['All', ...Array.from(uniqueCategories)];
  }, [blogPosts, language]);

  const filteredPosts = useMemo(() => {
    if (activeCategory === 'All') {
      return blogPosts;
    }
    return blogPosts.filter(p => tb(p.category) === activeCategory);
  }, [activeCategory, blogPosts, language]);

  return (
    <PageContainer titleKey="blog_title">
      <div className="max-w-4xl mx-auto">
        <div className="flex justify-center flex-wrap gap-2 mb-12">
          {categories.map(category => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-4 py-2 rounded-full font-semibold transition-colors duration-300 ${
                activeCategory === category
                  ? 'bg-navy-blue text-white'
                  : 'bg-gray-200 text-charcoal hover:bg-gray-300 dark:bg-gray-700 dark:text-white dark:hover:bg-gray-600'
              }`}
            >
              {category === 'All' ? (language === 'en' ? 'All' : 'سب') : category}
            </button>
          ))}
        </div>

        <div className="space-y-12">
          {filteredPosts.map((post) => (
            <div key={post.id} className="bg-white dark:bg-navy-blue rounded-lg shadow-md dark:shadow-gold/10 overflow-hidden md:flex transition-shadow duration-300 hover:shadow-xl">
              <div className="md:w-1/3">
                <img loading="lazy" decoding="async" className="h-full w-full object-cover" src={post.image} alt={tb(post.title)} />
              </div>
              <div className="p-6 md:w-2/3">
                <p className="text-sm font-semibold text-gold">{tb(post.category)}</p>
                <h3 className={`${language === 'ur' ? 'font-urdu' : 'font-serif'} text-2xl font-bold text-navy-blue dark:text-white mt-1`}>{tb(post.title)}</h3>
                <div className="text-sm text-gray-500 dark:text-gray-400 mt-2">
                  <span>{post.author}</span> &bull; <span>{post.date}</span>
                </div>
                <p className="mt-4 text-gray-700 dark:text-gray-200">{tb(post.excerpt)}</p>
                <button onClick={() => onNavigate('blogPost', post.id)} className="mt-6 text-gold font-semibold hover:underline">
                  {t('read_more')} &rarr;
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </PageContainer>
  );
};

export default BlogPage;