import React from 'react';
import { Card, CardContent, CardHeader, Avatar, Typography, Divider } from '@mui/material';
import './BlogCard.css';
import { Link, useNavigate } from 'react-router-dom';

const BlogCard = ({ id, imageData, date, title, description, authorName, authorLastName, matchedUser, hashtags }) => {
    const navigate = useNavigate();

    const clickHandler = async () => {
        navigate(`/blog/${id}`);
    };
    
    let tags;
    if (typeof hashtags === 'string') {
        tags = hashtags.split(',');
    }
    
    const imagePath = imageData?.split('/').splice(1).join('/');
    const imagePath2 = imagePath?.split("/").splice(1).join('/');

    const AvatarPath2 = matchedUser?.profile.split('/').splice(1).join('/');
    const AvatarPath = AvatarPath2?.split('/').splice(1).join('/');

    return (
        <>
        {
            id ?
            <div onClick={clickHandler}>
                <Card style={{ cursor: 'pointer', marginBottom: 20, borderRadius: '0.5rem', textAlign: 'right', boxShadow: '0px 4px 8px 0px rgba(0, 0, 0, 0.10)', position: 'relative' }}>
                    {/* Card Content */}
                    <CardContent style={{ padding: 0 }}>
                        {/* Image */}
                        <div style={{ overflow: 'hidden', borderRadius: '0.5rem' }}>
                            <img id="blogImage" src={`/${imagePath2}`} alt="Card Image" style={{ aspectRatio: '2/1', width: '100%', height: 'auto', borderRadius: '0.5rem' }} />
                        </div>

                        {/* Date */}
                        <Typography variant="subtitle2" color="textSecondary" fontFamily={'Yekan, sans-serif'} style={{ marginTop: 8, marginRight: 15 }}>
                            {date || 'date'}
                        </Typography>

                        {/* Title */}
                        <Typography id="titleBlog" variant="h5" component="div" fontSize={''} fontFamily={'Yekan, sans-serif'} style={{ marginTop: 10, marginRight: 15 }}>
                            {title}
                        </Typography>

                        {/* Hashtags */}
                        <div style={{ position: 'absolute', top: 15, right: 10 }}>
                            {tags &&
                                tags.map((tag, index) => (
                                    <Typography fontSize={''} id="tagsBlog" key={index} variant="body2" fontFamily={'Yekan, sans-serif'} style={{ display: 'inline', marginRight: 5, color: '#FFF', background: 'rgba(0, 0, 0, 0.65)', borderRadius: '0.5rem', padding: '0.3rem 0.6rem' }}>
                                        #{tag}
                                    </Typography>
                                ))}
                        </div>

                        {/* Description */}
                        <Typography id="descBlog" variant="body2" color="textSecondary" component="p" fontFamily={'Yekan, sans-serif'} style={{ marginTop: 10, marginRight: 15, marginBottom: 10 }}>
                            {description}
                        </Typography>
                    </CardContent>

                    {/* Divider */}
                    <Divider />

                    {/* Author Information */}
                    <CardContent style={{ direction: 'rtl', display: 'flex', justifyContent: 'flex-start', alignItems: 'center', textAlign: 'right' }}>
                        {matchedUser ? (
                            <>
                                <Avatar src={`/${AvatarPath}`} alt={`${matchedUser.name} ${matchedUser.lastName}`} style={{ marginLeft: 10, objectFit: 'cover' }} />
                                <div>
                                <Typography fontFamily={'Yekan, sans-serif'} variant="subtitle1">
                                        {matchedUser.name} {matchedUser.lastName}
                                    </Typography>
                                    <Typography fontFamily={'Yekan, sans-serif'} variant="subtitle2" color="textSecondary" component="p">
                                        {matchedUser?.description}
                                    </Typography>
                                    {/* Add more details if needed, e.g., linkedin, pinterest, etc. */}
                                </div>
                            </>
                        ) : (
                            <Typography fontFamily={'Yekan, sans-serif'} variant="subtitle1">
                                {authorName} {authorLastName}
                            </Typography>
                        )}
                    </CardContent>
                </Card>
            </div>
            :
            ""
        }
        </>
    );
};

export default BlogCard;
