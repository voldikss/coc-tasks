import {
  ExtensionContext,
  listManager,
  workspace,
  languages
} from 'coc.nvim'
import Tasks from './tasks'
import { TasksMacroCompletionProvider } from './completion'
import TasksMacroHoverProvider from './hover'

export async function activate(context: ExtensionContext): Promise<void> {
  const { nvim } = workspace
  const { subscriptions } = context
  const config = workspace.getConfiguration('tasks')

  subscriptions.push(
    listManager.registerList(
      new Tasks(nvim)
    )
  )

  subscriptions.push(
    languages.registerCompletionItemProvider(
      'coc-tasks',
      config.get<string>('shortcut'),
      config.get<string[]>('filetypes'),
      new TasksMacroCompletionProvider(),
      config.get<string[]>('triggerCharacters'),
      config.get<number>('priority'),
      [],
    )
  )

  subscriptions.push(
    languages.registerHoverProvider(
      config.get('filetypes'),
      new TasksMacroHoverProvider()
    )
  )
}
