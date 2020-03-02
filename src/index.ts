import {
  ExtensionContext,
  listManager,
  workspace
} from 'coc.nvim'
import Tasks from './tasks'

export async function activate(context: ExtensionContext): Promise<void> {
  const { nvim } = workspace
  const { subscriptions } = context

  subscriptions.push(
    listManager.registerList(
      new Tasks(nvim)
    )
  )
}
