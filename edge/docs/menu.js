var menuStrcture = [
	{
		title: 'Help',
		icon: 'fa fa-reorder',
		items: [
			{
				name: 'About',
				link: '#about',
			},		
			{
				name: 'Installing StageNow', 
				icon: 'fa fa-download',
				link: '#installing',
				
			},
			{
				name: 'Getting Started', 
				icon: 'fa fa-pencil',
				link: '#gettingstarted',
				
			},
			{
				name: 'Profiles',
				icon: 'fa fa-desktop',
				link: '#stagingprofiles',
				
			},
			{
				name: 'Profile Wizards',
				icon: 'fa fa-magic',
				link: '#ProfileWizards',
				items: [
					{
						title: 'ProfileWizards',
						icon: 'fa fa-code',
						items: [
							{
								name: 'Configure a Device',
								link: '#Profiles-configdevice',
							},
							{
								name: 'Connect Network',
								link: '#Profiles-ConnectNetwork',
							},
							{
								name: 'Enroll in an MDM',
								link: '#Profiles-enrollmdm',
							},
							{
								name: 'Manage Applications',
								link: '#Profiles-manageapps',
							},
							{
								name: 'Manage Device Security',
								link: '#Profiles-managesecurity',
							},
							{
								name: 'Perform OS Update',
								link: '#Profiles-osupdate',
							},
							{
								name: 'Wipe a Device',
								link: '#Profiles-wipedevice',
							},
							{
								name: 'Xpert Mode',
								link: '#Profiles-xpertmode',
							},
						]
					}
				]
			},
			{
				name: 'Settings',
				icon: 'fa fa-gear',
				link: '#settingconfig',
				
			},
			{
				name: 'Setting Types',
				icon: 'fa fa-gear',
				link: '#CSPreference',
				items: [
					{
						title: 'Setting Types',
						icon: 'fa fa-gear',
						items: [
							{
								name: 'Access',
								link: '#csp-access',
							},
							{
								name: 'Analytics',
								link: '#csp-analyticsmgr',
							},
							{
								name: 'App',
								link: '#csp-app',
							},
							{
								name: 'Audio',
								link: '#csp-audio',
							},
							{
								name: 'Batch',
								link: '#csp-batch',
							},
							{
								name: 'Battery',
								link: '#csp-battery',
							},
							{
								name: 'Browser',
								link: '#csp-browser',
							},
							{
								name: 'Camera',
								link: '#csp-camera',
							},
							{
								name: 'Cellular',
								link: '#csp-cellular',
							},
							{
								name: 'Cert',
								link: '#csp-cert',
							},
							{
								name: 'Clock',
								link: '#csp-clock',
							},
							{
								name: 'Component',
								link: '#csp-component',
							},
							{
								name: 'Condition',
								link: '#csp-condition',
							},
							{
								name: 'Dev Admin',
								link: '#csp-devadmin',
							},
							{
								name: 'DHCP',
								link: '#csp-dhcp',
							},
							{
								name: 'Display',
								link: '#csp-display',
							},
							{
								name: 'Encrypt',
								link: '#csp-encrypt',
							},
							{
								name: 'File',
								link: '#csp-file',
							},
							{
								name: 'Gprs',
								link: '#csp-gprs',
							},
							{
								name: 'Intent',
								link: '#csp-intent',
							},
							{
								name: 'KeyMap',
								link: '#csp-keymap',
							},
							{
								name: 'License',
								link: '#csp-license',
							},
							/*{
								name: 'MX',
								link: '#csp-mx',
							},*/
							{
								name: 'Network.WLAN.Android',
								link: '#csp-networkwlanandroid',
							},
							{
								name: 'Network.WLAN.Android.FusionOptions',
								link: '#csp-networkwlanandroidfusion',
							},
							{
								name: 'Network.WWAN.GPRS',
								link: '#csp-networkwwangprs',
							},
							{
								name: 'Persistence',
								link: '#csp-persistence',
							},
							{
								name: 'Power Key',
								link: '#csp-powerkey',
							},
							{
								name: 'Power',
								link: '#csp-power',
							},
							/*{
								name: 'Proxy',
								link: '#csp-proxy',
							},*/
							{
								name: 'ScanMode',
								link: '#csp-scanmode',
							},
							{
								name: 'Sd Card',
								link: '#csp-sdcard',
							},
							{
								name: 'Settings',
								link: '#csp-settingsmgr',
							},
							{
								name: 'Status',
								link: '#csp-status',
							},
							{
								name: 'Threat',
								link: '#csp-threat',
							},
							{
								name: 'Touch',
								link: '#csp-touch',
							},
							{
								name: 'UI',
								link: '#csp-ui',
							},
							{
								name: 'USB',
								link: '#csp-usb',
							},
							{
								name: 'Wi-Fi',
								link: '#csp-wifi',
							},
							{
								name: 'Wireless',
								link: '#csp-wireless',
							},
							{
								name: 'XML',
								link: '#csp-xml',
							} /*,
							{
								name: 'Old Encrypt',
								link: '#csp-encrypt-old',
							},
							{
								name: 'Old Clock',
								link: '#csp-clock-old',
							}*/
						]
					}
				]
			},
			{
				name: 'Device Staging',
				icon: 'fa fa-download',
				link: '#stageclient',
			},
			{
				name: 'Troubleshooting',
				icon: 'fa fa-wrench',
				link: '#troubleshooting',				
			},
		]
	}
];