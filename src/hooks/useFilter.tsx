import { Project } from '../types/project'

export default function useFilter(data: Project[], filter: string): (Project | undefined)[] {
  return data.filter( d => {
    if(d.name.includes(filter) || d.description.includes(filter)) return d
  })
}