import { createContext, useContext, useState, useEffect, ReactNode, useCallback, useRef } from 'react';

type Weather = {
  temperature: number;
  condition: string;
  humidity: number;
  windSpeed: number;
  feelsLike: number;
  visibility: number;
  uvIndex: number;
  description: string;
  icon: string;
  city: string;
  lastUpdated: string;
};

type WeatherContextType = {
  weather: Weather | null;
  isLoading: boolean;
  error: string | null;
  refreshWeather: () => Promise<void>;
  isRefreshing: boolean;
};

const WeatherContext = createContext<WeatherContextType | undefined>(undefined);

// Cache configuration
const CACHE_DURATION = 10 * 60 * 1000; // 10 minutes
const CACHE_KEY = 'lucknow_weather_cache';

// Weather API configuration
const API_KEY = 'your_api_key_here'; // Replace with actual API key
const API_URL = `https://api.openweathermap.org/data/2.5/weather?q=Lucknow,IN&appid=${API_KEY}&units=metric`;

type CachedWeather = {
  data: Weather;
  timestamp: number;
};

export const useWeather = () => {
  const context = useContext(WeatherContext);
  if (context === undefined) {
    throw new Error('useWeather must be used within a WeatherProvider');
  }
  return context;
};

export const WeatherProvider = ({ children }: { children: ReactNode }) => {
  const [weather, setWeather] = useState<Weather | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [isRefreshing, setIsRefreshing] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const abortControllerRef = useRef<AbortController | null>(null);

  // Get cached weather data
  const getCachedWeather = (): Weather | null => {
    try {
      const cached = sessionStorage.getItem(CACHE_KEY);
      if (cached) {
        const parsedCache: CachedWeather = JSON.parse(cached);
        const isExpired = Date.now() - parsedCache.timestamp > CACHE_DURATION;
        
        if (!isExpired) {
          return parsedCache.data;
        }
      }
    } catch (error) {
      console.warn('Failed to get cached weather:', error);
    }
    return null;
  };

  // Cache weather data
  const setCachedWeather = (weatherData: Weather) => {
    try {
      const cacheData: CachedWeather = {
        data: weatherData,
        timestamp: Date.now()
      };
      sessionStorage.setItem(CACHE_KEY, JSON.stringify(cacheData));
    } catch (error) {
      console.warn('Failed to cache weather:', error);
    }
  };

  // Transform API response to our Weather type
  const transformWeatherData = (apiData: any): Weather => {
    return {
      temperature: Math.round(apiData.main.temp),
      condition: apiData.weather[0].main,
      humidity: apiData.main.humidity,
      windSpeed: Math.round(apiData.wind.speed * 3.6), // Convert m/s to km/h
      feelsLike: Math.round(apiData.main.feels_like),
      visibility: Math.round(apiData.visibility / 1000), // Convert m to km
      uvIndex: 0, // Would need additional API call for UV index
      description: apiData.weather[0].description,
      icon: apiData.weather[0].icon,
      city: apiData.name,
      lastUpdated: new Date().toLocaleString('en-IN', { 
        timeZone: 'Asia/Kolkata',
        hour12: true 
      })
    };
  };

  // Fetch weather data from API
  const fetchWeatherData = useCallback(async (isRefresh = false): Promise<Weather> => {
    // Cancel previous request if it exists
    if (abortControllerRef.current) {
      abortControllerRef.current.abort();
    }

    abortControllerRef.current = new AbortController();

    try {
      const response = await fetch(API_URL, {
        signal: abortControllerRef.current.signal,
        headers: {
          'Accept': 'application/json',
        }
      });

      if (!response.ok) {
        if (response.status === 401) {
          throw new Error('Invalid API key. Please check your OpenWeatherMap API key.');
        } else if (response.status === 404) {
          throw new Error('Location not found.');
        } else if (response.status === 429) {
          throw new Error('API rate limit exceeded. Please try again later.');
        }
        throw new Error(`Weather API error: ${response.status}`);
      }

      const data = await response.json();
      const weatherData = transformWeatherData(data);
      
      // Cache the new data
      setCachedWeather(weatherData);
      
      return weatherData;
    } catch (error) {
      if (error instanceof Error) {
        if (error.name === 'AbortError') {
          throw new Error('Request cancelled');
        }
        throw error;
      }
      throw new Error('Failed to fetch weather data');
    }
  }, []);

  // Main fetch weather function with fallback logic
  const fetchWeather = useCallback(async (isRefresh = false) => {
    try {
      if (!isRefresh) {
        setIsLoading(true);
        
        // Check cache first on initial load
        const cachedWeather = getCachedWeather();
        if (cachedWeather) {
          setWeather(cachedWeather);
          setError(null);
          setIsLoading(false);
          return;
        }
      } else {
        setIsRefreshing(true);
      }

      setError(null);

      // Check if API key is configured
      if (!API_KEY || API_KEY === 'your_api_key_here') {
        // Fallback to demo data when no API key
        const demoWeather: Weather = {
          temperature: 28,
          condition: 'Clear',
          humidity: 65,
          windSpeed: 12,
          feelsLike: 32,
          visibility: 10,
          uvIndex: 7,
          description: 'clear sky',
          icon: '01d',
          city: 'Lucknow',
          lastUpdated: new Date().toLocaleString('en-IN', { 
            timeZone: 'Asia/Kolkata',
            hour12: true 
          })
        };
        
        setWeather(demoWeather);
        setError('Demo mode: Add your API key for live weather data');
        return;
      }

      const weatherData = await fetchWeatherData(isRefresh);
      setWeather(weatherData);
      
    } catch (error) {
      console.error('Weather fetch error:', error);
      
      // Try to use cached data as fallback
      const cachedWeather = getCachedWeather();
      if (cachedWeather && !weather) {
        setWeather(cachedWeather);
        setError('Using cached data - network unavailable');
      } else {
        setError(error instanceof Error ? error.message : 'Failed to fetch weather data');
      }
    } finally {
      setIsLoading(false);
      setIsRefreshing(false);
    }
  }, [weather, fetchWeatherData]);

  // Refresh weather function for manual refresh
  const refreshWeather = useCallback(async () => {
    await fetchWeather(true);
  }, [fetchWeather]);

  // Initial fetch and setup auto-refresh
  useEffect(() => {
    fetchWeather();

    // Auto-refresh every 15 minutes
    const interval = setInterval(() => {
      fetchWeather(true);
    }, 15 * 60 * 1000);

    // Cleanup function
    return () => {
      clearInterval(interval);
      if (abortControllerRef.current) {
        abortControllerRef.current.abort();
      }
    };
  }, [fetchWeather]);

  // Handle visibility change (refresh when tab becomes visible)
  useEffect(() => {
    const handleVisibilityChange = () => {
      if (!document.hidden && weather) {
        const lastUpdated = new Date(weather.lastUpdated).getTime();
        const now = Date.now();
        
        // Refresh if data is older than 10 minutes
        if (now - lastUpdated > CACHE_DURATION) {
          fetchWeather(true);
        }
      }
    };

    document.addEventListener('visibilitychange', handleVisibilityChange);
    return () => document.removeEventListener('visibilitychange', handleVisibilityChange);
  }, [weather, fetchWeather]);

  const value: WeatherContextType = {
    weather,
    isLoading,
    error,
    refreshWeather,
    isRefreshing
  };

  return (
    <WeatherContext.Provider value={value}>
      {children}
    </WeatherContext.Provider>
  );
};

