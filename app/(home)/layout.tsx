import { Navbar } from '@/modules/home/components/navbar';
import React from 'react'


interface Props{

    children: React.ReactNode;
}


const HomeLayout = ({ children }: Props) => {
  return (
    <main className="flex flex-col min-h-screen max-h-screen">
      <Navbar/>

      <div className="flex-1 flex flex-col px-4 pb-4">
        <div
          className="absolute inset-0 -z-10 h-full w-full bg-background 
          dark:bg-[radial-gradient(#393e4a_1px,transparent_1px)] 
          dark:bg-[size:16px_16px] 
          bg-[radial-gradient(#dadde2_1px,transparent_1px)] 
          bg-[size:16px_16px]"
        />

        {children}
      </div>
    </main>
  )
}

export default HomeLayout
// import { Navbar } from '@/modules/home/components/navbar';
// import React from 'react';

// interface Props {
//   children: React.ReactNode;
// }

// const HomeLayout = ({ children }: Props) => {
//   return (
//     <main className="flex flex-col min-h-screen max-h-screen relative bg-[#F1F3F5] dark:bg-[#121417] transition-colors">
//       <Navbar />

//       <div className="flex-1 flex flex-col px-4 pb-4">
//         {/* Futuristic Matte Mesh Gradient Background (Threadly vibes) */}
//         <div
//           className="absolute inset-0 -z-10 h-full w-full
//           bg-[radial-gradient(circle_at_20%_30%,#60A5FA20,transparent_60%),radial-gradient(circle_at_80%_70%,#10B98120,transparent_60%),radial-gradient(circle_at_50%_90%,#FFB40020,transparent_70%)]
//           dark:bg-[radial-gradient(circle_at_20%_30%,#60A5FA15,transparent_60%),radial-gradient(circle_at_80%_70%,#10B98115,transparent_60%),radial-gradient(circle_at_50%_90%,#FFB40015,transparent_70%)]"
//         />

//         {children}
//       </div>
//     </main>
//   );
// };

// export default HomeLayout;



