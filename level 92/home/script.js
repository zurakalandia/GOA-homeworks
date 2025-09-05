//1

class Specimen {
    constructor(id, type) {
        this.id = id;
        this.type = type;
    }

    getLabel() {
        return `id: ${this.id}\ntype: ${this.type}`;
    }
}

class MutantSpecimen extends Specimen {
    constructor(id, type, mutationLevel) {
        super(id, type);
        this.mutationLevel = mutationLevel;
    }

    getLabel(){
        return `id: ${this.id}\ntype: ${this.type}\nmutation Level: ${this.mutationLevel}`;
    }

    static mostMutated(arr) {
        let highestMutation = arr.reduce((max, curr) => curr.mutationLevel > max.mutationLevel ? curr : max);
        return highestMutation.getLabel();
    };
}

//2

class Vehicle {
    constructor(model, speed) {
        this.model = model;
        this.speed = speed;
    }

    getInfo() {
        return `model: ${this.model}\nspeed: ${this.speed}`;
    }

    static compareSpeed(v1, v2) {
        if(v1.speed === v2.speed) return 'same speed';
        return v1.speed > v2.speed ? v1.getInfo() : v2.getInfo();
    }
}

class ElectricVehicle extends Vehicle {
    constructor(model, speed, batteryLife) {
        super(model, speed);
        this.batteryLife = batteryLife;
    }

    getInfo() {
        return `model: ${this.model}\nspeed: ${this.speed}\nbattery life: ${this.batteryLife}`;
    }
}

//3

class Agent {
    constructor(name, version) {
        this.name = name;
        this.version = version;
    }

    getStatus() {
        return `name: ${this.name}\nversion: ${this.version}`;
    }

    static latestVersion(a1, a2) {
        return a1.version > a2.version ? a1.getStatus() : a2.getStatus();
    }
}

class FieldAgent extends Agent {
    constructor(name, version, location) {
        super(name, version);
        this.location = location;
    }

    getStatus() {
        return `name: ${this.name}\nversion: ${this.version}\nlocation:`;
    }
}

//4

class Sequence {
    constructor(code, length) {
        this.code = code;
        this.length = length;
    }

    getSummary() {
        return `code: ${this.code}\nlength: ${this.length}`;
    }

    static filterByLength(arr, min) {
        return arr.filter(sequence => sequence.length >= min);
    }
}

class MutatedSequence extends Sequence {
    constructor(code, length, mutationType) {
        super(code, length);
        this.mutationType = mutationType;
    }

    getSummary() {
        return `code: ${this.code}\nlength: ${this.length}\nmutation Type: ${this.mutationType}`;
    }
}

//5

class Satellite {
    constructor(id, orbitType) {
        this.id = id;
        this.orbitType = orbitType;
    }

    getDetails() {
        return `id: ${this.id}\norbit type: ${this.orbitType}`;
    }

    static countByOrbit(arr, type) {
        return arr.filter(satellite => satellite.orbitType = type).length;
    }
}

class MilitarySatellite extends Satellite {
    constructor(id, orbitType) {
        super(id, orbitType);
        this.encryptionLevel = encryptionLevel;
    }

    getDetails() {
        return `id: ${this.id}\norbit type: ${this.orbitType}\nencryption level: ${this.encryptionLevel}`;
    }
}

//6

class Piece {
    constructor(shape, color) {
        this.shape = shape;
        this.color = color;
    }

    method() {
        return `shape: ${this.shape}\ncolor: ${this.color}`;
    }
}

class RarePiece extends Piece {
    constructor(shape, piece, rarity) {
        super(shape, piece);
        this.rarity - rarity;
    }

    method() {
        return `shape: ${this.shape}\ncolor: ${this.color}\nrarity: ${this.rarity}`;
    }

    static rarest(pieces) {
        return pieces.reduce((max, curr) => curr.rarity > max.rarity ? curr.method() : max.method());
    }
}

//7

class Vision {
    constructor(type, intensity) {
        this.type = type;
        this.intensity = intensity;
    }

    method1() {
        return `type: ${this.type}\nintensity: ${this.intensity}`;
    }

    static mostIntense(visions, threshold) {
        return visions.filter(vision => vision.intensity >= threshold);
    }
}

class FutureVision extends Vision {
    constructor(type, intensity, timeStamp) {
        super(type, intensity);
        this.timeStamp = timeStamp;
    }

    method1() {
        return `type: ${this.type}\nintensity: ${this.intensity} \ntime stamp: ${this.timeStamp}`;
    }
}