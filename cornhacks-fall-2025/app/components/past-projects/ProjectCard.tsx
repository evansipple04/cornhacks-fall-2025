import Image from 'next/image';
import Link from 'next/link';
import ExpandedProjectCard from './ExpandedProjectCard';

interface ProjectCardProps {
  imageUrl: string;
  title: string;
  description: string;
  linkUrl: string;
  linkText: string;
  onExpand: () => void;
  isExpanded: boolean;
  onClose: () => void;
}

export default function ProjectCard({
  imageUrl,
  title,
  description,
  linkUrl,
  linkText,
  onExpand,
  isExpanded,
  onClose,
}: ProjectCardProps) {
  return (
    <>
      <div 
        className="w-[330px] h-[480px] rounded-[2rem] overflow-hidden bg-white border-2 border-gray-200 hover:scale-[1.02] flex flex-col cursor-pointer transition-all duration-300"
        style={{
          boxShadow: '0 25px 30px -5px rgb(0 0 0 / 0.2), 0 10px 15px -6px rgb(0 0 0 / 0.2)'
        }}
        onClick={onExpand}
      >
        {/* Image Container - Exactly One Third */}
        <div className="relative h-[160px] w-full bg-gray-100 flex-shrink-0">
          <Image
            src="/previous_event.png"
            alt={title}
            fill
            sizes="330px"
            className="object-cover"
            priority
          />
        </div>
        
        {/* Content Container - Remaining Two Thirds */}
        <div className="px-6 py-4 flex flex-col h-[320px] items-center text-center">
          <h3 className="font-bold text-xl mb-2 text-gray-800 flex-shrink-0">{title}</h3>
          <p className="text-gray-600 text-base mb-4 overflow-y-auto flex-grow">
            {description}
          </p>
          <Link 
            href={linkUrl}
            className="inline-block text-blue-600 hover:text-blue-800 font-medium flex-shrink-0"
            onClick={(e) => e.stopPropagation()}
          >
            {linkText} →
          </Link>
        </div>
      </div>

      {isExpanded && (
        <ExpandedProjectCard
          imageUrl={imageUrl}
          title={title}
          description={description}
          linkUrl={linkUrl}
          linkText={linkText}
          onClose={onClose}
        />
      )}
    </>
  );
} 