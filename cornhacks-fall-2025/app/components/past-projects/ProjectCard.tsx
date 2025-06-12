import Image from 'next/image';
import Link from 'next/link';

interface ProjectCardProps {
  imageUrl: string;
  title: string;
  description: string;
  linkUrl: string;
  linkText: string;
}

export default function ProjectCard({
  imageUrl,
  title,
  description,
  linkUrl,
  linkText,
}: ProjectCardProps) {
  return (
    <div className="w-[350px] h-[500px] rounded-xl overflow-hidden shadow-lg bg-white border border-gray-200 hover:shadow-xl transition-all duration-300 hover:scale-[1.02] flex flex-col">
      {/* Image Container - Exactly One Third */}
      <div className="relative h-[166px] w-full bg-gray-100 flex-shrink-0">
        <Image
          src="/previous_event.png"
          alt={title}
          fill
          sizes="350px"
          className="object-cover"
          priority
        />
      </div>
      
      {/* Content Container - Remaining Two Thirds */}
      <div className="px-6 py-4 flex flex-col h-[334px]">
        <h3 className="font-bold text-xl mb-2 text-gray-800 flex-shrink-0">{title}</h3>
        <p className="text-gray-600 text-base mb-4 overflow-y-auto flex-grow">
          {description}
        </p>
        <Link 
          href={linkUrl}
          className="inline-block text-blue-600 hover:text-blue-800 font-medium flex-shrink-0"
        >
          {linkText} →
        </Link>
      </div>
    </div>
  );
} 