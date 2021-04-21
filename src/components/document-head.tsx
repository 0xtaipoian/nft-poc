import { Head } from 'next/document';
import React from 'react';

function dedupeHead(elems: React.ReactElement<any, string>[]) {
  const metaTags: Record<string, React.ReactElement> = (elems || [])
    .map(elem => {
      const { type } = elem;
      const { props } = elem;
      const key = props.itemprop || props.property || props.name;

      return [key, type, elem];
    })
    .reduce((acc, [key, type, elem]) => {
      if (type === 'meta') {
        acc[key] = elem;
      }

      return acc;
    }, {});
  const result = Object.keys(metaTags).map(key => metaTags[key]);

  return result;
}

class DocumentHead extends Head {
  public render() {
    this.context.head = dedupeHead(this.context.head);

    return super.render();
  }
}

export default DocumentHead;
