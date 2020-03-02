import {
  workspace,
  ListAction,
  ListContext,
  ListItem,
  Neovim,
  BasicList,
  Uri
} from 'coc.nvim'

export default class Tasks extends BasicList {
  public readonly name = 'tasks'
  public readonly description = 'CocList for asynctasks.vim'
  public readonly defaultAction = 'run'
  public actions: ListAction[] = []

  constructor(nvim: Neovim) {
    super(nvim)

    this.addLocationActions()

    this.addAction('run', (item: ListItem) => {
      this.nvim.command(`AsyncTask ${item.data.name}`, true)
    })
  }

  public async loadItems(_context: ListContext): Promise<ListItem[]> {
    const source: ListItem[] = []
    const tasks: TaskItem[] = await this.nvim.call('asynctasks#list', [''])
    for (const task of tasks) {
      source.push({
        label: `${task.name.padEnd(25)}` + `<${task.scope}>`.padEnd(10) + `:  ${task.command}`,
        data: task,
        location: Uri.file(task.source).toString()
      })
    }
    return source
  }

  public doHighlight(): void {
    let { nvim } = workspace
    nvim.pauseNotification()
    nvim.command('syntax match TaskName /^\\S\\+/', true)
    nvim.command('hi def link TaskName Constant', true)
    nvim.command('syn match TaskScope /\\s\\+<.*>\\s\\+:/', true)
    nvim.command('hi def link TaskScope Statement', true)
    nvim.command('syn match TaskCommand /.*/ contains=TaskName,TaskScope', true)
    nvim.command('hi def link TaskCommand String', true)
    nvim.resumeNotification().catch(_e => {
      // nop
    })
  }
}

interface TaskItem {
  source: string,
  name: string,
  scope: string,
  command: string
}