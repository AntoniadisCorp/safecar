var path = require('path')

module.exports = {
    entry: ['./public/app_JS/app.js',
			'./public/app_JS/Controllers/controllers.js',
			'./public/app_JS/Controllers/Ctrlr_Dashboard.js',
			'./public/app_JS/Controllers/Ctrlr_scada.js',
			'./public/app_JS/Controllers/Ctrlr_projects.js',
			'./public/app_JS/Controllers/Ctrlr_Remapper.js',
			'./public/app_JS/Controllers/Ctrlr_CreateProfile.js',
			'./public/app_JS/Controllers/Ctrlr_EditProfile.js',
			'./public/app_JS/Controllers/Ctrlr_Settings.js',
			'./public/app_JS/Controllers/Ctrlr_Status.js',
			'./public/app_JS/Controllers/Ctrlr_plcStatus.js',
			'./public/app_JS/Controllers/Ctrlr_slPromStatus.js',
			'./public/app_JS/Controllers/Ctrlr_slWt520Status.js',

			// Angular Filters
			'./public/app_JS/Filters/GridFilters.js',

			// Angular Services
			'./public/app_JS/Services/ajaxroute.service.js',
			'./public/app_JS/Services/auth.service.js',
			'./public/app_JS/Services/messenger.service.js',
			'./public/app_JS/Services/profiles.service.js',
			'./public/app_JS/Services/livedevices.service.js',

			// Angular Directives
			'./public/app_JS/Directives/grdDin.directive.js',
			'./public/app_JS/Directives/grdDout.directive.js',
			'./public/app_JS/Directives/grdInstall.directive.js',
			'./public/app_JS/Directives/grdCalib.directive.js',
			'./public/app_JS/Directives/grdCalibAD.directive.js',
			'./public/app_JS/Directives/grdScl.directive.js',
			'./public/app_JS/Directives/grdAin.directive.js',
			'./public/app_JS/Directives/grdCnt.directive.js',
			'./public/app_JS/Directives/grdDinUnmpd.directive.js',
			'./public/app_JS/Directives/status.directive.js',
			'./public/app_JS/Directives/scada.directive.js',
			'./public/app_JS/Directives/money.directive.js',
			'./public/app_JS/Directives/ScreenFlip.directive.js',


			// Angular Factories
			'./public/app_JS/Factories/FTPSystemSetup.factory.js',
			'./public/app_JS/Factories/HWConflict.factory.js',
			'./public/app_JS/Factories/UDPConnection.factory.js',
			

			'./public/app_JS/wt520_lib.js',
			'./public/app_JS/scada.js'
    ],
    output: {
        path: path.join(__dirname, 'public/app_JS'),
        filename: 'ang.js'
    },
    module: {
        loaders: [
            { test: path.join(__dirname, 'public/app_JS'),
              loader: 'babel-loader' }
        ]
    }
};
