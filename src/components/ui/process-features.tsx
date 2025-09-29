import { cn } from "@/lib/utils";
import {
  IconPencil,
  IconPalette,
  IconCode,
  IconRocket,
} from "@tabler/icons-react";

interface ProcessFeature {
  title: string;
  description: string;
  icon: React.ReactNode;
}

interface ProcessFeaturesProps {
  features: ProcessFeature[];
}

export function ProcessFeatures({ features }: ProcessFeaturesProps) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 relative z-10 max-w-6xl mx-auto bg-white rounded-3xl shadow-lg overflow-hidden border border-gray-100">
      {features.map((feature, index) => (
        <Feature key={feature.title} {...feature} index={index} />
      ))}
    </div>
  );
}

const Feature = ({
  title,
  description,
  icon,
  index
}: ProcessFeature & { index: number }) => {
  return (
    <div
      className={cn(
        "flex flex-col py-12 px-8 relative group/feature text-center",
        // Separadores horizontales en móvil, verticales en desktop
        index > 0 && "border-t lg:border-t-0 border-gray-200",
        index < 3 && "lg:border-r border-gray-200"
      )}>
      <div className="opacity-0 group-hover/feature:opacity-100 transition duration-300 absolute inset-0 h-full w-full bg-gradient-to-br from-green-50/50 to-blue-50/50 pointer-events-none" />
      
      {/* Icono del paso */}
      <div className="relative z-10 mb-6">
        <div className="text-green-500 group-hover/feature:text-green-600 transition-colors duration-300 flex justify-center text-4xl">
          {icon}
        </div>
      </div>
      
      <div className="relative z-10">
        <h4 className="text-xl font-bold mb-4 text-gray-800 group-hover/feature:text-green-700 transition-colors duration-300">
          {title}
        </h4>
        <p className="text-gray-600 leading-relaxed">
          {description}
        </p>
      </div>
    </div>
  );
};
