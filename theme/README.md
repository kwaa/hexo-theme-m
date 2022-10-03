# Hexo Theme M

Yet Another Material Theme for Hexo.

## Usage

### Install

###### via NPM (stable)

> use the package manager update command, such as `npm update` or `pnpm up`

```bash
npm i hexo-theme-m # npm
# pnpm add hexo-theme-m # pnpm
```

###### via GitHub (latest)

> `rm -r themes/m` and run the following command again to update it.

```bash
npx degit kwaa/hexo-theme-m/theme themes/m # npx
# pnpm dlx degit kwaa/hexo-theme-m/theme themes/m # pnpm dlx
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
