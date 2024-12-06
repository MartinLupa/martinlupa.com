import { IconType } from 'react-icons'
import { SiAmazon, SiGithubactions, SiTerraform } from 'react-icons/si'
import { RiNextjsLine } from 'react-icons/ri'
import { AiOutlineOpenAI } from 'react-icons/ai'
import { GrGraphQl } from 'react-icons/gr'
import { TbBrandVercel, TbBrandTypescript } from 'react-icons/tb'
import { FaGolang } from 'react-icons/fa6'
import { FaDocker } from 'react-icons/fa'
import { DiReact, DiNodejs } from 'react-icons/di'
import { SiBuildkite, SiSparkpost, SiMailgun } from 'react-icons/si'

export const topicsToIcons: { [key: string]: IconType } = {
  'github-actions': SiGithubactions,
  buildkite: SiBuildkite,
  reactjs: DiReact,
  nextjs: RiNextjsLine,
  vercel: TbBrandVercel,
  openai: AiOutlineOpenAI,
  graphql: GrGraphQl,
  typescript: TbBrandTypescript,
  golang: FaGolang,
  docker: FaDocker,
  'docker-compose': SiGithubactions,
  aws: SiAmazon,
  terraform: SiTerraform,
  nodejs: DiNodejs,
  sparkpost: SiSparkpost,
  mailgun: SiMailgun,
}
