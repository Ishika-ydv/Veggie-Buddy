import { useRef, useEffect, useState } from 'react';
import { Plant } from '../../types/plants';

interface RooftopCanvasProps {
  width: number;
  height: number;
  placedPlants: Array<{
    id: string;
    plant: Plant;
    x: number;
    y: number;
    rotation: number;
    scale: number;
  }>;
  selectedPlant: Plant | null;
  onPlantPlace: (x: number, y: number) => void;
  onPlantRemove: (id: string) => void;
  zoom: number;
}

const RooftopCanvas = ({
  width,
  height,
  placedPlants,
  selectedPlant,
  onPlantPlace,
  onPlantRemove,
  zoom
}: RooftopCanvasProps) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isDragging, setIsDragging] = useState(false);
  const [selectedPlantId, setSelectedPlantId] = useState<string | null>(null);
  
  const handleCanvasClick = (e: React.MouseEvent) => {
    if (!selectedPlant) return;
    
    const rect = containerRef.current!.getBoundingClientRect();
    const x = (e.clientX - rect.left) / zoom;
    const y = (e.clientY - rect.top) / zoom;
    
    onPlantPlace(x, y);
  };
  
  const handlePlantClick = (e: React.MouseEvent, id: string) => {
    e.stopPropagation();
    setSelectedPlantId(selectedPlantId === id ? null : id);
  };
  
  const handleRemovePlant = (e: React.MouseEvent, id: string) => {
    e.stopPropagation();
    onPlantRemove(id);
    setSelectedPlantId(null);
  };

  return (
    <div 
      ref={containerRef}
      className="relative bg-gray-100 cursor-pointer overflow-hidden"
      style={{ 
        width: '100%', 
        height: '500px',
        backgroundImage: 'url("data:image/jpeg;base64,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")',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
      onClick={handleCanvasClick}
    >
      <div 
        className="absolute top-0 left-0 grid"
        style={{ 
          width: width, 
          height: height, 
          transform: `scale(${zoom})`,
          transformOrigin: 'top left',
          backgroundImage: 'linear-gradient(rgba(255, 255, 255, 0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255, 255, 255, 0.1) 1px, transparent 1px)',
          backgroundSize: '20px 20px',
        }}
      >
        {placedPlants.map(plant => (
          <div 
            key={plant.id}
            className={`absolute cursor-move transition-shadow duration-200 ${
              selectedPlantId === plant.id ? 'shadow-lg ring-2 ring-green-500' : ''
            }`}
            style={{ 
              left: `${plant.x}px`, 
              top: `${plant.y}px`,
              transform: `rotate(${plant.rotation}deg) scale(${plant.scale})`,
              zIndex: selectedPlantId === plant.id ? 10 : 1,
            }}
            onClick={(e) => handlePlantClick(e, plant.id)}
          >
            <div className="relative">
              <img 
                src={plant.plant.image} 
                alt={plant.plant.name}
                className="w-16 h-16 object-contain"
              />
              {selectedPlantId === plant.id && (
                <button
                  className="absolute -top-2 -right-2 bg-red-500 text-white w-5 h-5 rounded-full flex items-center justify-center hover:bg-red-600"
                  onClick={(e) => handleRemovePlant(e, plant.id)}
                >
                  ×
                </button>
              )}
            </div>
          </div>
        ))}
      </div>
      
      {/* Instructions overlay */}
      <div className="absolute bottom-4 right-4 bg-white/90 p-3 rounded-md shadow-md text-xs text-gray-700 max-w-xs">
        <p className="font-medium mb-1">Instructions:</p>
        <ul className="list-disc list-inside space-y-1">
          <li>Select a plant from the palette</li>
          <li>Click on the canvas to place it</li>
          <li>Click on a placed plant to select it</li>
          <li>Click the X to remove a selected plant</li>
        </ul>
      </div>
    </div>
  );
};

export default RooftopCanvas;