import { Project } from '../types/project'

export default function useFilter(data: Project[], filter: string): (Project | undefined)[] {
  if(!Boolean(filter)) return data
  return data.filter( d => {
    if(d.name.toLowerCase().includes(filter.toLowerCase()) || d?.description?.toLowerCase().includes(filter.toLowerCase())) return d
  })
}