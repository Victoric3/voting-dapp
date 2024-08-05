import { VoteController } from './vote';
import { TallyController } from './tally';

const voteController = new VoteController();
const tallyController = new TallyController();

export const controller = {
    createVote: voteController.createVote,
    castVote: voteController.castVote,
    getVoteById: voteController.getVoteById,
    tallyVotes: tallyController.tallyVotes,
};
