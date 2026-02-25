import { ProjectSelectionCard } from '@/widgets/shared/ui/organisms/ProjectSelectionCard';
import { ReportsEmptyContainer } from '@/widgets/shared/ui/organisms/ReportsEmptyContainer';
import { ReportConfigurationCard } from '@/widgets/shared/ui/organisms/ReportConfigurationCard';
import { useSelectedProject } from '@/widgets/features/select-project';
import type { Project } from '@/widgets/entities/project';

// Mock data
const mockProjects: Project[] = [
  { 
    id: '1', 
    name: 'Publicidad Coca-cola',
    createdAt: '28/11/2025',
    sensors: ['EEG', 'GSR', 'EyeTracker']
  },
  { 
    id: '2', 
    name: 'Helados Colombianos',
    createdAt: '15/10/2025',
    sensors: ['EyeTracker']
  },
  { 
    id: '3', 
    name: 'Experimento atardecer',
    createdAt: '03/12/2025',
    sensors: ['GSR', 'EyeTracker']
  }
];

export const ReportsPage = () => {
  const { selectedProject, selectProject, hasSelection } = useSelectedProject(mockProjects);
  
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-6xl mx-auto px-8 py-10">
        {/* Header Section */}
        <div className="mb-10">
          <h1 className="text-4xl font-semibold text-gray-900 mb-3 tracking-tight">
            Reportes
          </h1>
          <p className="text-lg text-gray-600 leading-relaxed">
            Genera y descarga reportes en PDF de tus proyectos, incluyendo gráficas, estadísticas y análisis de sensores.
          </p>
        </div>
        
        {/* Project Selection Card */}
        <div className="mb-8">
          <ProjectSelectionCard
            projects={mockProjects}
            selectedProject={selectedProject}
            onProjectChange={selectProject}
          />
        </div>
        
        {/* Report Configuration Card */}
        <div className="mb-8">
          <ReportConfigurationCard enabled={hasSelection} />
        </div>
        
        {/* Empty State */}
        {!hasSelection && (
          <div className="transition-all duration-300">
            <ReportsEmptyContainer />
          </div>
        )}
      </div>
    </div>
  );
};
