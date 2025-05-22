'use client';


const ReviewsOrbit = () => {


    return (
        <></>
    );
};

export default ReviewsOrbit;





// import React, { useRef, useEffect, useState } from 'react';
// import Image from 'next/image';

// // --- Review Data ---
// type Review = {
//     name: string;
//     title: string;
//     shortText: string;
//     fullText: string;
//     avatarUrl: string;
// };

// const reviews: Review[] = [
//     {
//         name: 'Alice Johnson',
//         title: 'Product Manager',
//         shortText: 'Absolutely love the intuitive design and speed!',
//         fullText:
//             'Absolutely love the intuitive design and speed! The team was super responsive to feedback and the product has truly changed the way we work. Highly recommended for any modern business.',
//         avatarUrl: 'https://randomuser.me/api/portraits/women/44.jpg',
//     },
//     {
//         name: 'Brian Lee',
//         title: 'CTO, Techify',
//         shortText: 'A seamless experience from start to finish.',
//         fullText:
//             'A seamless experience from start to finish. The onboarding was smooth, and the support team is top-notch. We saw productivity gains within the first week.',
//         avatarUrl: 'https://randomuser.me/api/portraits/men/32.jpg',
//     },
//     {
//         name: 'Carla Gomez',
//         title: 'UX Designer',
//         shortText: 'The animations and UI are simply stunning.',
//         fullText:
//             'The animations and UI are simply stunning. My team and I are constantly impressed by the attention to detail and the overall polish of the platform.',
//         avatarUrl: 'https://randomuser.me/api/portraits/women/68.jpg',
//     },
//     {
//         name: 'David Kim',
//         title: 'Founder, Startly',
//         shortText: 'A game changer for our workflow.',
//         fullText:
//             'A game changer for our workflow. We can now collaborate in real-time and the integrations have saved us countless hours.',
//         avatarUrl: 'https://randomuser.me/api/portraits/men/76.jpg',
//     },
//     {
//         name: 'Elena Rossi',
//         title: 'Marketing Lead',
//         shortText: 'Our team efficiency skyrocketed!',
//         fullText:
//             'Our team efficiency skyrocketed! The analytics dashboard gives us all the insights we need, and the customer support is always there to help.',
//         avatarUrl: 'https://randomuser.me/api/portraits/women/12.jpg',
//     },
//     {
//         name: 'Frank Müller',
//         title: 'DevOps Engineer',
//         shortText: 'Reliable, fast, and beautiful.',
//         fullText:
//             'Reliable, fast, and beautiful. The deployment process is a breeze and the uptime has been flawless. Couldn\'t ask for more.',
//         avatarUrl: 'https://randomuser.me/api/portraits/men/85.jpg',
//     },
// ];

// // --- Modal Component ---
// type ReviewModalProps = {
//     open: boolean;
//     onClose: () => void;
//     review: Review;
// };
// function ReviewModal({ open, onClose, review }: ReviewModalProps) {
//     if (!open) return null;
//     return (
//         <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm">
//             <div className="relative bg-white/20 backdrop-blur-lg rounded-2xl shadow-2xl p-8 max-w-lg w-full border border-white/30" style={{ boxShadow: '0 8px 32px 0 rgba(31, 38, 135, 0.37)' }}>
//                 <button
//                     className="absolute top-3 right-3 text-white bg-black/30 rounded-full w-8 h-8 flex items-center justify-center hover:bg-black/60 transition"
//                     onClick={onClose}
//                     aria-label="Close"
//                 >
//                     ×
//                 </button>
//                 <div className="flex items-center gap-4 mb-4">
//                     <img src={review.avatarUrl} alt={review.name} className="w-12 h-12 rounded-full border-2 border-white shadow" />
//                     <div>
//                         <div className="font-bold text-white text-lg">{review.name}</div>
//                         <div className="text-white/80 text-sm">{review.title}</div>
//                     </div>
//                 </div>
//                 <div className="text-white text-base mb-2">{review.fullText}</div>
//             </div>
//         </div>
//     );
// }

// // --- User Icon SVG ---
// const UserIcon = () => (
//     <svg width="24" height="24" fill="none" viewBox="0 0 24 24">
//         <circle cx="12" cy="12" r="12" fill="none" />
//         <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" fill="#fff" />
//     </svg>
// );

// // --- Tooltip Card ---
// type ReviewTooltipProps = {
//     review: Review;
//     style?: React.CSSProperties;
//     onReadMore: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
// };
// function ReviewTooltip({ review, style, onReadMore }: ReviewTooltipProps) {
//     return (
//         <div
//             className="absolute z-30 left-1/2 top-1/2 -translate-x-1/2 -translate-y-[120%] pointer-events-none select-none transition-all duration-300"
//             style={style}
//         >
//             <div className="bg-white/20 backdrop-blur-lg rounded-xl shadow-lg border border-white/30 px-6 py-4 min-w-[220px] max-w-xs text-white relative" style={{ boxShadow: '0 4px 24px 0 rgba(31, 38, 135, 0.17)' }}>
//                 <div className="font-semibold text-base mb-1">{review.name}</div>
//                 <div className="text-xs text-white/80 mb-2">{review.title}</div>
//                 <div className="text-sm mb-2">{review.shortText}</div>
//                 <button
//                     className="mt-2 px-3 py-1 bg-[#2B0050] text-white rounded-full text-xs font-semibold shadow hover:bg-[#ff1a1a] transition"
//                     onClick={onReadMore}
//                 >
//                     Read More
//                 </button>
//             </div>
//         </div>
//     );
// }

