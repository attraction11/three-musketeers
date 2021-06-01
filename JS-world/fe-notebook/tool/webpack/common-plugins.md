#### webpack Dev Middleware

It's a simple wrapper middleware for webpack. It serves the files emitted from webpack over a connect server. This should be used for development only.

It has a few advantages over bundling it as files:

- No files are written to disk, it handle the files in memory
- If files changed in watch mode, the middleware no longer serves the old bundle, but delays requests until the compiling has finished. You don't have to wait before refreshing the page after a file modification.
- I may add some specific optimization in future releases.


#### webpack Dev Server

Use webpack with a development server that provides live reloading. This should be used for development only.

It uses webpack-dev-middleware under the hood, which provides fast in-memory access to the webpack assets.

#### 