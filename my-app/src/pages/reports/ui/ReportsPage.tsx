import { useState } from 'react';
import { ProjectSelectionCard } from '@/widgets/shared/ui/organisms/ProjectSelectionCard';
import { ReportsEmptyContainer } from '@/widgets/shared/ui/organisms/ReportsEmptyContainer';
import type { SensorType } from '@/widgets/shared/ui/atoms/SensorBadge';

// Mock data
const mockProjects = [
  { 
    id: '1', 
    name: 'Publicidad Coca-cola',
    sensors: ['EEG', 'GSR', 'EyeTracker'] as SensorType[]
  },
  { 
    id: '2', 
    name: 'Helados Colombianos',
    sensors: ['EyeTracker'] as SensorType[]
  },
  { 
    id: '3', 
    name: 'Experimento atardecer',
    sensors: ['GSR', 'EyeTracker'] as SensorType[]
  }
];

export const ReportsPage = () => {
  const [selectedProject, setSelectedProject] = useState('');
  
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-6xl mx-auto px-8 py-10">
        {/* Header Section */}
        <div className="mb-10">
          <h1 className="text-4xl font-semibold text-gray-900 mb-3 tracking-tight">
            Reportes
          </h1>
          <p className="text-lg text-gray-600 leading-relaxed ">
            Genera y descarga reportes en PDF de tus proyectos, incluyendo gráficas, estadísticas y análisis de sensores.
          </p>
        </div>
        
        {/* Project Selection Card */}
        <div className="mb-8">
          <ProjectSelectionCard
            projects={mockProjects}
            selectedProject={selectedProject}
            onProjectChange={setSelectedProject}
          />
        </div>
        
        {/* Content Area */}
        <div className={`transition-all duration-500 ease-in-out ${selectedProject ? 'opacity-100 translate-y-0' : 'opacity-100 translate-y-0'}`}>
          {!selectedProject ? (
            <ReportsEmptyContainer />
          ) : (
            <div className="bg-white rounded-xl border border-gray-200 shadow-sm p-10">
              <div className="text-center py-16">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-gray-100 rounded-full mb-6">
                  <svg className="w-8 h-8 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-semibold text-gray-900 mb-3">
                  Aquí aparecerá la configuración del reporte
                </h3>
                <p className="text-gray-600 text-lg">
                  Proyecto seleccionado: <span className="font-medium text-gray-900">{mockProjects.find(p => p.id === selectedProject)?.name}</span>
                </p>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
