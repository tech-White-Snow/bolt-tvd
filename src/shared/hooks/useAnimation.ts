import { useEffect } from 'react';

const useAnimation = () => {
  const onLeave = (_, destination) => {
    destination.item
      .querySelectorAll('.to-animate-title')
      .forEach(({ classList }) => {
        classList.remove('animate__fadeInUp');

        setTimeout(() => {
          classList.add('animate__fadeInUp');
        });
      });

    destination.item
      .querySelectorAll('.to-animate-subtitle')
      .forEach(({ classList, style }) => {
        classList.remove('animate__fadeInUp');

        setTimeout(() => {
          classList.add('animate__fadeInUp');
        });

        style.setProperty('--animate-duration', '1.5s');
      });

    destination.item
      .querySelectorAll('.to-animate-director')
      .forEach(({ classList, style }) => {
        classList.remove('animate__fadeInUp');

        setTimeout(() => {
          classList.add('animate__fadeInUp');
        });

        style.setProperty('--animate-duration', '1.5s');
      });
  };

  const onMount = () => {
    const titles = document.querySelectorAll('.to-animate-title');
    const subtitles = document.querySelectorAll('.to-animate-subtitle');
    const directors = document.querySelectorAll('.to-animate-director');

    titles[0].classList.add('animate__fadeInUp');
    subtitles[0].classList.add('animate__fadeInUp');
    directors[0].classList.add('animate__fadeInUp');

    (subtitles[0] as HTMLElement).style.setProperty(
      '--animate-duration',
      '1.5s'
    );
    (directors[0] as HTMLElement).style.setProperty(
      '--animate-duration',
      '1.5s'
    );
  };

  useEffect(() => {
    onMount();
  }, []);

  return {
    onLeave,
  };
};

export { useAnimation };
