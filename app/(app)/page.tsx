import { AddFeedback } from '@/components/add-feedback'
import { Post } from '@/components/post'
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
      </Post>
    </div>
  )
}
