import React from 'react';
import { SensorData } from '../services/sensorService';

interface Props {
  data: SensorData;
}

const SensorCard: React.FC<Props> = ({ data }) => {
  return (
    <div className="bg-white rounded-xl shadow-md p-6 w-full dash mx-auto">
      <h2 className="text-xl font-bold mb-4">🌱 Real-Time Sensor Data</h2>
      <p>🌡 Temperature: {data.temperature} °C</p>
      <p>💧 Humidity: {data.humidity} </p>
      <p>🪴 Moisture: {data.moisture} %</p>    
      <p>🔌 Motor: {data.motorStatus ? "ON" : "OFF"}</p>
      <p className="text-sm text-gray-500 mt-2">
        Last Updated: {new Date(data.timestamp).toLocaleString()}
      </p>
    </div>
  );
};

export default SensorCard;
