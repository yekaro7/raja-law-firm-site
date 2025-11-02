
import React from 'react';
import PageContainer from '../components/PageContainer';
import { teamMembers } from '../constants/team';
import { useLocalization } from '../hooks/useLocalization';

const TeamPage: React.FC = () => {
  const { tb, language } = useLocalization();

  return (
    <PageContainer titleKey="team_title" subtitleKey="team_subtitle">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {teamMembers.map((member) => (
          <div key={member.id} className="bg-white dark:bg-navy-blue rounded-lg shadow-md dark:shadow-gold/10 p-6 text-center hover:shadow-xl transition-shadow duration-300">
            <img
              src={member.image}
              alt={tb(member.name)}
              className="w-32 h-32 rounded-full mx-auto mb-4 object-cover"
            />
            <h3 className={`${language === 'ur' ? 'font-urdu' : 'font-serif'} text-xl font-bold text-navy-blue dark:text-white`}>{tb(member.name)}</h3>
            <p className="text-gold font-medium">{tb(member.title)}</p>
            <p className="mt-4 text-sm text-gray-600 dark:text-gray-300">{tb(member.bio)}</p>
          </div>
        ))}
      </div>
    </PageContainer>
  );
};

export default TeamPage;