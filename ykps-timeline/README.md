# YK Pao Competition Timeline

## Project setup

```shell
npm install
```

### Compiles and hot-reloads for development

```shell
npm run serve
```

### Compiles and minifies for production

```shell
npm run build
```

### Lints and fixes files

```shell
npm run lint
```

### Customize configuration

See [Configuration Reference](https://cli.vuejs.org/config/).

## Concepts

### Timeline

Conceptually, each timeline represents a single competition. It consists of:

- A title
- A description
- A list of **secondary time points** (`SNodes`)
- A list of **primary time points** (`PNodes`)

Each `PNode` represents a primary time point, which is a milestone that marks a significant change in the competition. All of the `PNode`s will be displayed on the main page.

Each `SNode` represents a secondary time point, which can be any event that occurs during the competition. `SNode`s will be displayed in the detailed view of each competition.
