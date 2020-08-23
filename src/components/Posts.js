import React from 'react'
import {Link} from 'gatsby'
import {
    Badge,
    Card,
    CardTitle,
    CardBody,
    CardSubtitle,
    CardText
} from 'reactstrap'
import Img from 'gatsby-image'
const Posts = ({
    title,
    author,
    path,
    date,
    body,
    fluid,
    tags
}) => {
    return (
        <div>
            <Card>
                <Link to={path}>
                    <Img className="card-image-top" fluid={fluid}/>
                </Link>
                <CardBody>
                    <CardTitle>
                        {title}
                    </CardTitle>
                    <CardSubtitle>
                        <span className="text-info">{date}</span>
                        by{' '}
                        <span className="text-info">{author}</span>
                    </CardSubtitle>
                    <CardText>{body}</CardText>
                    <ul className="post-tags">
                        {
                            tags.map(tag => {
                                return (<li>
                                   
                                <Badge color="primary">{tag}</Badge>
                                    
                                </li>)
                            })
                        }
                    </ul>
                    <Link to={path} className="btn  btn-outline-primary float-right">Read More</Link>
                </CardBody>

            </Card>
        </div>
    )
}

export default Posts
