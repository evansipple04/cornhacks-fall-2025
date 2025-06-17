import Image from 'next/image';
import Link from 'next/link';

interface ExpandedProjectCardProps {
  imageUrl: string;
  title: string;
  description: string;
  linkUrl: string;
  linkText: string;
  onClose: () => void;
}

export default function ExpandedProjectCard({
  imageUrl,
  title,
  description,
  linkUrl,
  linkText,
  onClose,
}: ExpandedProjectCardProps) {
  return (
    <div 
      className="fixed top-1/2 left-[calc(50%+120px)] -translate-x-1/2 -translate-y-1/2 z-[10000]"
      style={{ width: '100vw', height: '100vh' }}
      onClick={onClose}
    >
      <div 
        className="rounded-[2rem] overflow-hidden bg-white border-2 border-gray-200 flex flex-col relative"
        style={{ 
          width: '80vw',
          height: 'calc(80vw * 1.43)',
          maxHeight: '90vh',
          maxWidth: 'calc(90vh / 1.43)',
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          backgroundColor: 'white',
          boxShadow: '0 25px 30px -5px rgb(0 0 0 / 0.2), 0 10px 15px -6px rgb(0 0 0 / 0.2)'
        }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Image Container - Exactly One Third */}
        <div className="relative h-[33.33%] w-full bg-gray-100 flex-shrink-0">
          <Image
            src={imageUrl}
            alt={title}
            fill
            sizes="80vw"
            className="object-cover"
            priority
          />
        </div>
        
        {/* Content Container - Remaining Two Thirds */}
        <div className="px-16 py-12 flex flex-col h-[66.67%] items-center text-center">
          <h3 
            className="font-bold mb-8 text-gray-800 flex-shrink-0"
            style={{ fontSize: '2.5rem' }}
          >
            {title}
          </h3>
          <p 
            className="text-gray-600 mb-10 overflow-y-auto flex-grow leading-relaxed"
            style={{ fontSize: '2.5rem' }}
          >
            {description}
          </p>
          <Link 
            href={linkUrl}
            className="inline-block text-blue-600 hover:text-blue-800 font-medium flex-shrink-0"
            style={{ fontSize: '1.125rem' }}
          >
            {linkText} →
          </Link>
        </div>
      </div>
    </div>
  );
} 