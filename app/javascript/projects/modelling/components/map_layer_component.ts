import { Input, Node } from "rete"
import { NodeData, WorkerInputs, WorkerOutputs } from "rete/types/core/data"
import { dataSocket } from "../socket_types"
import { BooleanTileGrid, CategoricalTileGrid, NumericTileGrid } from "../tile_grid"
import { BaseComponent } from "./base_component"

export type SaveMapLayer = (id: number, tileGrid: BooleanTileGrid | NumericTileGrid | CategoricalTileGrid) => void

export class MapLayerComponent extends BaseComponent {
  callback: SaveMapLayer

  constructor(callback: SaveMapLayer) {
    super("Map layer")
    this.callback = callback
    this.category = "Outputs"
  }

  async builder(node: Node) {
    node.meta.toolTip = "Output a model to the map view."
    node.addInput(new Input("in", "Output", dataSocket))
  }

  async worker(node: NodeData, inputs: WorkerInputs, outputs: WorkerOutputs, ...args: unknown[]) {
    const editorNode = this.editor?.nodes.find(n => n.id === node.id)
    if (editorNode === undefined) { return }

    if (inputs['in'].length === 0) {
      editorNode.meta.errorMessage = 'No input'
    }
    else {
      delete editorNode.meta.errorMessage
      this.callback(node.id, inputs["in"][0] as BooleanTileGrid | NumericTileGrid | CategoricalTileGrid)
    }
    editorNode.update()
  }
}
