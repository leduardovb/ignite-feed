import { AddFeedback } from '@/components/add-feedback'
import { Comment } from '@/components/comment'
import { CommentAvatar } from '@/components/comment/comment-avatar'
import { CommentContent } from '@/components/comment/comment-content'
import { CommentCreatedAt } from '@/components/comment/comment-created-at'
import { CommentHeader } from '@/components/comment/comment-header'
import { CommentText } from '@/components/comment/comment-text'
import { CommentUser } from '@/components/comment/comment-user'
import { Post } from '@/components/post'
import { PostComment } from '@/components/post/post-comment'
import { PostComments } from '@/components/post/post-comments'
import { PostContent } from '@/components/post/post-content'
import { PostCreatedAt } from '@/components/post/post-created-at'
import { PostHeader } from '@/components/post/post-header'
import { PostOwner } from '@/components/post/post-owner'
import { Separator } from '@/components/ui/separator'
import { UserAvatar } from '@/components/user-avatar'

const content = `Fala galeraa 👋

Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀

 👉 jane.design/doctorcare

#novoprojeto #nlw #rocketseat`

export default function AppPage() {
  return (
    <div className="w-full">
      <Post>
        <PostHeader>
          <UserAvatar src="/picture.png" alt="John Doe" fallback="JD" />
          <PostOwner name="John Doe" position="Software Engineer" />
          <PostCreatedAt date={new Date()} />
        </PostHeader>
        <PostContent content={content} />
        <Separator />
        <AddFeedback />
        <PostComments>
          <PostComment>
            <Comment>
              <CommentAvatar src="/picture.png" alt="John Doe" fallback="JD" />
              <CommentContent>
                <CommentHeader>
                  <CommentUser>John Doe</CommentUser>
                  <CommentCreatedAt date={new Date()} />
                </CommentHeader>
                <CommentText content="Ficou muito top! Parabéns!" />
              </CommentContent>
            </Comment>
          </PostComment>
          <PostComment>
            <Comment>
              <CommentAvatar src="/picture.png" alt="John Doe" fallback="JD" />
              <CommentContent>
                <CommentHeader>
                  <CommentUser>John Doe</CommentUser>
                  <CommentCreatedAt date={new Date()} />
                </CommentHeader>
                <CommentText content="Muito bom Devon, parabéns!! 👏👏" />
              </CommentContent>
            </Comment>
          </PostComment>
        </PostComments>
      </Post>
    </div>
  )
}
