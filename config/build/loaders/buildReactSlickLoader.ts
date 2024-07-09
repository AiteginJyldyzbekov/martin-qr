import MiniCssExtractPlugin from "mini-css-extract-plugin";
export function buildReactSlickLoader(isDev: boolean) {
  return {
    test: /\.css$/,
    use: [isDev ? "style-loader" : MiniCssExtractPlugin.loader, "css-loader"],
  };
}
