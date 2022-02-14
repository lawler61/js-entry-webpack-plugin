import { Compiler } from 'webpack'

export = JSEntryWebpackPlugin

declare class JSEntryWebpackPlugin {
  constructor(options?: JSEntryWebpackPlugin.Options)

  static readonly version: number

  options?: JSEntryWebpackPlugin.Options

  apply(compiler: Compiler): void
}

declare namespace JSEntryWebpackPlugin {
  interface Options {
    /**
     * js entry name. Default: webpackConfig.entry
     */
    filename?: string
    /**
     * js entry path. Default: webpackConfig.output.path
     */
    template?: string
    /**
     * Default: webpackConfig.output.publicPath
     */
    publicPath?: string
  }
}
