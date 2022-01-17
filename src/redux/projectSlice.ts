import { createSlice } from "@reduxjs/toolkit";
import { WritableDraft } from "immer/dist/internal";
import { projects as p } from '../../data/projects.json'
import { Project } from "../types/project";

export const slice = createSlice({
  name: 'project',
  initialState: {
    projects: p
  },
  reducers: {
    createProjects(state, {payload}) {
      return {...state, projects: [...state.projects, {...payload, id: state.projects.length}]}
    },
    updateProjects(state, {payload}) {
      const newProjects = state.projects.map(project => {
        if(project.id === payload.id) {
          project = payload
        }
        return project
      })
      return {...state, projects: [...newProjects]}
    },
    
  }
})

export const selectProjects = (state: WritableDraft<{projects: Project[]}>) => state.projects
export const { createProjects, updateProjects } = slice.actions

export default slice.reducer