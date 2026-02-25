import { Card } from '../atoms/Card';
import { RadioGroup, RadioGroupItem } from '../../../../components/ui/radio-group';
import { Label} from '../../../../components/ui/label';

interface ReportConfigurationCardProps {
  enabled: boolean;
}

const reportOptions = [
  {
    id: 'complete',
    title: 'Reporte completo del proyecto',
    description: 'Incluye todos los sensores y análisis disponibles del proyecto seleccionado'
  },
  {
    id: 'by-sensor',
    title: 'Reporte por sensor',
    description: 'Selecciona uno o más sensores específicos para incluir en el reporte'
  },
  {
    id: 'comparative',
    title: 'Reporte comparativo',
    description: 'Análisis comparativo entre sensores, gráficas y métricas'
  }
];

export const ReportConfigurationCard = ({ enabled }: ReportConfigurationCardProps) => {
  return (
    <Card 
      className={`p-8 transition-all duration-300 ${
        enabled 
          ? 'opacity-100' 
          : 'opacity-50 pointer-events-none'
      }`}
    >
      <div className="flex items-start gap-4 mb-6">
        <div className="flex-shrink-0 w-10 h-10 bg-gray-100 rounded-lg flex items-center justify-center">
          <span className="text-gray-800 font-semibold text-lg">2</span>
        </div>
        <div className="flex-1">
          <h2 className="text-xl font-semibold text-gray-900 mb-2">
            Configuración del reporte
          </h2>
          <p className="text-sm text-gray-600 leading-relaxed">
            Define el tipo y alcance del reporte a generar
          </p>
        </div>
      </div>
      
      <div className="pl-14 space-y-3">
        {reportOptions.map((option) => (
          <label
            key={option.id}
            className={`flex items-start gap-3 p-4 border border-gray-200 rounded-xl cursor-pointer transition-all duration-200 ${
              enabled 
                ? 'hover:border-gray-300 hover:bg-gray-100' 
                : ''
            }`}
          >
            <input
              type="radio"
              name="report-type"
              value={option.id}
              disabled={!enabled}
              className="peer mt-1 w-4 h-4 accent-gray-900"
            />
            <div className="flex-1">
              <h3 className="text-sm font-semibold text-gray-900 mb-1">
                {option.title}
              </h3>
              <p className="text-xs text-gray-600 leading-relaxed">
                {option.description}
              </p>
            </div>
          </label>
        ))}
      </div>
    </Card>
  );
};
