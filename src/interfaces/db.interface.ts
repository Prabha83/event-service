export interface dbConfig {
  host: string;
  user: string;
  port: number;
  password: string;
  database: string;
  pool: {
    min: number;
    max: number;
  };
}
