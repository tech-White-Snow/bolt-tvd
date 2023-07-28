import { graphql } from 'gatsby';
import React from 'react';
import { Hero } from '../shared/ui';

const RootIndex = (props) => {
  const data = props.data.allContentfulBrandsList.nodes[0].brands;

  const projects = [...data].filter((project) => project.featured);

  return <Hero projects={projects} />;
};

export const query = graphql`
  query QueryBrandsList {
    allContentfulBrandsList {
      nodes {
        brands {
          title
          slug
          featured
          category
          subtitle
          client
          videoPromo {
            url
          }
          featuredVideo {
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

export default RootIndex;
