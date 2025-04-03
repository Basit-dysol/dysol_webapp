import { defineConfig } from 'sanity';
import { deskTool } from 'sanity/desk';
import { schemaTypes } from './sanity/schemas'; // Updated path

export default defineConfig({
  projectId: 'your-project-id', // From manage.sanity.io
  dataset: 'production',
  plugins: [deskTool()],
  schema: {
    types: schemaTypes,
  },
});
