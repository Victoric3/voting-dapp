import { RollupStateHandler } from '../shared/rollup-state-handler';
import { voteStorage } from '../storage/vote';

export class TallyController {
    /**
     * ### TallyController tallyVotes
     * @description Tally votes for a given vote ID.
     * @param {*} data {voteId: number}
     */
    async tallyVotes(data) {
        const { voteId } = data;

        const vote = voteStorage.getOneById(voteId);
        if (!vote) {
            return await RollupStateHandler.handleReport({
                error: `Vote not found for id '${voteId}'`,
            });
        }

        return await RollupStateHandler.inspectWrapper(() => {
            const tally = vote.votes;
            return {
                status: 'success',
                tally: tally,
            };
        });
    }
}
