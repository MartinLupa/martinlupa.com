import { Navigation } from '@/app/components/Navigation'
import { TechStack } from '@/app/components/TechStack'
import { fetchRepositoryData } from '@/utils/github/graphql-api'
import SyntaxHighlighter from 'react-syntax-highlighter'
import { tomorrowNightEighties } from 'react-syntax-highlighter/dist/cjs/styles/hljs'
type tParams = Promise<{ projectSlug: string }>

export default async function projectDetailsPage(props: { params: tParams }) {
  const { projectSlug } = await props.params
  const repoData = await fetchRepositoryData({ name: projectSlug })

  return (
    <div className="mx-auto max-w-7xl space-y-8 md:space-y-16 lg:px-8">
      <Navigation disableLinks={true} />
      <div className="mx-auto lg:mx-0">
        <h2 className="text-3xl font-bold tracking-tight text-zinc-100 sm:text-4xl">{projectSlug}</h2>
        <p className="mt-4 text-zinc-400">{repoData.description}</p>
      </div>
      {repoData.repositoryTopics.nodes && (
        <TechStack
          stack={repoData.repositoryTopics.nodes.map((node: { topic: { name: string } }) => node.topic.name)}
        />
      )}

      <div className="h-px w-full bg-zinc-800" />
      <p>Testing the use of react-syntax-highlighter: </p>
      <SyntaxHighlighter
        language={'tsx'}
        style={tomorrowNightEighties}
        showLineNumbers
        wrapLines
        customStyle={{
          fontSize: '14px',
          minWidth: '200px',
          overflowY: 'auto',
          overflowWrap: 'break-word',
          width: '90vw',
        }}
      >
        {`interface User {
  id: number;
  name: string;
  email: string;
  isAdmin: boolean;
}

class UserService {
  private users: User[] = [];

  addUser(user: User): void {
    this.users.push(user);
  }

  getUserById(id: number): User | undefined {
    return this.users.find(user => user.id === id);
  }

  getAllUsers(): User[] {
    return this.users;
  }
}

// Example usage
const userService = new UserService();`}
      </SyntaxHighlighter>
    </div>
  )
}
