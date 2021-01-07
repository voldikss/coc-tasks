import {
  CompletionItem,
  CompletionItemKind,
  CompletionItemProvider,
  Position,
  TextDocument
} from 'coc.nvim'

const ASYNCTASKS_MACROS = [
  ["VIM_FILEPATH", "File name of current buffer with full path", "/home/voldikss/dotfiles/home/.config/nvim/autoload/coc/source/tasks.vim"],
  ["VIM_FILENAME", "File name of current buffer without path", "tasks.vim"],
  ["VIM_FILEDIR", "Full path of current buffer without the file name", "/home/voldikss/dotfiles/home/.config/nvim/autoload/coc/source"],
  ["VIM_FILEEXT", "File extension of current buffer", ".vim"],
  ["VIM_FILETYPE", "File type (value of &ft in vim)", "vim"],
  ["VIM_FILENOEXT", "File name of current buffer without path and extension", "tasks"],
  ["VIM_PATHNOEXT", "Current file name with full path but without extension", "/home/voldikss/dotfiles/home/.config/nvim/autoload/coc/source/tasks"],
  ["VIM_CWD", "Current directory", "/home/voldikss/dotfiles/home/.config/nvim/autoload/coc/source"],
  ["VIM_RELDIR", "File path relativize to current directory", "."],
  ["VIM_RELNAME", "File name relativize to current directory", "tasks.vim"],
  ["VIM_CWORD", "Current word under cursor", "VIM_PRONAME"],
  ["VIM_CFILE", "Current filename under cursor", "VIM_PRONAME"],
  ["VIM_CLINE", "Cursor line number in current buffer", "28"],
  ["VIM_VERSION", "Value of v:version", "800"],
  ["VIM_SVRNAME", "Value of v:servername for +clientserver usage", "/tmp/nvimfOsenC/0"],
  ["VIM_COLUMNS", "How many columns in vim's screen", "153"],
  ["VIM_LINES", "How many lines in vim's screen", "40"],
  ["VIM_GUI", "Is running under gui ?", "0"],
  ["VIM_ROOT", "Project root directory", "/home/voldikss/dotfiles"],
  ["VIM_DIRNAME", "Name of current directory", "source"],
  ["VIM_PRONAME", "Name of current project root directory", "dotfiles"],
  ["VIM_PROFILE", "Current building profile (debug/release/...)", "debug"],
]

export class TasksMacroCompletionProvider implements CompletionItemProvider {
  public provideCompletionItems(
    document: TextDocument,
    position: Position
  ): CompletionItem[] {
    const prechar = document.getText({
      start: {
        line: position.line,
        character: position.character
      },
      end: {
        line: position.line,
        character: position.character - 1
      }
    })
    return ASYNCTASKS_MACROS.map(item => ({
      label: item[0],
      kind: CompletionItemKind.Constant,
      documentation: `${item[1]}\ne.g. \`${item[2]}\``,
      insertText: prechar == '$' ? `(${item[0]})` : item[0],
    }))
  }
}
