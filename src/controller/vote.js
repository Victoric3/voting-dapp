import { Vote } from "../model/vote";
import { RollupStateHandler } from "../shared/rollup-state-handler";
import { voteStorage } from "../storage/vote";

export class VoteController {
  async createVote(data) {
    if (
      !data.owner ||
      !data.options ||
      !Array.isArray(data.options) ||
      data.options.length === 0
    ) {
      return await RollupStateHandler.handleReport({
        error: "Owner and a non-empty array of options must be provided.",
      });
    }

    return await RollupStateHandler.advanceWrapper(() => {
      const newVote = new Vote(data.owner, data.options);
      voteStorage.addOne(newVote);

      return {
        status: "success",
        message: "Vote created successfully!",
        data: newVote.getData(),
      };
    });
  }

  async castVote(data) {
    if (!data.voteId || !data.option) {
      return await RollupStateHandler.handleReport({
        error: "Vote ID and option must be provided.",
      });
    }

    const vote = voteStorage.getOneById(data.voteId);
    if (!vote) {
      return await RollupStateHandler.handleReport({
        error: `Vote not found for ID '${data.voteId}'.`,
      });
    }

    return await RollupStateHandler.advanceWrapper(() => {
      try {
        vote.castVote(data.option);
        voteStorage.updateOne(vote);

        return {
          status: "success",
          message: "Vote cast successfully!",
          data: vote.getData(),
        };
      } catch (error) {
        return {
          status: "failure",
          message: error.message,
        };
      }
    });
  }

  async getVoteById(data) {
    const voteId = data[0];
    const vote = voteStorage.getOneById(voteId);

    if (!vote) {
      return await RollupStateHandler.handleReport({
        error: `Vote not found for ID '${voteId}'.`,
      });
    }

    return await RollupStateHandler.inspectWrapper(() => ({
      status: "success",
      vote: vote.getData(),
    }));
  }
}
