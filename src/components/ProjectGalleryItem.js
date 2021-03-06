import React from "react";
import { Link } from "gatsby";

const ProjectGallery = props => {
  return (
    <div className="project thumbnail" key={props.post.id}>
      <img
        src={props.post.frontmatter.thumbnailImage}
        alt={props.post.frontmatter.title}
      />
      <Link className="project overlay" to={props.post.fields.slug}>
        <h2>{props.post.frontmatter.title}</h2>
      </Link>
    </div>
  );
};

export default ProjectGallery;
