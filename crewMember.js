let crewMemberId = 0;
class CrewMember {
  constructor(position) {
    this.id = ++crewMemberId;
    this.position = position;
    this.currentShip = "Looking for a Rig";
  }

  setsInvisibility() {
    if (
      this.position === "Defender" &&
      this.currentShip.constructor === Spaceship
    ) {
      this.currentShip.cloaked = this.currentShip.cloaked ? false : true;
    } else {
      return "had no effect";
    }
  }

  engageWarpDrive() {
    if (
      this.position === "Pilot" &&
      this.currentShip.constructor === Spaceship
    ) {
      this.currentShip.warpDrive = "engaged!";
    } else {
      return "had no effect";
    }
  }

  chargePhasers() {
    if (
      this.position === "Gunner" &&
      this.currentShip.constructor === Spaceship
    ) {
      this.currentShip.phasersCharge = "charged!";
    } else {
      return "had no effect";
    }
  }
}
