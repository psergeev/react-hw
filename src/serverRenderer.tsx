import { ChunkExtractor } from '@loadable/server';
import * as express from 'express';
import * as path from 'path';
import * as React from 'react';
import { renderToString } from 'react-redux-epic';
import { StaticRouter } from 'react-router-dom';
import Root from './components/Root';
import { State } from './state/reducers';
import configureStore from './state/store';

function renderHTML(html: string, preloadedState: State, webExtractor: any) {
    return `
        <!DOCTYPE html>
        <html>
            <head>
                <link rel="icon" href="data:;base64,=">
                <meta charset="utf-8">
                ${webExtractor.getLinkTags()}
                <title>React hw 7 </title>
            </head>
            <body>
                <div id="app">${html}</div>
                <script>
                    window.PRELOADED_STATE = ${JSON.stringify(preloadedState).replace(/</g, '\\\u003c')}
                </script>
                ${webExtractor.getScriptTags()}
            </body>
        </html>
    `;
}

export default function serverRenderer() {
    return (req: express.Request, res: express.Response) => {
        const { store, wrappedEpic } = configureStore();
        const context = {};

        const statsFile = path.resolve('./dist/loadable-stats.json');
        const extractor = new ChunkExtractor({ statsFile });

        const root = extractor.collectChunks(
            <Root
                context={context}
                location={req.url}
                Router={StaticRouter}
                store={store}
            />
        );

        renderToString(root, wrappedEpic)
            .subscribe(({ markup }: { markup: string }) => {
                const preloadedState = store.getState();
                res.send(renderHTML(markup, preloadedState, extractor));
            });
    };
}
