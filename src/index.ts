import { ApolloServer } from "apollo-server-express";
import express from "express";
import session from "express-session";
import Redis from "ioredis";
import "reflect-metadata";
import { buildSchema } from "type-graphql";
import { DataSource } from "typeorm";
import { __prod__ } from "./constants";
import { Post } from "./entities/Post";
import { User } from "./entities/User";
import { HelloResolver } from "./resolvers/helloresolver";
import { PostResolver } from "./resolvers/postresolver";
import { UserResolver } from "./resolvers/userresolver";
import { MockData1679594171314 } from "./migrations/123123-MockData";
import { createUserLoader } from "./utils/createUserLoader";
import { Updoot } from "./entities/Updoot";
import { createUpdootLoader } from "./utils/createUpdootLoader";
const RedisStore = require("connect-redis").default;

export const conn = new DataSource({
  type: "postgres",
  database: "baza",
  logging: true,
  synchronize: true,
  entities: [Post, User, Updoot],
  migrations: [MockData1679594171314],
});

const main = async () => {
  const app = express();

  await conn.initialize();

  // await User.delete({});
  // await Post.delete({});

  const redis = new Redis();
  app.set("trust proxy", !__prod__);

  app.use(
    session({
      name: "qid",
      store: new RedisStore({
        client: redis,
        disableTouch: true,
      }),
      cookie: {
        maxAge: 1000 * 60 * 60 * 24 * 365 * 10, //10 years
        httpOnly: true,
        sameSite: "none", // csrf
        secure: false, //cookie only work in https
      },
      saveUninitialized: false,
      secret: "ñsafjsalñdkfjalskdf",
      resave: false,
    })
  );

  const apolloServer = new ApolloServer({
    schema: await buildSchema({
      resolvers: [HelloResolver, PostResolver, UserResolver],
      validate: false,
    }),
    context: ({ req, res }) => ({
      req,
      res,
      redis,
      updootLoader: createUpdootLoader(),
      userLoader: createUserLoader(),
    }),
  });

  await apolloServer.start();
  const corsSettings = {
    origin: ["https://studio.apollographql.com", "http://localhost:3000"],
    credentials: true,
  };
  apolloServer.applyMiddleware({ app, cors: corsSettings });

  app.listen(4000, () => {
    console.log("App started on port 4000.");
  });
};
main().catch((err) => {
  console.log("error: ", err.message);
});
