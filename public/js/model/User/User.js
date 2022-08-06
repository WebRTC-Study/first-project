export class User {
    constructor(name, channel) {
        // SessionStorage를 통한 Set,Get 처리를 하는 곳

        this._name = name;
        this._channel = channel;
    }

    get name() {
        return this._name.toUpperCase();
    }

    set name(userId) {
        if (userId) {
            this._name = userId;
        }
    }

    get channel() {
        return this._channel.toUpperCase();
    }

    set channel(channel) {
        if (channel) {
            this._channel = channel;
        }
    }
}
