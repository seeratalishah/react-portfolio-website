import React from 'react'

function SocialMediaCard(props) {
  return (
    <article className="social-media-card">
            <i class={props.iconClass}></i>
            <h4>{props.mediaName}</h4>
            <h5>{props.mediaValue}</h5>
            <a href={props.hrefLink}>{props.actionName}</a>
    </article>
  )
}

export default SocialMediaCard