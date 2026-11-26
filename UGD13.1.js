class Kendaraan {
    constructor(nama) {
        this.nama = nama;
    }

    info() {
        console.log("Kendaraan: " + this.nama);
    }
}

class KendaraanBensin extends Kendaraan {
    isiBensin(liter) {
        console.log(this.nama + " mengisi bensin " + liter + " liter.");
    }
}

class KendaraanListrik extends Kendaraan {
    isiDaya(kwh) {
        console.log(this.nama + " mengisi daya " + kwh + " kWh.");
    }
}

class MobilBensin extends KendaraanBensin {}
class MobilListrik extends KendaraanListrik {}
class MotorBensin extends KendaraanBensin {}

function isiSemuaBensin(daftar) {
    daftar.forEach((x) => x.isiBensin(20));
}

function isiSemuaDaya(daftar) {
    daftar.forEach((x) => x.isiDaya(40));
}

const Avanza_3354 = new MobilBensin("Avanza_3354");
const Ioniq_3354 = new MobilListrik("Ioniq_3354");
const Beat_3354 = new MotorBensin("Beat_3354");

Avanza_3354.info();
Ioniq_3354.info();
Beat_3354.info();

isiSemuaBensin([Avanza_3354, Beat_3354]);
isiSemuaDaya([Ioniq_3354]);