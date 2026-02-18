'use client';

import { useRef } from 'react';
import Link from 'next/link';
import Image from 'next/image';

export default function LatestPostsCarousel({ blogs }) {
  const scrollContainerRef = useRef(null);

  const scroll = (direction) => {
    if (scrollContainerRef.current) {
      const scrollAmount = 400;
      const newScrollPosition = scrollContainerRef.current.scrollLeft + (direction === 'left' ? -scrollAmount : scrollAmount);
      scrollContainerRef.current.scrollTo({
        left: newScrollPosition,
        behavior: 'smooth'
      });
    }
  };

  const getImageUrl = (imgRef) => {
    if (!imgRef?.asset?._ref) return null;
    const refParts = imgRef.asset._ref.replace('image-', '').split('-');
    if (refParts.length < 3) return null;
    const assetId = refParts[0];
    const dimensions = refParts[1];
    const format = refParts[2];
    return `https://cdn.sanity.io/images/${process.env.NEXT_PUBLIC_SANITY_PROJECT_ID}/${process.env.NEXT_PUBLIC_SANITY_DATASET}/${assetId}-${dimensions}.${format}`;
  };

  return (
    <div>
      {/* Horizontal Scrollable Blog Cards */}
      <div className="relative -mx-6 md:-mx-24 mb-4 md:mb-6">
        <div 
          ref={scrollContainerRef}
          className="overflow-x-auto scrollbar-hide px-6 md:px-24"
        >
          <div className="flex gap-4 md:gap-6 pb-2 md:pb-4">
            {blogs.map((blog) => {
              const imageUrl = getImageUrl(blog?.mainImage);
              
              return (
                <Link
                  key={blog._id}
                  href={`/blog/${blog.slug.current}`}
                  className="flex-shrink-0 w-[240px] md:w-[340px] lg:w-[380px] h-[320px] md:h-[400px] group"
                >
                  <div className="relative w-full h-full rounded-[14px] md:rounded-[18px] overflow-hidden bg-neutral-900">
                    {/* Background Image */}
                    {imageUrl ? (
                      <img
                        src={imageUrl}
                        alt={blog.title}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                    ) : (
                      <div className="w-full h-full bg-gradient-to-br from-neutral-800 to-neutral-900 flex items-center justify-center">
                        <span className="text-white/30 text-sm">No image</span>
                      </div>
                    )}

                    {/* Gradient Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

                    {/* Content */}
                    <div className="absolute bottom-0 left-0 right-0 p-4 md:p-6">
                      <h3 className="text-white text-[16px] md:text-xl font-semibold leading-snug line-clamp-2 mb-1.5 md:mb-2">
                        {blog.title}
                      </h3>
                      {blog.subtitle && (
                        <p className="text-white/70 text-[13px] md:text-sm line-clamp-2">
                          {blog.subtitle}
                        </p>
                      )}
                    </div>

                    {/* Hover Arrow Indicator */}
                    <div className="absolute top-3 right-3 md:top-4 md:right-4 w-7 h-7 md:w-8 md:h-8 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                      <svg 
                        className="w-3.5 h-3.5 md:w-4 md:h-4 text-white" 
                        fill="none" 
                        stroke="currentColor" 
                        viewBox="0 0 24 24"
                      >
                        <path 
                          strokeLinecap="round" 
                          strokeLinejoin="round" 
                          strokeWidth={2} 
                          d="M9 5l7 7-7 7" 
                        />
                      </svg>
                    </div>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </div>

      {/* Navigation Arrows - Bottom Left */}
      <div className="flex gap-2 md:gap-3">
        <button
          onClick={() => scroll('left')}
          className="w-9 h-9 md:w-10 md:h-10 flex items-center justify-center bg-white/[0.08] hover:bg-white/[0.15] rounded-full transition-all"
          aria-label="Scroll left"
        >
          <Image src="/computervision/arrowleft.png" alt="Scroll Left" width={14} height={14} className="md:w-4 md:h-4" />
        </button>
        <button
          onClick={() => scroll('right')}
          className="w-9 h-9 md:w-10 md:h-10 flex items-center justify-center bg-white/[0.08] hover:bg-white/[0.15] rounded-full transition-all"
          aria-label="Scroll right"
        >
          <Image src="/computervision/arrowright.png" alt="Scroll Right" width={14} height={14} className="md:w-4 md:h-4" />
        </button>
      </div>
    </div>
  );
}
