import React, { useLayoutEffect } from 'react';
import { GatsbyImage } from 'gatsby-plugin-image';
import { graphql } from 'gatsby';
import { renderRichText } from 'gatsby-source-contentful/rich-text';
import Masonry from 'react-responsive-masonry';
import { Gallery, Item } from 'react-photoswipe-gallery';
import { Text, Layout, Container } from '../../shared/ui';
import 'photoswipe/style.css';

const About = (props) => {
  const data = props.data.allContentfulAbout.nodes[0];
  
  useLayoutEffect(() => {
    document.title = data.title;
    console.log(data.title)
  });

  return (
    <Layout>
      <Container>
        <div className="border-b border-dull-gray pb-5 sm:pb-16 lg:pb-28 mb-5 sm:mb-16 lg:mb-28">
          <Text type="h5" title={renderRichText(data.description)} />
        </div>

        <section className="mb-10 sm:mb-16 lg:mb-28 grid grid-cols-3 sm:grid-cols-6 gap-6 sm:gap-7 md:gap-10 lg:gap-16">
          {data.brands.map((brand: any) => (
            <GatsbyImage
              key={brand.contentful_id}
              loading="lazy"
              alt={brand.title}
              image={brand.gatsbyImage}
              objectFit="contain"
              className="h-8 sm:h-14"
            />
          ))}
        </section>

        <Gallery>
          <Masonry gutter="20px">
            {data.photos.map((photo, index) => {
              return (
                <Item
                  key={index}
                  original={photo.url}
                  thumbnail={photo.url}
                  width={photo.width}
                  height={photo.height}
                  alt={photo.title}
                >
                  {({ ref, open }) => (
                    <img
                      style={{ cursor: 'pointer' }}
                      src={photo.url}
                      alt={photo.title}
                      ref={ref as React.MutableRefObject<HTMLImageElement>}
                      onClick={open}
                    />
                  )}
                </Item>
              );
            })}
          </Masonry>
        </Gallery>
      </Container>
    </Layout>
  );
};

export const query = graphql`
  query AboutPage {
    allContentfulAbout {
      nodes {
        title
        description {
          raw
        }
        brands {
          contentful_id
          title
          gatsbyImage(width: 1000)
        }
        photos {
          contentful_id
          title
          url
          height
          width
          gatsbyImage(width: 1200)
        }
      }
    }
  }
`;

export default About;
