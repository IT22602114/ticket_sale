import { useEffect, useState } from "react";

const EventPage = () => {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    const fetchEvents = async () => {
      try {
        const res = await fetch("http://localhost:4000/event/events");
        const data = await res.json();
        if (res.ok && data?.[0]) {
          setEvents([...data[0].events, ...data[0].virtualEvents]); 
        }
      } catch (error) {
        console.log(error.message);
      }
    };
    fetchEvents();
  }, []);

  return (
    <div className="p-10">
      <h1 className="text-2xl font-bold mb-4 text-center">Upcoming Events</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {events.map((event) => (
          <div 
            key={event.id} 
            className="bg-white shadow-md rounded-lg overflow-hidden cursor-pointer hover:scale-105 transition-transform"
          >
            <img 
              src={event.image} 
              alt={event.title} 
              className="w-full h-48 object-cover"
            />
            <div className="p-3">
              <h2 className="text-lg font-semibold truncate">{event.title}</h2>
              <p className="text-sm text-gray-600">
                {event.location || event.platform || "Location not available"}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default EventPage;
