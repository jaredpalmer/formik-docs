import * as React from 'react';
import { Row, Block } from 'components/Primitives';
import { Icon } from 'components/Icon/Icon';
import { Container } from 'components/Container';
import { Link } from 'components/Link';

// Please note that you can use https://github.com/dotansimha/graphql-code-generator
// to generate all types from graphQL schema
interface IndexPageProps {
  data: {
    site: {
      siteMetadata: {
        siteName: string;
      };
    };
  };
}

export default class Index extends React.Component<IndexPageProps, {}> {
  constructor(props: IndexPageProps, context: any) {
    super(props, context);
  }

  render() {
    return (
      <Block height="100%">
        <Container>
          <Block fontWeight={800}>Formik</Block>
        </Container>
        <Block padding="4rem 0" background="#fff">
          <Container>
            <Block
              component="h1"
              fontWeight={800}
              fontSize="4rem"
              letterSpacing="-.02em"
              marginBottom="1rem"
            >
              Formik
            </Block>
            <Block fontSize="1.25rem">
              Build forms in React, without tears 😭
            </Block>

            <Link to="/docs/philosophy">Get Started</Link>
          </Container>
        </Block>

        <Container>
          <div>
            <h3>What's Formik?</h3>
            <p>
              Formik is a React component that helps you write forms faster. It
              keeps track of form `values`, errors, touched fields, and
              submission handlers all in one place.
            </p>
          </div>
        </Container>

        <Block padding="4rem 0" background="#f6f6f6">
          <Container>
            <Block fontWeight={800} fontSize="2rem" textAlign="center">
              Who's using Formik?
            </Block>
            <Row
              justifyContent="space-between"
              padding="4rem 0"
              margin="0 auto"
              maxWidth="67rem"
              textAlign="center"
              alignItems="center"
              flexWrap="wrap"
            >
              <Block flex="1">
                <Icon name="opentable" width={150} height={150} />
              </Block>
              <Block flex="1">
                <Icon name="docker" height={150} width={150} />
              </Block>
              <Block flex="1">
                <Icon name="smyte" height={30} />
              </Block>
              <Block flex="1">
                <Icon name="capsule" />
              </Block>
            </Row>
          </Container>
        </Block>
      </Block>
    );
  }
}

export const pageQuery = graphql`
  query IndexQuery {
    site {
      siteMetadata {
        siteName
      }
    }
  }
`;
