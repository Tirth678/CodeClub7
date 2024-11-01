import { motion } from 'framer-motion';
import { Calendar, Clock, MapPin } from 'lucide-react';

interface EventCardProps {
  title: string;
  date: string;
  time: string;
  location: string;
  description: string;
}

export function EventCard({ title, date, time, location, description }: EventCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="bg-white rounded-lg p-6 shadow-lg hover:shadow-xl transition-shadow duration-300"
    >
      <h3 className="text-xl font-bold text-secondary mb-4">{title}</h3>
      <div className="space-y-2 mb-4">
        <div className="flex items-center gap-2 text-gray-600">
          <Calendar size={18} />
          <span>{date}</span>
        </div>
        <div className="flex items-center gap-2 text-gray-600">
          <Clock size={18} />
          <span>{time}</span>
        </div>
        <div className="flex items-center gap-2 text-gray-600">
          <MapPin size={18} />
          <span>{location}</span>
        </div>
      </div>
      <p className="text-gray-600">{description}</p>
    </motion.div>
  );
}