import { v4 as uuidv4 } from 'uuid';

export class Vote {
    constructor(owner, options) {
        this.id = uuidv4();
        this.owner = owner;
        this.options = options;
        this.votes = {}; // Initialize with empty object to store votes
        this.options.forEach(option => {
            this.votes[option] = 0; // Initialize each option with 0 votes
        });
    }

    // Method to cast a vote
    castVote(option) {
        if (this.votes.hasOwnProperty(option)) {
            this.votes[option] += 1;
        } else {
            throw new Error(`Option '${option}' does not exist.`);
        }
    }

    // Method to get vote data
    getData() {
        return {
            id: this.id,
            owner: this.owner,
            options: this.options,
            votes: this.votes
        };
    }
}
