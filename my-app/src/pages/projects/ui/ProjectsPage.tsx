import { ProjectsEmptyContainer } from '@/widgets/shared/ui/organisms/ProjectsEmptyContainer';

export const ProjectsPage = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-6xl mx-auto px-8 py-10">
        {/* Header Section */}
        <div className="mb-10">
          <h1 className="text-3xl font-semibold text-gray-900 mb-3 tracking-tight">
            Proyectos
          </h1>
          <p className="text-lg text-gray-600 leading-relaxed">
            Gestiona tus experimentos de neuromarketing y análisis de bioseñales. 
          </p>
        </div>
        {/* Empty State */}
            { (
              <div className="transition-all duration-300">
                <ProjectsEmptyContainer />
              </div>
            )}      
    </div>
  </div>
  );
};
