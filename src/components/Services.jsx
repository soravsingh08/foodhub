import React from 'react';
import { Truck, Utensils, ShieldCheck, Clock } from 'lucide-react'; // Icons ke liye lucide-react use karna best hai

const Services = () => {
  const servicesData = [
    {
      icon: <Truck size={32} />,
      title: "Fast Delivery",
      desc: "Get your favorite meals delivered to your doorstep in under 30 minutes."
    },
    {
      icon: <Utensils size={32} />,
      title: "Premium Quality",
      desc: "We partner with top-rated restaurants to ensure the best taste and hygiene."
    },
    {
      icon: <ShieldCheck size={32} />,
      title: "Secure Payments",
      desc: "100% secure payment gateways including UPI, Cards, and Net Banking."
    },
    {
      icon: <Clock size={32} />,
      title: "24/7 Support",
      desc: "Our customer support team is always here to help you with your orders."
    }
  ];

  return (
    <section className="services-section">
      <h2 className="section-title">Our Services</h2>
      <div className="services-grid">
        {servicesData.map((item, index) => (
          <div key={index} className="service-card">
            <div className="service-icon">{item.icon}</div>
            <h3>{item.title}</h3>
            <p>{item.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Services;