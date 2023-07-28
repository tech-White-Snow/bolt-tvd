import React, { useLayoutEffect } from 'react';
import ReactFullpage from '@fullpage/react-fullpage';
import { graphql } from 'gatsby';
import { Layout, Navigation, FullpageSection } from '../../shared/ui';
import { useAnimation } from '../../shared/hooks';

const OriginalDevelopment: React.FC = (props: any) => {
  const data =
    props.data.allContentfulOriginalDevelopmentList.nodes[0].development;
  const titles = data.map((brand) => brand.title);
  const slugs = data.map((brand) => brand.slug);

  useLayoutEffect(() => {
    document.title = "Original Development";
    setTimeout(() => {
      document.documentElement.scrollTo(0, 0);
    }, 100);
  }, [data]);

  const { onLeave } = useAnimation();

  return (
    <Layout>
      <Navigation />

      <ReactFullpage
        anchors={slugs}
        navigation
        lazyLoading
        onLeave={onLeave}
        navigationTooltips={titles}
        scrollingSpeed={400}
        render={() => (
          <ReactFullpage.Wrapper>
            {data.map((brand) => (
              <FullpageSection
                key={brand.id}
                promoVideo={brand.videoPromo.url}
                director={brand.director}
                category={brand.category}
                slug={brand.slug}
                title={brand.title}
                subtitle={brand.subtitle}
                logoUrl={brand.logo?.url}
              />
            ))}
          </ReactFullpage.Wrapper>
        )}
      />
    </Layout>
  );
};

export const query = graphql`
  query QueryDevelopment {
    allContentfulOriginalDevelopmentList {
      nodes {
        development {
          title
          slug
          category
          subtitle
          videoPromo {
            url
          }
          logo {
            url
          }
          director
          mainImage {
            url
            title
          }
          id
        }
      }
    }
  }
`;

export default OriginalDevelopment;
