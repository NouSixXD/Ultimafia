const Role = require("../../Role");

module.exports = class Witness extends Role {
  constructor(player, data) {
    super("Witness", player, data);
    this.alignment = "Village";
    this.cards = [
      "VillageCore",
      "WinWithFaction",
      "MeetingFaction",
      "WatchPlayerBoolean",
    ];
    this.meetingMods = {
      "Watch (Boolean)": {
        actionName: "Observe for Visitors",
      },
    };
  }
};
