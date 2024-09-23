import { PostsContainer } from '@/containers/posts.container'
import { useUser } from '@/hooks/auth/use-user'
import { redirect } from 'next/navigation'

export default async function AppPage() {
  const { isAuthenticated } = await useUser()

  if (!isAuthenticated) {
    return redirect('/auth/login')
  }

  return (
    <div className="w-full">
      <PostsContainer />
    </div>
  )
}
