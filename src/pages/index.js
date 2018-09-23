import React from "react";
import PropTypes from "prop-types";
import { Link, graphql } from "gatsby";
import Layout from "../components/Layout";
import ProjectGallery from "../components/ProjectGallery";

export default class IndexPage extends React.Component {
  render() {
    const { data } = this.props;
    const { edges: posts } = data.allMarkdownRemark;

    return (
      <Layout>
        <h1>Welcome</h1>
        <img src="https://images.unsplash.com/photo-1473655717998-7a3fd125491b?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=aad5c83867c2c992b54a180fa5d7cd55&auto=format&fit=crop&w=1052&q=80" />
        <ProjectGallery posts={posts} />
      </Layout>
    );
  }
}

IndexPage.propTypes = {
  data: PropTypes.shape({
    allMarkdownRemark: PropTypes.shape({
      edges: PropTypes.array
    })
  })
};

export const pageQuery = graphql`
  query ProjectPageQuery {
    allMarkdownRemark(
      sort: { order: DESC, fields: [frontmatter___date] }
      filter: { frontmatter: { templateKey: { eq: "project-post" } } }
    ) {
      edges {
        node {
          id
          fields {
            slug
          }
          frontmatter {
            title
            templateKey
            date(formatString: "MMMM DD, YYYY")
            thumbnailImage
          }
        }
      }
    }
  }
`;
