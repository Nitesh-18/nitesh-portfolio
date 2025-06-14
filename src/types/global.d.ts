// types/global.d.ts
import mongoose from "mongoose";

declare global {
  var mongoose: {
    conn: typeof mongoose | null;
    promise: Promise<typeof mongoose> | null;
  } | undefined;
}

export {};
// This file is used to extend the global namespace in TypeScript.
// It declares a global variable `mongoose` with properties `conn` and `promise`.   