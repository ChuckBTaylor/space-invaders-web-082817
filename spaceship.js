const fleet = [];
let spaceshipId = 0;

class Spaceship {
  constructor(name, crew = [], phasers, shields, cloaked, warpDrive) {
    this.id = ++spaceshipId;
    this.name = name;
    this.crew = crew;
    for (const member of this.crew) {
      member.currentShip = this;
    }
    this.phasers = phasers;
    this.shields = shields;
    this.cloaked = cloaked || false;
    this.warpDrive = warpDrive || "disengaged";
    this.docked = this.crew.length === 0 ? true : false;
    this.phasersCharge = "uncharged";
    fleet.push(this);
  }
}
