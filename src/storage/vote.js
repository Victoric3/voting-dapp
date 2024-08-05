class VoteStorage {
    votes;

    constructor() {
        this.votes = new Map();
    }

    getAll() {
        return Array.from(this.votes.values());
    }

    addOne(vote) {
        this.votes.set(vote.id, vote);
    }

    getOneById(id) {
        return this.votes.get(id);
    }

    updateOne(vote) {
        this.votes.set(vote.id, vote);
    }
}

export const voteStorage = new VoteStorage();
