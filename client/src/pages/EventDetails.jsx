import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

const EventDetails = () => {
    const { id } = useParams()
    const [event, setEvent] = useState(null)

    useEffect(() => {
        const fetchEvent = async () => {
            try {
                const res = await fetch(`http://localhost:4000/event/getEvent/${id}`)
                const data = await res.json()
                if(res.ok){
                    setEvent(data)
                }
            } catch (error) {
                console.log(error.message)
            }
        }
        fetchEvent()
    }, [id])

    if (!event) {
        return <div className='text-center'>Loading...</div>;
    }

  return (
    <div className="p-10">
      <h1 className="text-3xl font-bold mb-4 text-center">{event.title}</h1>
      <div className="max-w-2xl mx-auto">
        <img src={event.image} alt={event.title} className="w-full sm:h-64 md:h-80 lg:h-64 object-cover mb-5" />
        <p className="text-lg mb-4 font-semibold">{event.description}</p>
        <p className="text-md text-gray-600 font-semibold">Location: {event.location || event.platform}</p>
        <p className="mt-2 text-md text-gray-600 font-semibold">Price: {event.currency} {event.price}</p>
        <p className="mt-2 text-md text-gray-600 font-semibold">{event.time ? `Time: ${event.time}` : null}</p>
        <div className="mt-4">
          <h3 className="text-md font-semibold">Speakers:</h3>
          <ul className="list-disc pl-6">
            {event.speakers?.map((speaker, index) => (
              <li key={index} className='text-md'>
                <strong className='text-md'>{speaker.name}</strong> - {speaker.role}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  )
}

export default EventDetails
