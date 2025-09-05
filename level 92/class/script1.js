class Operative {
    constructor(name, rank) {
        this.name = name;
        this.rank = rank;
    }

    getInfo() {
        return `${this.name}, ${this.rank}`;
    }

    static compareRanks(op1, op2) {
        if(op1.rank > op2.rank) {
            return op1;
        } else if (op1.rank < op2.rank) {
            return op2;
        } else {
            return `${op1.name} and ${op2.name} have equal ranks`;
        }
    }
}

class EliteOperative extends Operative {
    constructor(name, rank, speciality) {
        super(name, rank);
        this.speciality = speciality;

    }

    getInfo() {
        return `${this.name}, ${this.rank}, ${this.speciality}`;
    }
}