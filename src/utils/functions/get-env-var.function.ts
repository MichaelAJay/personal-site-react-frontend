export function getEnvVar(name: string): string {
  const envVar = process.env[name];
  if (!envVar) {
    throw new Error(`Missing environment variable ${name}`);
  }
  return envVar;
}
