
import React from 'react';
import { CheckCircle, ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';

export const ThankYouPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-white flex items-center justify-center p-4">
      <div className="max-w-md w-full text-center space-y-8 animate-in fade-in zoom-in duration-500">
        <div className="w-24 h-24 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-6">
            <CheckCircle className="w-12 h-12" />
        </div>
        <div>
            <h1 className="text-4xl font-bold mb-4 text-black">¡Mensaje Enviado!</h1>
            <p className="text-gray-600 text-lg">
                Hemos recibido tu solicitud correctamente. Nuestro equipo se pondrá en contacto contigo en menos de 24 horas.
            </p>
        </div>
        <Link 
            to="/" 
            className="inline-flex items-center gap-2 text-black font-bold hover:underline underline-offset-4"
        >
            <ArrowLeft className="w-4 h-4" /> Volver al Inicio
        </Link>
      </div>
    </div>
  );
};
