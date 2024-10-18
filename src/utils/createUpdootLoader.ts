import DataLoader from "dataloader";
import { Updoot } from "../entities/Updoot";

export const createUpdootLoader = () =>
  new DataLoader<{ postId: number; userId: number }, Updoot | null>(
    async (keys: any) => {
      const updoots = await Updoot.findBy({
        postId: keys["postId"],
        userId: keys["userId"],
      });
      const updootIdsToUpdoot: Record<string, Updoot> = {};
      updoots.forEach((updoot) => {
        updootIdsToUpdoot[`${updoot.userId}|${updoot.postId}`] = updoot;
      });

      return keys.map(
        (key: any) => updootIdsToUpdoot[`${key.userId}|${key.postId}`]
      );
    }
  );
