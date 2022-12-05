import { fileURLToPath, URL } from "node:url";

import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import { resolve } from "path";
import AutoImport from "unplugin-auto-import/vite";
import Components from "unplugin-vue-components/vite";
import { ElementPlusResolver } from "unplugin-vue-components/resolvers";

// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    alias: {
      "@": resolve(__dirname, "src"),
    },
  },
  plugins: [
    vue(),
    AutoImport({
      include: [
        /\.[tj]sx?$/, // .ts, .tsx, .js, .jsx
        /\.vue$/,
        /\.vue\?vue/, // .vue
        /\.md$/, // .md
      ],
      imports: [
        "vue",
        "vuex",
        "vue-router",
        {
          vue: ["withDefaults"],
          lodash: ["_"],
          "@/hooks/element-plus": [
            "elLoading",
            "$miniMsg",
            "$message",
            "$alert",
            "$prompt",
            "$confirm",
            "$notify",
          ],
          "@/router": [["default", "$router"]],
          "@/hooks/store": ["$store"],
          "@/hooks/dayjs": ["$dayjs"],
          "@/hooks/store-service": ["$dialog", "$toast"],
          "@/types/common/search": [
            ["SearchForm", "$searchForm"],
            ["PageOptions", "$pageOptions"],
            ["StoreSearchOptions", "$storeSearchOptions"],
          ],
        },
      ],
      eslintrc: {
        enabled: true,
        filepath: "./.eslintrc-auto-import.json",
        globalsPropValue: true,
      },
      dts: true,
      resolvers: [ElementPlusResolver()],
    }),
    Components({
      dts: true,
      resolvers: [ElementPlusResolver()],
    }),
  ],
  server: {
    proxy: {
      "/api": {
        target: "http://localhost:9612",
      },
    },
    port: 9613,
  },
});
