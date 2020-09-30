# coc-tasks

Tasks list and macros completion support for [asynctasks.vim](https://github.com/skywind3000/asynctasks.vim)

### List

![](https://user-images.githubusercontent.com/20282795/75665130-a6c1b900-5cae-11ea-89a1-c2fcca223d71.png)

### Completion

![](https://user-images.githubusercontent.com/20282795/94645816-6519ef00-031f-11eb-9f64-3282fa1c8a8b.gif)

## Requirements

- [coc.nvim](https://github.com/neoclide/coc.nvim)
- [asynctasks.vim](https://github.com/skywind3000/asynctasks.vim)

## Install

```
:CocInstall coc-tasks
```

## Configurations

```jsonc
"tasks.enableCompletion": {
  "type": "boolean",
  "default": true,
  "description": "Whether to enable tasks macros completion"
},
"tasks.shortcut": {
  "type": "string",
  "default": "TASKS"
},
"tasks.filetypes": {
  "type": "array",
  "default": [
    "tasks",
    "dosini"
  ],
  "description": "Tasks macros completion on the specific filetypes"
},
"tasks.triggerCharacters": {
  "type": "array",
  "default": [
    "(",
    "$"
  ]
},
"tasks.priority": {
  "type": "number",
  "default": 99,
  "description": "Priority of macros completion"
}
```

## CocList

Try `:CocList tasks`

- `run`
- `open`
- `preview`
- ...

## Feedback

⭐ || ☕

## License

MIT
