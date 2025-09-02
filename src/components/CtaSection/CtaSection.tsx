import React from 'react';
import Button from '../ui/Button/Button'; 
import { FiSend } from 'react-icons/fi';

const CtaSection = () => {
  return (
   
    <section className="bg-gray-900 text-white">
      <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8 py-20 sm:py-28">
   
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight mb-4">
          Vous avez un projet en tête ?
        </h2>

  
        <p className="max-w-2xl mx-auto text-lg sm:text-xl text-gray-300 leading-relaxed mb-10">
          L'équipe SETAM est prête à vous accompagner dans la réalisation de vos
          projets architecturaux et techniques, de la conception à la mise en œuvre.
        </p>

      
        <Button href="#contact" variant="cta" icon={<FiSend />}>
          Contactez SETAM
        </Button>
      </div>
    </section>
  );
};

export default CtaSection;