import React from 'react';
import { Link } from 'react-router-dom';
import dayjs from 'dayjs';

export default function Card({ post, logged }) {
    return (
        <div className="col">
            <div className="card h-100">
                <div className="card-body">
                    <h5 className="card-title">{post.title}</h5>
                    <p className="card-text">{post.description}</p>
                </div>
                <div className="card-footer">
                    <small className="text-muted">Author: {post.author.username}</small>
                    <br />
                    <small className="text-muted">
                        Last updated: {dayjs(post.updatedAt).format('MM/DD/YYYY hh:mm:ss A')}
                    </small>
                    <br />
                    <small className="text-muted">Price: {post.price}</small>
                </div>
                <div className="row g-0">
                    <div className="btn-group">
                        <Link to={`/details/${post._id}`}>
                            <button
                                disabled={!logged}
                                className="btn btn-success rounded my-1 mx-2"
                            >
                                Details
                            </button>
                        </Link>
                        <button
                            disabled={!logged}
                            className="btn btn-primary rounded my-1 mx-2"
                        >
                            Buy
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}