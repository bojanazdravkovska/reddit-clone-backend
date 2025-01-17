"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PostResolver = void 0;
const Post_1 = require("../entities/Post");
const type_graphql_1 = require("type-graphql");
const isAuth_1 = require("../utils/isAuth");
const __1 = require("..");
const User_1 = require("../entities/User");
const Updoot_1 = require("../entities/Updoot");
let PostInput = class PostInput {
};
__decorate([
    (0, type_graphql_1.Field)(),
    __metadata("design:type", String)
], PostInput.prototype, "title", void 0);
__decorate([
    (0, type_graphql_1.Field)(),
    __metadata("design:type", String)
], PostInput.prototype, "text", void 0);
PostInput = __decorate([
    (0, type_graphql_1.InputType)()
], PostInput);
let PaginatedPosts = class PaginatedPosts {
};
__decorate([
    (0, type_graphql_1.Field)(() => [Post_1.Post]),
    __metadata("design:type", Array)
], PaginatedPosts.prototype, "posts", void 0);
__decorate([
    (0, type_graphql_1.Field)(),
    __metadata("design:type", Boolean)
], PaginatedPosts.prototype, "hasMore", void 0);
PaginatedPosts = __decorate([
    (0, type_graphql_1.ObjectType)()
], PaginatedPosts);
let PostResolver = class PostResolver {
    textSnippet(post) {
        return post.text.slice(0, 50);
    }
    creator(post, { userLoader }) {
        return userLoader.load(post.creatorId);
    }
    async voteStatus(post, { req, updootLoader }) {
        if (!req.session.userId) {
            return null;
        }
        const updoot = await updootLoader.load({
            postId: post.id,
            userId: req.session.userId,
        });
        return updoot ? updoot.value : null;
    }
    async vote(postId, value, { req }) {
        const isUpdoot = value === 1;
        const realValue = isUpdoot ? 1 : -1;
        const post = await Post_1.Post.findOneBy({ id: postId });
        const updoot = await Updoot_1.Updoot.findOne({
            where: { postId, userId: req.session.userId },
        });
        if (updoot && updoot.value !== realValue) {
            await Updoot_1.Updoot.update({ postId: postId, userId: req.session.userId }, { value: realValue });
            await Post_1.Post.update({ id: postId }, { points: post.points + 2 * realValue });
        }
        else if (!updoot) {
            await Updoot_1.Updoot.insert({
                postId,
                userId: req.session.userId,
                value: realValue,
            });
            await Post_1.Post.update({ id: postId }, { points: post.points + realValue });
        }
        return true;
    }
    async posts(limit, cursor) {
        const realLimit = Math.min(50, limit);
        const realLimitPlusOne = realLimit + 1;
        let queryBuilder = __1.conn
            .createQueryBuilder(Post_1.Post, "post")
            .orderBy("post.createdAt", "DESC")
            .take(realLimitPlusOne);
        if (cursor) {
            queryBuilder = queryBuilder.where("post.createdAt < :cursor", {
                cursor: new Date(parseInt(cursor)),
            });
        }
        const posts = await queryBuilder.getMany();
        return {
            posts: posts.slice(0, realLimit),
            hasMore: posts.length === realLimitPlusOne,
        };
    }
    async post(id) {
        const post = await Post_1.Post.findOne({ where: { id: id } });
        return post;
    }
    async createPost(input, { req }) {
        const post = Post_1.Post.create(Object.assign(Object.assign({}, input), { creatorId: req.session.userId }));
        await post.save();
        return post;
    }
    async updatePost(id, title, text) {
        const post = await Post_1.Post.findOne({ where: { id: id } });
        if (!post) {
            return null;
        }
        if (typeof title !== undefined || typeof text !== undefined) {
            post.title = title;
            post.text = text;
        }
        await post.save();
        return post;
    }
    async deletePost(id) {
        await Post_1.Post.delete(id);
        return true;
    }
};
exports.PostResolver = PostResolver;
__decorate([
    (0, type_graphql_1.FieldResolver)(() => String),
    __param(0, (0, type_graphql_1.Root)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Post_1.Post]),
    __metadata("design:returntype", void 0)
], PostResolver.prototype, "textSnippet", null);
__decorate([
    (0, type_graphql_1.FieldResolver)(() => User_1.User),
    __param(0, (0, type_graphql_1.Root)()),
    __param(1, (0, type_graphql_1.Ctx)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Post_1.Post, Object]),
    __metadata("design:returntype", void 0)
], PostResolver.prototype, "creator", null);
__decorate([
    (0, type_graphql_1.FieldResolver)(() => type_graphql_1.Int, { nullable: true }),
    __param(0, (0, type_graphql_1.Root)()),
    __param(1, (0, type_graphql_1.Ctx)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Post_1.Post, Object]),
    __metadata("design:returntype", Promise)
], PostResolver.prototype, "voteStatus", null);
__decorate([
    (0, type_graphql_1.Mutation)(() => Boolean),
    (0, type_graphql_1.UseMiddleware)(isAuth_1.isAuth),
    __param(0, (0, type_graphql_1.Arg)("postId", () => type_graphql_1.Int)),
    __param(1, (0, type_graphql_1.Arg)("value", () => type_graphql_1.Int)),
    __param(2, (0, type_graphql_1.Ctx)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, Number, Object]),
    __metadata("design:returntype", Promise)
], PostResolver.prototype, "vote", null);
__decorate([
    (0, type_graphql_1.Query)(() => PaginatedPosts),
    __param(0, (0, type_graphql_1.Arg)("limit", () => type_graphql_1.Int)),
    __param(1, (0, type_graphql_1.Arg)("cursor", () => String, { nullable: true })),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, Object]),
    __metadata("design:returntype", Promise)
], PostResolver.prototype, "posts", null);
__decorate([
    (0, type_graphql_1.Query)(() => Post_1.Post, { nullable: true }),
    __param(0, (0, type_graphql_1.Arg)("id", () => type_graphql_1.Int)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], PostResolver.prototype, "post", null);
__decorate([
    (0, type_graphql_1.UseMiddleware)(isAuth_1.isAuth),
    (0, type_graphql_1.Mutation)(() => Post_1.Post),
    __param(0, (0, type_graphql_1.Arg)("input")),
    __param(1, (0, type_graphql_1.Ctx)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [PostInput, Object]),
    __metadata("design:returntype", Promise)
], PostResolver.prototype, "createPost", null);
__decorate([
    (0, type_graphql_1.Mutation)(() => Post_1.Post, { nullable: true }),
    (0, type_graphql_1.UseMiddleware)(isAuth_1.isAuth),
    __param(0, (0, type_graphql_1.Arg)("id", () => type_graphql_1.Int)),
    __param(1, (0, type_graphql_1.Arg)("title", () => String, { nullable: true })),
    __param(2, (0, type_graphql_1.Arg)("text", () => String, { nullable: true })),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, String, String]),
    __metadata("design:returntype", Promise)
], PostResolver.prototype, "updatePost", null);
__decorate([
    (0, type_graphql_1.Mutation)(() => Boolean),
    (0, type_graphql_1.UseMiddleware)(isAuth_1.isAuth),
    __param(0, (0, type_graphql_1.Arg)("id", () => type_graphql_1.Int)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], PostResolver.prototype, "deletePost", null);
exports.PostResolver = PostResolver = __decorate([
    (0, type_graphql_1.Resolver)(Post_1.Post)
], PostResolver);
//# sourceMappingURL=postresolver.js.map