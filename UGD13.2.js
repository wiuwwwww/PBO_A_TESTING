const pembersih = {
    bersihkan() {
        console.log(this.nama + " membersihkan ruangan.");
    },
};

const pengantar = {
    antarPaket() {
        console.log(this.nama + " mengantar paket.");
    },
};

const penjaga = {
    patroli() {
        console.log(this.nama + " berpatroli di area.");
    },
};

function applyCapabilities(Kelas, ...kemampuan) {
    Object.assign(Kelas.prototype, ...kemampuan);
}

class RobotRumah {
    constructor(nama) {
        this.nama = nama;
    }
}

class RobotKurir {
    constructor(nama) {
        this.nama = nama;
    }
}

applyCapabilities(RobotRumah, pembersih, penjaga);
applyCapabilities(RobotKurir, pengantar);

const RobotRumah_3354 = new RobotRumah("RobotRumah_3354");
const RobotKurir_3354 = new RobotKurir("RobotKurir_3354");

RobotRumah_3354.bersihkan();
RobotRumah_3354.patroli();
RobotKurir_3354.antarPaket();

console.log(RobotKurir_3354.nama + " bisa membersihkan? " + (typeof RobotKurir_3354.bersihkan === "function"));
console.log(RobotRumah_3354.nama + " bisa mengantar paket? " + (typeof RobotRumah_3354.antarPaket === "function"));