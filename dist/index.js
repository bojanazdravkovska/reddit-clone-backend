"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.conn = void 0;
const apollo_server_express_1 = require("apollo-server-express");
const express_1 = __importDefault(require("express"));
const express_session_1 = __importDefault(require("express-session"));
const ioredis_1 = __importDefault(require("ioredis"));
require("reflect-metadata");
const type_graphql_1 = require("type-graphql");
const typeorm_1 = require("typeorm");
const constants_1 = require("./constants");
const Post_1 = require("./entities/Post");
const User_1 = require("./entities/User");
const helloresolver_1 = require("./resolvers/helloresolver");
const postresolver_1 = require("./resolvers/postresolver");
const userresolver_1 = require("./resolvers/userresolver");
const _123123_MockData_1 = require("./migrations/123123-MockData");
const createUserLoader_1 = require("./utils/createUserLoader");
const Updoot_1 = require("./entities/Updoot");
const createUpdootLoader_1 = require("./utils/createUpdootLoader");
const RedisStore = require("connect-redis").default;
exports.conn = new typeorm_1.DataSource({
    type: "postgres",
    database: "baza",
    logging: true,
    synchronize: true,
    entities: [Post_1.Post, User_1.User, Updoot_1.Updoot],
    migrations: [_123123_MockData_1.MockData1679594171314],
});
const main = async () => {
    const app = (0, express_1.default)();
    await exports.conn.initialize();
    const redis = new ioredis_1.default();
    app.set("trust proxy", !constants_1.__prod__);
    app.use((0, express_session_1.default)({
        name: "qid",
        store: new RedisStore({
            client: redis,
            disableTouch: true,
        }),
        cookie: {
            maxAge: 1000 * 60 * 60 * 24 * 365 * 10,
            httpOnly: true,
            sameSite: "none",
            secure: false,
        },
        saveUninitialized: false,
        secret: "ñsafjsalñdkfjalskdf",
        resave: false,
    }));
    const apolloServer = new apollo_server_express_1.ApolloServer({
        schema: await (0, type_graphql_1.buildSchema)({
            resolvers: [helloresolver_1.HelloResolver, postresolver_1.PostResolver, userresolver_1.UserResolver],
            validate: false,
        }),
        context: ({ req, res }) => ({
            req,
            res,
            redis,
            updootLoader: (0, createUpdootLoader_1.createUpdootLoader)(),
            userLoader: (0, createUserLoader_1.createUserLoader)(),
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
//# sourceMappingURL=index.js.map