
'use client';

import { useState } from 'react';
import Image from 'next/image';
import { Template } from '@/types';
import { cn } from '@/lib/utils';

interface MediaGalleryProps {
  template: Template;
}

export function MediaGallery({ template }: MediaGalleryProps) {
  const [selectedMedia, setSelectedMedia] = useState(template.image_url);

  const media = [
    template.image_url,
    template.image_url_2,
    template.preview_video_url,
  ].filter(Boolean) as string[];

  return (
    <div>
      <div className="aspect-video w-full relative rounded-lg overflow-hidden glass">
        {selectedMedia && (
          <Image src={selectedMedia} alt={template.name} layout="fill" objectFit="cover" />
        )}
      </div>
      <div className="grid grid-cols-4 gap-2 mt-2">
        {media.map((url) => (
          <div
            key={url}
            className={cn(
              'aspect-square relative rounded-md overflow-hidden cursor-pointer',
              selectedMedia === url && 'ring-2 ring-purple-400'
            )}
            onClick={() => setSelectedMedia(url)}
          >
            <Image src={url} alt={template.name} layout="fill" objectFit="cover" />
          </div>
        ))}
      </div>
    </div>
  );
}
