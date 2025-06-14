import mongoose from "mongoose";

declare global {
  var mongoose:
    | {
        conn: typeof mongoose | null;
        promise: Promise<typeof mongoose> | null;
      }
    | undefined;
}
declare namespace NodeJS {
  interface Global {
    mongoose?: {
      conn: any;
      promise: Promise<any> | null;
    };
  }
}
export {};
