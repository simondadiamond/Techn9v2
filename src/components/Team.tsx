import React from 'react';
import { Twitter, Linkedin } from 'lucide-react';

const TeamMember = ({ image, name, position }) => (
  <div className="bg-[#1A1A1A] rounded-xl overflow-hidden">
    <div className="h-64 overflow-hidden">
      <img src={image} alt={name} className="w-full h-full object-cover" />
    </div>
    <div className="p-6">
      <h3 className="text-[#40E0D0] text-xl font-semibold mb-2">{name}</h3>
      <p className="text-gray-400 mb-4">{position}</p>
      <div className="flex space-x-3">
        <Twitter className="w-5 h-5 text-gray-400 hover:text-[#40E0D0] cursor-pointer" />
        <Linkedin className="w-5 h-5 text-gray-400 hover:text-[#40E0D0] cursor-pointer" />
      </div>
    </div>
  </div>
);

const Team = () => {
  const team = [
    {
      image: 'https://images.unsplash.com/photo-1463453091185-61582044d556?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
      name: 'Michael Brown',
      position: 'CEO & Founder'
    },
    {
      image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
      name: 'James Rodriguez',
      position: 'Chief Technology Officer'
    },
    {
      image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
      name: 'Emily Wang',
      position: 'Lead AI Engineer'
    },
    {
      image: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
      name: 'Jessica Miller',
      position: 'Marketing Manager'
    }
  ];

  return (
    <section className="bg-[#0A0A0A] py-20 px-4" id="team">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold text-white mb-4 text-center">Meet our team</h2>
        <p className="text-gray-400 text-center mb-12">
          Our team is comprised of dedicated professionals who are passionate about leveraging artificial intelligence to drive innovation.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {team.map((member, index) => (
            <TeamMember key={index} {...member} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;
