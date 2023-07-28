import React, { Fragment, useEffect } from 'react';
import { graphql, Link } from 'gatsby';
import { Layout, Text, Footer, Container } from '../../shared/ui';

const adapterContactInfo = (info) => {
  if (info.length === 1) {
    return [
      {
        email: info[0],
      },
    ];
  }

  // eslint-disable-next-line array-callback-return, consistent-return
  const changeArrayOfStringsToArrayOfObjects = info.map((el, i, arr) => {
    if (el.includes('@') && !arr[i + 1].includes('1')) {
      return {
        email: el,
        fullName: arr[i - 1],
        position: arr[i - 2],
      };
    }

    if (el.includes('@') && arr[i + 1].includes('1')) {
      return {
        email: el,
        // TO-DO: cleanup
        phone: arr[i + 1] === '+1 (000) 000-0000' ? '' : arr[i + 1],
        position: arr[i - 1],
      };
    }
  });

  const deleteUndefined = changeArrayOfStringsToArrayOfObjects.filter(
    (el) => el !== undefined
  );

  return deleteUndefined;
};

const adapterData = (contactsData) => {
  const result = contactsData.map((element) => ({
    id: element.id,
    title: element.title,
    data: adapterContactInfo(element.contactInformation),
  }));

  return result;
};

const Contact: React.FC = (props) => {
  // @ts-ignore
  const contactsData = props.data.allContentfulContact.nodes;
  const adaptedData = adapterData(contactsData);
  
  useEffect(() => {
    document.title = contactsData[0].title;
  },[]);

  return (
    <Layout>
      <Container>
        <section className="sm:flex sm:flex-wrap sm:justify-center">
          {adaptedData.map(({ id, title, data }) => (
            <Fragment key={id}>
              <div className="sm:basis-3/12">
                <Text
                  type="h4"
                  title={title}
                  className="mb-10 sm:mb-24 lg:mb-36"
                />
              </div>

              <div className="sm:flex sm:flex-wrap sm:basis-7/12">
                {data.map((el, i) => (
                  <div className="mb-10 sm:basis-2/4" key={i}>
                    {el?.position && (
                      <Text type="link" withHover={false} title={el.position} />
                    )}
                    {el?.fullName && (
                      <Text type="link" withHover={false} title={el.fullName} />
                    )}
                    <Link to={`mailto:${el?.email}`}>
                      {el?.email && <Text type="link" title={el.email} />}
                    </Link>

                    {el?.phone && (
                      <Link to={`tel:+${el.phone}`}>
                        <Text type="link" title={el.phone} />
                      </Link>
                    )}
                  </div>
                ))}
              </div>
            </Fragment>
          ))}
        </section>

        <Footer />
      </Container>
    </Layout>
  );
};

export const query = graphql`
  query Contact {
    allContentfulContact(sort: { fields: createdAt, order: ASC }) {
      nodes {
        id
        title
        contactInformation
      }
    }
  }
`;

export default Contact;
