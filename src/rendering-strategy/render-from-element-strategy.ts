import { SuperElement } from '../super-element/super-element.js'

export function renderFromElement(
  context: Element | SuperElement,
  content: Element | DocumentFragment | NodeList | HTMLCollection
) {
  const isSingleElement = (
    content instanceof Element
    || content instanceof DocumentFragment
    || content instanceof Node
  )
  const elementsList = isSingleElement
    ? [content]
    : Array.from(content) as Array<Element>

  const contextRoot = 'root' in context
    ? context.root
    : context

  contextRoot.replaceChildren(...elementsList)
}