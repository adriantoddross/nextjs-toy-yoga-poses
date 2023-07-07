export default function handleFavoritePose(req, res) {
  // Set up supabase: https://supabase.com/docs/guides/getting-started/quickstarts/nextjs

  // these are params sent from Hasura
  const { user_id, pose_id } = req.body.input;

  // business logic:
  // fetch pose
  // check user_poses table to make sure there isn't a duplicate row; can't be multiple rows with same user_id and pose_id

  // return the response
  res.status(200).json({
    id: "<value>",
    title: "<value>",
    subtitle: "<value>",
    image_url: "<value>",
    isFavorited: true,
    pose_id: "<value>",
    user_id: "<value>",
  });
}
