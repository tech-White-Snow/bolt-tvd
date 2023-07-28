import React, { useLayoutEffect } from 'react';
import ReactFullpage from '@fullpage/react-fullpage';
import { graphql } from 'gatsby';
import { Navigation, Layout, FullpageSection } from '../../shared/ui';
import './index.css';
import { useAnimation } from '../../shared/hooks';

const Branded: React.FC = (props) => {
  // @ts-ignore
  const data = props.data.allContentfulBrandsList.nodes[0].brands;
  const titles = data.map((brand) => brand.title);
  const slugs = data.map((brand) => brand.slug);

  useLayoutEffect(() => {
    document.title = "Brands";
    console.log("object");
    setTimeout(() => {
      document.documentElement.scrollTo(0, 0);
    }, 100);
  }, []);

  const { onLeave } = useAnimation();

  return (
    <Layout>
      <Navigation />

      <ReactFullpage
        anchors={slugs}
        navigation
        navigationTooltips={titles}
        lazyLoading
        onLeave={onLeave}
        scrollingSpeed={400}
        render={() => (
          <ReactFullpage.Wrapper>
            {data.map((brand) => (
              <FullpageSection
                key={brand.id}
                promoVideo={brand.videoPromo.url}
                director={brand.director}
                slug={brand.slug}
                title={brand.title}
                category={brand.category}
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
  query QueryBrands {
    allContentfulBrandsList {
      nodes {
        brands {
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

export default Branded;
