import {
  workspace,
  ListAction,
  ListContext,
  ListItem,
  Neovim,
  BasicList
} from 'coc.nvim'

export default class Tasks extends BasicList {
  public readonly name = 'tasks'
  public readonly description = 'CocList for asynctasks.vim'
  public readonly defaultAction = 'run'
  public actions: ListAction[] = []

  constructor(nvim: Neovim) {
    super(nvim)

    this.addAction('run', (item: ListItem) => {
      this.nvim.command(`AsyncTask ${item.data}`, true)
    })
  }

  public async loadItems(_context: ListContext): Promise<ListItem[]> {
    const source: ListItem[] = []
    // const columns = parseInt((await this.nvim.eval('&columns')).toString(), 10)
    const rows = await this.nvim.call('asynctasks#', Math.floor(columns * 48 / 100))
    for (const row of rows) {
      let name = row[0]
      source.push({
        label: `${name}  ${row[1]}  :  ${row[2]}`,
        data: name
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
