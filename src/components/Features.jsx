import { useRef } from 'react';
import { TiLocationArrow } from 'react-icons/ti';

const BentoTilt = ({ children, className = '' }) => {
  const itemRef = useRef(null);

  const handleMouseMove = (e) => {
    if (!itemRef.current) return;
    const { left, top, width, height } = itemRef.current.getBoundingClientRect();
    const relativeX = (e.clientX - left) / width - 0.5;
    const relativeY = (e.clientY - top) / height - 0.5;
    itemRef.current.style.transform = `perspective(700px) rotateX(${relativeY * 5}deg) rotateY(${relativeX * -5}deg) scale3d(0.95, 0.95, 0.95)`;
  };

  const handleMouseLeave = () => {
    if (itemRef.current) itemRef.current.style.transform = '';
  };

  return (
    <div
      ref={itemRef}
      className={`relative overflow-hidden rounded-md ${className}`}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      role="presentation"
    >
      {children}
    </div>
  );
};

const BentoCard = ({ src, title, description, isComingSoon }) => {
  const hoverButtonRef = useRef(null);

  const handleMouseMove = (e) => {
    if (!hoverButtonRef.current) return;
    const rect = hoverButtonRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    hoverButtonRef.current.style.setProperty('--cursor-x', `${x}px`);
    hoverButtonRef.current.style.setProperty('--cursor-y', `${y}px`);
  };

  return (
    <div className="relative w-full h-full">
      <video
        src={src}
        loop
        muted
        autoPlay
        playsInline
        loading="lazy"
        className="absolute inset-0 w-full h-full object-cover object-center"
      />
      <div className="relative z-10 flex h-full flex-col justify-between p-4 text-blue-50">
        <div>
          <h1 className="text-xl font-bold sm:text-2xl">{title}</h1>
          {description && (
            <p className="mt-2 max-w-[16rem] text-xs sm:text-sm">{description}</p>
          )}
        </div>
        {isComingSoon && (
          <button
            ref={hoverButtonRef}
            onMouseMove={handleMouseMove}
            onMouseEnter={() => hoverButtonRef.current?.style.setProperty('--opacity', '1')}
            onMouseLeave={() => hoverButtonRef.current?.style.setProperty('--opacity', '0')}
            className="relative flex w-fit items-center gap-1 rounded-full bg-black/80 px-4 py-1.5 text-xs uppercase text-white/60 overflow-hidden"
            style={{
              '--cursor-x': '0px',
              '--cursor-y': '0px',
              '--opacity': '0',
            }}
          >
            <div
              className="absolute inset-0 transition-opacity duration-300"
              style={{
                opacity: 'var(--opacity)',
                background: `radial-gradient(80px circle at var(--cursor-x) var(--cursor-y), #656fe288, transparent)`,
              }}
            />
            <TiLocationArrow className="relative z-10" />
            <span className="relative z-10">Coming Soon</span>
          </button>
        )}
      </div>
    </div>
  );
};

const Features = () => (
  <section className="bg-black py-16">
    <div className="container mx-auto px-4 sm:px-6 lg:px-8">
      <div className="pb-12">
        <p className="text-lg text-blue-50">Into the Metagame Layer</p>
        <p className="mt-2 max-w-md text-base text-blue-50/50">
          Immerse yourself in a rich and ever-expanding universe where a vibrant array of products converge into an interconnected overlay experience on your world.
        </p>
      </div>

      <BentoTilt className="mb-6 h-80 w-full sm:h-[50vh] lg:h-[60vh]">
        <BentoCard
          src="videos/feature-1.mp4"
          title={<>radia<span className="text-yellow-300">n</span>t</>}
          description="A cross-platform metagame app, turning your activities across Web2 and Web3 games into a rewarding adventure."
          isComingSoon
        />
      </BentoTilt>

      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-2 lg:gap-8 lg:h-[120vh]">
        <BentoTilt className="h-80 sm:h-[40vh] lg:h-[60vh]">
          <BentoCard
            src="videos/feature-2.mp4"
            title={<>zig<span className="text-yellow-300">m</span>a</>}
            description="An anime and gaming-inspired NFT collection - the IP primed for expansion."
            isComingSoon
          />
        </BentoTilt>

        <BentoTilt className="h-80 sm:h-[40vh] lg:h-[30vh]">
          <BentoCard
            src="videos/feature-3.mp4"
            title={<>n<span className="text-yellow-300">e</span>xus</>}
            description="A gamified social hub, adding a new dimension of play to social interaction for Web3 communities."
            isComingSoon
          />
        </BentoTilt>

        <BentoTilt className="h-80 sm:h-[40vh] lg:h-[30vh]">
          <BentoCard
            src="videos/feature-4.mp4"
            title={<>az<span className="text-yellow-300">u</span>l</>}
            description="A cross-world AI Agent - elevating your gameplay to be more fun and productive."
            isComingSoon
          />
        </BentoTilt>

        <BentoTilt className="h-80 sm:h-[40vh] lg:h-[60vh]">
          <div className="flex h-full flex-col justify-between bg-violet-300 p-4">
            <h1 className="text-xl font-bold text-black sm:text-2xl">
              M<span className="text-yellow-300">o</span>re c<span className="text-yellow-300">o</span>ming s<span className="text-yellow-300">o</span>on.
            </h1>
            <TiLocationArrow className="self-end text-4xl" />
          </div>
        </BentoTilt>

        <BentoTilt className="h-80 sm:h-[40vh] lg:h-[60vh]">
          <video
            src="videos/feature-5.mp4"
            loop
            muted
            autoPlay
            playsInline
            loading="lazy"
            className="h-full w-full object-cover object-center"
          />
        </BentoTilt>
      </div>
    </div>
  </section>
);

export default Features;