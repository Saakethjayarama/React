# Initializing story book project

```
npx sb init
```

- This installs few dependencies in which all of them are dev dependencies as storybook is only used in developement environment.

# Folder structure

## .storybook

- Contains configurations that needs to be added to story book.

1. main.js
   - exports all the files which ends with mdx or js/jsx/ts/tsx.
   - exports all the addons.
   - is the configuration of storybook itself.
2. preview.js
   - contains configuration.
   - Is the configuration of stories.
