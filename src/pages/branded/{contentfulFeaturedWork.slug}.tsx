import React, { useLayoutEffect } from 'react';
import { graphql, Link } from 'gatsby';
import { GatsbyImage } from 'gatsby-plugin-image';
import ReactPlayer from 'react-player';
import { renderRichText } from 'gatsby-source-contentful/rich-text';
import { Text, Footer, Layout } from '../../shared/ui';
import { WideContainer } from '../../shared/ui/Container/Container';

const BrandedData: React.FC = (props) => {
  // @ts-ignore
  const data = props.data.contentfulFeaturedWork;

  useLayoutEffect(() => {
    setTimeout(() => {
      document.documentElement.scrollTo(0, 0);
    }, 100);
  }, []);

  return (
    <Layout>
      <WideContainer>
        {data.videoUrl && (
          <div
            style={{
              position: 'relative',
              paddingTop: '56.25%',
            }}
            className="mb-11"
          >
            <ReactPlayer
              url={data.videoUrl}
              controls
              width="100%"
              height="100%"
              style={{
                position: 'absolute',
                top: '0',
                left: '0',
              }}
            />
          </div>
        )}

        <div className="flex flex-col md:flex-row">
          <div className="w-[100%] md:w-[70%]">
            <Text type="h6" title={data.subtitle} />
            <Text type="h1" className="mb-11" title={data.title} />

            {!!data.brief && (
              <div className="flex flex-col md:flex-row">
                <div className="w-[20%] text-lg mb-11">Brief</div>
                <div className="w-[80%] text-lg mb-11">
                  {renderRichText(data.brief)}
                </div>
              </div>
            )}

            {!!data.approach && (
              <div className="flex flex-col md:flex-row mt-10">
                <div className="text-lg mb-11 w-[20%]">Approach</div>
                <div className="text-lg mb-11 w-[80%]">
                  {renderRichText(data.approach)}
                </div>
              </div>
            )}

            {!!data.impact && (
              <div className="flex flex-col md:flex-row mt-10">
                <div className="text-lg mb-11 w-[20%]">Impact</div>
                <div className="text-lg mb-11 w-[80%]">
                  {renderRichText(data.impact)}
                </div>
              </div>
            )}
          </div>

          <div className="w-[100%] md:w-[30%] md:ml-24 md:pl-10 md:border-l md:border-white h-full mb-10">
            {data.client && (
              <div className="mb-8">
                <p className="uppercase text-sm font-bold">Client</p>
                <p className="text-lg">{data.client}</p>
              </div>
            )}

            {data.brand && (
              <div className="mb-8">
                <p className="uppercase font-bold text-sm">Brand</p>
                <p className="text-lg">{data.brand}</p>
              </div>
            )}

            {data.agency && (
              <div className="mb-8">
                <p className="uppercase font-bold text-sm">Agency</p>
                <p className="text-lg">{data.agency}</p>
              </div>
            )}

            {data.productionCompany && (
              <div className="mb-8">
                <p className="uppercase font-bold text-sm">
                  Production Company
                </p>
                <p className="text-lg">{data.productionCompany}</p>
              </div>
            )}

            {data.director && (
              <div className="mb-8">
                <p className="uppercase font-bold text-sm">Director</p>
                <p className="text-lg">{data.director}</p>
              </div>
            )}

            {data.creativeDirector && (
              <div className="mb-8">
                <p className="uppercase font-bold text-sm">Creative Director</p>
                <p className="text-lg">{data.creativeDirector}</p>
              </div>
            )}

            <div>
              <p className="uppercase font-bold text-sm">Services</p>
              <p className="text-lg">{data.services}</p>
            </div>
          </div>
        </div>

        {data.imageGrid && (
          <GatsbyImage
            alt={data.imageGrid.gatsbyImage}
            objectFit="cover"
            image={data.imageGrid.gatsbyImage}
            className="mb-5 sm:mb-10"
          />
        )}

        {data.photos?.map((photo) => (
          <GatsbyImage
            key={photo.contentful_id}
            alt={photo.title}
            image={photo.gatsbyImage}
            className="mb-5 sm:mb-10 h-img-xl"
          />
        ))}
        <Footer />
      </WideContainer>
    </Layout>
  );
};

export const query = graphql`
  query ($id: String!) {
    contentfulFeaturedWork(id: { eq: $id }) {
      id
      title
      subtitle
      client
      agency
      brand
      productionCompany
      director
      creativeDirector
      services
      service
      brief {
        raw
      }
      impact {
        raw
      }
      approach {
        raw
      }
      videoUrl
      description {
        raw
      }
      imageGrid {
        gatsbyImage(height: 1500, width: 3150)
      }
      photos {
        contentful_id
        title
        gatsbyImage(height: 900, width: 1600)
      }
    }
  }
`;

export default BrandedData;
