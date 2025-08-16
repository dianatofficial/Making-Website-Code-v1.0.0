export type Page = 'home' | 'websiteGenerator';

export enum GenerationStep {
  Ideation = 1,
  Planning = 2,
  Generation = 3,
  Download = 4,
}

export interface Highlight {
  title: string;
  description_fa: string;
  icon: string;
}

export interface TechStack {
  name: string;
  description_fa: string;
}

export interface ProjectPlan {
  projectName: string;
  description_fa: string;
  architectureHighlights: Highlight[];
  technologies: {
    frontend: TechStack;
    backend: TechStack;
    database: TechStack;
  };
  databaseSchema: {
    description_fa: string;
    tables: {
      [tableName: string]: {
        columns: { [columnName: string]: string };
        relations?: string[];
      };
    };
  };
  backendAPI: {
    description_fa: string;
    endpoints: {
      [endpoint: string]: {
        method: 'GET' | 'POST' | 'PUT' | 'DELETE';
        description: string;
        authRequired: boolean;
      };
    }
  };
  frontendComponents: {
    description_fa: string;
    components: string[];
  };
}
