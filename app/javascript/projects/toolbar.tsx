import * as React from 'react'

import { Tab } from "./project_editor"

interface ToolbarProps {
  backButtonPath: string
  projectName: string
  hasUnsavedChanges: boolean
  currentTab: Tab
  isProcessing: boolean
  isLoading: boolean
  setProjectName: (name: string) => void
  saveProject: () => void
  setCurrentTab: (tab: Tab) => void
  autoProcessing: boolean
  setAutoProcessing: (autoprocessing: boolean) => void
  manualProcessing: () => void
}
export const Toolbar = ({ backButtonPath, projectName, hasUnsavedChanges, currentTab, isProcessing, isLoading, setProjectName, saveProject, setCurrentTab, autoProcessing, setAutoProcessing, manualProcessing }: ToolbarProps) => (
  <div className="btn-toolbar p-2 bg-light border-top">
    <div className="btn-group mr-2">
      <a className="btn btn-sm btn-outline-primary" href={backButtonPath}>
        <i className="fas fa-angle-left mr-1" />
        Back to projects
      </a>
    </div>
    <div className="input-group mr-2">
      <input type="text" className="form-control form-control-sm" value={projectName} onChange={e => setProjectName(e.target.value)} />
    </div>
    <div className="btn-group mr-2">
      <button className="btn btn-sm btn-outline-primary" disabled={!hasUnsavedChanges} onClick={saveProject}>
        <i className="fas fa-save" /> Save
      </button>
    </div>
    <div className="btn-group mr-2">
      <button className={`btn btn-sm ${currentTab == Tab.MapView ? "btn-primary" : "btn-outline-primary"}`} onClick={() => setCurrentTab(Tab.MapView)}>
        <i className="fas fa-map-marked-alt" /> Map view
      </button>
      <button className={`btn btn-sm ${currentTab == Tab.ModelView ? "btn-primary" : "btn-outline-primary"}`} onClick={() => setCurrentTab(Tab.ModelView)}>
        <i className="fas fa-project-diagram" /> Model view
      </button>
    </div>
    <div className="btn-group mr-2">
      <button title='Toggle between automatic and manual processing. Manual processing is recommended for larger models.' className={`btn btn-sm ${autoProcessing ? "btn-primary" : "btn-outline-primary"}`} onClick={() => setAutoProcessing(!autoProcessing)}>
        {autoProcessing ? <><i className="fas fa-toggle-on" /> Auto </> : <><i className="fas fa-toggle-off" /> Auto </>}
      </button>
      {
        !autoProcessing &&
        <button disabled={isProcessing} className={`btn btn-sm btn-primary`} onClick={manualProcessing}>
          <i className="fas fa-play" /> Run
        </button>
      }
    </div>
    {
      isProcessing &&
      <div className="d-flex align-items-center">
        <div><i className="fas fa-circle-notch fa-spin" /> Processing...</div>
      </div>
    }
    {
      isLoading &&
      <div className="d-flex align-items-center">
        <div><i className="fas fa-circle-notch fa-spin" /> Loading Dataset...</div>
      </div>
    }
  </div>
)
