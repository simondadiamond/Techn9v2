import React from 'react';
import { Twitter, Linkedin } from 'lucide-react';

const TestimonialCard = ({ image, name, position, testimonial }) => (
  <div className="bg-[#1A1A1A] rounded-xl p-6">
    <div className="flex items-center mb-4">
      <img src={image} alt={name} className="w-12 h-12 rounded-full object-cover mr-4" />
      <div>
        <h3 className="text-white font-semibold">{name}</h3>
        <p className="text-gray-400 text-sm">{position}</p>
      </div>
      <div className="ml-auto flex space-x-2">
        <Twitter className="w-5 h-5 text-[#40E0D0]" />
        <Linkedin className="w-5 h-5 text-[#40E0D0]" />
      </div>
    </div>
    <p className="text-gray-300">{testimonial}</p>
  </div>
);

const Clients = () => {
  const testimonials = [
    {
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=80',
      name: 'John Smith',
      position: 'CEO at XYZ Enterprise',
      testimonial: 'Working with Automize has been a game-changer for our business. Their AI-powered solutions have transformed our workflows, saving us time and resources.'
    },
    {
      image: 'https://images.unsplash.com/photo-1519345182560-3f2917c472ef?ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=80',
      name: 'David Lee',
      position: 'CTO at ABC Corporation',
      testimonial: 'Their AI-driven document processing solution has streamlined our operations and improved accuracy. Their proactive approach and attention to detail have been instrumental in our success.'
    },
    {
      image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=80',
      name: 'Sarah Thompson',
      position: 'Operations Director',
      testimonial: 'The demand forecasting tools provided by Automize have been a game-changer for our supply chain management. The system is accurate and has helped us optimize our inventory levels and minimize waste.'
    }
  ];

  return (
    <section className="bg-[#0A0A0A] py-20 px-4" id="clients">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold text-white mb-12 text-center">Some of our Clients</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <TestimonialCard key={index} {...testimonial} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Clients;
