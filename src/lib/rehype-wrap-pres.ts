import type { Plugin } from 'unified'
import type { Element, Root } from 'hast'
import { visit } from 'unist-util-visit'

const rehypeWrapPres: Plugin<[], Root> = () => {
  return (tree: Root) => {
    visit(tree, 'element', (node: Element, index, parent) => {
      if (
        node.tagName === 'pre' &&
        parent &&
        Array.isArray(parent.children) &&
        typeof index === 'number'
      ) {
        const wrapper: Element = {
          type: 'element',
          tagName: 'div',
          properties: {
            className: ['relative', 'group'],
          },
          children: [node]
        }

        parent.children[index] = wrapper
      }
    })
  }
}

export default rehypeWrapPres