// Example usage component
const WeatherDisplay = () => {
  const { weather, isLoading, error, refreshWeather, isRefreshing } = useWeather();

  if (isLoading) {
    return (
      <div className="flex items-center justify-center p-6">
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-500"></div>
        <span className="ml-2">Loading weather...</span>
      </div>
    );
  }

  if (error && !weather) {
    return (
      <div className="p-6 text-center">
        <div className="text-red-500 mb-4">⚠️ {error}</div>
        <button 
          onClick={refreshWeather}
          className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition-colors"
          disabled={isRefreshing}
        >
          {isRefreshing ? 'Retrying...' : 'Try Again'}
        </button>
      </div>
    );
  }

  if (!weather) return null;

  return (
    <div className="max-w-md mx-auto bg-gradient-to-br from-blue-400 to-blue-600 text-white p-6 rounded-lg shadow-lg">
      <div className="flex justify-between items-start mb-4">
        <div>
          <h2 className="text-2xl font-bold">{weather.city}</h2>
          <p className="text-blue-100 capitalize">{weather.description}</p>
        </div>
        <button 
          onClick={refreshWeather}
          disabled={isRefreshing}
          className="p-2 hover:bg-white/20 rounded-full transition-colors disabled:opacity-50"
          title="Refresh weather"
        >
          <div className={`w-5 h-5 border-2 border-white rounded-full border-t-transparent ${isRefreshing ? 'animate-spin' : ''}`}></div>
        </button>
      </div>
      
      <div className="text-center mb-6">
        <div className="text-5xl font-light mb-2">{weather.temperature}°C</div>
        <div className="text-blue-100">Feels like {weather.feelsLike}°C</div>
      </div>
      
      <div className="grid grid-cols-2 gap-4 text-sm">
        <div className="bg-white/20 p-3 rounded">
          <div className="text-blue-100">Humidity</div>
          <div className="text-lg font-semibold">{weather.humidity}%</div>
        </div>
        <div className="bg-white/20 p-3 rounded">
          <div className="text-blue-100">Wind Speed</div>
          <div className="text-lg font-semibold">{weather.windSpeed} km/h</div>
        </div>
        <div className="bg-white/20 p-3 rounded">
          <div className="text-blue-100">Visibility</div>
          <div className="text-lg font-semibold">{weather.visibility} km</div>
        </div>
        <div className="bg-white/20 p-3 rounded">
          <div className="text-blue-100">Condition</div>
          <div className="text-lg font-semibold">{weather.condition}</div>
        </div>
      </div>
      
      {error && (
        <div className="mt-4 p-2 bg-yellow-500/20 rounded text-yellow-100 text-xs">
          {error}
        </div>
      )}
      
      <div className="text-center text-xs text-blue-200 mt-4">
        Last updated: {weather.lastUpdated}
      </div>
    </div>
  );
};

// Main App component
export default function App() {
  return (
    <div className="min-h-screen bg-gray-100 py-8">
      <WeatherProvider>
        <WeatherDisplay />
      </WeatherProvider>
    </div>
  );
}