(function () {
  if ('Discourse' in window && typeof Discourse._registerPluginCode === 'function') {
    var __theme_name__ = "Fix Broken Logo";
    var settings = Discourse.__container__.lookup("service:theme-settings").getObjectForTheme(2);
    var themePrefix = function themePrefix(key) {
      return 'theme_translations.2.' + key;
    };

    Discourse._registerPluginCode('0.8.25', function (api) {
      try {

        api.reopenWidget("home-logo", {
          logoUrl: function logoUrl() {
            return "https://expo-discourse-uploads.s3.dualstack.us-west-1.amazonaws.com/original/2X/b/b9430e8db37b4edff74b63ecd93ce20109d7d72e.png";
          },
          mobileLogoUrl: function mobileLogoUrl() {
            return "https://expo-discourse-uploads.s3.dualstack.us-west-1.amazonaws.com/original/2X/b/b9430e8db37b4edff74b63ecd93ce20109d7d72e.png";
          },
          smallLogoUrl: function smallLogoUrl() {
            return "https:////expo-discourse-uploads.s3.dualstack.us-west-1.amazonaws.com/original/2X/c/c09dc50fadab2d8f672a7b01c1063337b870450f.png";
          }
        });
      } catch (err) {
        var rescue = require("discourse/lib/utilities").rescueThemeError;
        rescue(__theme_name__, err, api);
      }
    });
  }
})();