export default {
  addComment: `
        INSERT INTO movie_comments(
            episode_id,
            comment,
            commenter_ip
        ) VALUES ($1, $2, $3) RETURNING *
    `,
  getCommentCount: `
        SELECT 
            episode_id,
            count(*) AS total
        FROM 
            movie_comments
        WHERE episode_id = ANY($1)
        GROUP BY 1
    `,
  getMovieComments: `
        SELECT
            *
        FROM 
            movie_comments
        WHERE episode_id = $1
        ORDER BY created_at DESC
    `,
};
