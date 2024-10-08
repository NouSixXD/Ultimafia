const Role = require("../../Role");

module.exports = class Bloodhound extends Role {
  constructor(player, data) {
    super("Bloodhound", player, data);
    this.alignment = "Village";
    this.cards = [
      "VillageCore",
      "WinWithFaction",
      "MeetingFaction",
      "TrackPlayerBoolean",
    ];
    this.meetingMods = {
      "Track (Boolean)": {
        actionName: "Observe for visits",
      },
    };
  }
};
