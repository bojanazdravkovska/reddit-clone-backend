import { ObjectType } from "type-graphql";
import { BaseEntity, Column, Entity, ManyToOne, PrimaryColumn } from "typeorm";
import { User } from "./User";
import { Post } from "./Post";

@ObjectType()
@Entity()
export class Updoot extends BaseEntity {
  @PrimaryColumn()
  userId: number;

  @PrimaryColumn()
  postId: number;

  @Column({ type: "int" })
  value: number;

  @ManyToOne(() => User, (user) => user.updoots)
  user: User;

  @ManyToOne(() => Post, (post) => post.updoots, { onDelete: "CASCADE" })
  post: Post;
}
