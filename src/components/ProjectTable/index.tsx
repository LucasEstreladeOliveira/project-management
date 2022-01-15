import { v4 as uuidv4 } from 'uuid';
import { Button, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@material-ui/core'
import ActionMenu from '../ActionMenu';
import { Project as ProjectType } from '../../types/project';
import useFilter from '../../hooks/useFilter';
import { useRouter } from 'next/router'
import data from "../../../data/projects.json"

const ProjectTable: React.FC = () => {

  function createData({ name, description, owner }: ProjectType) {
    return { id: uuidv4(), name, description, owner };
  }
  
  const router = useRouter();

  const rows = data.projects;

  const filter = '';
  
  const filteredProjects = useFilter(rows, filter);

  function handleEdit(id: string | number | undefined) {
    router.push(`/project/${id}`)
  }

   return (
    <TableContainer component={Paper}>
      <Table size="small" aria-label="a dense table">
        <TableHead>
          <TableRow>
            <TableCell>Project</TableCell>
            <TableCell align="right">Name</TableCell>
            <TableCell align="right">Description</TableCell>
            <TableCell align="right">Options</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {filteredProjects.map((row) => (
            <TableRow key={row?.id}>
              <TableCell component="th" scope="row">
                {row?.name}
              </TableCell>
              <TableCell align="right">{row?.owner.name}</TableCell>
              <TableCell align="right">{row?.description}</TableCell>
              <TableCell align="right">
                <ActionMenu options={[{label: 'Edit', action: () => handleEdit(row?.id)}]}/>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  )
}

export default ProjectTable
