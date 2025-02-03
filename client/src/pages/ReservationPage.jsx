import { useState } from 'react';


const ReservationPage = () => {
  const [formData, setFormData] = useState({
    firstname: '',
    lastname: '',
    telephone: '',
    email: '',
    address: '',
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState('');

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch('http://localhost:4000/reservation/create', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (res.ok) {
        setIsSubmitted(true); 
      } else {
        setError(data.message || 'Something went wrong. Please try again.');
      }
    } catch (error) {
      setError('Error connecting to the server. Please try again.');
    }
  };

  const handleBackToForm = () => {
    setIsSubmitted(false); 
    setError(''); 
    setFormData({})
  };

  if (isSubmitted) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-gray-100">
        <div className='bg-white p-10 rounded-lg shadow-lg text-center w-full max-w-lg'>
            <h1 className="text-3xl font-bold mb-4 text-green-600">Reservation Confirmed</h1>
            <p className="text-lg mb-4">Thank you for your reservation!</p>
            <div className="text-left text-gray-700 space-y-2">
                <p><strong>First Name:</strong> {formData.firstname}</p>
                <p><strong>Last Name:</strong> {formData.lastname}</p>
                <p><strong>Telephone:</strong> {formData.telephone}</p>
                <p><strong>Email:</strong> {formData.email}</p>
                <p><strong>Address:</strong> {formData.address}</p>
            </div>
          <button
            onClick={handleBackToForm}
            className="bg-black text-white font-semibold py-2 px-6 rounded-lg hover:bg-gray-800 transition mt-4"
          >
            Back to Form
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className='flex items-center justify-center min-h-screen bg-gray-100'>
    <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-lg">
      <h1 className="text-3xl font-bold text-center mb-6 text-gray-800">Reservation Form</h1>
      {error && <div className="text-red-500 text-center mb-4">{error}</div>}
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label htmlFor="firstName" className="block text-md font-semibold text-gray-700">
            First Name
          </label>
          <input
            type="text"
            id="firstName"
            name="firstname"
            value={formData.firstname}
            onChange={handleInputChange}
            className="w-full p-3 border rounded-lg shadow-sm focus:ring focus:ring-gray-300"
            required
          />
        </div>

        <div>
          <label htmlFor="lastName" className="block text-md font-semibold text-gray-700">
            Last Name
          </label>
          <input
            type="text"
            id="lastName"
            name="lastname"
            value={formData.lastname}
            onChange={handleInputChange}
            className="w-full p-3 border rounded-lg shadow-sm focus:ring focus:ring-gray-300"
            required
          />
        </div>

        <div>
          <label htmlFor="telephone" className="block text-md font-semibold text-gray-700">
            Telephone Number
          </label>
          <input
            type="tel"
            id="telephone"
            name="telephone"
            value={formData.telephone}
            onChange={handleInputChange}
            className="w-full p-3 border rounded-lg shadow-sm focus:ring focus:ring-gray-300"
            required
          />
        </div>

        <div>
          <label htmlFor="email" className="block text-md font-semibold text-gray-700">
            Email Address
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
            className="w-full p-3 border rounded-lg shadow-sm focus:ring focus:ring-gray-300"
            required
          />
        </div>

        <div>
          <label htmlFor="address" className="block text-md font-semibold text-gray-700">
            Address
          </label>
          <textarea
            id="address"
            name="address"
            value={formData.address}
            onChange={handleInputChange}
            className="w-full p-3 border rounded-lg shadow-sm focus:ring focus:ring-gray-300"
            required
          ></textarea>
        </div>

        <button
          type="submit"
          className="bg-black text-white font-semibold py-2 px-6 rounded-lg hover:bg-gray-800 mx-auto block"
        >
          Submit Reservation
        </button>
      </form>
    </div>
    </div>
  );
};

export default ReservationPage;
