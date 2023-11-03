export type BaseOptions = {
    quiet: boolean;
    json: boolean | undefined;
  };
  
  export const baseOptions = {
    quiet: { type: 'boolean', default: false, alias: 'q' },
    json: { type: 'boolean', conflicts: 'output' }
  } as const;
