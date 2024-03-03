import type { CodegenConfig } from '@graphql-codegen/cli';

const config: CodegenConfig = {
  overwrite: true,
  schema: 'http://127.0.0.1:8080',
  documents: './src/lib/graphql/**/*.ts',
  generates: {
    'src/lib/graphql/generated.ts': {
      config: {
        useTypeImports: true
      },
      plugins: ['typescript', 'typescript-operations']
    }
  }
};

export default config;
