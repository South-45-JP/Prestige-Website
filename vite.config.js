import { defineConfig, loadEnv } from 'vite'
import react from '@vitejs/plugin-react'
import { resolve } from 'path'

// https://vite.dev/config/
export default defineConfig(({ command, mode }) => {
  // Load environment variables
  const env = loadEnv(mode, process.cwd(), '')
  
  // Check if we're in development mode
  const isDev = command === 'serve'
  const isProd = command === 'build'

  return {
    plugins: [
      react({
        // Enable Fast Refresh for better HMR
        fastRefresh: isDev,
        // Include .jsx files in Fast Refresh
        include: "**/*.{jsx,tsx}",
      })
    ],

    // Path resolution and aliases
    resolve: {
      alias: {
        '@': resolve(__dirname, './src'),
        '@components': resolve(__dirname, './src/components'),
        '@pages': resolve(__dirname, './src/pages'),
        '@assets': resolve(__dirname, './src/assets'),
        '@utils': resolve(__dirname, './src/utils'),
        '@hooks': resolve(__dirname, './src/hooks'),
        '@services': resolve(__dirname, './src/services'),
        '@styles': resolve(__dirname, './src/styles'),
      },
    },

    // Development server configuration
    server: {
      port: parseInt(env.VITE_PORT) || 3000,
      host: env.VITE_HOST || 'localhost',
      open: true, // Auto-open browser
      cors: true,
      // Enable HTTPS in development if certificates are provided
      https: env.VITE_HTTPS === 'true' ? {
        key: env.VITE_SSL_KEY,
        cert: env.VITE_SSL_CERT,
      } : false,
      // HMR configuration
      hmr: {
        overlay: true, // Show errors in browser overlay
      },
      // Proxy configuration for API calls
      proxy: env.VITE_API_URL ? {
        '/api': {
          target: env.VITE_API_URL,
          changeOrigin: true,
          secure: isProd,
          rewrite: (path) => path.replace(/^\/api/, ''),
        },
      } : undefined,
    },

    // Build configuration
    build: {
      // Output directory
      outDir: 'dist',
      // Generate source maps for production debugging
      sourcemap: isProd ? 'hidden' : true,
      // Minification
      minify: isProd ? 'terser' : false,
      // Terser options for better minification
      terserOptions: isProd ? {
        compress: {
          drop_console: true, // Remove console.logs in production
          drop_debugger: true,
        },
        mangle: {
          safari10: true,
        },
      } : undefined,
      // Chunk splitting strategy
      rollupOptions: {
        output: {
          // Manual chunk splitting for better caching
          manualChunks: {
            // Vendor chunks
            vendor: ['react', 'react-dom'],
            // UI library chunks (if using any)
            // ui: ['@mui/material', 'antd'], // Example
          },
          // Asset file naming
          assetFileNames: (assetInfo) => {
            const info = assetInfo.name.split('.')
            const ext = info[info.length - 1]
            if (/\.(png|jpe?g|svg|gif|tiff|bmp|ico)$/i.test(assetInfo.name)) {
              return `assets/images/[name]-[hash][extname]`
            }
            if (/\.(woff2?|eot|ttf|otf)$/i.test(assetInfo.name)) {
              return `assets/fonts/[name]-[hash][extname]`
            }
            return `assets/[name]-[hash][extname]`
          },
          // Chunk file naming
          chunkFileNames: 'assets/js/[name]-[hash].js',
          entryFileNames: 'assets/js/[name]-[hash].js',
        },
      },
      // Asset handling
      assetsInlineLimit: 4096, // Inline assets smaller than 4kb
      // CSS code splitting
      cssCodeSplit: true,
      // Report compressed file sizes
      reportCompressedSize: isProd,
      // Chunk size warning limit
      chunkSizeWarningLimit: 1000,
    },

    // CSS configuration
    css: {
      // PostCSS configuration
      postcss: {
        plugins: [
          // Add autoprefixer and other PostCSS plugins as needed
        ],
      },
      // CSS modules configuration
      modules: {
        localsConvention: 'camelCase',
      },
      // Development source maps
      devSourcemap: isDev,
    },

    // Environment variables configuration
    define: {
      // Make environment variables available to the app
      __APP_VERSION__: JSON.stringify(process.env.npm_package_version),
      __BUILD_DATE__: JSON.stringify(new Date().toISOString()),
    },

    // Dependency optimization
    optimizeDeps: {
      // Include dependencies that should be pre-bundled
      include: ['react', 'react-dom'],
      // Exclude dependencies from pre-bundling
      exclude: [],
    },

    // Preview server configuration (for production preview)
    preview: {
      port: parseInt(env.VITE_PREVIEW_PORT) || 4173,
      host: env.VITE_HOST || 'localhost',
      cors: true,
      // Security headers for preview
      headers: {
        'X-Frame-Options': 'DENY',
        'X-Content-Type-Options': 'nosniff',
        'Referrer-Policy': 'strict-origin-when-cross-origin',
        'Permissions-Policy': 'camera=(), microphone=(), geolocation=()',
      },
    },

    // ESBuild configuration
    esbuild: {
      // Remove console and debugger in production
      drop: isProd ? ['console', 'debugger'] : [],
      // JSX configuration

    },

    // Worker configuration
    worker: {
      format: 'es',
    },
  }
})