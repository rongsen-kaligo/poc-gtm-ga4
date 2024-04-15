# Analytics PoC with GTM + GA4

> This is a [Next.js](https://nextjs.org/) project bootstrapped with [`c3`](https://developers.cloudflare.com/pages/get-started/c3).

This playground demonstrates how to track custom events in a Next.js project using Google Tag Manager (GTM). For more details, please refer to this [RFC](https://www.notion.so/kaligo/RC-FE-GA4-Custom-events-615aac60186e45a38434d4a0529f17e8#a89c1afc110b40c5b4d44467f4070ecd).


## Pre-requisites

1. Node.js >= 18


## Getting Started

1. First, install the dependencies:

   ```bash
   pnpm i
   ```

1. Then, run the development server:

   ```bash
   pnpm dev
   ```

1. Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.
2. Refer to this [document](https://www.notion.so/kaligo/RC-FE-GA4-Custom-events-615aac60186e45a38434d4a0529f17e8?pvs=4#6171bf73f9644180b42f7278eed6234a) on how to debug a GTM tag and GA4 event.
3. Done. Happy debugging!

## Available routes

A `tenant_ready` event which contains `tenant_id` as one of the `user_properties` will be tracked when the web app first loads.

1. `/` - homepage, tracks `home_load` event
2. `/about` - About page, tracks `about_load` event
3. `/error` - Error page, does not track any custom event
4. `/other` - Other page, tracks `other_load` event
5. `/other/[id]` - Other by ID page, which is a carousel in the middle of the Other page that displays a list of links to other pages by ID, tracks `other_id_load` event


## Resources

1. GA4 DebugView - [website](https://analytics.google.com/analytics/web/?authuser=0#/a309619017p436047289/admin/debugview/overview)
2. GTM workspace - [website](https://tagmanager.google.com/#/container/accounts/6225892529/containers/182315796/workspaces/2)
3. Cloudflare dashboard - [website](https://dash.cloudflare.com/1600747487220220511bac21d498549a/pages/view/poc-gtm-ga4)
