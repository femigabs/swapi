/* Replace with your SQL commands */
CREATE TABLE IF NOT EXISTS movie_comments (
    id SERIAL PRIMARY KEY,
    episode_id INTEGER NOT NULL,
    commenter_ip VARCHAR NOT NULL,
    comment VARCHAR(500),
    created_at TIMESTAMPTZ DEFAULT NOW(),
    updated_at TIMESTAMPTZ DEFAULT NOW() 
);