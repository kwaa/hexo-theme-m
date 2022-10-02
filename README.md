# Hexo Theme M

Yet Another Material Theme for Hexo.

## Usage

### Install

###### via NPM

```bash
npm i hexo-theme-m # npm
# pnpm add hexo-theme-m # pnpm
# yarn add hexo-theme-m # yarn
```

###### via GitHub

```bash
git clone https://github.com/kwaa/hexo-theme-m themes/m # git
# npx degit kwaa/hexo-theme-m themes/m # degit
```

### Enable

This theme is only compatible with PrismJS, please make sure to disable HighlightJS.

Modify the `theme` field to enable the theme.

###### \_config.yml

```diff
highlight:
- enable: true
+ enable: false
  line_number: true
  auto_detect: false
  tab_replace: ''
  wrap: true
  hljs: false
prismjs:
- enable: false
+ enable: true
  preprocess: true
  line_number: true
  tab_replace: ''

# Extensions
## Plugins: https://hexo.io/plugins/
## Themes: https://hexo.io/themes/
- theme: landscape
+ theme: m
```

## License

Licensed under the [WTFPL](http://www.wtfpl.net), See the [COPYING](COPYING) file for more details.
