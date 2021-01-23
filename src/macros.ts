import { workspace } from "coc.nvim"

const ASYNCTASKS_MACROS = {
  VIM_FILEPATH: {
    description: "File name of current buffer with full path",
    example: "/home/voldikss/dotfiles/home/.config/nvim/autoload/coc/source/tasks.vim"
  },
  VIM_FILENAME: {
    description: "File name of current buffer without path",
    example: "tasks.vim"
  },
  VIM_FILEDIR: {
    description: "Full path of current buffer without the file name",
    example: "/home/voldikss/dotfiles/home/.config/nvim/autoload/coc/source"
  },
  VIM_FILEEXT: {
    description: "File extension of current buffer",
    example: ".vim"
  },
  VIM_FILETYPE: {
    description: "File type (value of &ft in vim)",
    example: "vim"
  },
  VIM_FILENOEXT: {
    description: "File name of current buffer without path and extension",
    example: "tasks"
  },
  VIM_PATHNOEXT: {
    description: "Current file name with full path but without extension",
    example: "/home/voldikss/dotfiles/home/.config/nvim/autoload/coc/source/tasks"
  },
  VIM_CWD: {
    description: "Current directory",
    example: "/home/voldikss/dotfiles/home/.config/nvim/autoload/coc/source"
  },
  VIM_RELDIR: {
    description: "File path relativize to current directory",
    example: "."
  },
  VIM_RELNAME: {
    description: "File name relativize to current directory",
    example: "tasks.vim"
  },
  VIM_CWORD: {
    description: "Current word under cursor",
    example: "Word under cursor"
  },
  VIM_CFILE: {
    description: "Current filename under cursor",
    example: "File name under cursor"
  },
  VIM_CLINE: {
    description: "Cursor line number in current buffer",
    example: "28"
  },
  VIM_VERSION: {
    description: "Value of v:version",
    example: "800"
  },
  VIM_SVRNAME: {
    description: "Value of v:servername for +clientserver usage",
    example: "/tmp/nvimfOsenC/0"
  },
  VIM_COLUMNS: {
    description: "How many columns in vim's screen", example: "153"
  },
  VIM_LINES: {
    description: "How many lines in vim's screen", example: "40"
  },
  VIM_GUI: {
    description: "Is running under gui ?",
    example: "0"
  },
  VIM_ROOT: {
    description: "Project root directory",
    example: "/home/voldikss/dotfiles"
  },
  VIM_DIRNAME: {
    description: "Name of current directory",
    example: "source"
  },
  VIM_PRONAME: {
    description: "Name of current project root directory",
    example: "dotfiles"
  },
  VIM_PROFILE: {
    description: "Current building profile (debug/release/...)",
    example: "debug"
  },
  VIM_INIFILE: {
    description: "Full path name of current ini (.tasks) file",
    example: ""
  },
  VIM_INIHOME: {
    description: "Where the ini file locates",
    example: ""
  }
}

export async function genMacros() {
  let { nvim } = workspace
  ASYNCTASKS_MACROS.VIM_INIFILE.example = await nvim.call('expand', '%:p')
  ASYNCTASKS_MACROS.VIM_INIHOME.example = await nvim.call('expand', '%:p:h')
  return ASYNCTASKS_MACROS
}
