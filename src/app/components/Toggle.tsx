import { useState } from 'react';
import { Testimonials } from './Testimonials';

const ProductSections: React.FC = () => {
  const [activeSection, setActiveSection] = useState<string>('details');

  const toggleSection = (section: string) => {
    setActiveSection(activeSection === section ? '' : section);
  };

  return (
    <div className="mt-10">
      <div className="flex flex-col lg:flex-row space-x-4">
        {/* Responsive Headings */}
        <h2 
          onClick={() => toggleSection('details')} 
          className={`cursor-pointer text-xl font-bold ${activeSection === 'details' ? 'border-b-2 border-black' : ''}`}>
          Product Details
        </h2>
        <h2 
          onClick={() => toggleSection('reviews')} 
          className={`cursor-pointer text-xl font-bold ${activeSection === 'reviews' ? 'border-b-2 border-black' : ''}`}>
          Reviews
        </h2>
        <h2 
          onClick={() => toggleSection('faqs')} 
          className={`cursor-pointer text-xl font-bold ${activeSection === 'faqs' ? 'border-b-2 border-black' : ''}`}>
          FAQs
        </h2>
      </div>

      {/* Product Details Section */}
      {activeSection === 'details' && (
        <div className="border p-4 mt-2">
          <p>This graphic t-shirt is perfect for any occasion. Crafted from soft and breathable fabric, it offers superior comfort and style.</p>
        </div>
      )}

      {/* Reviews Section */}
      {activeSection === 'reviews' && (
        <div className="border p-4 mt-2">
          <Testimonials /> {/* Reviews component imported */}
        </div>
      )}

      {/* FAQs Section */}
      {activeSection === 'faqs' && (
        <div className="border p-4 mt-2">
          <h3 className="font-semibold">What is the return policy?</h3>
          <p>You can return the product within 30 days of purchase.</p>
          <h3 className="font-semibold mt-2">Is this t-shirt machine washable?</h3>
          <p>Yes, it's machine washable. Please follow the care instructions.</p>
          <h3 className="font-semibold mt-2">Do you offer international shipping?</h3>
          <p>Yes, we ship internationally. Shipping costs may vary.</p>
        </div>
      )}
    </div>
  );
};

export default ProductSections;
