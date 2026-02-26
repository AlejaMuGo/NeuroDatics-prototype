import { EmptyState } from '../molecules/EmptyState';
import { Button } from "@/components/ui/button";
import { ChevronRight } from 'lucide-react';
import { Upload } from 'lucide-react';
import { Progress } from "@/components/ui/progress";
import { AlertCircle } from "lucide-react";

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogFooter,
  DialogTrigger,
  DialogClose,
} from "@/components/ui/dialog";
import { Field, FieldGroup } from "@/components/ui/field"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

export const ProjectsEmptyContainer = () => {
  return (
    <div className="border-2 border-dashed border-gray-300 rounded-xl bg-gradient-to-br from-gray-50 to-white transition-all duration-300 hover:border-gray-400">
      
      <Dialog>
        <EmptyState
          title="No hay proyectos creados"
          description="Comienza creando tu primer proyecto experimental para analizar datos de EED, GSR y Eye Tracking"
          icon="folder-open"
          action={
            <DialogTrigger asChild>
              <Button className="bg-black text-white px-8 py-6 rounded-lg hover:bg-gray-700 transition-colors duration-200 text-base font-medium">
                Crear nuevo proyecto
              </Button>
            </DialogTrigger>
          }
        />

        <DialogContent className="sm:max-w-2xl w-full">
          <DialogHeader>
            <DialogTitle className='text-xl'>Crear nuevo proyecto</DialogTitle>
            <DialogDescription>
              Paso 1 de 4
              <div className='flex flex-row space-x-2 mt-6'>
              <Progress value={100}/>
              <Progress value={0} className='bg-gray-200'/>
              <Progress value={0} className='bg-gray-200'/>
              <Progress value={0} className='bg-gray-200'/>
              </div>
            </DialogDescription>
          </DialogHeader>

          <FieldGroup>
            <Field>
              <Label htmlFor="nombre-proyecto" className='text-base'>Nombre del proyecto</Label>
              <Input id="nombre-proyecto" name="nombre-proyecto" placeholder="Ej: Publicidad Coca-cola" />
            </Field>

            <Field>
              <Label htmlFor="carpeta-experimento" className='text-base'>Carpeta del experimento</Label>
              <div className="border-2 border-dashed border-gray-300 rounded-xl bg-gradient-to-br from-gray-50 to-white transition-all duration-300 hover:border-gray-600">
                  <div className="flex flex-col items-center justify-center py-12 px-8 text-center">
                        <div className="mb-5 relative">
                          <div className="absolute inset-0 bg-gray-200 rounded-full blur-xl opacity-50"></div>
                          <div className="w-12 h-12 bg-gray-200 rounded-full flex items-center justify-center shadow-sm">
                            <Upload size={20}
                            />
                          </div>
                        </div>
                  
                        <h3 className="text-base font-medium text-gray-900 mb-2">
                          Arrastra la carpeta aquí o haz clic para seleccionar
                        </h3>
                  
                        <p className="text-gray-500 text-base leading-relaxed max-w-xl mb-4">
                          soporta imágenes, vídeos y archivos de datos
                        </p>
                        <Button variant="outline">Seleccionar carpeta</Button>
                      </div>
              </div>
            </Field>
          </FieldGroup>
                <div className="flex items-center gap-4 rounded-xl bg-gray-100 py-4 px-5">
                  <div className="shrink-0 rounded-lg bg-black p-1.5 text-white">
                    <AlertCircle size={20} />
                  </div>

                  <p className="flex-1 text-xs text-gray-900 leading-relaxed">
                    Recuerda poner un nombre descriptivo a las imágenes y vídeos utilizados, que coincida con lo que se obtiene en los datos.
                  </p>
                </div>
          <DialogFooter>
            <DialogClose asChild>
              <Button variant="outline">Cancelar</Button>
            </DialogClose>
            <Button type="submit">Siguiente <ChevronRight /></Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>

    </div>
  );
};