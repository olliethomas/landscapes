import * as React from 'react'

interface ToolbarProps {
  backButtonPath: string
  projectName: string
  setProjectName: (name: string) => void
}
export const Toolbar = ({ backButtonPath, projectName, setProjectName }: ToolbarProps) => (
  <div className="btn-toolbar p-2 bg-light border-top">
    <div className="btn-group mr-2">
      <a className="btn btn-sm btn-outline-primary" href={backButtonPath}>
        <i className="fas fa-angle-left mr-1"/>
        Back to projects
      </a>
    </div>
    <div className="input-group mr-2">
      <input type="text" className="form-control form-control-sm" value={ projectName } onChange={e => setProjectName(e.target.value)}/>
    </div>
    <div className="btn-group mr-2">
      <button className="btn btn-sm btn-outline-primary" disabled>
        <i className="fas fa-undo"/> Undo
      </button>
      <button className="btn btn-sm btn-outline-primary" disabled>
        <i className="fas fa-redo"/> Redo
      </button>
    </div>
    <div className="btn-group">
      <button className="btn btn-sm btn-primary">
        <i className="fas fa-map-marked-alt"/> Map view
      </button>
      <button className="btn btn-sm btn-outline-primary" disabled>
        <i className="fas fa-project-diagram"/> Model view
      </button>
    </div>
  </div>
)
