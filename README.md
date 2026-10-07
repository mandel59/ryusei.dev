# ryusei.dev

Cloudflare Workers の静的アセット配信を使います。ビルドは不要です。

- `/` は `https://mandel59.github.io/` に 307 リダイレクトします。
- `/.well-known/nostr.json` は `public/` から配信します。

## ローカル開発

```sh
npm ci
npm run dev
```

## デプロイ

```sh
npx wrangler login
npm run deploy
```

`wrangler.jsonc` のカスタムドメイン設定により `ryusei.dev` に公開します。
Cloudflare アカウント内に `ryusei.dev` の有効なゾーンが必要です。
同じホスト名に既存の Web 用 DNS レコード（A / AAAA / CNAME）がある場合は、
カスタムドメインへの切り替え時に置き換えが必要です。
Cloudflare の DNS 設定で対象のレコードを削除してからデプロイしてください。
Wrangler の置き換え確認を承認してもエラー `100117` が返る場合は、
DNS 編集権限を持つ認証で既存レコードを削除する必要があります。

設定とアップロード内容は `npm run deploy -- --dry-run` で確認できます。