// // --- Bubble Config ---
// // You can change the angle (in degrees) for each bubble to reposition them on the orbit
// const bubblesConfig = [
//     { type: 'avatar', idx: 0, angle: 0 },    // top
//     { type: 'icon', idx: 3, angle: 60 },    // top-right
//     { type: 'avatar', idx: 1, angle: 120 }, // bottom-right
//     { type: 'icon', idx: 4, angle: 180 },   // bottom
//     { type: 'avatar', idx: 2, angle: 240 }, // bottom-left
//     { type: 'icon', idx: 5, angle: 300 },   // top-left
// ];

// // --- Main Orbit Component ---
// const ReviewsOrbit = () => {
//     const orbitRef = useRef<HTMLDivElement | null>(null);
//     const [modalIdx, setModalIdx] = useState<number | null>(null);
//     const [hoveredIdx, setHoveredIdx] = useState<number | null>(null);
//     const [baseAngle, setBaseAngle] = useState(0); // in radians
//     const radius = 180; // px
//     // Animate orbit by updating baseAngle
//     useEffect(() => {
//         let raf: number;
//         function animate() {
//             setBaseAngle(prev => prev + 0.008);
//             raf = requestAnimationFrame(animate);
//         }
//         animate();
//         return () => cancelAnimationFrame(raf);
//     }, []);
//     const defaultReview: Review = {
//         name: '',
//         title: '',
//         shortText: '',
//         fullText: '',
//         avatarUrl: '',
//     };
//     return (
//         <section className="relative w-full min-h-[600px] flex items-center justify-center bg-[#18141c] overflow-hidden py-16">
//             {/* Centered Italian Headline */}
//             <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-10 text-center select-none">
//                 <span className="block text-4xl md:text-6xl font-light text-white leading-tight">
//                     Un <b className="font-bold">ponte</b><br />verso il <b className="font-bold">futuro!</b>
//                 </span>
//             </div>
//             {/* Orbit Container */}
//             <div
//                 ref={orbitRef}
//                 className="relative w-[440px] h-[440px] mx-auto z-20"
//                 style={{ pointerEvents: 'none' }}
//             >
//                 {bubblesConfig.map((bubble, i) => {
//                     // Calculate angle in radians for this bubble
//                     const theta = (bubble.angle * Math.PI) / 180 + baseAngle;
//                     // Center of orbit
//                     const center = 220;
//                     // Bubble size
//                     const bubbleSize = 56; // px (w-14)
//                     // Calculate position
//                     const x = center + radius * Math.cos(theta) - bubbleSize / 2;
//                     const y = center + radius * Math.sin(theta) - bubbleSize / 2;
//                     const transform = `translate(${x}px, ${y}px)`;
//                     return (
//                         <div
//                             key={i}
//                             className="orbit-bubble absolute w-14 h-14 rounded-full flex items-center justify-center shadow-lg transition-all duration-300 cursor-pointer group"
//                             style={{ pointerEvents: 'auto', boxShadow: bubble.type === 'icon' ? '0 0 24px 4px #ff1a1a88' : '0 0 24px 4px #fff8', transform }}
//                             onMouseEnter={() => setHoveredIdx(i)}
//                             onMouseLeave={() => setHoveredIdx(null)}
//                             onClick={() => setModalIdx(bubble.idx!)}
//                         >
//                             {bubble.type === 'avatar' ? (
//                                 <Image
//                                     src={reviews[bubble.idx!].avatarUrl}
//                                     alt={reviews[bubble.idx!].name}
//                                     className="w-12 h-12 rounded-full object-cover border-2 border-white shadow"
//                                     width={48}
//                                     height={48}
//                                     draggable={false}
//                                 />
//                             ) : (
//                                 <div className="w-12 h-12 rounded-full bg-[#ff1a1a] flex items-center justify-center border-2 border-white shadow-lg">
//                                     <UserIcon />
//                                 </div>
//                             )}
//                             {/* Tooltip on hover */}
//                             {hoveredIdx === i && (
//                                 <ReviewTooltip
//                                     review={reviews[bubble.idx!]}
//                                     onReadMore={e => {
//                                         e.stopPropagation();
//                                         setModalIdx(bubble.idx!);
//                                     }}
//                                     style={{ transform: 'translate(-50%, -120%)' }}
//                                 />
//                             )}
//                         </div>
//                     );
//                 })}
//             </div>
//             {/* Modal */}
//             <ReviewModal
//                 open={modalIdx !== null}
//                 onClose={() => setModalIdx(null)}
//                 review={modalIdx !== null ? reviews[modalIdx] : defaultReview}
//             />
//             {/* Decorative particles (optional) */}
//             <div className="pointer-events-none absolute inset-0 z-0">
//                 {/* Add subtle animated particles or gradients here if desired */}
//             </div>
//         </section>
//     );
// };

// export default ReviewsOrbit;
