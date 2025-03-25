import React from 'react';
import { Twitter, Linkedin, Instagram } from 'lucide-react';
import { useI18n } from '../i18n';

const Contact = () => {
  const { t } = useI18n();

  return (
    <section className="bg-[#0A0A0A] py-20 px-4" id="contact">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold text-white mb-12 text-center">{t('contact.title')}</h2>
        <div className="bg-[#1A1A1A] rounded-xl p-8 border border-gray-800">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-[#40E0D0] text-xl mb-6">{t('contact.getInTouch')}</h3>
              <div className="mb-6">
                <p className="text-gray-400 mb-2">{t('contact.email')}</p>
                <p className="text-white">{t('contact.emailAddress')}</p>
              </div>
              <div className="mb-6">
                <p className="text-gray-400 mb-2">{t('contact.phone')}</p>
                <p className="text-white">{t('contact.phoneNumber')}</p>
              </div>
              <div className="mb-6">
                <p className="text-gray-400 mb-2">{t('contact.address')}</p>
                <p className="text-white whitespace-pre-line">
                  {t('contact.addressDetails')}
                </p>
              </div>
              <div>
                <p className="text-gray-400 mb-2">{t('contact.followUs')}</p>
                <div className="flex space-x-4">
                  <Twitter className="w-6 h-6 text-[#40E0D0] cursor-pointer" />
                  <Linkedin className="w-6 h-6 text-[#40E0D0] cursor-pointer" />
                  <Instagram className="w-6 h-6 text-[#40E0D0] cursor-pointer" />
                </div>
              </div>
            </div>
            <div>
              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-gray-400 mb-2">{t('contact.form.name')}</label>
                    <input
                      type="text"
                      className="w-full bg-[#0A0A0A] border border-gray-800 rounded-lg px-4 py-2 text-white focus:outline-none focus:border-[#40E0D0]"
                      placeholder={t('contact.form.namePlaceholder')}
                    />
                  </div>
                  <div>
                    <label className="block text-gray-400 mb-2">{t('contact.form.email')}</label>
                    <input
                      type="email"
                      className="w-full bg-[#0A0A0A] border border-gray-800 rounded-lg px-4 py-2 text-white focus:outline-none focus:border-[#40E0D0]"
                      placeholder={t('contact.form.emailPlaceholder')}
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-gray-400 mb-2">{t('contact.form.message')}</label>
                  <textarea
                    className="w-full bg-[#0A0A0A] border border-gray-800 rounded-lg px-4 py-2 text-white focus:outline-none focus:border-[#40E0D0] h-32"
                    placeholder={t('contact.form.messagePlaceholder')}
                  ></textarea>
                </div>
                <div className="flex items-center">
                  <input type="checkbox" id="newsletter" className="mr-2" />
                  <label htmlFor="newsletter" className="text-gray-400">{t('contact.form.subscribe')}</label>
                </div>
                <button className="w-full bg-[#40E0D0] text-black py-3 rounded-lg font-medium hover:bg-[#3CC8B9] transition-all">
                  {t('contact.form.send')}
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;