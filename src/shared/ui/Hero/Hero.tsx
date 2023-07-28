import React, { useEffect, useState } from 'react';
import { AnimationOnScroll } from 'react-animation-on-scroll';
import { Link } from 'gatsby';
import { Layout } from '../Layout/Layout';
// @ts-ignore
import video from '../../../assets/HeroBanner.mp4';
import './Hero.css';
import { Footer } from '../Footer/Footer';
import { Text } from '../Text/Text';

interface HeroProps {
  projects: any[];
}

const Hero: React.FC<HeroProps> = ({ projects }) => {
  const [hoveredIndex, setHoveredIndex] = useState<string>();

  useEffect(() => {
    const video = document.getElementById('video') as HTMLVideoElement | null;

    if (video !== null) {
      video.play();
    }
  }, []);

  // TO-DO Merge into one method
  const onMouseEnter = (index) => {
    const video = document.getElementById(
      `vid-${index}`
    ) as HTMLVideoElement | null;

    setHoveredIndex(`vid-${index}`);

    if (video !== null) {
      video.play();
    }
  };

  const onMouseLeave = (index) => {
    const video = document.getElementById(
      `vid-${index}`
    ) as HTMLVideoElement | null;

    setHoveredIndex('');

    if (video !== null) {
      video.pause();
      video.currentTime = 0;
    }
  };

  return (
    <div>
      <Layout>
        <video
          autoPlay
          loop
          id="vid"
          muted
          data-autoplay
          preload="auto"
          data-keepplaying
          playsInline
          controls={false}
          className="bg-cover bg-center object-cover left-0 top-0 h-screen w-full"
        >
          <source src={video} data-wf-ignore="true" type="video/mp4" />
        </video>
      </Layout>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 my-6">
        {projects.map((item, index) => (
          <AnimationOnScroll
            key={index}
            animateOnce={false}
            animateIn="animate__fadeInUp"
            duration={0.3}
          >
            <div
              onMouseEnter={() => onMouseEnter(index)}
              onMouseLeave={() => onMouseLeave(index)}
            >
              <Link
                to={`/branded/${item.slug}`}
                className="cursor-pointer relative h-[300px] ease-in-out duration-300 hover:text-white"
              >
                {/* TBD */}
                <video
                  loop
                  id={`vid-${index}`}
                  muted
                  preload="auto"
                  autoPlay
                  data-keepplaying
                  controls={false}
                  className="lg:hidden cursor-pointer"
                  playsInline
                >
                  <source
                    src={item?.featuredVideo?.url || item.videoPromo.url}
                    data-wf-ignore="true"
                    type="video/mp4"
                  />
                </video>

                <video
                  loop
                  id={`vid-${index}`}
                  muted
                  preload="auto"
                  data-keepplaying
                  controls={false}
                  className="hidden lg:block cursor-pointer"
                  playsInline
                >
                  <source
                    src={item?.featuredVideo?.url || item.videoPromo.url}
                    data-wf-ignore="true"
                    type="video/mp4"
                  />
                </video>

                <div className="absolute inset-0 bg-overlay" />
              </Link>

              <Link
                to={`/branded/${item.slug}`}
                className="cursor-pointer ease-in-out duration-300 hover:text-white absolute top-[50%] text-center text-3xl font-montserrat uppercase font-bold left-[50%] translate-y-[-50%] translate-x-[-50%]"
              >
                {hoveredIndex === `vid-${index}` ? item.subtitle : item.title}
              </Link>
            </div>
          </AnimationOnScroll>
        ))}
      </div>

      <div className="flex justify-center items-center mb-6">
        <Link to="/branded" className="cursor-pointer">
          <Text title="VIEW ALL PROJECTS" />
        </Link>
      </div>

      <div className="pb-16">
        <Footer />
      </div>
    </div>
  );
};

export { Hero };
