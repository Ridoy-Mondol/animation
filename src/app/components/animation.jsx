// components/AnimatedShapes.js
"use client";
import { useEffect, useRef, useState } from 'react';
import useObserver from './useObserver';

const AnimatedShapes = () => {
  const [isAnimationActive, setIsAnimationActive] = useState(false);

  const animationRef = useRef(null);
  const animationRef2 = useRef(null);
  const animationRef3 = useRef(null);
  const animationRef4 = useRef(null);

  const { entries, observe, unobserve } = useObserver({ threshold: 0.5 });

  useEffect(() => {
    observe(animationRef);
    observe(animationRef2);
    observe(animationRef3);
    observe(animationRef4);

    return () => {
        unobserve(animationRef);
        unobserve(animationRef2);
        unobserve(animationRef3);
        unobserve(animationRef4);
    };
}, [observe, unobserve]);

const section1Entry = entries.find(e => e.id === 'section1');
const isSection1Intersecting = section1Entry ? section1Entry.isIntersecting : false;

const section2Entry = entries.find(e => e.id === 'section2');
const isSection2Intersecting = section2Entry ? section1Entry.isIntersecting : false;

const section3Entry = entries.find(e => e.id === 'section3');
const isSection3Intersecting = section3Entry ? section3Entry.isIntersecting : false;

const section4Entry = entries.find(e => e.id === 'section4');
const isSection4Intersecting = section4Entry ? section4Entry.isIntersecting : false;

//   useEffect(() => {
//     const observer = new IntersectionObserver(
//       ([entry]) => {
//         setIsAnimationActive(entry.isIntersecting);
//       },
//       { threshold: 0.5 }
//     );

//     if (animationRef.current) observer.observe(animationRef.current);

//     return () => {
//       if (animationRef.current) observer.unobserve(animationRef.current);
//     };
//   }, []);

  return (
    <div className="relative w-full h-screen overflow-hidden">
      {/* Fixed Full-Screen Animation Background */}
      <div className="fixed inset-0 flex items-center justify-center bg-gradient-to-r from-blue-500 to-purple-500 z-0">

        <div className={`relative ${isSection1Intersecting ? 'animate-fadeIn' : 'opacity-0'} ${isSection2Intersecting ? 'animate-slideIn' : 'opacity-0'} ${isSection3Intersecting ? 'animate-scaleUp' : 'opacity-0'} ${isSection4Intersecting ? 'animate-bounce' : 'opacity-0'}`}>
          <div className="shapes-container relative flex justify-center items-center space-x-6">
            <div className="shape circle bg-yellow-300"></div>
            <div className="shape star bg-pink-400"></div>
            <div className="shape diamond bg-green-400"></div>
            <div className="shape hexagon bg-red-500"></div>
          </div>
          <p className="mt-10 text-white text-2xl font-semibold">Scroll Down to Explore!</p>
        </div>





      </div>

      {/* Full-Screen Scrollable Section */}
      <div className="relative w-full h-screen overflow-y-scroll z-10">
        <div className="w-1/3 h-[100vh] space-y-10">
          {/* Scrollable Section 1 */}
          <div
            ref={animationRef} id="section1"
            className="scroll-section h-[100%] flex items-center justify-center text-center"
          >
            <p className="text-2xl font-bold text-gray-700">
                {/* Explore Amazing Animations */}
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut vehicula dignissim metus vel imperdiet. Nunc rutrum velit quis risus mollis laoreet. Curabitur scelerisque eget felis et mollis. Phasellus sem sapien, molestie at finibus ut, viverra eu lacus. Suspendisse maximus vestibulum nisi, quis facilisis felis faucibus ultricies. Mauris ac placerat metus. Morbi lacinia ac urna sed vehicula. Pellentesque vitae porta sapien. Duis ut leo egestas, laoreet mauris sit amet, porttitor turpis. Cras vel enim non sem pellentesque scelerisque. Aenean hendrerit, magna quis laoreet elementum, nisi augue varius elit, a venenatis eros ligula at ex. In nec luctus purus. Donec vitae fermentum ante. Ut lobortis posuere luctus. Suspendisse placerat bibendum auctor. Phasellus accumsan libero quis metus ullamcorper aliquam.
            </p>
          </div>

          {/* Scrollable Section 2 */}
          <div 
          ref={animationRef2} id="section2"
          className="scroll-section h-[100%] flex items-center justify-center text-center">
            <p className="text-2xl font-bold text-gray-700">
                {/* Different Shapes and Effects */}
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut vehicula dignissim metus vel imperdiet. Nunc rutrum velit quis risus mollis laoreet. Curabitur scelerisque eget felis et mollis. Phasellus sem sapien, molestie at finibus ut, viverra eu lacus. Suspendisse maximus vestibulum nisi, quis facilisis felis faucibus ultricies. Mauris ac placerat metus. Morbi lacinia ac urna sed vehicula. Pellentesque vitae porta sapien. Duis ut leo egestas, laoreet mauris sit amet, porttitor turpis. Cras vel enim non sem pellentesque scelerisque. Aenean hendrerit, magna quis laoreet elementum, nisi augue varius elit, a venenatis eros ligula at ex. In nec luctus purus. Donec vitae fermentum ante. Ut lobortis posuere luctus. Suspendisse placerat bibendum auctor. Phasellus accumsan libero quis metus ullamcorper aliquam.
            </p>
          </div>

          {/* Scrollable Section 3 */}
          <div 
          ref={animationRef3} id="section3"
          className="scroll-section h-[100%] flex items-center justify-center text-center ">
            <p className="text-2xl font-bold text-gray-700">
                {/* Keep Scrolling for More */}
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut vehicula dignissim metus vel imperdiet. Nunc rutrum velit quis risus mollis laoreet. Curabitur scelerisque eget felis et mollis. Phasellus sem sapien, molestie at finibus ut, viverra eu lacus. Suspendisse maximus vestibulum nisi, quis facilisis felis faucibus ultricies. Mauris ac placerat metus. Morbi lacinia ac urna sed vehicula. Pellentesque vitae porta sapien. Duis ut leo egestas, laoreet mauris sit amet, porttitor turpis. Cras vel enim non sem pellentesque scelerisque. Aenean hendrerit, magna quis laoreet elementum, nisi augue varius elit, a venenatis eros ligula at ex. In nec luctus purus. Donec vitae fermentum ante. Ut lobortis posuere luctus. Suspendisse placerat bibendum auctor. Phasellus accumsan libero quis metus ullamcorper aliquam.
            </p>
          </div>

          {/* Scrollable Section 4 */}
          <div 
          ref={animationRef4} id="section4"
          className="scroll-section h-[100%]  flex items-center justify-center text-center ">
            <p className="text-2xl font-bold text-gray-700">
                {/* Last Section */}
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut vehicula dignissim metus vel imperdiet. Nunc rutrum velit quis risus mollis laoreet. Curabitur scelerisque eget felis et mollis. Phasellus sem sapien, molestie at finibus ut, viverra eu lacus. Suspendisse maximus vestibulum nisi, quis facilisis felis faucibus ultricies. Mauris ac placerat metus. Morbi lacinia ac urna sed vehicula. Pellentesque vitae porta sapien. Duis ut leo egestas, laoreet mauris sit amet, porttitor turpis. Cras vel enim non sem pellentesque scelerisque. Aenean hendrerit, magna quis laoreet elementum, nisi augue varius elit, a venenatis eros ligula at ex. In nec luctus purus. Donec vitae fermentum ante. Ut lobortis posuere luctus. Suspendisse placerat bibendum auctor. Phasellus accumsan libero quis metus ullamcorper aliquam.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AnimatedShapes;










