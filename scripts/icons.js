const fs = require('fs')
const { startCase } = require('lodash')
const prettier = require('prettier')

// CLEAR THE INDEX FILE
fs.writeFileSync('./src/index.ts', '')
console.log(`The index file has been cleaned.`)

fs.readdirSync('./assets').forEach((v) => {
  let svg, name, tsx, path

  // LOAD THE SVG FILE
  svg = fs.readFileSync(`./assets/${v}`, 'utf8')
  console.log(svg)

  // PREFIX THE NAME WITH ICON
  name = startCase('icon-' + v.replace('.svg', '')).replace(/\s/g, '')
  console.log(`The name ${name} has been derived from the file ${v}.`)

  tsx = prettier.format(
    [
      `import { Icon, IconProps } from '@queelag/react-core'`,
      `import React, { ForwardedRef, forwardRef } from 'react'`,
      ``,
      `/**`,
      ` * Usage:`,
      ` *`,
      ` * \`\`\`typescript`,
      ` * import { ${name} } from '@queelag/react-material-icons'`,
      ` *`,
      ` * function App() {`,
      ` *   return <${name} />`,
      ` * }`,
      ` * \`\`\``,
      ` *`,
      ` * @category Component`,
      ` */`,
      `export const ${name} = forwardRef((props: IconProps, ref: ForwardedRef<SVGSVGElement>) => {`,
      `return <Icon {...props} fill={typeof props.fill === 'string' ? props.fill : props.fill !== false} ref={ref} size={props.size || 16} src={\`${svg}\`} />`,
      `})`,
      ``
    ].join('\n'),
    {
      jsxSingleQuote: true,
      parser: 'typescript',
      printWidth: 160,
      semi: false,
      singleQuote: true,
      trailingComma: 'none'
    }
  )
  console.log(tsx)

  path = `./src/${name}.tsx`
  console.log(path)

  // LOAD THE REFERENCE COMPONENT, INJECT THE SVG AND SAVE IT TO DISK
  fs.writeFileSync(path, tsx)
  console.log(`The icon with name ${name} has been written to ${path}.`)

  // APPEND THE EXPORT TO THE INDEX FILE
  fs.appendFileSync('./src/index.ts', `export * from './${name}'\n`)
  console.log(`The export of the icon with name ${name} has been appended to the index.`)
})

// APPEND THE TYPE DEFINITIONS EXPORT TO THE INDEX FILE
fs.appendFileSync('./src/index.ts', `export * from './definitions/types'\n`)
console.log(`The type definitions export has been appended to the index.`)

// APPEND THE ICON PICKER EXPORT TO THE INDEX FILE
fs.appendFileSync('./src/index.ts', `export * from './pickers/icon.picker'\n`)
console.log(`The IconPicker has been appended to the index.`)
