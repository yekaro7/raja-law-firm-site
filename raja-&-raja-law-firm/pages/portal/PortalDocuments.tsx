import React from 'react';
import { useAuth } from '../../contexts/AuthContext';
import { useLocalization } from '../../hooks/useLocalization';
import { UploadIcon, DownloadIcon } from '../../components/Icons';
import { Document } from '../../types';

const DocumentTable: React.FC<{ title: string; documents: Document[] }> = ({ title, documents }) => {
    const { t, language } = useLocalization();
    return (
        <div>
            <h3 className={`${language === 'ur' ? 'font-urdu' : 'font-serif'} text-lg font-bold text-navy-blue dark:text-white mb-4`}>{title}</h3>
            <div className="overflow-x-auto">
                <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                    <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-charcoal dark:text-gray-300">
                        <tr>
                            <th scope="col" className="px-6 py-3">{t('doc_name')}</th>
                            <th scope="col" className="px-6 py-3">{t('uploaded_by')}</th>
                            <th scope="col" className="px-6 py-3">{t('date')}</th>
                            <th scope="col" className="px-6 py-3"></th>
                        </tr>
                    </thead>
                    <tbody>
                        {documents.map(doc => (
                            <tr key={doc.id} className="bg-white dark:bg-navy-blue border-b dark:border-gold/20 hover:bg-gray-50 dark:hover:bg-charcoal/50">
                                <td className="px-6 py-4 font-medium text-gray-900 dark:text-white whitespace-nowrap">{doc.name}</td>
                                <td className="px-6 py-4">{doc.uploadedBy}</td>
                                <td className="px-6 py-4">{new Date(doc.timestamp).toLocaleString(language === 'en' ? 'en-US' : 'ar-SA')}</td>
                                <td className="px-6 py-4 text-right rtl:text-left">
                                    <a href={doc.url} download className="text-gold hover:underline flex items-center justify-end gap-1">
                                        <DownloadIcon className="w-4 h-4" />
                                        {t('download')}
                                    </a>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};


const PortalDocuments: React.FC = () => {
    const { user } = useAuth();
    const { t, language } = useLocalization();

    if (!user) return null;
    const clientDocs = user.documents.filter(d => d.uploadedBy === 'Client');
    const firmDocs = user.documents.filter(d => d.uploadedBy === 'Firm');

    return (
        <div className="p-4 sm:p-6 lg:p-8 fade-in">
            <h1 className={`${language === 'ur' ? 'font-urdu' : 'font-serif'} text-2xl sm:text-3xl font-bold text-navy-blue dark:text-white mb-8`}>
                {t('documents_title')}
            </h1>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                <div className="lg:col-span-2 space-y-8">
                    <div className="bg-white dark:bg-navy-blue p-6 rounded-lg shadow-md dark:shadow-gold/10">
                        <DocumentTable title={t('firm_documents')} documents={firmDocs} />
                    </div>
                    <div className="bg-white dark:bg-navy-blue p-6 rounded-lg shadow-md dark:shadow-gold/10">
                        <DocumentTable title={t('client_uploads')} documents={clientDocs} />
                    </div>
                </div>

                <div className="lg:col-span-1">
                    <div className="bg-white dark:bg-navy-blue p-6 rounded-lg shadow-md dark:shadow-gold/10">
                        <h3 className={`${language === 'ur' ? 'font-urdu' : 'font-serif'} text-lg font-bold text-navy-blue dark:text-white mb-4`}>{t('upload_new_document')}</h3>
                        <div className="mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-gray-300 dark:border-gold/30 border-dashed rounded-md">
                            <div className="space-y-1 text-center">
                                <UploadIcon className="mx-auto h-12 w-12 text-gray-400 dark:text-gold/50" />
                                <div className="flex text-sm text-gray-600 dark:text-gray-400">
                                    <label htmlFor="file-upload" className="relative cursor-pointer bg-white dark:bg-navy-blue rounded-md font-medium text-gold hover:text-gold/80 focus-within:outline-none">
                                        <span>Upload a file</span>
                                        <input id="file-upload" name="file-upload" type="file" className="sr-only" />
                                    </label>
                                    <p className="pl-1 rtl:pr-1">or drag and drop</p>
                                </div>
                                <p className="text-xs text-gray-500 dark:text-gray-500">PDF, DOCX, JPG up to 10MB</p>
                            </div>
                        </div>
                         <button className="mt-4 w-full bg-gold text-navy-blue font-bold py-2 px-4 rounded-lg hover:bg-gold/90 transition-colors">
                            Upload
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PortalDocuments;
