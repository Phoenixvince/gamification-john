import React from 'react';
import { Github, Twitter, Linkedin, Heart } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-purple-900/30 mt-8 py-8 rounded-2xl">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="text-center md:text-left">
            <h3 className="text-xl font-bold text-white mb-2">GameMaster Pro</h3>
            <p className="text-purple-300">Level up your gaming experience</p>
          </div>

          <div className="flex items-center gap-6">
            {[
              { icon: Github, href: '#', label: 'GitHub' },
              { icon: Twitter, href: '#', label: 'Twitter' },
              { icon: Linkedin, href: '#', label: 'LinkedIn' },
            ].map((social, index) => (
              <a
                key={index}
                href={social.href}
                className="text-purple-300 hover:text-white transition-colors"
                aria-label={social.label}
              >
                <social.icon size={24} />
              </a>
            ))}
          </div>
        </div>

        <div className="mt-8 pt-6 border-t border-purple-800/50 text-center">
          <p className="text-purple-300 flex items-center justify-center gap-2">
            Made with <Heart className="text-pink-500" size={16} /> by John Muchiri
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;