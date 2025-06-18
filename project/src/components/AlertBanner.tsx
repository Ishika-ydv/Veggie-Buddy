import React from 'react';

interface Props {
  temperature: number;
  humidity: number;
  moisture: number;
  motorStatus: boolean;
}

const AlertBanner: React.FC<Props> = ({ temperature, humidity, moisture, motorStatus }) => {
  const alerts: string[] = [];

  if (moisture > 600) alerts.push("🚨 Moisture too low! Water your plant.");
  else if (moisture < 200 ) alerts.push("⚠️ Moisture too high! Avoid overwatering.");

  if (temperature < 10) alerts.push("❄️ Temperature too low!");
  else if (temperature > 35) alerts.push("🔥 Temperature too high!");

  if (humidity < 30) alerts.push("💧 Humidity too low!");
  else if (humidity > 85) alerts.push("🌫️ Humidity too high!");

  if (motorStatus) alerts.push("🔔 Motor is ON due to low moisture!");

  return (
    <div className="bg-white p-4 rounded-lg shadow-md">
      {alerts.length > 0 ? (
        <ul className="space-y-2">
          {alerts.map((alert, index) => (
            <li key={index} className="text-red-600 font-semibold">
              {alert}
            </li>
          ))}
        </ul>
      ) : (
        <p className="text-green-600 font-medium">✅ All readings are in a healthy range!</p>
      )}
    </div>
  );
};

export default AlertBanner;
