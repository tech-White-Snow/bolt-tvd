// import classNames from 'classnames';
import { Link } from 'gatsby';
import React, { useEffect } from 'react';
import { Text } from '../Text/Text';

interface FullpageSectionProps {
  promoVideo: string;
  slug: string;
  title: string;
  subtitle: string;
  director: string;
  logoUrl: string;
  category: string;
}

const FullpageSection: React.FC<FullpageSectionProps> = ({
  promoVideo,
  slug,
  title,
  subtitle,
  director,
  logoUrl,
  category,
}) => {
  useEffect(() => {

    document.title = title;
    console.log(title);
    const video = document.querySelectorAll('.full-page-video');

    video.forEach((v) => {
      if (v !== null) {
        (v as HTMLVideoElement).play();
      }
    });
  }, []);

  const isDevelopment = category === 'Development';

  return (
    <div className="section fp-noscroll px-20">
      <Link
        to={slug}
        className="hover:text-white flex flex-col items-center justify-center ease-in-out duration-300"
      >
        <video
          preload="auto"
          data-keepplaying
          data-autoplay
          playsInline
          autoPlay
          loop
          muted
          className="full-page-video absolute bg-cover bg-center object-cover left-0 top-0 h-screen w-full"
        >
          <source src={promoVideo} data-wf-ignore="true" type="video/mp4" />
        </video>

        <div className="absolute inset-0 bg-overlay" />

        <div className="text-center flex flex-col justify-center items-center mt-16">
          <div className="flex flex-row items-center justify-center text-center">
            <div>
              <div className="opacity-80">
                <p className="text-2xl sm:text-4xl lg:text-6xl xl:text-9xl font-roboto font-bold to-animate-title animate__animated">
                  {title.toUpperCase()}
                </p>
              </div>

              <div className="opacity-80">
                <p className="text-2xl sm:text-4xl lg:text-6xl xl:text-9xl font-roboto to-animate-subtitle animate__animated font-bold">
                  {isDevelopment ? '' : subtitle.toUpperCase()}
                </p>

                {!!director && (
                  <Text
                    type="h4"
                    className="mt-5 to-animate-director animate__animated"
                    title={isDevelopment ? director : ''}
                  />
                )}
              </div>
            </div>
          </div>

          {/* {logoUrl && (
            <div
              className={classNames(
                'bg-no-repeat bg-cover bg-center relative w-[230px] mt-3 h-[100px] z-50',
                { 'bg-contain': slug === 'hbo-max' }
              )}
              style={{ backgroundImage: `url(${logoUrl})` }}
            />
          )} */}
        </div>
      </Link>
    </div>
  );
};

export { FullpageSection };
