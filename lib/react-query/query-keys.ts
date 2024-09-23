export const PostKeys = {
  list: () => ['posts', 'list'],
  comments: (postId: string) => ['posts', 'comments', postId],
}
