import React, { ReactNode } from 'react';

interface FolderCardProps {
  children?: ReactNode;
  gradientFrom?: string;
  gradientTo?: string;
  className?: string;
  tabColor?: string;
}

export function FolderCard({
  children,
  gradientFrom = 'from-purple-400',
  gradientTo = 'to-orange-200',
  tabColor = 'bg-purple-400',
  className = '',
}: FolderCardProps) {
  return (
    <div className={`group relative flex w-full max-w-[393px] cursor-pointer flex-col transition-all duration-300 hover:-translate-y-2 ${className}`}>
      {/* Folder Tab (Sekme) */}
      <div className="relative z-10 flex h-6 w-1/3 md:h-8">
        <div 
          className={`h-full w-[85%] rounded-tl-[16px] rounded-tr-[4px] opacity-90 ${tabColor}`}
        />
        {/* Eğik Bağlantı Açısı (Folder tab curve) */}
        <div 
          className={`h-full w-[25%] -ml-1 origin-bottom-left skew-x-[30deg] rounded-tr-[6px] opacity-90 ${tabColor}`}
        />
      </div>
      
      {/* Folder Body (Ana Gövde) - Tab'ın hemen altına negatif marginle hizalanıp bütünlük sağlar */}
      <div 
        className={`relative z-20 -mt-[1px] flex min-h-[220px] w-full flex-col overflow-hidden rounded-b-[24px] rounded-tr-[24px] bg-gradient-to-br ${gradientFrom} ${gradientTo} p-6 shadow-[0_10px_30px_rgba(0,0,0,0.1)] dark:shadow-black/40`}
      >
        {children}
      </div>
    </div>
  );
}
